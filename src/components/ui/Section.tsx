type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
};

export default function Section({ children, className = "", id }: SectionProps) {
    return (
        <section id={id} className={`py-40 ${className}`}>
            <div className="container mx-auto px-6 md:px-12">
                {children}
            </div>
        </section>
    );
}
