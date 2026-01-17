import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import { TrendingUp, Globe, ShoppingCart } from "lucide-react";

export default async function CaseStudiesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    // Mock data for display
    const cases = [
        { title: "Retail Giant S/4 Migration", industry: "Retail", desc: "Migrated 50TB+ database to S/4HANA with zero downtime during cutover.", icon: <ShoppingCart /> },
        { title: "Manufacturing AMS Takeover", industry: "Manufacturing", desc: "Reduced support backlog by 80% in the first 3 months of operation.", icon: <TrendingUp /> },
        { title: "Global Pharma Rollout", industry: "Pharma", desc: "Deployed SAP template to Mexico and Brazil subsidiaries on time and budget.", icon: <Globe /> },
    ];

    return (
        <main className="min-h-screen flex flex-col">
            <section className="bg-[var(--surface)] py-32 md:py-40 text-center border-b border-[var(--border)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-6 block">
                        {dict.nav.caseStudies.toUpperCase()}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">{dict.pages.caseStudies.title}</h1>
                    <p className="text-xl text-[var(--secondary)] leading-relaxed">{dict.pages.caseStudies.subtitle}</p>
                </div>
            </section>

            <Section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <ServiceCard
                            key={i}
                            title={c.title}
                            description={c.desc}
                            href="#"
                            icon={c.icon}
                        />
                    ))}
                </div>
            </Section>
        </main>
    );
}
