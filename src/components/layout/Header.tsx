"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n/config";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type HeaderProps = {
    lang: Locale;
    dict: any;
};

export default function Header({ lang, dict }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleLang = lang === "en" ? "es" : "en";
    const newPath = pathname.replace(`/${lang}`, `/${toggleLang}`);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-[var(--border)]">
            <div className="container mx-auto flex h-24 items-center justify-between px-6">

                {/* Brand Area */}
                <Link href={`/${lang}`} className="flex items-center gap-4 group">
                    {/* Logo Icon */}
                    <img
                        src="/images/ne-symbol.png"
                        alt="NE Logo"
                        className="h-12 w-auto object-contain"
                    />
                    {/* Text Logo */}
                    <div className="flex flex-col">
                        <span className="text-2xl md:text-3xl font-bold text-[var(--primary)] leading-none tracking-tight">
                            National Expertise
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav - Centered/Right */}
                <nav className="hidden md:flex gap-8 items-center">
                    <Link href={`/${lang}/services`} className="text-gray-700 font-medium hover:text-[var(--primary)] transition-colors">
                        {dict.nav.services}
                    </Link>
                    <Link href={`/${lang}/solutions`} className="text-gray-700 font-medium hover:text-[var(--primary)] transition-colors">
                        {dict.nav.solutions}
                    </Link>
                    <Link href={`/${lang}/case-studies`} className="text-gray-700 font-medium hover:text-[var(--primary)] transition-colors">
                        {dict.nav.caseStudies}
                    </Link>
                    <Link href={`/${lang}/resources`} className="text-gray-700 font-medium hover:text-[var(--primary)] transition-colors">
                        {dict.nav.resources}
                    </Link>
                    <Link href={`/${lang}/access`} className="text-gray-700 font-medium hover:text-[var(--primary)] transition-colors">
                        {dict.nav.access}
                    </Link>
                    <Link href={`/${lang}/about`} className="text-gray-700 font-medium hover:text-[var(--primary)] transition-colors">
                        {dict.nav.about}
                    </Link>
                    <Link href={newPath} className="text-sm font-bold uppercase text-gray-400 hover:text-[var(--primary)] transition-colors ml-4 border-l pl-4 border-gray-200">
                        {dict.common.toggleLanguage}
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2 text-[var(--primary)]" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white p-6 space-y-4 absolute w-full shadow-xl">
                    <Link href={`/${lang}/services`} className="block text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>{dict.nav.services}</Link>
                    <Link href={`/${lang}/solutions`} className="block text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>{dict.nav.solutions}</Link>
                    <Link href={`/${lang}/case-studies`} className="block text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>{dict.nav.caseStudies}</Link>
                    <Link href={`/${lang}/resources`} className="block text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>{dict.nav.resources}</Link>
                    <Link href={`/${lang}/about`} className="block text-lg font-medium text-gray-800" onClick={() => setIsOpen(false)}>{dict.nav.about}</Link>
                    <hr className="border-gray-100" />
                    <Link href={newPath} className="block py-2 font-bold uppercase text-[var(--primary)]">{dict.common.toggleLanguage}</Link>
                </div>
            )}
        </header>
    );
}
