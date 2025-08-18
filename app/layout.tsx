import "./globals.css";
import Footer from "@/components/footer";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import { NavBar } from "@/components/nav";
import SeoJsonLd from "@/components/SeoJsonLd";

export const metadata = {
  title: "DevLeads - Création de sites web modernes et performants",
  description: "Entreprise spécialisée dans la création/développement web",
};

const org = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DevLeads",
  url: "https://www.devleads.org",
  image: "https://www.devleads.org/images/logo_devleads.png",
  telephone: "+33781548027",
  email: "contact@devleads.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "19 rue Normande",
    addressLocality: "Le Thuit-de-l'Oison",
    postalCode: "27370",
    addressCountry: "FR",
  },
  sameAs: [
    // "https://www.linkedin.com/company/devleads",
    // "https://www.facebook.com/..."
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.devleads.org",
  name: "DevLeads — Création & Développement Web",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.devleads.org/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <NavBar />
        <Analytics />
        <CookieConsent />
        <SeoJsonLd json={[org, webSite]} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
