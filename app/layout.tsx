import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Analytics />
        <CookieConsent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
