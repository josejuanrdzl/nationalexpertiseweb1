import Link from "next/link";
import { Locale } from "@/i18n/config";

type FooterProps = {
    lang: Locale;
    dict: any;
};

export default function Footer({ lang, dict }: FooterProps) {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-4">NE National Expertise</h3>
                    <p className="text-sm text-[var(--secondary)] leading-relaxed">
                        HQ / USA: Houston, Texas.<br />
                        NearShore / Mexico: Monterrey, NL.
                    </p>
                </div>

                {/* Services Column */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-2">{dict.nav.services}</h4>
                    <Link href={`/${lang}/services/ams-support`} className="text-sm text-[var(--secondary)] hover:font-bold transition-all">AMS Support</Link>
                    <Link href={`/${lang}/services/nearshore-staffing`} className="text-sm text-[var(--secondary)] hover:font-bold transition-all">Nearshore Staffing</Link>
                    <Link href={`/${lang}/services/sap-consulting-projects`} className="text-sm text-[var(--secondary)] hover:font-bold transition-all">SAP Projects</Link>
                    <Link href={`/${lang}/services/s4hana-migration`} className="text-sm text-[var(--secondary)] hover:font-bold transition-all">S/4HANA Migration</Link>
                    <Link href={`/${lang}/services/mexico-localization`} className="text-sm text-[var(--secondary)] hover:font-bold transition-all">Localization</Link>
                </div>

                {/* Company Column */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-2">{dict.nav.about}</h4>
                    <Link href={`/${lang}/about`} className="text-sm text-[var(--secondary)] hover:font-bold transition-all">{dict.nav.about}</Link>
                    <Link href={`/${lang}/careers`} className="text-sm text-[var(--secondary)] hover:font-bold transition-all">{dict.nav.careers}</Link>
                    <Link href={`/${lang}/resources`} className="text-sm text-[var(--secondary)] hover:font-bold transition-all">{dict.nav.resources}</Link>
                </div>

                {/* Contact Column */}
                <div>
                    <h4 className="font-semibold mb-2">{dict.nav.contact}</h4>
                    <a href="mailto:info@national.expert" className="text-sm text-[var(--secondary)] hover:font-bold transition-all">info@national.expert</a>
                </div>
            </div>
            <div className="container mx-auto mt-12 pt-8 border-t border-[var(--border)] text-center text-xs text-[var(--secondary)]">
                &copy; {new Date().getFullYear()} NE National Expertise. All rights reserved.
            </div>
        </footer>
    );
}
