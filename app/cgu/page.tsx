export default function CGU() {
  return (
    <>
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl text-center font-bold">
          Conditions générales d&apos;utilisation (CGU)
        </h1>

        {/* Objet */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-4">Objet</h2>
          <p>
            Les présentes conditions ont pour objet de définir les modalités d&apos;accès et d&apos;utilisation du
            site exploité par <strong>DevLeads</strong>. Le site a pour but de présenter l&apos;entreprise, ses
            services et de permettre la prise de contact.
          </p>
        </section>

        {/* Acceptation */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Acceptation des CGU</h2>
          <p>
            En accédant au site, vous reconnaissez avoir pris connaissance des présentes CGU et les accepter
            sans réserve. Si vous n&apos;êtes pas d&apos;accord, veuillez ne pas utiliser le site.
          </p>
        </section>

        {/* Accès au site */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Accès au site</h2>
          <p>
            Le site est accessible gratuitement, 7j/7 et 24h/24, sous réserve d&apos;interruptions pour
            maintenance, mise à jour ou cas de force majeure. DevLeads s&apos;efforce d&apos;assurer
            l&apos;accessibilité, sans y être tenue à une obligation de résultat.
          </p>
        </section>

        {/* Comportement utilisateur */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Comportement utilisateur</h2>
          <p>
            L&apos;utilisateur s&apos;engage à ne pas perturber le bon fonctionnement du site, à ne pas tenter
            d&apos;accéder à des zones non autorisées, ni à introduire de contenu malveillant (virus, scripts,
            spam, etc.). Tout usage contraire aux lois et règlements en vigueur est interdit.
          </p>
        </section>

        {/* Propriété intellectuelle */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Propriété intellectuelle</h2>
          <p>
            Les éléments du site (textes, images, logos, graphismes, codes, etc.) sont protégés par le droit de
            la propriété intellectuelle et sont, sauf mention contraire, la propriété exclusive de DevLeads.
            Toute reproduction ou réutilisation non autorisée est interdite.
          </p>
        </section>

        {/* Liens externes */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. DevLeads n&apos;exerce aucun contrôle sur ces
            contenus et décline toute responsabilité quant aux informations qu&apos;ils diffusent.
          </p>
        </section>

        {/* Responsabilité */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Responsabilité</h2>
          <p>
            DevLeads met en œuvre des moyens raisonnables pour fournir des informations fiables et à jour, sans
            garantie d&apos;exactitude exhaustive ni d&apos;actualisation permanente. DevLeads ne pourra être tenue
            responsable des dommages directs ou indirects résultant de l&apos;utilisation du site ou de
            l&apos;impossibilité d&apos;y accéder.
          </p>
        </section>

        {/* Données personnelles / Cookies */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Données personnelles et cookies</h2>
          <p>
            Le traitement des données personnelles et l&apos;usage des cookies sont décrits dans la{" "}
            <a className="underline" href="/conf">
              Politique de confidentialité
            </a>{" "}
            et le bandeau de consentement.
          </p>
        </section>

        {/* Modification des CGU */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Modification des CGU</h2>
          <p>
            DevLeads se réserve le droit de modifier les présentes CGU à tout moment. Les versions mises à jour
            sont publiées sur cette page et applicables dès leur mise en ligne.
          </p>
        </section>

        {/* Droit applicable */}
        <section className="mt-8 mb-16">
          <h2 className="text-3xl font-bold mb-4">Droit applicable et juridiction</h2>
          <p>
            Les présentes CGU sont régies par le droit français. En cas de litige, et à défaut d&apos;accord
            amiable, les tribunaux d&apos;<strong>Evreux</strong> seront seuls compétents.
          </p>
        </section>
      </div>
    </>
  );
}