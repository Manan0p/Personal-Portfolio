import { Home } from "lucide-react";

export default function page() {
    return (
        <div>
            <section className="relative noise w-full  pt-12 md:pt-20 lg:pt-24 pb-0 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912] border-b border-white/10">
                <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute right-[-10%] bottom-[-35%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_30%_30%,
                                rgba(236,72,153,0.85),rgba(168,85,247,0.6),rgba(99,102,241,0.35),transparent_65%)] blur-[140px]"/>
                <div className="absolute right-0 bottom-0 h-full w-[55%] bg-gradient-to-bl from-pink-500/35 via-violet-500/25 to-transparent blur-2xl"/>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-violet-400/80 to-transparent"/>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-5 pt-4">
                    <div className="text-sm md:text-md lg:text-lg text-muted-foreground tracking-wide">
                        <Home className="inline mb-1 mr-1 h-4 w-4"/>
                        Home / Blog
                    </div>
                    <h2 className="font-medium text-violet-100 tracking-normal text-left text-4xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                        Blog
                    </h2>
                    <div className="text-md text-violet-100 md:text-lg lg:text-xl mb-10 text-muted-foreground tracking-wide">
                        Writing about AI, system design and building real-world projects.
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                    </div>
                </div>  
                </div>
            </section>
        </div>
    )
}