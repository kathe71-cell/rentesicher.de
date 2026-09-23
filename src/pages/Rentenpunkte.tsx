import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { CURRENT_VALUES } from '../data/current-values';

export default function Rentenpunkte() {
  const faqs = [
    {
      question: "Wie viel Euro ist 1 Rentenpunkt (Entgeltpunkt) wert?",
      answer: `Ein Entgeltpunkt (Rentenpunkt) entspricht aktuell genau ${CURRENT_VALUES.rentenwertFormatted} Brutto-Monatsrente.`
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Entgeltpunkte / Rentenpunkte", item: "/rentenpunkte" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />
      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Entgeltpunkte (Rentenpunkte): Wert & Berechnung
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Wie sammelt man Rentenpunkte? Erklärung des Durchschnittsentgelts und Punktegutschrift für Erziehung und Pflege. Aktueller Gegenwert: {CURRENT_VALUES.rentenwertFormatted} pro Punkt.
        </p>
      </div>

      <SourceFootnote />
    </div>
  );
}
