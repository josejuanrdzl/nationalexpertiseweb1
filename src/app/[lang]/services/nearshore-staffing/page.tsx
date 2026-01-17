import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";
import { User, Check } from "lucide-react";

export default async function StaffingPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.services.staffing;

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
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">Roles Available</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {content.roles?.map((role: string) => (
                            <div key={role} className="flex items-center gap-3 p-4 bg-[var(--background)] border border-[var(--border)] rounded-lg">
                                <User className="text-[var(--primary)] w-5 h-5" />
                                <span className="font-semibold">{role}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="bg-[var(--primary)] text-white px-8 py-3 rounded-full font-bold hover:bg-[var(--primary-dark)] transition-colors">
                            {content.cta}
                        </button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
