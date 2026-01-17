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
    params: { lang: Locale };
}>) {
    const dict = await getDictionary(params.lang);

    return (
        <html lang={params.lang}>
            <body className={inter.className}>
                <Header lang={params.lang} dict={dict} />
                {children}
                <Footer lang={params.lang} dict={dict} />
            </body>
        </html>
    );
}
