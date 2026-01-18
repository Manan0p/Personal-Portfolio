import { BellRing, Brain, Contact, MoonStar, Receipt, Scale, Split, Tags, Users } from "lucide-react";

export const caseStudies = [
  {
    slug: "splitr",
    title: "Splitr",
    info: "Smart Expense Splitting",
    description:
      "An AI-powered expense-sharing web app that makes splitting bills, tracking balances, and settling up effortless for users.",
    stack: ["Next.js", "Tailwind CSS", "React", "Vercel", "Convex"],
    image: "/mp/splitr-mockup.png",
    alt: "Splitr Dashboard",
    live_link: "https://splitr-sigma-eight.vercel.app/",
    github_link: "https://github.com/Manan0p/splitr",
    overview: "Splitr is a modern expense-sharing web application built for friends, roommates, and travel groups who want a simple, transparent way to manage shared expenses.It removes the confusion around who owes whom by automatically splitting expenses, tracking balances in real time, and helping users settle up seamlessly — without spreadsheets or manual calculations.",
    problem: "Managing shared expenses is surprisingly painful: People forget who paid last Balances become unclear across groups Settlements are tracked manually (or not at all) Existing tools feel cluttered, outdated, or unintuitive These issues often lead to misunderstandings, delayed settlements, and unnecessary friction between users.",
    solution: "Splitr follows a simple, intuitive lifecycle: Add expenses Automatically split costs (equal, percentage, or custom) Track balances in real time Settle up effortlessly The platform continuously recalculates balances as new expenses are added, giving users a clear and accurate picture of their financial standing across individuals and groups — without manual math or spreadsheets.",
    experience: "Users can:View all expenses and balances at a glance from a unified dashboard Drill down into individual or group-level spending Instantly see net balances update as expenses are added Settle debts and maintain accurate records automatically Use the app comfortably in both dark and light modes The experience is designed to feel lightweight, fast, and friction-free.",
    key_features: [
      { icon : <Split /> , heading: "Expense Splitting", oneliner: "Split expenses equally, by percentage, or using custom amounts.", },
      { icon : <Users/>, heading: "Group Management", oneliner: "Create groups for trips, roommates, or events and track shared spending.", },
      { icon : <Scale /> , heading: "Smart Balance Tracking", oneliner: "Automatically calculates who owes whom across all expenses.", },
      { icon : <Receipt /> , heading: "Settlements & History", oneliner: "Record payments and maintain a complete transaction history.", },
      { icon : <BellRing /> , heading: "Automated Reminders", oneliner: "Sends reminders for outstanding balances so nothing is forgotten.", },
      { icon : <Brain /> , heading: "AI Spending Insights", oneliner: "Weekly personalized insights highlighting spending patterns and trends.", },
      { icon : <Contact /> , heading: "Contacts & Categories", oneliner: "Organize expenses by people and categories for better clarity.", },
      { icon : <MoonStar /> , heading: "Dark / Light Mode", oneliner: "Seamless experience across themes.", }
    ],
  },
  {
    slug: "sensai",
    title: "Sensai",
    info: "AI Career Coach",
    description:
      "An AI-driven career coaching platform that provides personalized guidance, resume optimization, and interview preparation to help users advance their careers.",
    stack: ["Next.js", "Tailwind CSS", "React", "Vercel", "PostgreSQL"],
    image: "/projects/sensai.png",
    alt: "Sensai",
    live_link: "https://sensai-lyart.vercel.app/",
    github_link: "https://github.com/Manan0p/sensai",
    overview: "",
    problem: "",
    solution: "",
    experience: "",
    key_features: [
      { icon : "" , heading: "", oneliner: "", }      
    ],
  },
  {
    slug: "jobguard-ai",
    title: "JobGuard AI",
    info: "Fake Job Detector",
    description:
      "A smart, reliable, user-focused platform that helps users identify and avoid fraudulent job postings.",
    stack: ["Flask", "Scikit-learn", "SQLite", "Joblib", "Gunicorn"],
    image: "/projects/jobguard.png",
    alt: "JobGuard AI",
    live_link: "https://splitr-sigma-eight.vercel.app/",
    github_link: "https://github.com/Manan0p/JobGuard-AI",
    overview: "",
    problem: "",
    solution: "",
    experience: "",
    key_features: [
      { icon : "" , heading: "", oneliner: "", }      
    ],
  },
  {
    slug: "dealdrop",
    title: "DealDrop",
    info: "Price Tracker",
    description:
      "A smart price-tracking assistant that monitors products and sends instant alerts when prices drop.",
    stack: ["React", "Next.js", "Tailwind CSS", "Supabase", "Firecrawl"],
    image: "/mp/dealdrop-mockup.png",
    alt: "DealDrop",
    live_link: "https://dealdrop-one.vercel.app/",
    github_link: "https://github.com/Manan0p/dealdrop",
    overview: "",
    problem: "",
    solution: "",
    experience: "",
    key_features: [
      { icon : "" , heading: "", oneliner: "", }      
    ],
  },
];
