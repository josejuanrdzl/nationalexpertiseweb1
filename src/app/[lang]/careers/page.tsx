import { getDictionary, Locale } from "@/i18n/config";
import Section from "@/components/ui/Section";
import { MapPin, Briefcase } from "lucide-react";

export default async function CareersPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);

    // Mock Jobs
    const jobs = [
        { title: "Senior SAP FICO Consultant", location: "Remote (Mexico)", type: "Full-time" },
        { title: "SAP ABAP Developer", location: "Hybrid (Monterrey)", type: "Contract" },
        { title: "Oracle Cloud Financials Lead", location: "Remote (LATAM)", type: "Full-time" },
    ];

    return (
        <main className="min-h-screen pt-[var(--header-height)]">
            <section className="bg-[var(--surface)] py-20 border-b border-[var(--border)]">
                <div className="container mx-auto text-center max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{dict.nav.careers}</h1>
                    <p className="text-[var(--secondary)] text-xl">Join the elite nearshore team serving North America's top enterprises.</p>
                </div>
            </section>

            <Section>
                <div className="flex flex-col gap-4 max-w-4xl mx-auto">
                    {jobs.map((job, i) => (
                        <div key={i} className="p-6 border border-[var(--border)] rounded-xl flex flex-col md:flex-row justify-between items-center gap-4 bg-[var(--background)] hover:border-[var(--primary)] transition-colors cursor-pointer group">
                            <div>
                                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                                <div className="flex gap-4 text-sm text-[var(--secondary)]">
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.type}</span>
                                </div>
                            </div>
                            <button className="px-6 py-2 rounded-full border border-[var(--border)] font-semibold text-sm group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-[var(--primary)] transition-colors">
                                View Position
                            </button>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
