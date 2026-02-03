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
                fill: { color: "001F3F", alpha: 40 }
            });
        } else {
            s.background = { color: "FFFFFF" };

            // Add corner decorations for Slide 3 if possible with shapes
            if (slide.id === 3) {
                s.addShape(pres.ShapeType.ellipse, {
                    x: 10, y: -1, w: 4, h: 4, fill: { color: "00BFB3", alpha: 80 }
                });
                s.addShape(pres.ShapeType.ellipse, {
                    x: -1, y: 5.5, w: 4, h: 4, fill: { color: "00BFB3", alpha: 60 }
                });
            }
        }

        // Slide Title
        s.addText(slide.title, {
            x: 0.5,
            y: slide.id === 1 ? 2.5 : 0.5,
            w: slide.id === 1 ? "60%" : "90%",
            fontSize: slide.id === 1 ? 48 : slide.id === 3 ? 42 : 32,
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

        // Table of Contents (Slide 2) Card Grid
        if (slide.id === 2 && Array.isArray(slide.overview)) {
            slide.overview.forEach((item, idx) => {
                const col = idx % 3;
                const row = Math.floor(idx / 3);
                const xPos = 0.5 + (col * 4.2);
                const yPos = 2.0 + (row * 2.2);

                // Card Background
                s.addShape(pres.ShapeType.rect, {
                    x: xPos, y: yPos, w: 3.8, h: 1.8,
                    fill: { color: "FFFFFF" },
                    line: { color: "F0F0F0", width: 1 }
                });

                // Badge
                s.addShape(pres.ShapeType.roundRect, {
                    x: xPos + 0.2, y: yPos - 0.2, w: 0.8, h: 0.4,
                    rectRadius: 0.5,
                    fill: { color: "00BFB3" }
                });
                s.addText(`0${idx + 1}`, {
                    x: xPos + 0.2, y: yPos - 0.2, w: 0.8, h: 0.4,
                    fontSize: 10, bold: true, color: "FFFFFF", align: "center"
                });

                // Title
                s.addText(item, {
                    x: xPos + 0.2, y: yPos + 0.5, w: 3.4,
                    fontSize: 16, bold: true, color: "001F3F"
                });

                // Description
                s.addText("Strategic framework and implementation highlights.", {
                    x: xPos + 0.2, y: yPos + 1.0, w: 3.4,
                    fontSize: 10, color: "888888"
                });
            });
        }

        // Defining 'The Look' (Slide 3) 4-Pillar Flow
        else if (slide.id === 3 && slide.points) {
            const pillars = ["INGEST", "ORCHESTRATION", "DYNAMIC LOGIC", "VALUE OUTPUT"];
            pillars.forEach((pillar, idx) => {
                const xPos = 0.5 + (idx * 3.2);

                // Icon Placeholder Shape
                s.addShape(pres.ShapeType.ellipse, {
                    x: xPos + 0.5, y: 2.2, w: 1.5, h: 1.5,
                    line: { color: "00BFB3", width: 2 }
                });

                // Pillar Title
                s.addText(pillar, {
                    x: xPos, y: 3.8, w: 2.5,
                    fontSize: 14, bold: true, color: "000000", align: "center"
                });

                // Pillar Description
                s.addText(slide.points![idx], {
                    x: xPos, y: 4.3, w: 2.5,
                    fontSize: 9, color: "333333", align: "center"
                });

                // Arrow
                if (idx < 3) {
                    s.addShape(pres.ShapeType.rightArrow, {
                        x: xPos + 2.6, y: 2.8, w: 0.6, h: 0.3,
                        fill: { color: "EEEEEE" }
                    });
                }
            });
        }

        // General Content (Overview & Points) - Skip for Slide 1, 2, 3
        else if (slide.id !== 1 && slide.id !== 2 && slide.id !== 3) {
            let yPos = 1.8;
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

        // Metrics (Skip for Title Slides if needed, but usually fine)
        if (slide.metrics) {
            slide.metrics.forEach((m, idx) => {
                const x = 0.5 + (idx * 2.2);
                s.addShape(pres.ShapeType.rect, {
                    x: x, y: 4.5, w: 2.0, h: 1.2, fill: { color: "F0F7FF" }
                });
                s.addText(m.value, {
                    x: x, y: 4.7, w: 2.0, fontSize: 22, bold: true, color: "007CC3", align: "center"
                });
                s.addText(m.label, {
                    x: x, y: 5.1, w: 2.0, fontSize: 9, align: "center"
                });
            });
        }

        // Phases
        if (slide.phases) {
            slide.phases.forEach((p, idx) => {
                const x = 0.5 + (idx * 4.0);
                s.addShape(pres.ShapeType.rect, {
                    x: x, y: 4.0, w: 3.8, h: 2.5, fill: { color: "FFFFFF" }, line: { color: "00D1FF", width: 3 }
                });
                s.addText(p.title, {
                    x: x + 0.2, y: 4.2, w: 3.4, fontSize: 13, bold: true, color: "001F3F"
                });
                p.items.forEach((item, iIdx) => {
                    s.addText(`- ${item}`, {
                        x: x + 0.2, y: 4.6 + (iIdx * 0.3), w: 3.4, fontSize: 10
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
