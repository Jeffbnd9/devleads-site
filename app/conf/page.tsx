export default function PolitiqueConfidentialite() {
  return (
    <>
      <div className="min-h-screen pt-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl text-center font-bold">Politique de confidentialité</h1>

        {/* Responsable de traitement */}
        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-4">Responsable du traitement</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>DevLeads</li>
            <li>19 rue Normande, 27370 Le Thuit-de-l&apos;Oison, France</li>
            <li>DPO / Référent RGPD&nbsp;: BÉNARD Jeff</li>
            <li>
              Contact&nbsp;:{" "}
              <a className="underline" href="mailto:contact@devleads.org">
                contact@devleads.org
              </a>
            </li>
          </ul>
        </section>

        {/* Données collectées */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Données collectées</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Données d&apos;identité&nbsp;: nom, prénom</li>
            <li>Données de contact&nbsp;: e-mail, téléphone</li>
            <li>Données issues de formulaires (contact / devis) et échanges</li>
            <li>Données de navigation&nbsp;: adresse IP (anonymisée), cookies</li>
          </ul>
        </section>

        {/* Finalités & bases légales */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Finalités et bases légales</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Traitement des demandes et prise de contact (exécution de mesures précontractuelles / contrat)
            </li>
            <li>Envoi de communications liées à l&apos;entreprise (intérêt légitime)</li>
            <li>Newsletter (si consentement explicite)</li>
            <li>
              Mesure d&apos;audience et analyses statistiques (intérêt légitime ou consentement selon l&apos;outil)
            </li>
            <li>Retargeting publicitaire (consentement)</li>
          </ul>
        </section>

        {/* Durées de conservation */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Durées de conservation</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Données clients / prospects&nbsp;: jusqu&apos;à 5 ans après le dernier contact ou la dernière prestation
            </li>
            <li>
              Données newsletter&nbsp;: jusqu&apos;à 3 ans après le dernier contact ou jusqu&apos;au retrait du
              consentement
            </li>
            <li>Cookies&nbsp;: 13 mois maximum</li>
          </ul>
        </section>

        {/* Droits des personnes */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Vos droits</h2>
          <p className="mb-3">
            Vous disposez des droits d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition,
            ainsi que du droit à la portabilité de vos données. Vous pouvez également retirer votre consentement à
            tout moment pour les traitements fondés sur celui-ci.
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Exercer vos droits&nbsp;:{" "}
              <a className="underline" href="mailto:contact@devleads.org">
                contact@devleads.org
              </a>
            </li>
            <li>
              Réclamation auprès de l&apos;autorité de contrôle&nbsp;:{" "}
              <a className="underline" href="https://www.cnil.fr" target="_blank" rel="noreferrer">
                www.cnil.fr
              </a>
            </li>
          </ul>
        </section>

        {/* Transferts hors UE */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Transferts hors Union européenne</h2>
          <p>
            Certains services que nous utilisons (par exemple, outils de mesure d&apos;audience ou d&apos;hébergement)
            peuvent impliquer un transfert de données hors de l&apos;Union européenne (notamment vers les États-Unis).
            Ces transferts sont encadrés par les <strong>Clauses Contractuelles Types</strong> de la Commission
            européenne et/ou par un mécanisme reconnu comme assurant un niveau de protection adéquat (ex.&nbsp;:
            EU-US Data Privacy Framework), lorsque disponible.
          </p>
        </section>

        {/* Cookies */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Cookies</h2>
          <p>Le site utilise des cookies pour&nbsp;:</p>
          <ul className="list-disc ml-6 space-y-1 mt-2">
            <li>Assurer son bon fonctionnement (cookies essentiels)</li>
            <li>Mesurer son audience (statistiques)</li>
            <li>Améliorer votre expérience (marketing, soumis à consentement)</li>
          </ul>
          <p className="mt-3">
            Un bandeau de consentement vous permet de gérer vos préférences à tout moment. Vous pouvez également les
            modifier via le lien «&nbsp;Gérer mes cookies&nbsp;» en bas du site.
          </p>
          <p className="mt-2">Durée de vie des cookies&nbsp;: 13 mois maximum.</p>
        </section>

        {/* Sécurité */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
            personnelles contre la destruction, la perte, l&apos;altération, la divulgation ou l&apos;accès non autorisé.
          </p>
        </section>

        {/* Mise à jour de la politique */}
        <section className="mt-8 mb-16">
          <h2 className="text-3xl font-bold mb-4">Mise à jour</h2>
          <p>
            La présente politique peut être amenée à évoluer. Toute modification substantielle sera portée à votre
            connaissance sur cette page.
          </p>
        </section>
      </div>
    </>
  );
}