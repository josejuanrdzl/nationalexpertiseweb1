"use client";

import { motion } from "framer-motion";

const COMPANIES = [
    "TexTube",
    "Atchison Tubular",
    "Freudenberg",
    "Nemak",
    "Femsa",
    "Copamex",
    "Carrier Enterprise",
    "Teckniplex",
];

export default function TrustBar({ title }: { title: string }) {
    return (
        <div className="border-y border-[var(--border)] bg-[var(--surface)] py-10 overflow-hidden relative">
            <div className="container mx-auto text-center mb-8">
                <p className="text-sm font-bold text-[var(--secondary)] uppercase tracking-[0.2em]">
                    {title}
                </p>
            </div>

            <div className="relative flex overflow-hidden mask-gradient-x">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--surface)] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--surface)] to-transparent z-10" />

                <motion.div
                    className="flex gap-16 md:gap-24 items-center whitespace-nowrap px-12"
                    animate={{
                        x: [0, -1000], // Approximate distance, will adjust based on content
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Slow, elegant speed
                            ease: "linear",
                        },
                    }}
                >
                    {/* Double the list to create seamless loop */}
                    {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, i) => (
                        <span
                            key={i}
                            className="text-2xl md:text-3xl font-serif text-[var(--secondary)] opacity-50 hover:opacity-100 transition-opacity cursor-default"
                        >
                            {company}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
