import { getDictionary, Locale } from "@/i18n/config";
import ServiceCard from "@/components/ui/ServiceCard";
import Section from "@/components/ui/Section";
import Hero from "@/components/sections/Hero";
import { CheckCircle2, Headset, Users, Rocket, Database, Globe } from "lucide-react";

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen flex flex-col">
            {/* Reusing Hero component for consistency, or a simplified version */}
            <section className="bg-[var(--surface)] py-32 md:py-40 text-center border-b border-[var(--border)]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-6 block">
                        {dict.nav.services.toUpperCase()}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">{dict.pages.services.title}</h1>
                    <p className="text-xl text-[var(--secondary)] leading-relaxed">{dict.pages.services.subtitle}</p>
                </div>
            </section>

            <Section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    <ServiceCard
                        title={dict.services.ams.title}
                        description={dict.services.ams.desc}
                        href={`/${lang}/services/ams-support`}
                        icon={<Headset className="w-6 h-6" />}
                    />
                    <ServiceCard
                        title={dict.services.staffing.title}
                        description={dict.services.staffing.desc}
                        href={`/${lang}/services/nearshore-staffing`}
                        icon={<Users className="w-6 h-6" />}
                    />
                    <ServiceCard
                        title={dict.services.projects.title}
                        description={dict.services.projects.desc}
                        href={`/${lang}/services/sap-consulting-projects`}
                        icon={<Rocket className="w-6 h-6" />}
                    />
                    <ServiceCard
                        title={dict.services.migration.title}
                        description={dict.services.migration.desc}
                        href={`/${lang}/services/s4hana-migration`}
                        icon={<Database className="w-6 h-6" />}
                    />
                    <ServiceCard
                        title={dict.services.localization.title}
                        description={dict.services.localization.desc}
                        href={`/${lang}/services/mexico-localization`}
                        icon={<Globe className="w-6 h-6" />}
                    />
                </div>
            </Section>
        </main>
    );
}
