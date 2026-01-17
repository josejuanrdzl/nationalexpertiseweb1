import { getDictionary, Locale } from "@/i18n/config";
import ServiceCard from "@/components/ui/ServiceCard";
import Section from "@/components/ui/Section";
import Hero from "@/components/sections/Hero";

export default async function ServicesPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);

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
                        href={`/${params.lang}/services/ams-support`}
                    />
                    <ServiceCard
                        title={dict.services.staffing.title}
                        description={dict.services.staffing.desc}
                        href={`/${params.lang}/services/nearshore-staffing`}
                    />
                    <ServiceCard
                        title={dict.services.projects.title}
                        description={dict.services.projects.desc}
                        href={`/${params.lang}/services/sap-consulting-projects`}
                    />
                    <ServiceCard
                        title={dict.services.migration.title}
                        description={dict.services.migration.desc}
                        href={`/${params.lang}/services/s4hana-migration`}
                    />
                    <ServiceCard
                        title={dict.services.localization.title}
                        description={dict.services.localization.desc}
                        href={`/${params.lang}/services/mexico-localization`}
                    />
                </div>
            </Section>
        </main>
    );
}
