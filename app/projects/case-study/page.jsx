import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <section className="relative noise w-full pt-6 md:pt-10 lg:pt-12 pb-6 overflow-hidden
                                bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912] border-b border-white/10">
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div className="absolute right-[5%] bottom-[10%]
                                    h-[520px] w-[520px]
                                    rounded-full
                                    bg-[radial-gradient(circle_at_40%_40%,
                                    rgba(168,85,247,0.65),
                                    rgba(99,102,241,0.4),
                                    transparent_60%) ]
                                    blur-[90px]" 
                    />

                    <div className="absolute bottom-0 left-0 w-full h-[3px] 
                                    bg-gradient-to-r from-transparent via-violet-400/80 to-transparent" 
                    />
                </div>

                <div className="pointer-events-none absolute inset-0 
                                bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]" />

                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-6 items-center">
                        <div className="space-y-5 max-w-lg">
                            <div className="text-sm md:text-md lg:text-lg text-muted-foreground tracking-wide">
                                <Home className="inline mb-1 mr-1 h-4 w-4"/>
                                Home / Projects / Splitr
                            </div>
                            <h2 className="text-5xl md:text-6xl font-semibold text-white">
                                Splitr
                            </h2>

                            <p className="text-xl md:text-2xl text-violet-300">
                            Smart Expense Splitting
                            </p>

                            <p className="text-base md:text-lg text-white/70 leading-relaxed">
                            An AI-powered expense-sharing web app that makes splitting bills,
                            tracking balances, and settling up effortless for groups.
                            </p>
                            
                            <div className="flex items-center gap-3 pt-3">
                                <Link href="https://splitr-sigma-eight.vercel.app/" target="_blank">
                                    <Button
                                    className="
                                        h-11 px-5
                                        rounded-md
                                        text-sm font-medium text-white
                                        bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600
                                        shadow-[0_8px_30px_rgba(139,92,246,0.45)]
                                        hover:brightness-110 transition
                                    "
                                    >
                                    Live Demo
                                    </Button>
                                </Link>

                                <Link href="https://github.com/Manan0p/splitr" target="_blank">
                                    <Button
                                    className="
                                        h-11 px-4
                                        rounded-md
                                        text-sm font-medium
                                        text-white/80
                                        border border-white/15
                                        bg-white/5
                                        hover:bg-white/10 transition
                                    "
                                    >
                                    GitHub Repo
                                    </Button>
                                </Link>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                        </div>
                        <div className="relative hidden lg:flex items-center justify-end">
                            <img
                                src="/mp/splitr-mockup.png"
                                alt="Splitr Dashboard"
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