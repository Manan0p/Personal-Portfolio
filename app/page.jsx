import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./toggle";

export default function Home() {
  return (
    <div>
      <header className="fixed top-0 w-full border-b z-50 backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg tracking-wide">
              Manan Lall
            </span>
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
            <ModeToggle />
          </div>
        </nav>
      </header>
      <main>
        <section className="relative w-full overflow-hidden py-12 md:py-20 lg:py-24 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912]">
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
                <div className="flex items-center space-x-2 md:space-x-4 pt-1">
                  <Button className={"text-white text-lg bg-blue-600"} size="lg" href="/projects">
                    View Projects
                  </Button>
                  <Button className={"text-white text-lg"} variant="outline" size="lg" href="/">
                    Download CV
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end items-center">
                <Image
                  src="/hero.png"
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

        <section>
          <div>
            manan
          </div>
        </section>
      </main>
    </div>
  );
}
