import { BrainCircuit, DatabaseZap, Layers, LayoutDashboard } from "lucide-react";

export const blog = [
    {
        icon: <Layers className="h-5 w-5" />,
        title: "Building AI Products End-to-End",
        path: "From idea -> model -> backend -> production UI",
    },
    {
        icon: <BrainCircuit className="h-5 w-5" />,
        title: "Machine Learning & NLP Systems",
        path: "Feature engineering, model decisions, and real-world tradeoffs",
    },
    {
        icon: <DatabaseZap className="h-5 w-5" />,
        title:"System Design & Architecture",
        path: "Designing scalable, maintainable, full-stack systems",
    },
    {
        icon: <LayoutDashboard className="h-5 w-5" />,
        title: "Case Studies from Real Projects",
        path: "Splitr, Sensai, JobGuard AI and Dealdrop - what worked and what didn't",
    },
];