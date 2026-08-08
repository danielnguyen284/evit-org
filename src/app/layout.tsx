import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { BookingProvider } from "@/components/BookingModal";
import {
  absoluteUrl,
  createPageMetadata,
  jsonLdScript,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "EVIT Organization | Get More Clients With A Proven Sales System",
    description:
      "Scale your IT service revenue globally. EVIT installs a proven sales & lead generation system to help founders build a predictable pipeline.",
    path: "/",
  }),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["EVIT", "EVIT Consult", "EVIT Consulting", "EVIT Org"],
      url: SITE_URL,
      logo: absoluteUrl("/assets/logo.png"),
      email: "info@evitconsulting.com",
      telephone: "+84705737170",
      address: {
        "@type": "PostalAddress",
        streetAddress: "145 Tran Sam, Son Tra",
        addressLocality: "Da Nang",
        addressCountry: "VN",
      },
      sameAs: [
        "https://www.facebook.com/goglobalasia1/",
        "https://www.youtube.com/@skonecznyadam",
        "https://creators.spotify.com/pod/profile/evit-organization/",
        "https://www.linkedin.com/company/evit-org/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)}
        />
        <BookingProvider>
          {children}
        </BookingProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GNW68LYXHR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GNW68LYXHR');
          `}
        </Script>
      </body>
    </html>
  );
}
