import React from 'react';
import RentenLueckeCalculator from '../components/RentenLueckeCalculator';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Rentenluecke() {
  const faqs = [
    {
      question: "Was genau ist die Rentenlücke?",
      answer: "Die Rentenlücke ist die Differenz zwischen deinem letzten Nettoeinkommen (bzw. deinen benötigten monatlichen Ausgaben im Alter) und deiner Auszahlungsrente aus der gesetzlichen Rentenversicherung."
    },
    {
      question: "Wie viel Prozent meines letzten Netto-Gehalts benötige ich im Alter?",
      answer: "Finanzexperten und Verbraucherschützer empfehlen eine Zielquote von mindestens 80 % des letzten Nettoeinkommens, um den gewohnten Lebensstandard aufrechtzuerhalten."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenlücke berechnen", item: "/rentenluecke" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Rentenlücke berechnen: Wie viel Rente bekomme ich wirklich?
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Viele Arbeitnehmer unterschätzen die Versorgungslücke im Alter. Mit unserem kostenlosen Online-Rechner ermittelst du sekundenschnell deine individuelle Rentenlücke und dein nötiges Sparziel.
        </p>
      </div>

      <RentenLueckeCalculator />

      <AdSense />

      <section className="prose prose-slate max-w-none my-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Warum entsteht eine Rentenlücke?</h2>
        <p className="text-slate-700">
          Die gesetzliche Rentenversicherung ist als Basisversorgung konzipiert. Da das gesetzliche Rentenniveau 2026 bei ca. 48 % liegt, ersetzt die gesetzliche Rente im Schnitt nicht einmal die Hälfte deines Bruttoeinkommens.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Wichtige Einflussfaktoren auf deine Netto-Rente:</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Kranken- und Pflegeversicherung:</strong> Auf die Bruttorente werden ca. 11,5 % Sozialabgaben fällig.</li>
          <li><strong>Einkommensteuer:</strong> Für Renteneintritte ab 2026 unterliegt der Großteil der Rente der vollen Einkommensteuer.</li>
          <li><strong>Inflation / Kaufkraftverlust:</strong> Eine jährliche Inflation von 2 % halbiert die Kaufkraft deines Ersparten in etwa 35 Jahren.</li>
        </ul>
      </section>

      <SourceFootnote />
    </div>
  );
}
