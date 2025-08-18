import "./globals.css";
import Footer from "@/components/footer";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import { NavBar } from "@/components/nav";

export const metadata = {
  title: "DevLeads - Création de sites web modernes et performants",
  description:
    "DevLeads est une micro-entreprise spécialisée dans la création de sites vitrines et e-commerce modernes, rapides et conformes RGPD. Développez votre visibilité en ligne dès aujourd'hui.",
};

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
