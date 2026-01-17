import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";
import { Check, ArrowRight } from "lucide-react";

export default async function AMSSupportPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    const content = dict.services.ams;

    return (
        <main className="min-h-screen pt-[var(--header-height)]">
            {/* Service Hero */}
            <section className="bg-[var(--surface)] py-20 border-b border-[var(--border)]">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Service</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
                    <p className="text-xl text-[var(--secondary)] leading-relaxed">{content.desc}</p>
                </div>
            </section>

            {/* Options Grid */}
            <Section>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Option 1 */}
                    <div className="p-8 border border-[var(--border)] rounded-2xl bg-[var(--background)] hover:border-[var(--primary)] transition-colors">
                        <h3 className="text-2xl font-bold mb-4">Ticket-Solved</h3>
                        <p className="text-[var(--secondary)] mb-6">{content.options.ticket}</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-3"><Check className="text-[var(--primary)] w-5 h-5" /> <span>Pay per resolution</span></li>
                            <li className="flex gap-3"><Check className="text-[var(--primary)] w-5 h-5" /> <span>No monthly minimum</span></li>
                        </ul>
                        <button className="w-full py-3 rounded-lg border border-[var(--border)] font-semibold hover:bg-[var(--surface)] transition-colors">
                            Select Option
                        </button>
                    </div>

                    {/* Option 2 */}
                    <div className="p-8 border border-[var(--primary)] rounded-2xl bg-[var(--surface)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                        <h3 className="text-2xl font-bold mb-4">Time-Bag</h3>
                        <p className="text-[var(--secondary)] mb-6">{content.options.bag}</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-3"><Check className="text-[var(--primary)] w-5 h-5" /> <span>Discounted hourly rate</span></li>
                            <li className="flex gap-3"><Check className="text-[var(--primary)] w-5 h-5" /> <span>Rollover hours</span></li>
                        </ul>
                        <button className="w-full py-3 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-colors">
                            Select Option
                        </button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
