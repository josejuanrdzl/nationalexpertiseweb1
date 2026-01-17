import { getDictionary, Locale } from "@/i18n/config";

export default async function ContactPage({ params }: { params: { lang: Locale } }) {
    const dict = await getDictionary(params.lang);
    const content = dict.contact;

    return (
        <main className="min-h-screen pt-[var(--header-height)] flex items-center">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 py-12">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{content.title}</h1>
                    <p className="text-xl text-[var(--secondary)]">{content.desc}</p>
                    <div className="mt-12 space-y-4">
                        <p>Houston, Texas</p>
                        <p>support@ne.com</p>
                    </div>
                </div>

                <div className="bg-[var(--surface)] p-8 rounded-2xl border border-[var(--border)]">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2">{content.form.name}</label>
                            <input type="text" className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-3 text-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">{content.form.email}</label>
                            <input type="email" className="w-full bg-[var(--background)] border border-[var(--border)] rounded-lg p-3 text-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2">{content.form.message}</label>
                            <textarea className="w-full h-32 bg-[var(--background)] border border-[var(--border)] rounded-lg p-3 text-white focus:ring-2 focus:ring-[var(--primary)] outline-none transition-all" />
                        </div>
                        <button className="w-full bg-[var(--primary)] text-white font-bold py-3 rounded-lg hover:bg-[var(--primary-dark)] transition-colors">
                            {content.form.submit}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
