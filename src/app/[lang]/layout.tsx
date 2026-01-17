import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { i18n, type Locale, getDictionary } from "@/i18n/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
    title: "NE National Expertise",
    description: "Bilingual Nearshore SAP & Oracle Experts",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <html lang={lang}>
            <body className={inter.className}>
                <Header lang={lang as Locale} dict={dict} />
                {children}
                <Footer lang={lang as Locale} dict={dict} />
            </body>
        </html>
    );
}
