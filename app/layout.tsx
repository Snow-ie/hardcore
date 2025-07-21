import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Hardcore Biometric Systems",
  description: "Biometric and data solutions for modern governance.",
  icons: {
    icon: [
      { url: "/assets/hcb-Logo.svg", type: "image/svg+xml", sizes: "any" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
