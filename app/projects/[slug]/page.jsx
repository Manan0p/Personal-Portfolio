import { Button } from "@/components/ui/button";
import { main_projects } from "@/Data/main_projects";
import { Home } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({params}) {
    const rawSlug = params?.slug
    const slug = String(
    Array.isArray(rawSlug) ? rawSlug[0] : rawSlug
    ).toLowerCase()

    const project = main_projects.find(
        (p) => String(p.slug).toLowerCase() === slug
    )

    if (!project) notFound()

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
                        <div className="grid lg:grid-cols-2 gap-6 items-center">
                            <div className="space-y-5 max-w-lg">
                                <div className="text-sm md:text-md lg:text-lg text-muted-foreground tracking-wide">
                                    <Home className="inline mb-1 mr-1 h-4 w-4"/>
                                        Home / Projects / {project.title}
                                </div>
                                <h2 className="text-5xl md:text-6xl font-semibold text-white">
                                    {project.title}
                                </h2>

                                <p className="text-xl md:text-2xl text-violet-300">
                                    {project.info}
                                </p>

                                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                                    {project.description}
                                </p>
                                        
                                <div className="flex items-center gap-3 pt-3">
                                    <Link href={project.live_link} target="_blank">
                                        <Button
                                            className="text-white text-lg bg-blue-600 border border-white/25 rounded-lg px-6 py-3 shadow-sm hover:bg-blue-700"
                                            size="lg"
                                        >
                                            Live Demo
                                        </Button>
                                    </Link>

                                    <Link href={project.github_link} target="_blank">
                                        <Button
                                            className="text-white text-lg bg-transparent border border-white/25 rounded-lg px-6 py-3 hover:bg-white/5"
                                            size="lg"
                                        >
                                            GitHub Repo
                                        </Button>
                                    </Link>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                            </div>
                            <div className="relative hidden lg:flex items-center justify-end">
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="
                                        w-[520px] md:w-[640px] lg:w-[720px]
                                        drop-shadow-[0_40px_80px_rgba(168,85,247,0.35)]
                                        select-none pointer-events-none"/>
                            </div>
                        </div>  
                    </div>
                </section>
        </div>
    )
}