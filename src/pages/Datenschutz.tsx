import React from 'react';
import { Link } from 'react-router-dom';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';

export default function Datenschutz() {
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Datenschutzerklärung", item: "/datenschutz" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup breadcrumbs={breadcrumbs} />

      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
        Datenschutzerklärung (DSGVO)
      </h1>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm">
        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">1. Datenschutz auf einen Blick</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO): Vollständige Kontaktdaten siehe <Link to="/impressum" className="text-blue-700 font-semibold underline">Impressum</Link>.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">2. Vercel Web Analytics (Cookielose Webanalyse)</h2>
          <p>
            Diese Website nutzt Vercel Web Analytics, einen Analysedienst der Vercel Inc. Der Dienst arbeitet vollständig cookielos und ohne Speicherung von IP-Adressen oder personenbezogenen Daten. Die statistische Auswertung erfolgt anonymisiert auf Servern in der EU.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">3. Google AdSense & Cookies</h2>
          <p>
            Diese Website verwendet Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Ireland Limited („Google“). AdSense verwendet Cookies und Web Beacons, um die Ausspielung relevanter Anzeigen zu ermöglichen. Weitere Informationen zur Datenverarbeitung durch Google findest du in den Datenschutzhinweisen von Google.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">4. Affiliate-Formulare & iFrames (partner-versicherung.de)</h2>
          <p>
            Auf einzelnen Seiten sind Formular-Widgets der partner-versicherung.de integriert. Beim Interagieren mit diesen Widgets werden Daten direkt an die Server des Anbieters übermittelt, um Vergleichsangebote zu berechnen.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">5. Betroffenenrechte nach DSGVO</h2>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit deiner gespeicherten Daten. Wende dich hierzu an die im Impressum angegebenen Kontaktdaten.
          </p>
        </div>
      </div>

      <SourceFootnote />
    </div>
  );
}
