export default function Mentions() {
  return (
    <>
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl text-center font-bold">Mentions légales</h1>

        <p className="text-center mt-3 text-sm opacity-80">
          Conformément à l&apos;article 6 de la Loi n°2004-575 du 21 juin 2004 pour la confiance dans
          l&apos;économie numérique (LCEN)
        </p>

        {/* Éditeur du site */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-4">Éditeur du site</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Raison sociale&nbsp;: DevLeads</li>
            <li>Statut juridique : Micro-entreprise</li>
            <li>Capital social&nbsp;: N/A (micro-entreprise sans capital)</li>
            <li>SIRET&nbsp;: [en cours d&apos;enregistrement]</li>
            <li>Responsable éditorial&nbsp;: BÉNARD Jeff</li>
            <li>Adresse&nbsp;: 19 rue Normande, 27370 Le Thuit-de-l&apos;Oison, France</li>
            <li>Téléphone&nbsp;: +33&nbsp;7&nbsp;81&nbsp;54&nbsp;80&nbsp;27</li>
            <li>
              Email&nbsp;:{" "}
              <a className="underline" href="mailto:contact@devleads.org">
                contact@devleads.org
              </a>
            </li>
            <li>
              Site&nbsp;:{" "}
              <a className="underline" href="https://www.devleads.org">
                www.devleads.org
              </a>
            </li>
          </ul>
        </section>

        {/* Hébergement */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Hébergement</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Vercel Inc.</li>
            <li>440 N Barranca Ave, Suite 4133, Covina, CA 91723 - États-Unis</li>
            <li>
              Site&nbsp;:{" "}
              <a className="underline" href="https://vercel.com">
                vercel.com
              </a>
            </li>
          </ul>
          <p className="mt-3 text-sm opacity-80">
            Vercel opère un réseau mondial (edge) comprenant des points de présence en Europe.
          </p>
        </section>

        {/* Propriété intellectuelle */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, vidéos, sons, graphismes, logos, icônes, etc.)
            sont la propriété exclusive de DevLeads, sauf mentions contraires. Toute reproduction, représentation,
            modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen
            ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable de DevLeads.
          </p>
        </section>

        {/* Responsabilité */}
        <section className="mt-8 mb-16">
          <h2 className="text-3xl font-bold mb-4">Responsabilité</h2>
          <p>
            DevLeads s&apos;efforce de fournir des informations à jour, exactes et vérifiables. Toutefois, nous ne
            pouvons garantir l&apos;exhaustivité ni l&apos;actualisation permanente des contenus publiés.
            L&apos;utilisation du site se fait sous la seule responsabilité de l&apos;utilisateur. DevLeads ne
            pourra être tenue responsable des dommages directs ou indirects résultant de l&apos;accès ou de
            l&apos;usage du site (y compris l&apos;inaccessibilité, pertes de données, présence de virus, etc.).
          </p>
        </section>
      </div>
    </>
  );
}