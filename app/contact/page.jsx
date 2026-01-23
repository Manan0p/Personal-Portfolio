import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { badges, contact } from "@/Data/contact";
import { Home } from "lucide-react";
import Link from "next/link";

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
                        <div className="space-y-5">
                            <div className="text-sm md:text-md lg:text-lg space-x-1 text-muted-foreground tracking-wide">
                                <Link href="/">
                                    <Home className="inline mb-1 mr-1 h-4 w-4"/>
                                    Home /
                                </Link> 
                                Contact
                            </div>
                            <h2 className="gradient-title font-bold tracking-tighter text-left text-4xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                                Let's Build Something <br /> Meaningful
                            </h2>
                            <div className="max-w-lg text-md md:text-lg lg:text-xl text-muted-foreground tracking-wide">
                            Open to collaborations, internships, freelance work,and interesting conversations around AI or product engineering.
                            </div>
                            <div className="flex flex-wrap gap-4 pt-2">
                                {badges[0].stack?.map((tech, i) => (
                                    <span key={i} className="group relative-h-[230-px] rounded-md px-4 py-2 text-lg after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent group relative overflow-hidden bg-black/10
                                                             from-[#161a2d]/90 via-[#111528]/90 to-[#0b0e1a]/90 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_80px_rgba(139,92,246,0.35)] before:absolute before:inset-0 before:rounded-md
                                                             before:bg-[radial-gradient(600px_200px_at_0%_0%,rgba(139,92,246,0.18),transparent_60%)]
                                                             before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                <Link href="#send-message">
                                    <Button
                                    className="text-white text-lg bg-blue-600 border border-white/25 rounded-lg px-6 py-3 shadow-sm hover:bg-blue-700"
                                    size="lg"
                                    >
                                    Send a Message
                                    </Button>
                                </Link>
                                <a href="/Manan_Lall_CV.pdf" download="Manan_Lall_CV.pdf">
                                    <Button
                                    className="text-white text-lg bg-transparent border border-white/25 rounded-lg px-6 py-3 hover:bg-white/5"
                                    size="lg"
                                    >
                                    Download Resume
                                    </Button>
                                </a>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                        </div>

                        <div className="relative hidden lg:flex items-center justify-end pt-8">
                            <img
                            src="/contact.png"
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
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-6 mb-4 max-w-sm mx-auto">
                            <div className="h-px w-32 bg-white/50" />
                            <h2 className="text-4xl font-bold tracking-wide bg-[linear-gradient(90deg,#E5F0FF,#CBD5E1,#A5B4FC)] text-transparent bg-clip-text whitespace-nowrap">
                                Reach Out
                            </h2>
                            <div className="h-px w-32 bg-white/50" />
                        </div>
                        <div className="relative max-w-6xl mx-auto my-12">
                            <div className="absolute -top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                            <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto mb-8 gap-10 ">
                                {contact.map(({logo,title,head,info,link},index)=>{
                                    return(
                                        <Card key={index} className="group relative-h-[230-px] after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#161a2d]/90 via-[#111528]/90 to-[#0b0e1a]/90
                                             backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_80px_rgba(139,92,246,0.35)]
                                             before:absolute before:inset-0 before:rounded-2xl
                                             before:bg-[radial-gradient(600px_200px_at_0%_0%,rgba(139,92,246,0.18),transparent_60%)]
                                             before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />
                                            <CardContent className="relative flex items-center gap-6 px-6 py-6">
                                                <div className="flex-shrink-0 relative">
                                                    <div className="absolute inset-0 rounded-full bg-violet-500/25 blur-3xl" />
                                                    <div className="group relative h-20 w-20 flex items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]">
                                                        <img src={logo} alt={title} className="h-auto w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-110"/>
                                                    </div>
                                                </div>
                                                    <div className="flex flex-col gap-3">
                                                        <h3 className="text-2xl font-semibold">{head}</h3>
                                                        
                                                    </div>
                                            </CardContent>
                                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                                        </Card>
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