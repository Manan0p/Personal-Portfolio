import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <header className="fixed top-0 w-full border-b border-white/10 z-50 backdrop-blur-md supports-backdrop-filter:bg-background/60">
              <nav className="container mx-auto px-3 sm:px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                  <Image src="/brand-mark.svg" alt="Logo" width={28} height={28} priority />
                  <span className="font-semibold text-base sm:text-lg tracking-wide">Manan Lall</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                  <Link href="/">
                    <Button variant="ghost" className="text-sm lg:text-lg">
                      Home
                    </Button>
                  </Link>
                  <Link href="/projects">
                    <Button variant="ghost" className="text-sm lg:text-lg">
                      Projects
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="ghost" className="text-sm lg:text-lg">
                      Blog
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="ghost" className="text-sm lg:text-lg">
                      About
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="ghost" className="text-sm lg:text-lg">
                      Contact
                    </Button>
                  </Link>
                  {/* <ModeToggle /> */}
                </div>

                {/* Mobile Navigation */}
                <MobileNav />
              </nav>
            </header>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
