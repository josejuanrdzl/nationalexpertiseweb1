import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";
import { Hammer } from "lucide-react";

export default async function SolutionsPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);

    return (
        <main className="min-h-screen flex flex-col">
            <section className="bg-[var(--surface)] py-32 md:py-40 text-center border-b border-[var(--border)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-6 block">
                        {dict.nav.solutions.toUpperCase()}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">{dict.pages.solutions.title}</h1>
                    <p className="text-xl text-[var(--secondary)] leading-relaxed">{dict.pages.solutions.subtitle}</p>
                </div>
            </section>

            <Section>
                <div className="flex flex-col items-center justify-center py-20 text-center opacity-50">
                    <Hammer className="w-16 h-16 mb-4 text-[var(--secondary)]" />
                    <p className="text-xl font-medium">Coming Soon</p>
                </div>
            </Section>
        </main>
    );
}
