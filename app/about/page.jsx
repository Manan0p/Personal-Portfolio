import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
    return (
        <div>
            <section className="relative noise w-full  pt-12 md:pt-20 lg:pt-24 pb-0 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912] border-b border-white/10">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute right-[-10%] top-[10%] h-[80%] w-[60%] bg-gradient-to-bl from-violet-500/30 via-indigo-500/20 to-transparent blur-3xl"/>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_60%)]"/>
            </div>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-5 pt-4">
                    <div className="text-sm md:text-md lg:text-lg text-muted-foreground tracking-wide">
                        <Link href="/">
                            <Home className="inline mb-1 mr-1 h-4 w-4"/>
                            Home /
                        </Link> 
                        About
                    </div>
                    <h2 className="font-medium text-violet-100 tracking-normal text-left text-4xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                    About
                    </h2>
                    <div className="text-lg md:text-xl lg:text-2xl font-medium tracking-wider">
                    Hey! I'm Manan👋🏻
                    </div>
                    <div className="text-md md:text-lg lg:text-xl text-muted-foreground tracking-wider">
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