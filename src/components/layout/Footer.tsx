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
                    <p className="text-sm text-[var(--secondary)]">
                        HQ: Houston, Texas<br />
                        Delivery: Mexico (Nearshore)
                    </p>
                </div>

                {/* Links Column 1 */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-2">Services</h4>
                    <Link href={`/${lang}/services/ams`} className="text-sm text-[var(--secondary)] hover:text-white">AMS Support</Link>
                    <Link href={`/${lang}/services/staffing`} className="text-sm text-[var(--secondary)] hover:text-white">Nearshore Staffing</Link>
                </div>

                {/* Links Column 2 */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-semibold mb-2">Company</h4>
                    <Link href={`/${lang}/about`} className="text-sm text-[var(--secondary)] hover:text-white">About Us</Link>
                    <Link href={`/${lang}/careers`} className="text-sm text-[var(--secondary)] hover:text-white">Careers</Link>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <a href="mailto:support@ne.com" className="text-sm text-[var(--secondary)]">support@ne.com</a>
                </div>
            </div>
            <div className="container mx-auto mt-12 pt-8 border-t border-[var(--border)] text-center text-xs text-[var(--secondary)]">
                &copy; {new Date().getFullYear()} NE National Expertise. All rights reserved.
            </div>
        </footer>
    );
}
