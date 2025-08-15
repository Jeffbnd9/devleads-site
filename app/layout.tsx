import "./globals.css";
import Footer from "@/components/footer";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import { NavBar } from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Analytics />
        <CookieConsent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
