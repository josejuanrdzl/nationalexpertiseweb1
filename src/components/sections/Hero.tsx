"use client";

import { motion } from "framer-motion";

interface HeroProps {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    bookingUrl: string;
}

export default function Hero({ title, subtitle, primaryCta, secondaryCta, bookingUrl }: HeroProps) {
    return (
        <section className="relative overflow-hidden bg-white pt-3 pb-24 lg:pt-6 lg:pb-32">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content (Left) */}
                    <div className="lg:w-2/5 flex flex-col items-start text-left z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--secondary)] leading-[1.1] mb-6"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    </div>

                    {/* Real Image (Right) */}
                    <div className="lg:w-3/5 w-full relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="aspect-square relative rounded-xl overflow-hidden shadow-2xl"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/tech-hero-v4.png"
                                alt="NE Consulting Team"
                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Subtle overlay gradients */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--secondary)]/10 to-transparent mix-blend-multiply" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
