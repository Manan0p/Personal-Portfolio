import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./toggle";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 w-full border-b border-white/10 z-50 backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/brand-mark.svg" alt="Logo" width={28} height={28} priority />
            <span className="font-semibold text-lg tracking-wide">Manan Lall</span>
          </div>


          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" href="/" className="text-md">
              Home
            </Button>
            <Button variant="ghost" href="/projects" className="text-md">
              Projects
            </Button>
            <Button variant="ghost" href="/blog" className="text-md">
              Blog
            </Button>
            <Button variant="ghost" href="/about" className="text-md">
              About
            </Button>
            <Button variant="ghost" href="/contact" className="text-md">
              Contact
            </Button>
            {/* <ModeToggle /> */}
          </div>
        </nav>
      </header>
      <main>
        <section className="relative w-full overflow-hidden pt-12 md:pt-20 lg:pt-24 pb-0 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912] border-b border-white/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-5 pt-4">
                <h2 className="gradient-title font-bold tracking-tighter text-left text-4xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                  Building Intelligent <br /> & Scalable Systems
                </h2>
                <div className="text-lg md:text-xl lg:text-2xl font-medium tracking-wide">
                  AI/ML Engineer | Full-Stack Developer
                </div>
                <div className="text-sm md:text-lg lg:text-xl text-muted-foreground tracking-wide">
                  Solving real world problems with cutting edge AI and <br /> modern web technologies.
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button
                    className="text-white text-lg bg-blue-600 border border-white/25 rounded-2xl px-6 py-3 shadow-sm hover:bg-blue-500"
                    size="lg"
                    href="/projects"
                  >
                    View Projects
                  </Button>
                  <Button
                    className="text-white text-lg bg-transparent border border-white/25 rounded-2xl px-6 py-3 hover:bg-white/5"
                    size="lg"
                    href="/"
                  >
                    Download CV
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end items-center">
                <Image
                  src="/final.png"
                  alt="Futuristic AI servers illustration"
                  width={1200}
                  height={800}
                  priority
                  className="w-full max-w-3xl drop-shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-7 md:py-14 lg:py-14 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-4">Featured Projects</h2>
              <div className="text-sm md:text-lg lg:text-xl text-center text-muted-foreground tracking-wide">
                Innovative Solutions I've Built
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
