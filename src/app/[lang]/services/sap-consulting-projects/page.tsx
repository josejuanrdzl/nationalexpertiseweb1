import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";

export default async function ProjectsPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    const content = dict.services.projects;

    return (
        <main className="min-h-screen pt-[var(--header-height)]">
            <section className="bg-[var(--surface)] py-20 border-b border-[var(--border)]">
                <div className="container mx-auto text-center max-w-4xl">
                    <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Service</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
                    <p className="text-xl text-[var(--secondary)]">{content.desc}</p>
                    <button className="mt-8 bg-[var(--primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--primary-dark)] transition-colors">
                        {content.cta}
                    </button>
                </div>
            </section>
        </main>
    );
}
