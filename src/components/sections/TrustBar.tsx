export default function TrustBar({ title }: { title: string }) {
    // Placeholder logos - in a real app these would be SVGs
    const logos = ["Oracle", "SAP", "Microsoft", "Salesforce", "Deloitte", "PwC"];

    return (
        <div className="border-y border-[var(--border)] bg-[var(--surface)] py-8">
            <div className="container mx-auto text-center">
                <p className="text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-6">
                    {title}
                </p>
                <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo) => (
                        <span key={logo} className="text-xl font-bold font-serif text-[var(--foreground)]">{logo}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
