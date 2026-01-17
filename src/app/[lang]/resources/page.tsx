import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";
import { FileText, Download } from "lucide-react";

export default async function ResourcesPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);

    const resources = [
        { title: "NE Services Overview", type: "PDF" },
        { title: "AMS Support Options", type: "PDF" },
        { title: "S/4HANA Migration Guide", type: "PDF" },
        { title: "Nearshore Staffing Benefits", type: "PDF" },
        { title: "Mexico Localization Checklist", type: "PDF" },
    ];

    return (
        <main className="min-h-screen flex flex-col">
            <section className="bg-[var(--surface)] py-32 md:py-40 text-center border-b border-[var(--border)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-6 block">
                        {dict.nav.resources.toUpperCase()}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">{dict.pages.resources.title}</h1>
                    <p className="text-xl text-[var(--secondary)] leading-relaxed">{dict.pages.resources.subtitle}</p>
                </div>
            </section>

            <Section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((res, i) => (
                        <div key={i} className="bg-[var(--surface)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors group cursor-pointer flex flex-col items-start h-full">
                            <div className="mb-6 p-3 bg-[var(--background)] rounded-full">
                                <FileText className="w-8 h-8 text-[var(--primary)]" />
                            </div>
                            <h3 className="font-bold text-xl mb-4 text-white group-hover:text-[var(--primary)] transition-colors">{res.title}</h3>
                            <div className="mt-auto flex items-center gap-2 text-sm text-[var(--secondary)] font-medium">
                                <Download className="w-4 h-4" /> Download {res.type}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
