"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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
                        <div className="relative mx-auto my-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto mb-8 gap-10 ">
                                {contact.map(({logo,title,head,info,link},index)=>{
                                    return(
                                        <Card key={index} className="group relative-h-[230-px] after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/25 after:to-transparent group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#161a2d]/90 via-[#111528]/90 to-[#0b0e1a]/90
                                                                    backdrop-blur-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_80px_rgba(139,92,246,0.35)]
                                                                    before:absolute before:inset-0 before:rounded-2xl
                                                                    before:bg-[radial-gradient(600px_200px_at_0%_0%,rgba(139,92,246,0.18),transparent_60%)]
                                                                    before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />
                                            <CardContent className="relative flex flex-col gap-6 px-5 py-2 items-center">
                                                <div className="group flex gap-5">
                                                    <div className="flex-shrink-0 relative">
                                                    <div className="absolute inset-0 rounded-full bg-violet-500/25 blur-3xl" />
                                                        <div className="group relative h-20 w-20 flex items-center justify-center rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]">
                                                            <img src={logo} alt={title}/>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col justify-between items-start">
                                                        <h3 className="text-2xl font-semibold">{head}</h3>
                                                        <p className="text-base text-left text-white/80 leading-relaxed line-clamp-2">
                                                            {info}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                                                        <div className="mt-2 inline-flex items-center rounded-lg
                                                                    bg-white/5 px-8 py-2 text-md border border-white/10
                                                                    text-white/80 backdrop-blur-md">
                                                            {title}
                                                        </div>
                                                    </a>
                                                </div>
                                                
                                            </CardContent>
                                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                                        </Card>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative w-full overflow-hidden pt-6 pb-10 md:pt-10 lg:pt-12 pb-0 bg-[linear-gradient(120deg,#060814_0%,#0a0d18_45%,#070912_100%)] border-b border-white/10">
                <div className="pointer-events-none absolute inset-0 
                                bg-gradient-to-r from-transparent via-violet-900/20 to-transparent z-[1]" />
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-6 mb-4 max-w-sm mx-auto">
                            <div className="h-px w-32 bg-white/50" />
                            <h2 className="text-4xl font-bold tracking-wide bg-[linear-gradient(90deg,#E5F0FF,#CBD5E1,#A5B4FC)] text-transparent bg-clip-text whitespace-nowrap">
                                Lets Connect
                            </h2>
                            <div className="h-px w-32 bg-white/50" />
                        </div>
                        <div className="relative mx-auto my-12 w-full max-w-lg
                                        rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent
                                        backdrop-blur-xl shadow-[0_0_40px_rgba(99,102,241,0.15)] p-8" id="send-message">
                            <form>
                                <FieldGroup>
                                <FieldSet>
                                    <FieldGroup>
                                    {/* Name */}
                                    <Field>
                                        <FieldLabel htmlFor="contact-name">Your Name</FieldLabel>
                                        <Input
                                        id="contact-name"
                                        placeholder="John Doe"
                                        required
                                        />
                                    </Field>

                                    {/* Email */}
                                    <Field>
                                        <FieldLabel htmlFor="contact-email">Email Address</FieldLabel>
                                        <Input
                                        id="contact-email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        />
                                    </Field>

                                    {/* Dropdown */}
                                    <Field>
                                        <FieldLabel htmlFor="contact-reason">
                                        What are you reaching out for?
                                        </FieldLabel>
                                        <Select defaultValue="collaboration">
                                        <SelectTrigger id="contact-reason">
                                            <SelectValue placeholder="Select a reason" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                            <SelectItem value="collaboration">
                                                Collaboration
                                            </SelectItem>
                                            <SelectItem value="job">
                                                Internship / Job Opportunity
                                            </SelectItem>
                                            <SelectItem value="freelance">
                                                Freelance / Consulting
                                            </SelectItem>
                                            <SelectItem value="project">
                                                Project Discussion
                                            </SelectItem>
                                            <SelectItem value="mentorship">
                                                Mentorship / Guidance
                                            </SelectItem>
                                            <SelectItem value="general">
                                                General Inquiry
                                            </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                        </Select>
                                    </Field>

                                    {/* Message */}
                                    <Field>
                                        <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                                        <Textarea
                                        id="contact-message"
                                        placeholder="Tell me a bit about what you have in mind..."
                                        className="resize-none min-h-[120px]"
                                        required
                                        />
                                    </Field>
                                    </FieldGroup>
                                </FieldSet>

                                {/* Actions */}
                                <Field orientation="horizontal">
                                    <Button type="submit">Send Message →</Button>
                                    <Button variant="outline" type="button">
                                    Cancel
                                    </Button>
                                </Field>
                                </FieldGroup> 
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative w-full overflow-hidden pt-10 pb-12 bg-[linear-gradient(120deg,#060814_0%,#0a0d18_45%,#070912_100%)] border-b border-white/10">
                
                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div className="absolute right-[-10%] bottom-[-35%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle_at_30%_30%,
                    rgba(236,72,153,0.85),rgba(168,85,247,0.6),rgba(99,102,241,0.35),transparent_65%)] blur-[140px]" />
                    <div className="absolute right-0 bottom-0 h-full w-[55%] bg-gradient-to-bl from-pink-500/35 via-violet-500/25 to-transparent blur-2xl" />
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
                    
                    {/* Quote */}
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                    I enjoy working on ideas that have real impact.
                    <br />
                    <span className="text-white/90">
                        If that sounds like you — let’s talk.
                    </span>
                    </p>

                    {/* Divider */}
                    <div className="mx-auto my-6 h-px w-32 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-6">
                    <a
                        href="mailto:workformanan@gmail.com"
                        className="text-white/60 hover:text-white transition"
                    >
                        {/* Mail Icon */}
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 4h16v16H4z" fill="none"/>
                        <path d="M20 4H4v16h16V4zm-2 2-6 4-6-4h12zm0 12H4V8l8 5 8-5v10z"/>
                        </svg>
                    </a>

                    <a
                        href="https://github.com/MananOp"
                        className="text-white/60 hover:text-white transition"
                    >
                        {/* GitHub Icon */}
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 1.8 2.6 2.3.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.6 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3 0 0 .9-.3 3 1.1.9-.2 1.8-.4 2.7-.4s1.8.1 2.7.4c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.7.1 3 .7.8 1.1 1.7 1.1 2.9 0 4.4-2.6 5.3-5.1 5.6.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>
                        </svg>
                    </a>

                    <a
                        href="https://linkedin.com/in/mananlall"
                        className="text-white/60 hover:text-white transition"
                    >
                        {/* LinkedIn Icon */}
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 5 2.1 5 3.5zM0 8h5v16H0V8zm7 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5V15.3c0-2.1 0-4.9-3-4.9s-3.5 2.3-3.5 4.7V24H7V8z"/>
                        </svg>
                    </a>
                    </div>
                </div>
            </section>
        </div>
    )
}