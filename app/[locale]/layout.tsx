import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cairo } from "next/font/google";
import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/index.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

// Cairo Font
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

// Company Information
const COMPANY_INFO = {
  name: "Roots Foods Co.",
  fullName: "Roots Foods Company",
  description: {
    en: "Global leader in premium frozen food production, specializing in IQF fruits, vegetables, and industrial food solutions with ISO certified facilities.",
    ar: "رائد عالمي في إنتاج الأغذية المجمدة الممتازة، متخصص في فواكه وخضروات IQF وحلول الأغذية الصناعية مع منشآت معتمدة من ISO.",
  },
  url: "https://rootsfoodsco.com",
  logo: "/logo.svg",
  email: "info@rootsfoodsco.com",
  phone: "+1 (555) 000-0000",
  address: "123 Wellness Way, Nature City, NC 28202",
  social: {
    twitter: "https://twitter.com/rootsfoodsco",
    linkedin: "https://linkedin.com/company/rootsfoodsco",
    facebook: "https://facebook.com/rootsfoodsco",
  },
};

// Generate Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const description =
    locale === "ar" ? COMPANY_INFO.description.ar : COMPANY_INFO.description.en;

  return {
    title: {
      default: `${COMPANY_INFO.name} - ${t("title")}`,
      template: `%s | ${COMPANY_INFO.name}`,
    },
    description: description,
    keywords: [
      "frozen food",
      "IQF technology",
      "frozen fruits",
      "frozen vegetables",
      "industrial food production",
      "food safety",
      "ISO certified",
      "HACCP",
      "export food",
      "B2B food solutions",
    ],
    authors: [{ name: COMPANY_INFO.fullName }],
    creator: COMPANY_INFO.fullName,
    publisher: COMPANY_INFO.fullName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(COMPANY_INFO.url),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      url: COMPANY_INFO.url,
      siteName: COMPANY_INFO.name,
      title: `${COMPANY_INFO.name} - ${t("title")}`,
      description: description,
      images: [
        {
          url: "/images/Icon_W.png",
          width: 1200,
          height: 630,
          alt: COMPANY_INFO.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${COMPANY_INFO.name} - ${t("title")}`,
      description: description,
      creator: "@rootsfoodsco",
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/images/Icon_W.png" },
        { url: "/images/Icon_W.png", sizes: "16x16", type: "image/png" },
        { url: "/images/Icon_W.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/images/Icon_W.png" }],
    },
    manifest: "/site.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (locale !== "ar" && locale !== "en") {
    notFound();
  }

  // Get messages for client-side translations
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={locale === "ar" ? cairo.className : ""}
      suppressHydrationWarning
    >
      <head>
        {/* Additional SEO tags */}
        <meta name="theme-color" content="#243f3d" />
        <meta name="application-name" content={COMPANY_INFO.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={COMPANY_INFO.name} />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: COMPANY_INFO.fullName,
              alternateName: COMPANY_INFO.name,
              url: COMPANY_INFO.url,
              logo: `${COMPANY_INFO.url}${COMPANY_INFO.logo}`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: COMPANY_INFO.phone,
                contactType: "customer service",
                email: COMPANY_INFO.email,
                areaServed: "Worldwide",
                availableLanguage: ["en", "ar"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Wellness Way",
                addressLocality: "Nature City",
                addressRegion: "NC",
                postalCode: "28202",
                addressCountry: "US",
              },
              sameAs: [
                COMPANY_INFO.social.twitter,
                COMPANY_INFO.social.linkedin,
                COMPANY_INFO.social.facebook,
              ],
            }),
          }}
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: COMPANY_INFO.fullName,
              image: `${COMPANY_INFO.url}/og-image.jpg`,
              "@id": COMPANY_INFO.url,
              url: COMPANY_INFO.url,
              telephone: COMPANY_INFO.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Wellness Way",
                addressLocality: "Nature City",
                addressRegion: "NC",
                postalCode: "28202",
                addressCountry: "US",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "17:00",
              },
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased bg-white dark:bg-slate-900 text-[#243f3d] dark:text-white"
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Export company info for use in other components
export { COMPANY_INFO };
