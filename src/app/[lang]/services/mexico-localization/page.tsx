import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";
import { FileCheck } from "lucide-react";

export default async function LocalizationPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    const content = dict.services.localization;

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
                <div className="max-w-2xl mx-auto p-8 border border-[var(--border)] rounded-2xl bg-[var(--background)] text-center">
                    <FileCheck className="w-16 h-16 text-[var(--primary)] mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Compliance Check</h3>
                    <p className="text-[var(--secondary)] mb-8">Ensure your SAP system meets all SAT (Mexico) requirements including CFDI 4.0 and Carta Porte.</p>
                    <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--primary-dark)] transition-colors">
                        {content.cta}
                    </button>
                </div>
            </Section>
        </main>
    );
}
