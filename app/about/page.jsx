import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { renderParagraphOrPoints } from "../projects/[slug]/page";
import { Card, CardContent } from "@/components/ui/card";
import { card, others, skills } from "@/Data/about";
import { contact } from "@/Data/contact";

export default function page() {
    return (
        <div>
            <section className="relative w-full overflow-hidden pt-6 md:pt-10 lg:pt-12 pb-0 bg-[linear-gradient(120deg,#060814_0%,#0a0d18_45%,#070912_100%)] border-b border-white/10">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute right-[-10%] bottom-[-35%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_30%_30%,
                                rgba(236,72,153,0.85),rgba(168,85,247,0.6),rgba(99,102,241,0.35),transparent_65%)] blur-[140px]"/>
                <div className="absolute right-0 bottom-0 h-full w-[55%] bg-gradient-to-bl from-pink-500/35 via-violet-500/25 to-transparent blur-2xl"/>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-violet-400/80 to-transparent"/>
            </div>

            <div className="pointer-events-none absolute inset-0 
                                bg-gradient-to-r from-transparent via-violet-900/20 to-transparent z-[1]" />

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-5 max-w-lg">
                    <div className="text-sm md:text-md lg:text-lg space-x-1 text-muted-foreground tracking-wide">
                        <Link href="/">
                            <Home className="inline mb-1 mr-1 h-4 w-4"/>
                            Home /
                        </Link> 
                        About
                    </div>
                    <h2 className="font-medium text-white tracking-normal text-left text-4xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                    About
                    </h2>
                    <div className="text-lg md:text-xl lg:text-2xl font-medium tracking-wider">
                    Hey! I'm Manan👋🏻
                    </div>
                    <div className="text-md md:text-lg lg:text-xl text-muted-foreground tracking-wider">
                    Driven by a curosity for AI and modern <br /> web technologies. I'm an AI/ML engineer and <br /> full-stack dveloper. I specialize in building <br /> intelligent systems that tackle genuine problems <br /> with real impact.
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                </div>

                <div className="relative hidden lg:flex items-center justify-end pt-6">
                    <img
                    src="/about.png"
                    alt="Hero Image"
                    className="w-[520px] md:w-[640px] lg:w-[720px]
                                        drop-shadow-[0_40px_80px_rgba(168,85,247,0.35)]
                                        select-none pointer-events-none"
                    />
                </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-violet-400/40 to-transparent blur-sm" />
            </section>
            <section className="relative w-full overflow-hidden pt-6 pb-10 md:pt-10 lg:pt-12 pb-0 bg-[linear-gradient(120deg,#060814_0%,#0a0d18_45%,#070912_100%)] border-b border-white/10">
                <div className="pointer-events-none absolute inset-0 
                                bg-gradient-to-r from-transparent via-violet-900/20 to-transparent z-[1]" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8 max-w-xl">
                            <h2 className="text-lg md:text-3xl font-semibold text-violet-200 tracking-wide
                                            border-b border-white/10">
                                What I Do
                            </h2>
                            <div className="grid grid-cols-1 gap-6 max-w-auto mx-auto ">
                                {card.map((data,index)=>{
                                    return(
                                        <Card key={index} className="group relative-h-[230-px] after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#161a2d]/90 via-[#111528]/90 to-[#0b0e1a]/90
                                                    backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_80px_rgba(139,92,246,0.35)]
                                                    before:absolute before:inset-0 before:rounded-2xl
                                                    before:bg-[radial-gradient(600px_200px_at_0%_0%,rgba(139,92,246,0.18),transparent_60%)]
                                                    before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                                            <CardContent className="relative flex items-center gap-6 px-6 py-6">
                                                <div className="flex-shrink-0 relative">
                                                    <div className="absolute inset-0 rounded-full bg-violet-500/25 blur-3xl" />
                                                    <div className="relative transition-transform duration-300 group-hover:scale-[1.15]">
                                                        {data.icon}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <h3 className="text-2xl font-semibold">{data.title}</h3>
                                                    <p className="text-base text-white/80 leading-relaxed mb-3 line-clamp-2">
                                                    {data.description}
                                                    </p>
                                                </div>
                                            </CardContent>
                                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="relative space-y-10 max-w-lg lg:pl-10">
                            <div className="hidden lg:block absolute left-[-32px] top-0 h-full w-px
                                            bg-gradient-to-b from-transparent via-violet-400/25 to-transparent" />
                            <div className=" hidden lg:block absolute left-[-33px] top-0 h-full w-[3px]
                                             bg-gradient-to-b from-transparent via-violet-500/10 to-transparent 
                                             blur-md opacity-70" />
                            <div className="space-y-4 pt-6">
                                <h2 className="text-lg md:text-3xl font-semibold text-violet-200 tracking-wide
                                            border-b border-white/10">
                                    Technical Skills
                                </h2>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    {skills[0].stack?.map((tech, i) => (
                                        <span key={i} className="group relative-h-[230-px] rounded-md px-4 py-2 text-lg after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent group relative overflow-hidden bg-black/10
                                                                from-[#161a2d]/90 via-[#111528]/90 to-[#0b0e1a]/90 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_80px_rgba(139,92,246,0.35)] before:absolute before:inset-0 before:rounded-md
                                                                before:bg-[radial-gradient(600px_200px_at_0%_0%,rgba(139,92,246,0.18),transparent_60%)]
                                                                before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                                            {tech}
                                        </span>
                                    ))}
                                    <div className="text-md pt-5 md:text-lg lg:text-xl text-muted-foreground tracking-wider">
                                        I work with variety of tools to turn ideas into real applications.
                                    </div>
                                </div>
                                <a href="/Manan_Lall_CV.pdf" download="Manan_Lall_CV.pdf">
                                    <Button className="w-full text-white mt-4 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 px-10 py-6 text-xl font-medium shadow-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.45)] transition-all" size="lg">
                                        View Resume
                                        <span className="text-lg">›</span>
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
            <section className="relative w-full overflow-hidden pt-6 pb-10 md:pt-10 lg:pt-12 pb-0 bg-[linear-gradient(120deg,#060814_0%,#0a0d18_45%,#070912_100%)] border-b border-white/10">
                <div className="pointer-events-none absolute inset-0 
                                bg-gradient-to-r from-transparent via-violet-900/20 to-transparent z-[1]" />
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center gap-4 mb-2">
                            <div className="h-px w-32 bg-white/50" />
                            <h2 className="text-4xl font-bold tracking-wide inline-block bg-[linear-gradient(90deg,#E5F0FF,#CBD5E1,#A5B4FC)] text-transparent bg-clip-text">
                                Outside of work
                            </h2>
                            <div className="h-px w-32 bg-white/50" />
                        </div>
                        <p className="text-lg md:text-xl text-muted-foreground tracking-wide pt-4">
                            Life beyond code — the things that keep me inspired and balanced.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 ">{others.map((other,index)=>{
                        return(
                                <Card key={index} className="group relative h-[250px] overflow-hidden rounded-2xl bg-white/7 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]">
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />
                                    <CardContent className={"relative flex h-full overflow-hidden px-5"}>
                                        <div className="relative z-10 flex flex-col max-w-[80%]">
                                            <img src={other.icon} alt={other.title} className="h-[55%] w-[65%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-[1.04]"/>
                                            <h3 className="text-xl font-bold leading-tight mb-1 pt-2">{other.title}</h3>
                                            <div className="text-muted-foreground text-md leading-relaxed">{other.info}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                        )
                        })}</div>
                </div>
            </section>
            <section className="relative w-full overflow-hidden pt-6 pb-10 md:pt-10 lg:pt-12 pb-0 bg-[linear-gradient(120deg,#060814_0%,#0a0d18_45%,#070912_100%)] border-b border-white/10">
                <div className="pointer-events-none absolute inset-0 
                                bg-gradient-to-r from-transparent via-violet-900/20 to-transparent z-[1]" />
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-6 mb-4 max-w-sm mx-auto">
                                <h2 className="text-4xl font-bold tracking-wide bg-[linear-gradient(90deg,#E5F0FF,#CBD5E1,#A5B4FC)] text-transparent bg-clip-text whitespace-nowrap">
                                    Get In Touch
                                </h2>
                            </div>
                            <div className="text-md md:text-lg lg:text-xl text-muted-foreground tracking-wide mb-4">
                                Open to collaborations, opportunities, and tech conversations.
                            </div>
                            <div className="relative max-w-6xl mx-auto my-12">
                                <div className="absolute -top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                                <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto mb-8 gap-10 ">
                                    {contact.map(({logo,title,link},index)=>{
                                        return(
                                                <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                                    <div className="group relative flex flex-col items-center gap-3">
                                                        <div className="group relative h-20 w-20 flex items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]">
                                                            <img src={logo} alt={title} className="h-auto w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110"/>
                                                        </div>
                                                        <p className="text-sm md:text-base text-muted-foreground">
                                                            {title}
                                                        </p>
                                                        {index !== contact.length - 1 && (
                                                            <div className="hidden lg:block absolute right-[-32px] top-1/2 -translate-y-1/2 h-24 w-px bg-white/30" />
                                                        )}
                                                    </div>
                                                </a>
                                        )
                                    })}
                                </div>
                                <div className="absolute -bottom-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                            </div>
                        </div>
                      </div>
                    </section>
        </div>
    )
}