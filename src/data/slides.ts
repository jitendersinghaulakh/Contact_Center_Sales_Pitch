export interface SlideContent {
    id: number;
    title: string;
    subtitle?: string;
    purpose: string;
    overview: string | string[];
    salesMessage: string;
    points?: string[];
    metrics?: { label: string; value: string }[];
    phases?: { title: string; items: string[] }[];
}

export const slides: SlideContent[] = [
    {
        id: 1,
        title: "Future of Contact Centers with AI",
        subtitle: "Infosys Consulting Offerings",
        purpose: "This is your anchor slide. It sets the tone: modern, digital, outcome-focused.",
        overview: "This deck outlines how enterprises can transform traditional contact centers into AI-powered, experience-driven hubs. The focus is on improving customer experience, boosting agent productivity, and reducing operational costs through AI, automation, and omnichannel design.",
        salesMessage: "“This is not a technology upgrade — it’s a business transformation.”"
    },
    {
        id: 2,
        title: "Table of Contents",
        purpose: "Signals structure and executive clarity.",
        overview: [
            "Industry Insights",
            "Our Point of View",
            "Our Approach",
            "Our Offerings",
            "Case Study & Clientele"
        ],
        salesMessage: "“We understand the market, we have a point of view, and we know how to execute.”"
    },
    {
        id: 3,
        title: "Evolving Customer Demand in Contact Centers",
        purpose: "Creates urgency by framing customer expectations.",
        overview: "Customer expectations have shifted dramatically:",
        points: [
            "Customers expect seamless movement across voice, chat, email, and digital channels",
            "They expect personalization driven by real-time data and context",
            "They expect instant, always-on support — not menus or queues",
            "At the same time, most organizations still struggle to deliver true omnichannel continuity."
        ],
        salesMessage: "“The gap between what customers expect and what contact centers deliver is widening.”"
    },
    {
        id: 4,
        title: "Contact Centers Becoming Experience-Driven, AI-Enabled Hubs",
        purpose: "Positions AI as inevitable, not optional.",
        overview: "Contact centers are evolving across four dimensions:",
        points: [
            "Evolving customer demand — real-time, personalized experiences",
            "AI and automation at scale — conversational AI, NLU, voice biometrics",
            "Agent productivity — reducing repetitive work, improving FCR",
            "CX compliance and monitoring — real-time QA, SLA adherence, sentiment tracking"
        ],
        salesMessage: "“Contact centers are no longer cost centers — they’re experience hubs.”"
    },
    {
        id: 5,
        title: "Key Challenges in Traditional Contact Centers",
        purpose: "Creates pain before offering the solution.",
        overview: "Most legacy contact centers struggle with:",
        points: [
            "High call volumes driven by repetitive requests",
            "Fragmented journeys across channels",
            "Low First Call Resolution due to missing context",
            "High operating costs from manual processes",
            "Inconsistent quality and compliance due to sampled QA"
        ],
        salesMessage: "“These challenges directly hurt CX, agent morale, and margins.”"
    },
    {
        id: 6,
        title: "Contact Centers Transforming with AI and Automation at Scale",
        purpose: "Introduces AI as the lever for measurable improvement.",
        overview: "AI enables:",
        points: [
            "Conversational self-service through NLU and voice bots",
            "Secure, frictionless authentication using voice biometrics",
            "Agent augmentation via real-time insights and recommendations",
            "True omnichannel experiences with context carry-over"
        ],
        salesMessage: "“AI improves outcomes for customers, agents, and operations — simultaneously.”"
    },
    {
        id: 7,
        title: "Reimagining IVR: From Menus to Meaningful Conversations",
        purpose: "Shows tangible modernization of a familiar pain point.",
        overview: "Traditional IVR menus are replaced with conversational AI that:",
        points: [
            "Understands intent using natural language",
            "Resolves issues without rigid menu navigation",
            "Routes customers intelligently when agents are needed",
            "Integrates GenAI for more human-like interactions"
        ],
        salesMessage: "“No more ‘Press 1, Press 2’ — IVR becomes a conversation.”"
    },
    {
        id: 8,
        title: "Industry Insight: From Reactive FAQs to Proactive Virtual Assistants",
        purpose: "Demonstrates strategic maturity.",
        overview: "Leading organizations are shifting from reactive support to proactive engagement:",
        points: [
            "AI detects events like unusual spend or duplicate charges",
            "Personalized nudges guide customers before issues escalate",
            "Assistants deliver insights, not just answers",
            "Actions are embedded directly into messages"
        ],
        salesMessage: "“The best contact centers prevent calls — they don’t just answer them.”"
    },
    {
        id: 9,
        title: "Leading Enterprises Transforming Contact Centers",
        purpose: "Builds credibility and momentum.",
        overview: "Market drivers include rising customer expectations, high legacy platform costs, increased compliance pressure, and demand for higher agent productivity.",
        points: [
            "AI copilots and bots",
            "Omnichannel journey integration",
            "Migration to cloud-native CCaaS platforms"
        ],
        salesMessage: "“This transformation is already happening — the question is how fast you move.”"
    },
    {
        id: 10,
        title: "Three-Phase Capability Rollout",
        purpose: "Reduces risk concerns.",
        overview: "Transformation is delivered in phases:",
        phases: [
            {
                title: "Phase 1 (Foundational)",
                items: ["Cloud migration", "Unified data", "Standardized knowledge"]
            },
            {
                title: "Phase 2 (Mainstream)",
                items: ["AI chatbots", "Omnichannel journeys", "Self-service"]
            },
            {
                title: "Phase 3 (Advanced)",
                items: ["Predictive analytics", "Sentiment-driven insights", "Proactive CX"]
            }
        ],
        salesMessage: "“We meet you where you are — no big-bang transformation required.”"
    },
    {
        id: 11,
        title: "Who Benefits from AI-Powered Transformation",
        purpose: "Shows value across stakeholders.",
        overview: "A multi-stakeholder win:",
        points: [
            "Customers: Faster, personalized, 24/7 support",
            "Agents: Reduced workload, better tools, faster resolution",
            "COOs: SLA adherence, optimized staffing, lower costs",
            "CX Leaders: Better insights, higher loyalty",
            "Compliance Teams: Automated monitoring and audit readiness"
        ],
        salesMessage: "“This isn’t a single-stakeholder win — everyone benefits.”"
    },
    {
        id: 12,
        title: "Outcomes & Business Impact",
        purpose: "Closes with numbers.",
        overview: "Typical outcomes include:",
        metrics: [
            { label: "Cost per contact reduction", value: "15–30%" },
            { label: "CSAT improvement", value: "8–12 pts" },
            { label: "AHT reduction", value: "10–20%" },
            { label: "SLA adherence", value: "95%" }
        ],
        salesMessage: "“These are proven, measurable results — not theoretical AI benefits.”"
    },
    {
        id: 13,
        title: "Precision AI: Use Cases for IVR & Agent Desktop",
        purpose: "Deep dive into tangible AI applications.",
        overview: "AI creates value at both the customer edge and the agent core:",
        points: [
            "IVR: Intent recognition (NLU), Sentiment-based routing, Voice Biometrics, Conversational GenAI",
            "Agent Desktop: Real-time Agent Assist (Co-pilot), Auto-summarization of calls, Next-Best-Action (NBA) prompts, Automated wrap-up & QA"
        ],
        salesMessage: "“Agent augmentation is the fastest path to operational efficiency.”"
    },
    {
        id: 14,
        title: "Defining 'The Look' of AI in Contact Center",
        purpose: "Visualizing the AI-orchestrated stack.",
        overview: "Modern AI is not a feature, it's the orchestration layer:",
        points: [
            "Omnichannel Ingest: Voice, Chat, Email through a single Brain",
            "The Orchestrator: Real-time NLP/NLU decoding intent and context",
            "Dynamic Response: Intelligent IVR vs. Warm Agent Transfer with full context",
            "Feedback Loop: Automated QA feeding the Knowledge Management System"
        ],
        salesMessage: "“AI is the central nervous system of the modern contact center.”"
    },
    {
        id: 15,
        title: "IVR Audit: Key Focus Areas",
        purpose: "Establishing a baseline for excellence.",
        overview: "If we perform an IVR Audit, we focus on four critical pillars:",
        points: [
            "Customer Effort: Identifying 'Dead Ends', circular loops, and high-latency points",
            "Technical Accuracy: NLU recognition rates and API response reliability",
            "Strategic Alignment: Does the menu reflect high-value customer intents?",
            "Authentication Friction: Measuring the drop-off during ID & Verification (ID&V)"
        ],
        salesMessage: "“We don't just find problems — we quantify the cost of inaction.”"
    },
    {
        id: 16,
        title: "Audits Driving Continuous Improvement (CI)",
        purpose: "Linking analysis to long-term value.",
        overview: "An audit is a snapshot; Continuous Improvement is the motion:",
        points: [
            "Closed-Loop Feedback: Audit findings immediately update Bot training sets",
            "A/B Testing: Iterative testing of prompts based on audit sentiment scores",
            "Knowledge Refinement: Syncing IVR content with Agent Knowledge Bases",
            "Predictive Tuning: Using historical audit data to prevent emerging failures"
        ],
        salesMessage: "“Continuous improvement turns your contact center into a learning organization.”"
    }
];
