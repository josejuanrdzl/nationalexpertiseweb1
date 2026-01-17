"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <Link
                href={href}
                className="group flex flex-col h-full bg-white p-8 rounded-xl border border-gray-100 transition-all shadow-sm"
            >
                <div className="mb-6 rounded-full w-14 h-14 bg-gray-50 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                    {icon ? icon : <ArrowRight className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold mb-4 text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--primary)] group-hover:gap-4 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                </div>
            </Link>
        </motion.div>
    );
}
