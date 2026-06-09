import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EVIT Organization | Get More Clients With A Proven Sales System",
  description: "EVIT helps IT service providers scale revenue and expand globally. We install a proven IT sales & lead generation system so founders and small sales teams build a predictable pipeline.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
