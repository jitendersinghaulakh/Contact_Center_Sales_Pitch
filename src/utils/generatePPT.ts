import pptxgen from "pptxgenjs";
import type { SlideContent } from "../data/slides";

export const generatePPT = (slides: SlideContent[]) => {
    const pres = new pptxgen();

    pres.layout = "LAYOUT_WIDE";

    slides.forEach((slide) => {
        const s = pres.addSlide();

        // Background for all slides
        if (slide.id === 1) {
            const fullUrl = window.location.origin + "/images/hero.png";
            s.background = { path: fullUrl };

            // Add a navy blue semi-transparent overlay to match the CSS design
            s.addShape(pres.ShapeType.rect, {
                x: 0,
                y: 0,
                w: "100%",
                h: "100%",
                fill: { color: "001F3F", alpha: 40 } // Navy blue with 60% transparency
            });
        } else {
            s.background = { color: "FFFFFF" };
        }

        // Slide Title
        s.addText(slide.title, {
            x: 0.5,
            y: slide.id === 1 ? 2.5 : 0.5,
            w: slide.id === 1 ? "60%" : "90%",
            fontSize: slide.id === 1 ? 48 : 32,
            bold: true,
            color: slide.id === 1 ? "FFFFFF" : "001F3F",
            align: "left",
        });

        if (slide.subtitle) {
            s.addText(slide.subtitle, {
                x: 0.5,
                y: slide.id === 1 ? 4.5 : 1.0,
                fontSize: slide.id === 1 ? 28 : 18,
                color: slide.id === 1 ? "00D1FF" : "007CC3",
            });
        }

        // Overview - Skip for Slide 1
        let yPos = 1.8;
        if (slide.id !== 1) {
            if (typeof slide.overview === "string") {
                s.addText(slide.overview, {
                    x: 0.5,
                    y: yPos,
                    w: "90%",
                    fontSize: 14,
                    color: "555555",
                });
                yPos += 0.5;
            } else if (Array.isArray(slide.overview)) {
                slide.overview.forEach((item, idx) => {
                    s.addText(`${idx + 1}. ${item}`, {
                        x: 0.7,
                        y: yPos + (idx * 0.4),
                        w: "80%",
                        fontSize: 14,
                        color: "1A1A1A",
                    });
                });
                yPos += slide.overview.length * 0.4 + 0.2;
            }

            // Points
            if (slide.points) {
                slide.points.forEach((point, idx) => {
                    s.addText(`• ${point}`, {
                        x: 0.7,
                        y: yPos + (idx * 0.4),
                        w: "80%",
                        fontSize: 12,
                        color: "1A1A1A",
                    });
                });
            }
        }

        // Metrics
        if (slide.metrics) {
            slide.metrics.forEach((m, idx) => {
                const x = 0.5 + (idx * 2.2);
                s.addShape(pres.ShapeType.rect, {
                    x: x, y: 3.5, w: 2.0, h: 1.5, fill: { color: "F0F7FF" }
                });
                s.addText(m.value, {
                    x: x, y: 3.8, w: 2.0, fontSize: 24, bold: true, color: "007CC3", align: "center"
                });
                s.addText(m.label, {
                    x: x, y: 4.3, w: 2.0, fontSize: 10, align: "center"
                });
            });
        }

        // Phases
        if (slide.phases) {
            slide.phases.forEach((p, idx) => {
                const x = 0.5 + (idx * 3.0);
                s.addText(p.title, {
                    x: x, y: 3.0, w: 2.8, fontSize: 14, bold: true, color: "001F3F"
                });
                p.items.forEach((item, iIdx) => {
                    s.addText(`- ${item}`, {
                        x: x, y: 3.4 + (iIdx * 0.3), w: 2.8, fontSize: 11
                    });
                });
            });
        }

        // Sales Message at the bottom
        s.addText(slide.salesMessage, {
            x: 0,
            y: "85%",
            w: "100%",
            h: 1.0,
            fontSize: 16,
            italic: true,
            color: "FFFFFF",
            fill: { color: "001F3F" },
            align: "center",
        });
    });

    pres.writeFile({ fileName: "Contact_Center_Transformation_Pitch.pptx" });
};
