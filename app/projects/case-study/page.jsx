import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <section className="relative noise w-full  pt-12 md:pt-20 lg:pt-24 pb-0 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912] border-b border-white/10">
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div className="absolute right-[-10%] bottom-[-35%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_30%_30%,
                            rgba(236,72,153,0.85),rgba(168,85,247,0.6),rgba(99,102,241,0.35),transparent_65%)] blur-[140px]"/>
                    <div className="absolute right-0 bottom-0 h-full w-[55%] bg-gradient-to-bl from-pink-500/35 via-violet-500/25 to-transparent blur-2xl"/>
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-violet-400/80 to-transparent"/>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[url('/noise.png')] mix-blend-overlay" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-5 pt-4">
                            <div className="text-sm md:text-md lg:text-lg text-muted-foreground tracking-wide">
                                <Home className="inline mb-1 mr-1 h-4 w-4"/>
                                Home / Projects / Splitr
                            </div>
                            <h2 className="font-medium mb-3 text-violet-100 tracking-normal text-left text-4xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                                Splitr
                            </h2>
                            <div className="text-lg md:text-xl lg:text-2xl mb-5 font-medium
                                bg-gradient-to-r from-violet-300 to-pink-300
                                text-transparent bg-clip-text tracking-wide">

                                Smart Expense Splitting App
                            </div>
                            <div className="text-md md:text-lg lg:text-xl mb-8 text-white/80 leading-relaxed max-w-xl">
                                An AI-powered expense splitting app that splitting bills, tracking balances and settling up effortless for users.
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4">
                                <Link href="https://splitr-sigma-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                <Button
                                    className="text-white flex items-center gap-2 text-lg font-medium bg-gradient-to-r from-blue-600 to-pink-600 rounded-xl
                                                px-6 py-3 shadow-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all"
                                    size="lg"
                                >
                                    Live Demo
                                </Button>
                                </Link>
                                <a href="https://github.com/Manan0p/splitr" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                <Button
                                    className="text-white text-lg bg-transparent border border-white/25 rounded-lg px-6 py-3 hover:bg-white/5"
                                    size="lg"
                                >
                                    Github Repo
                                </Button>
                                </a>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                        </div>
                        <div className="relative hidden lg:flex items-center justify-center">
                            <div className="relative z-10">
                                <img
                                    src="/mp/splitr-mockup.png"
                                    alt="Splitr Dashboard"
                                    className="w-[680px] drop-shadow-[0_40px_120px_rgba(139,92,246,0.45)]"
                                />
                            </div>
                            <div className="absolute inset-0 bg-violet-500/20 blur-[120px] rounded-full" />
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    )
}