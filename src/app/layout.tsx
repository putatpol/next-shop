import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header/Header";
import Footer from "@/components/utils/Footer";

const ptSans = PT_Sans({
  weight: "400",
  variable: "--font-pt-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Homepge | StyleDee",
    template: "%s | StyleDee"
  },
  description: "Styledee makes your dressing look better.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} antialiased`}>
        <Providers>
          <Header />
        </Providers>
        <div className="mt-20 min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
