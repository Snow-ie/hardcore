import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: "Hardcore Biometric Systems",
  description: "Biometric and data solutions for modern governance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col ">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
