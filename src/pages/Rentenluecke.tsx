import React from 'react';
import RentenLueckeCalculator from '../components/RentenLueckeCalculator';
import AffiliateWidget from '../components/AffiliateWidget';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';

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
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Rentenlücke berechnen: So groß ist deine Versorgungslücke
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Viele Arbeitnehmer unterschätzen die Versorgungslücke im Alter. Mit unserem kostenlosen Online-Rechner ermittelst du sekundenschnell deine individuelle Rentenlücke und dein nötiges Sparziel.
        </p>
      </div>

      <RentenLueckeCalculator />

      <section className="prose prose-slate max-w-none my-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Warum entsteht eine Rentenlücke?</h2>
        <p className="text-slate-700">
          Die gesetzliche Rentenversicherung ist als Basisversorgung konzipiert. Da das gesetzliche Rentenniveau bei ca. 48 % liegt, ersetzt die gesetzliche Rente im Schnitt nicht einmal die Hälfte deines Bruttoeinkommens.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Wichtige Einflussfaktoren auf deine Netto-Rente:</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Kranken- und Pflegeversicherung:</strong> Auf die Bruttorente werden Abzüge zur Kranken- und Pflegeversicherung fällig.</li>
          <li><strong>Einkommensteuer:</strong> Nach dem Alterseinkünftegesetz unterliegt ein Großteil der Rente der nachgelagerten Besteuerung.</li>
          <li><strong>Inflation / Kaufkraftverlust:</strong> Eine jährliche Inflation halbiert die Kaufkraft des Ersparten über längere Zeiträume.</li>
        </ul>
      </section>

      <AffiliateWidget type="rente" title="Monatliche Rentenlücke schließen: Tarife vergleichen" />

      <SourceFootnote />
    </div>
  );
}
