import { BellRing, Brain, Contact, FileSearch, LayoutDashboard, Lightbulb, MessageSquareText, MoonStar, Receipt, Scale, Sparkles, Split, Tags, Target, TrendingUp, Users } from "lucide-react";

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
    problem: {
      intro: "Managing shared expenses is surprisingly painful:",
      points: [
        "People forget who paid last",
        "Balances become unclear across groups",
        "Settlements are tracked manually (or not at all)",
        "Existing tools feel cluttered, outdated, or unintuitive",
      ],
      outro: "These issues lead to misunderstandings, delayed settlements, and unnecessary friction between users.",
    },
    solution: {
      intro: "Splitr follows a simple, intuitive lifecycle:",
      points: [
        "Add expenses",
        "Automatically split costs (equal, percentage, or custom)",
        "Track balances in real time",
        "Settle up effortlessly",
      ],
      outro: "The platform continuously recalculates balances as new expenses are added, giving users a clear and accurate picture of their financial standing across individuals and groups without manual math or spreadsheets.",
    },
    experience: {
      intro: "Users can:",
      points: [
        "View all expenses and balances at a glance from a unified dashboard",
        "Drill down into individual or group-level spending",
        "See net balances update instantly as expenses are added",
        "Settle debts and maintain accurate records automatically",
        "Use the app comfortably in both dark and light modes",
      ],
      outro: "The experience is designed to feel lightweight, fast, and friction-free.",
    },
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
    image: "/mp/sensai-mockup.png",
    alt: "Sensai",
    live_link: "https://sensai-lyart.vercel.app/",
    github_link: "https://github.com/Manan0p/sensai",
    overview: "SensAI is an AI-powered career assistant designed to help students and professionals improve their resumes, prepare for interviews, and gain clarity about their career path. It acts as a personalized guide by analyzing resumes, simulating interviews, and offering actionable insights tailored to individual goals and skill levels.",
    problem: {
      intro: "Career preparation is often fragmented and overwhelming:",
      points: ["Resumes lack structure, clarity, or relevance to job roles",
              "Interview preparation is generic and not role-specific",
              "Users don’t receive actionable feedback on strengths and weaknesses",
              "Career guidance is scattered across multiple platforms",
              "Progress tracking and improvement are unclear"],
      outro: "This leaves candidates underprepared and unsure about where they stand.",
    },
    solution: {
      intro: "SensAI provides an end-to-end AI-driven career preparation workflow:",
      points: ["Upload resume → Analyze strengths & gaps",
              "Generate role-specific interview questions",
              "Practice interviews with AI feedback",
              "Get improvement suggestions in real time",
              "Track progress and readiness over time"],
      outro: "By combining resume intelligence with interview simulation, SensAI creates a focused and practical preparation experience.",
    },
    experience: {
      intro: "Users can:",
      points: ["Upload and analyze resumes instantly",
        "Receive AI-generated suggestions to improve content and structure",
        "Practice mock interviews tailored to specific roles",
        "Get instant feedback on answers, communication, and clarity",
        "Track performance improvements across sessions",
        "Prepare confidently without switching platforms"
      ],
      outro: "The experience is designed to be simple, focused, and distraction-free.",
    },
    key_features: [
      { icon : <FileSearch /> , heading: "AI Resume Analysis", oneliner: "Analyzes resumes for structure, clarity, keywords, and role relevance.", },
      { icon : <MessageSquareText /> , heading: "Interview Practice", oneliner: "Generates role-specific interview questions and simulates real interview scenarios.", },
      { icon : <Sparkles /> , heading: "Smart Feedback System", oneliner: "Provides instant, actionable feedback on answers and communication quality.", },
      { icon : <Lightbulb /> , heading: "Career Insights", oneliner: "Offers suggestions on skills to improve and roles to target based on profile data.", },
      { icon : <TrendingUp /> , heading: "Progress Tracking", oneliner: "Tracks performance improvements across resume updates and interview sessions.", },
      { icon : <Target /> , heading: "Role-Based Preparation", oneliner: "Customizes interview questions and guidance based on job role and experience level.", },
      { icon : <LayoutDashboard /> , heading: "Modern, Minimal UI", oneliner: "Clean and focused interface designed to reduce cognitive overload.", }
    ],
  },
  {
    slug: "jobguard-ai",
    title: "JobGuard AI",
    info: "Fake Job Detector",
    description:
      "A smart, reliable, user-focused platform that helps users identify and avoid fraudulent job postings.",
    stack: ["Flask", "Scikit-learn", "SQLite", "Joblib", "Gunicorn"],
    image: "/mp/jobguard-mockup.png",
    alt: "JobGuard AI",
    live_link: "https://manan0p-jobguard-ai.hf.space/",
    github_link: "https://github.com/Manan0p/JobGuard-AI",
    overview: "",
    problem: {
      intro: "",
      points: [],
      outro: "",
    },
    solution: {
      intro: "",
      points: [],
      outro: "",
    },
    experience: {
      intro: "",
      points: [],
      outro: "",
    },
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
    problem: {
      intro: "",
      points: [],
      outro: "",
    },
    solution: {
      intro: "",
      points: [],
      outro: "",
    },
    experience: {
      intro: "",
      points: [],
      outro: "",
    },
    key_features: [
      { icon : "" , heading: "", oneliner: "", }      
    ],
  },
];
