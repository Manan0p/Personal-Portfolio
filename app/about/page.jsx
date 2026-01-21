import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { renderParagraphOrPoints } from "../projects/[slug]/page";

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
                        </div>
                        <div className="relative space-y-10 max-w-lg lg:pl-10">
                            <div className="hidden lg:block absolute left-[-32px] top-0 h-full w-px
                                            bg-gradient-to-b from-transparent via-violet-400/25 to-transparent" />
                            <div className=" hidden lg:block absolute left-[-33px] top-0 h-full w-[3px]
                                             bg-gradient-to-b from-transparent via-violet-500/10 to-transparent 
                                             blur-md opacity-70" />
                            <div className="space-y-4 pt-6">
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    )
}