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

            // Branded Header
            s.addText("INFOSYS ", {
                x: 0.5, y: 0.15, w: 1.5, fontSize: 10, bold: true, color: "001F3F"
            });
            s.addText("Consulting", {
                x: 1.15, y: 0.15, w: 2.0, fontSize: 10, color: "007CC3"
            });
            s.addShape(pres.ShapeType.line, {
                x: 0.5, y: 0.4, w: 12.3, h: 0, line: { color: "EEEEEE", width: 1 }
            });

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

            // Add Cube Icon at bottom
            s.addShape(pres.ShapeType.cube, {
                x: 6.0, y: 6.5, w: 0.8, h: 0.8,
                fill: { color: "001F3F" },
                line: { color: "00BFB3", width: 1 }
            });
        }

        // Defining 'The Look' (Slide 3) 4-Pillar Flow
        else if (slide.id === 3 && slide.points) {
            const pillars = ["INGEST", "ORCHESTRATION", "DYNAMIC LOGIC", "VALUE OUTPUT"];
            pillars.forEach((pillar, idx) => {
                const xPos = 0.5 + (idx * 3.2);

                // Icon Background Circle
                s.addShape(pres.ShapeType.ellipse, {
                    x: xPos + 0.5, y: 1.8, w: 1.6, h: 1.6,
                    fill: { color: "F4FBFB" },
                    line: { color: "00BFB3", width: 1.5 }
                });

                // Representative Icons using Shapes
                if (idx === 0) { // INGEST - Chat/Phone visual
                    s.addShape(pres.ShapeType.roundRect, { x: xPos + 0.9, y: 2.15, w: 0.8, h: 0.6, rectRadius: 0.2, fill: { color: "00BFB3" } });
                    s.addShape(pres.ShapeType.triangle, { x: xPos + 0.9, y: 2.65, w: 0.2, h: 0.2, fill: { color: "00BFB3" }, flipV: true });
                } else if (idx === 1) { // ORCHESTRATION - Gears
                    s.addShape(pres.ShapeType.gear6, { x: xPos + 0.8, y: 2.1, w: 0.7, h: 0.7, fill: { color: "00BFB3" } });
                    s.addShape(pres.ShapeType.gear9, { x: xPos + 1.2, y: 2.5, w: 0.5, h: 0.5, fill: { color: "333333" } });
                } else if (idx === 2) { // DYNAMIC LOGIC - Flow/Tree
                    s.addShape(pres.ShapeType.ellipse, { x: xPos + 1.1, y: 2.05, w: 0.4, h: 0.4, fill: { color: "00BFB3" } });
                    s.addShape(pres.ShapeType.ellipse, { x: xPos + 0.7, y: 2.7, w: 0.4, h: 0.4, fill: { color: "00BFB3" } });
                    s.addShape(pres.ShapeType.ellipse, { x: xPos + 1.5, y: 2.7, w: 0.4, h: 0.4, fill: { color: "00BFB3" } });
                } else if (idx === 3) { // VALUE OUTPUT - Cycle
                    s.addShape(pres.ShapeType.arc, { x: xPos + 0.8, y: 2.1, w: 1.0, h: 1.0, line: { color: "00BFB3", width: 4 } });
                    s.addShape(pres.ShapeType.triangle, { x: xPos + 1.6, y: 2.4, w: 0.2, h: 0.2, fill: { color: "00BFB3" }, rotate: 90 });
                }

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
                    s.addShape(pres.ShapeType.line, {
                        x: xPos + 2.5, y: 2.6, w: 0.8, h: 0,
                        line: { color: "EEEEEE", width: 2 }
                    });
                }
            });
        }

        // Dimensions Grid (Slide 5)
        else if (slide.id === 5 && slide.points) {
            slide.points.forEach((point, idx) => {
                const col = idx % 2;
                const row = Math.floor(idx / 2);
                const xPos = 0.5 + (col * 6.2);
                const yPos = 2.2 + (row * 1.8);
                const [title, desc] = point.split(' — ');

                s.addShape(pres.ShapeType.roundRect, {
                    x: xPos, y: yPos, w: 5.8, h: 1.5,
                    fill: { color: "F8FBFF" },
                    line: { color: "007CC3", width: 1 }
                });
                s.addShape(pres.ShapeType.ellipse, { x: xPos + 0.2, y: yPos + 0.3, w: 0.15, h: 0.15, fill: { color: "007CC3" } });
                s.addText(title, { x: xPos + 0.4, y: yPos + 0.3, w: 5.0, fontSize: 16, bold: true, color: "001F3F" });
                if (desc) s.addText(desc, { x: xPos + 0.4, y: yPos + 0.8, w: 5.0, fontSize: 11, color: "666666" });
            });
        }

        // Challenges List (Slide 6)
        else if (slide.id === 6 && slide.points) {
            slide.points.forEach((point, idx) => {
                const yPos = 2.0 + (idx * 0.9);
                s.addShape(pres.ShapeType.rect, { x: 0.5, y: yPos, w: 0.6, h: 0.6, fill: { color: "001F3F" } });
                s.addText(`${idx + 1}`, { x: 0.5, y: yPos, w: 0.6, h: 0.6, fontSize: 18, bold: true, color: "FFFFFF", align: "center" });
                s.addText(point, { x: 1.3, y: yPos + 0.1, w: 10.0, fontSize: 14, color: "1A1A1A" });
            });
        }

        // General Content (Overview & Points) - Skip for slides with custom layouts
        else if (![1, 2, 3, 5, 6].includes(slide.id)) {
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
