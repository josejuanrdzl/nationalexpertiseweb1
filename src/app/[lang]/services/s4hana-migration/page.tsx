import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export default async function MigrationPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    const content = dict.services.migration;

    return (
        <main className="min-h-screen pt-[var(--header-height)]">
            <section className="bg-[var(--surface)] py-20 border-b border-[var(--border)]">
                <div className="container mx-auto text-center max-w-4xl">
                    <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Service</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
                    <p className="text-xl text-[var(--secondary)]">{content.desc}</p>
                </div>
            </section>

            <Section>
                <h2 className="text-2xl font-bold mb-12 text-center">Methodology</h2>
                <div className="grid md:grid-cols-3 gap-6 relative">
                    {/* Simple timeline visualization */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-[var(--border)] -z-10 hidden md:block" />

                    {content.approach?.map((step: string, i: number) => (
                        <div key={step} className="bg-[var(--background)] p-6 border border-[var(--border)] rounded-xl flex flex-col items-center text-center">
                            <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mb-4">
                                {i + 1}
                            </div>
                            <span className="font-semibold">{step}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--primary-dark)] transition-colors">
                        {content.cta}
                    </button>
                </div>
            </Section>
        </main>
    );
}
