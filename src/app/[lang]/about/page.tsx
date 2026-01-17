import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.about;

    return (
        <main className="min-h-screen pt-[var(--header-height)]">
            <section className="py-24 container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">{content.title}</h1>
                <p className="text-2xl text-[var(--secondary)] leading-relaxed max-w-4xl mb-16">
                    {content.story}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {content.stats.map((stat: any, i: number) => (
                        <div key={i} className="p-8 bg-[var(--surface)] rounded-2xl border border-[var(--border)]">
                            <span className="text-[var(--secondary)] text-sm uppercase tracking-wider block mb-2">{stat.label}</span>
                            <span className="text-3xl font-bold">{stat.value}</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
