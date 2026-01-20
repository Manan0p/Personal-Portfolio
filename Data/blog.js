import { BrainCircuit, DatabaseZap, Layers, LayoutDashboard } from "lucide-react";

export const blog = [
    {
        icon: <Layers className="h-auto w-auto" />,
        title: "Building AI Products End-to-End",
        path: "From idea -> model -> backend -> production UI",
    },
    {
        icon: <BrainCircuit className="h-auto w-auto" />,
        title: "Machine Learning & NLP Systems",
        path: "Feature engineering, model decisions, and real-world tradeoffs",
    },
    {
        icon: <DatabaseZap className="h-auto w-auto" />,
        title:"System Design & Architecture",
        path: "Designing scalable, maintainable, full-stack systems",
    },
    {
        icon: <LayoutDashboard className="h-auto w-auto" />,
        title: "Case Studies from Real Projects",
        path: "Splitr, Sensai, JobGuard AI and Dealdrop - what worked and what didn't",
    },
];