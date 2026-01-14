import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({subsets: ["latin"]});


export const metadata = {
  title: "Manan Lall | AI/ML Engineer",
  description: "Manan Lall is an AI/ML Engineer and Full-Stack Developer building intelligent, scalable web systems using AI, NLP, computer vision, and modern web technologies.",
  keywords: [
    "Manan Lall",
    "AI ML Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "Machine Learning",
    "NLP",
    "Computer Vision",
    "AI Portfolio",
    "Software Engineer"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
