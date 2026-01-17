import { getDictionary, Locale } from "@/i18n/config";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServiceCard from "@/components/ui/ServiceCard";
import Section from "@/components/ui/Section";
import { CheckCircle2, Headset, Users, Rocket, Database } from "lucide-react";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="min-h-screen flex flex-col overflow-hidden">

            <Hero
                title={dict.home.hero.title}
                subtitle={dict.home.hero.subtitle}
                primaryCta={dict.home.cta_band.primary}
                secondaryCta={dict.home.cta_band.secondary}
                bookingUrl="https://calendly.com"
            />

            <TrustBar title={dict.home.trust} />

            {/* Services Grid */}
            <Section id="services">
                <div className="mb-20 text-center">
                    <span className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
                    <div className="h-1 w-24 bg-[var(--primary)] mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                </div>
            </Section>

            {/* Why NE */}
            <Section className="bg-[var(--surface)] my-20">
                <div className="text-center mb-16">
                    <span className="text-[var(--secondary)] font-bold uppercase tracking-widest text-sm mb-4 block">Why Choose Us</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">{dict.home.why.title}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-lg">
                    {dict.home.why.items.map((item: string, i: number) => (
                        <div key={i} className="flex gap-4 items-start">
                            <CheckCircle2 className="w-6 h-6 text-[var(--primary)] shrink-0 mt-1" />
                            <p className="text-[var(--secondary)] leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Final CTA */}
            <section className="py-40 bg-[var(--background)] relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight max-w-4xl mx-auto">{dict.home.cta_band.title}</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="px-10 py-4 bg-[var(--primary)] text-white rounded-full font-bold hover:bg-[var(--primary-dark)] transition-transform hover:-translate-y-1 shadow-lg shadow-[var(--primary)]/20 text-lg">
                            {dict.home.cta_band.primary}
                        </button>
                        <button className="px-10 py-4 border border-[var(--border)] text-[var(--foreground)] rounded-full font-bold hover:bg-[var(--surface)] transition-colors text-lg">
                            {dict.home.cta_band.secondary}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
