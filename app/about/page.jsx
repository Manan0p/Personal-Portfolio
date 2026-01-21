import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function page() {
    return (
        <div>
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
                    Driven by a curosity for AI and modern <br /> web technologies. I'm an AI/ML engineer and <br /> full-stack dveloper. I specialize in building <br /> intelligent systems that tackle genuine problems <br /> with real impact.
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
        </div>
    )
}