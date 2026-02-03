import { Button } from "@/components/ui/button";
import { caseStudies } from "@/Data/case_studies";
import { Home } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

function renderParagraphOrPoints(value) {
    if (!value) return null

    const baseClass = "text-base md:text-lg text-white/70 leading-relaxed"

    // Supports: { intro?: string, points?: string[]|string, outro?: string }
    if (typeof value === "object" && !Array.isArray(value)) {
        const intro = typeof value.intro === "string" ? value.intro : ""
        const outro = typeof value.outro === "string" ? value.outro : ""
        const pointsRaw = value.points

        const points = Array.isArray(pointsRaw)
            ? pointsRaw.filter(Boolean)
            : typeof pointsRaw === "string"
                ? pointsRaw.split("\n").map((l) => l.trim()).filter(Boolean)
                : []

        return (
            <div className={baseClass}>
                {intro ? <p className="mb-3">{intro}</p> : null}
                {points.length ? (
                    <ul className="list-disc pl-5 space-y-2">
                        {points.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : null}
                {outro ? <p className="mt-3">{outro}</p> : null}
            </div>
        )
    }

    if (Array.isArray(value)) {
        return (
            <ul className={`${baseClass} list-disc pl-5 space-y-2`}>
                {value.filter(Boolean).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )
    }

    if (typeof value === "string") {
        // If you use bullets like:
        // Intro line\n- point 1\n- point 2\n\nOutro line
        // ...we'll segregate intro/bullets/outro.
        const rawLines = value.split("\n").map((l) => l.replace(/\s+$/g, ""))

        const bulletRe = /^(-|\*|•)\s+/u
        let inBullets = false
        let bulletsClosed = false

        const introLines = []
        const bullets = []
        const outroLines = []

        for (const rawLine of rawLines) {
            const trimmed = rawLine.trim()

            if (!trimmed) {
                if (inBullets) bulletsClosed = true
                continue
            }

            const isBullet = bulletRe.test(trimmed)

            if (isBullet && !bulletsClosed) {
                inBullets = true
                bullets.push(trimmed.replace(bulletRe, ""))
                continue
            }

            if (!inBullets) {
                introLines.push(trimmed)
                continue
            }

            if (bulletsClosed) {
                outroLines.push(trimmed)
                continue
            }

            // Continuation line: attach to previous bullet (useful for wrapped lines)
            if (bullets.length) {
                bullets[bullets.length - 1] = `${bullets[bullets.length - 1]} ${trimmed}`
            } else {
                introLines.push(trimmed)
            }
        }

        if (bullets.length) {
            return (
                <div className={baseClass}>
                    {introLines.length ? <p className="mb-3">{introLines.join(" ")}</p> : null}
                    <ul className="list-disc pl-5 space-y-2">
                        {bullets.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    {outroLines.length ? <p className="mt-3">{outroLines.join(" ")}</p> : null}
                </div>
            )
        }

        const lines = value
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean)

        if (lines.length > 1) {
            return (
                <ul className={`${baseClass} list-disc pl-5 space-y-2`}>
                    {lines.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )
        }

        return <p className={baseClass}>{value}</p>
    }

    return null
}

export function generateStaticParams() {
    return caseStudies.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params
    const rawSlug = resolvedParams?.slug
    const slug = String(Array.isArray(rawSlug) ? rawSlug[0] : rawSlug || "").toLowerCase()
    const project = caseStudies.find((p) => String(p.slug).toLowerCase() === slug)

    if (!project) return { title: "Project Not Found" }

    return {
        title: `${project.title} | Projects`,
        description: project.description,
    }
}

export default async function Page({params}) {
    const resolvedParams = await params
    const rawSlug = resolvedParams?.slug
    const slug = String(Array.isArray(rawSlug) ? rawSlug[0] : rawSlug || "").toLowerCase()

    if (!slug) notFound()

    const project = caseStudies.find((p) => String(p.slug).toLowerCase() === slug)

    if (!project) notFound()

    return (
        <div className="relative">
            <section className="relative w-full overflow-hidden pt-20 md:pt-24 lg:pt-22 pb-0 bg-[linear-gradient(120deg,#060814_0%,#0a0d18_45%,#070912_100%)] border-b border-white/10">
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
                            <div className="text-sm md:text-md space-x-1 lg:text-lg text-muted-foreground tracking-wide">
                                <Link href="/">
                                    <Home className="inline mb-1 mr-1 h-4 w-4"/>
                                    Home
                                </Link>
                                <Link href="/projects">
                                    / Projects /
                                </Link> 
                                    {project.title}
                            </div>
                            <h2 className="text-5xl md:text-6xl font-semibold text-white">
                                {project.title}
                            </h2>

                            <p className="text-xl font-semibold md:text-2xl text-violet-300">
                                {project.info}
                            </p>

                            <p className="text-base md:text-lg text-white/70 leading-relaxed">
                                {project.description}
                            </p>
                                        
                            <div className="flex items-center gap-3 pt-3">
                                {project.live_link ? (
                                    <a href={project.live_link} target="_blank" rel="noreferrer">
                                        <Button
                                            className="text-white text-lg bg-blue-600 border border-white/25 rounded-lg px-6 py-3 shadow-sm hover:bg-blue-700"
                                            size="lg"
                                        >
                                            Live Demo
                                        </Button>
                                    </a>
                                ) : null}

                                {project.github_link ? (
                                    <a href={project.github_link} target="_blank" rel="noreferrer">
                                        <Button
                                            className="text-white text-lg bg-transparent border border-white/25 rounded-lg px-6 py-3 hover:bg-white/5"
                                            size="lg"
                                        >
                                            GitHub Repo
                                        </Button>
                                    </a>
                                ) : null}
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                        </div>
                        {project.image ? (
                            <div className="relative hidden lg:flex items-center justify-end">
                                <img
                                    src={project.image}
                                    alt={project.alt || project.title}
                                    className="
                                        w-[520px] md:w-[640px] lg:w-[720px]
                                        drop-shadow-[0_40px_80px_rgba(168,85,247,0.35)]
                                        select-none pointer-events-none"/>
                            </div>
                        ) : null}
                    </div>  
                </div>
            </section>

            <section className="relative w-full overflow-hidden pt-6 pb-10 md:pt-10 lg:pt-12 pb-0 bg-[linear-gradient(120deg,#060814_0%,#0a0d18_45%,#070912_100%)] border-b border-white/10">
                <div className="pointer-events-none absolute inset-0 
                                bg-gradient-to-r from-transparent via-violet-900/20 to-transparent z-[1]" />
                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-8 max-w-xl min-w-0">
                            <h3 className="text-lg md:text-2xl font-semibold text-violet-200 tracking-wide
                                           border-b border-white/10 pb-2 w-fit">

                                Overview
                            </h3>
                            {renderParagraphOrPoints(project.overview)}
                            <h3 className="text-lg md:text-2xl font-semibold text-violet-200 tracking-wide
                                           border-b border-white/10 pb-2 w-fit">

                                The Problem
                            </h3>
                            {renderParagraphOrPoints(project.problem)}
                            <h3 className="text-lg md:text-2xl font-semibold text-violet-200 tracking-wide
                                           border-b border-white/10 pb-2 w-fit">

                                The Solution
                            </h3>
                            {renderParagraphOrPoints(project.solution)}
                            <h3 className="text-lg md:text-2xl font-semibold text-violet-200 tracking-wide
                                           border-b border-white/10 pb-2 w-fit">
                                Product Experience
                            </h3>
                            {renderParagraphOrPoints(project.experience)}

                        </div>
                        <div className="relative space-y-10 max-w-lg min-w-0">
                            <div className="hidden lg:block absolute left-[-32px] top-0 h-full w-px
                                            bg-gradient-to-b from-transparent via-violet-400/25 to-transparent" />
                            <div className=" hidden lg:block absolute left-[-33px] top-0 h-full w-[3px]
                                             bg-gradient-to-b from-transparent via-violet-500/10 to-transparent 
                                             blur-md opacity-70" />
                            <h3 className="text-lg md:text-2xl font-semibold text-violet-200 tracking-wide
                                           border-b border-white/10 pb-2 w-fit">
                                Key Features
                            </h3>
                            <div className="text-base md:text-lg text-white/70 leading-relaxed">
                                {project.key_features.map((feature, index) => (
                                    <div key={index} className="mb-4">
                                        <h3 className="text-lg font-semibold text-white/90 flex items-center gap-2">
                                            {feature.icon ? (
                                                <span className="inline-flex items-center [&>svg]:h-6 [&>svg]:w-6 [&>svg]:shrink-0">
                                                    {feature.icon}
                                                </span>
                                            ) : null}
                                            <span>{feature.heading}</span>
                                        </h3>
                                        <p className="text-white/70">{feature.oneliner}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4 pt-6">
                                <h3 className="text-lg md:text-2xl font-semibold text-violet-200 tracking-wide
                                               border-b border-white/10">
                                    Links
                                </h3>
                                <div className="pt-3 items-center space-y-3 gap-4">
                                    {project.live_link ? (
                                        <a href={project.live_link} target="_blank" rel="noreferrer">
                                            <Button
                                                className="mb-5 w-full justify-start gap-2 text-white text-sm md:text-lg bg-blue-600 border border-white/25 rounded-lg shadow-sm hover:bg-blue-700 overflow-hidden"
                                                size="lg"
                                            >
                                                <span className="whitespace-nowrap">Live Demo</span>
                                                <span className="ml-auto text-xs md:text-sm text-white truncate">
                                                    {project.live_link}
                                                </span>
                                                <span className="text-lg">›</span>
                                            </Button>
                                        </a>
                                    ) : null}
                                    {project.github_link ? (
                                        <a href={project.github_link} target="_blank" rel="noreferrer">
                                            <Button
                                                className="w-full justify-start gap-2 text-white text-sm md:text-lg bg-transparent border border-white/25 rounded-lg hover:bg-white/5 overflow-hidden"
                                                size="lg"
                                            >
                                                <span className="whitespace-nowrap">GitHub Repo</span>
                                            </Button>
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    )
}