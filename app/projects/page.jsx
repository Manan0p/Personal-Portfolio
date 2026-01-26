import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { caseStudies } from '@/Data/case_studies'

const page = () => {
  return (
    <div className="relative">
      <section className="relative noise w-full overflow-hidden pt-14 md:pt-20 lg:pt-24 pb-0 bg-gradient-to-br from-[#0c0f1c] via-[#0a0d18] to-[#070912] border-b border-white/10">
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
              <div className="text-sm md:text-md space-x-1 lg:text-lg text-muted-foreground tracking-wide">
                <Link href="/">
                  <Home className="inline mb-1 mr-1 h-4 w-4"/>
                  Home /
                </Link> 
                  Projects
              </div>
              <h2 className="font-medium text-violet-100 tracking-normal text-left text-4xl md:text-5xl lg:text-6xl leading-[1.1] md:leading-[1.1] lg:leading-[1.1]">
                Projects
              </h2>
              <div className="text-md text-violet-100 md:text-lg lg:text-xl mb-10 text-muted-foreground tracking-wide">
                Real-world products I've designed and built
              </div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
            </div>
          </div>  
        </div>
      </section>
      <section className="w-full overflow-hidden py-16 md:py-24 lg:py-28 border-b border-white/10 bg-[radial-gradient(1200px_500px_at_50%_-100px,rgba(124,58,237,0.18),transparent_60%),radial-gradient(800px_400px_at_90%_20%,rgba(59,130,246,0.12),transparent_60%),linear-gradient(135deg,#0c0f1c,#070912)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 gap-6 max-w-auto mx-auto ">{caseStudies.map((project,index)=>{
              return(
                <Card key={index} className="after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#161a2d]/90 via-[#111528]/90 to-[#0b0e1a]/90
                                             backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_80px_rgba(139,92,246,0.35)]
                                             before:absolute before:inset-0 before:rounded-2xl
                                             before:bg-[radial-gradient(600px_200px_at_0%_0%,rgba(139,92,246,0.18),transparent_60%)]
                                             before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />
                  <CardContent className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 px-6 py-6">
                      <div className="flex flex-col gap-3 max-w-full md:max-w-[70%]">
                        <h3 className="text-3xl mb-1 font-semibold">{project.title}</h3>
                        <p className="text-base text-white/90 leading-relaxed mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.stack?.map((tech, i) => (
                            <span key={i} className="rounded-md bg-white/10 px-3 py-1 text-md text-white border border-white/10">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link href={`/projects/${project.slug}`} className="shrink-0 w-full md:w-auto">
                        <Button className="text-white w-full md:w-auto mt-4 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.45)] transition-all justify-center" size="lg">
                          View Case Study
                          <span className="text-lg">›</span>
                        </Button>
                      </Link>
                  </CardContent>
                </Card>
              )
            })}</div>
          </div>          
        </section>
    </div>
  )
}

export default page