import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./toggle";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/Data/projects";
import { expertise } from "@/Data/expertise";

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
                <div className="text-md md:text-lg lg:text-xl text-muted-foreground tracking-wide">
                  Solving real world problems with cutting edge AI and <br /> modern web technologies.
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button
                    className="text-white text-lg bg-blue-600 border border-white/25 rounded-2xl px-6 py-3 shadow-sm hover:bg-blue-700"
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
        <section className="w-full py-7 md:py-14 lg:py-14 bg-background border-b border-white/10 bg-gradient-to-br">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-wide inline-block bg-[linear-gradient(90deg,#E5F0FF,#CBD5E1,#A5B4FC)] text-transparent bg-clip-text mb-4">Featured Projects</h2>
              <div className="text-md md:text-lg lg:text-xl text-muted-foreground tracking-wide mb-6">
                Innovative Solutions I've Built
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">{projects.map((project,index)=>{
              return(
                <Card key={index} className={"border-2 hover:border-primary transition-colors duration-300 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912]"}>
                  <CardContent className={"flex flex-col"}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.info}</p>
                      </div>
                      <div className="flex-shrink-0">
                        {project.icon}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              )
            })}</div>
          </div>
        </section>
        <section className="w-full py-7 md:py-14 lg:py-14 bg-background border-b border-white/10 bg-gradient-to-br]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-wide inline-block bg-[linear-gradient(90deg,#E5F0FF,#CBD5E1,#A5B4FC)] text-transparent bg-clip-text mb-4">My Expertise</h2>
              <div className="text-md md:text-lg lg:text-xl text-muted-foreground tracking-wide mb-6">
                Skills That Drive Impact
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {expertise.map(({id,logo,title})=>(
                <div key={id} className="flex flex-col items-center space-y-4 ">
                  <div className="flex h-26 w-28 items-center justify-center-safe border-2 hover:border-primary transition-colors duration-300  bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912]">{logo}</div>
                  <h3 className="text-lg font-semibold tracking-normal mb-6">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-7 md:py-14 lg:py-14 bg-background border-b border-white/10 bg-gradient-to-br]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-wide inline-block bg-[linear-gradient(90deg,#E5F0FF,#CBD5E1,#A5B4FC)] text-transparent bg-clip-text mb-4">Let's Connect</h2>
              <div className="text-md md:text-lg lg:text-xl text-muted-foreground tracking-wide mb-6">
                Get In Touch
              </div>
              <div className="text-lg md:text-xl lg:text-2xl tracking-wide mb-6">
                Let's Build Something Amazing!
              </div>
              <Button className="text-white font-semibold tracking-normal text-lg bg-[linear-gradient(90deg,#2563EB,#7C3AED,#BE185D)] rounded-lg text-center px-9 py-6 shadow-sm" size="lg" href="/t">
                Download Resume
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
