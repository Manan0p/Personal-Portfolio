import { BrainCircuit, DatabaseZap, Layers, LayoutDashboard } from "lucide-react";

export const blog = [
    {
        icon: <Layers className="w-20 h-20 md:w-24 md:h-24 text-violet-400" />,
        title: "Building AI Products End-to-End",
        path: "From idea -> model -> backend -> production UI",
    },
    {
        icon: <BrainCircuit className="w-20 h-20 md:w-24 md:h-24 text-violet-400" />,
        title: "Machine Learning & NLP Systems",
        path: "Feature engineering, model decisions, and real-world tradeoffs",
    },
    {
        icon: <DatabaseZap className="w-20 h-20 md:w-24 md:h-24 text-violet-400" />,
        title:"System Design & Architecture",
        path: "Designing scalable, maintainable, full-stack systems",
    },
    {
        icon: <LayoutDashboard className="w-20 h-20 md:w-24 md:h-24 text-violet-400" />,
        title: "Case Studies from Real Projects",
        path: "Splitr, Sensai, JobGuard AI and Dealdrop - what worked and what didn't",
    },
];

export const skills = [
    {
        stack: ["React", "Next.js", "AI/ML", "Python", "Flask", "Tailwind CSS", "Node.js", "FastAPI", "Javascript", "CI/CD", "SQLite", "NLP"]
    }
]