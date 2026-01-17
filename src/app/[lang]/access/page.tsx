import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import { BrainCircuit, Ticket } from "lucide-react";

export default async function AccessPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);

    return (
        <main className="min-h-screen flex flex-col">
            <section className="bg-[var(--surface)] py-32 md:py-40 text-center border-b border-[var(--border)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-6 block">
                        {dict.nav.access.toUpperCase()}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">{dict.pages.access.title}</h1>
                    <p className="text-xl text-[var(--secondary)] leading-relaxed">{dict.pages.access.subtitle}</p>
                </div>
            </section>

            <Section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <ServiceCard
                        title="NE Engage"
                        description="Internal platform for NE consultants and employees. Manage time, expenses, and internal knowledge."
                        href="/ne-engage"
                        icon={<BrainCircuit className="w-6 h-6" />}
                    />
                    <ServiceCard
                        title="NE Ticket Portal"
                        description="Customer-facing portal to create and track support tickets for SAP & Oracle AMS."
                        href="/tickets"
                        icon={<Ticket className="w-6 h-6" />}
                    />
                </div>
            </Section>
        </main>
    );
}
