import { Bot, ChartColumnDecreasing, HandCoins, ShieldCheck } from "lucide-react";

export const projects = [
  {
    icon: <HandCoins className="w-10 h-10 mb-4 text-primary" />,
    title: "Splitr",
    description:
      "A smart expense-sharing app for splitting bills and managing group expenses.",
  },
  {
    icon: <Bot className="w-10 h-10 mb-4 text-primary" />,
    title: "Sensai",
    description:
      "An AI-powered career assistant for resumes, cover letters, interview practice, and industry insights.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-primary" />,
    title: "JobGuard AI",
    description:
      "A smart platform that helps users identify and avoid fraudulent job postings.",
  },
  {
    icon: <ChartColumnDecreasing className="w-10 h-10 mb-4 text-primary" />,
    title: "DealDrop",
    description:
      "A smart price-tracking assistant that monitors products and sends instant alerts when prices drop.",
  },
];