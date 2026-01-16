import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./toggle";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/Data/projects";
import { expertise } from "@/Data/expertise";
import { contact } from "@/Data/contact";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <section className="relative w-full overflow-hidden pt-12 md:pt-20 lg:pt-28 pb-0 bg-[linear-gradient(120deg,#060814_0%,#0a0d18_45%,#070912_100%)] border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute right-[-10%] top-[10%] h-[80%] w-[60%] bg-gradient-to-bl from-violet-500/30 via-indigo-500/20 to-transparent blur-3xl"/>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_60%)]"/>
          </div>
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
                  <Link href="/projects">
                    <Button
                      className="text-white text-lg bg-blue-600 border border-white/25 rounded-lg px-6 py-3 shadow-sm hover:bg-blue-700"
                      size="lg"
                    >
                      View Projects
                    </Button>
                  </Link>
                  <a href="/Manan_Lall_CV.pdf" download="Manan_Lall_CV.pdf">
                    <Button
                      className="text-white text-lg bg-transparent border border-white/25 rounded-lg px-6 py-3 hover:bg-white/5"
                      size="lg"
                    >
                      Download CV
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end items-center">
                <Image
                  src="/final.png"
                  alt="Futuristic AI servers illustration"
                  width={1200}
                  height={800}
                  priority
                  className="w-full max-w-3xl drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)] animate-float translate-y-[-10px]"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent blur-sm" />
        </section>
        <section className="w-full py-16 md:py-24 lg:py-28 border-b border-white/10 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-px w-32 bg-white/50" />
                <h2 className="text-4xl font-bold tracking-wide inline-block bg-[linear-gradient(90deg,#E5F0FF,#CBD5E1,#A5B4FC)] text-transparent bg-clip-text">
                  Featured Projects
                </h2>
                <div className="h-px w-32 bg-white/50" />
              </div>
              <p className="text-md md:text-lg text-muted-foreground tracking-wide">
                Innovative Solutions I&apos;ve Built
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 ">{projects.map((project,index)=>{
              return(
                <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <Card className="group relative h-[230px] overflow-hidden rounded-2xl bg-white/7 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />
                  <CardContent className={"relative flex h-full overflow-hidden px-5"}>
                      <div className="relative z-10 flex flex-col max-w-[60%]">
                        <h3 className="text-xl font-bold leading-tight mb-1">{project.title}</h3>
                        <p className="text-lg text-muted-foreground">{project.info}</p>
                        <br />
                        <div className="text-muted-foreground text-sm leading-relaxed">{project.description}</div>
                      </div>
                      <div className="absolute right-4 top-0 h-full w-[42%] flex items-center justify-center pointer-events-none">
                        <div className="group-hover:scale-[1.03] absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" />
                        <img src={project.icon} alt={project.title} className="h-[92%] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-[1.04]"/>
                      </div>
                  </CardContent>
                </Card>
                </Link>
              )
            })}</div>
          </div>          
        </section>
        <section className="relative w-full py-16 md:py-24 border-b border-white/10 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-6 mb-4 max-w-md mx-auto">
                <div className="h-px flex-1 bg-white/40" />
              <h2 className="text-4xl font-bold tracking-wide bg-[linear-gradient(90deg,#E5F0FF,#CBD5E1,#A5B4FC)] text-transparent bg-clip-text whitespace-nowrap">My Expertise</h2>
              <div className="h-px flex-1 bg-white/40" />
              </div>
              <div className="text-md md:text-lg lg:text-xl text-muted-foreground tracking-wide mb-6">
                Skills That Drive Impact
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {expertise.map(({id,logo,title}, index)=>(
                <div key={id} className="relative flex flex-col items-center space-y-3  ">
                  <div className="group relative flex h-24 w-24 items-center justify-center rounded-xl bg-white/7 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]">
                    <img src={logo} alt={title} className="h-[85%] w-[85%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-normal">{title}</h3>
                  {index !== expertise.length - 1 && (
                    <div className="hidden lg:block absolute right-[-12px] top-1/2 -translate-y-1/2 h-14 w-px bg-white/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-7 md:py-14 lg:py-14 bg-background border-b border-white/10 bg-gradient-to-br]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-6 mb-4 max-w-md mx-auto">
                <div className="flex-1 h-px bg-white/40" />
                <h2 className="text-4xl font-bold tracking-wide bg-[linear-gradient(90deg,#E5F0FF,#CBD5E1,#A5B4FC)] text-transparent bg-clip-text whitespace-nowrap">
                  Let&apos;s Connect
                </h2>
                <div className="flex-1 h-px bg-white/40" />
              </div>
              <div className="text-md md:text-lg lg:text-xl text-muted-foreground tracking-wide mb-6">
                Get In Touch
              </div>
              <div className="text-lg md:text-xl lg:text-2xl tracking-wide mb-6">
                Let's Build Something Amazing!
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-8 gap-10 ">
                {contact.map(({id,logo,title,link})=>{
                  return(
                    <a key={id} href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                      <Card className={"border-2 hover:border-primary transition-colors duration-300 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912]"}>
                        <CardContent className={"flex flex-col items-center"}>
                          <div className="flex h-26 w-28 items-center justify-center-safe">{logo}</div>
                          <h3 className="text-xl tracking-normal text-center mb-6">{title}</h3>
                        </CardContent>
                      </Card>
                    </a>
                  )
                })}
              </div>
              <a href="/Manan_Lall_CV.pdf" download="Manan_Lall_CV.pdf">
                <Button className="text-white font-semibold tracking-normal text-lg bg-[linear-gradient(90deg,#2563EB,#7C3AED,#BE185D)] rounded-lg text-center px-9 py-6 shadow-sm" size="lg">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
