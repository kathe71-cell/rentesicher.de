import React from 'react';
import RentenBerechnungCalculator from '../components/RentenBerechnungCalculator';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { CURRENT_VALUES } from '../data/current-values';

export default function Rentenberechnung() {
  const faqs = [
    {
      question: "Wie wird die gesetzliche Rente berechnet?",
      answer: "Die Rentenformel lautet nach § 64 SGB VI: Monatliche Rente = Entgeltpunkte × Zugangsfaktor × Aktueller Rentenwert × Rentenartfaktor."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenberechnung", item: "/rentenberechnung" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Gesetzliche Rentenberechnung: Rentenformel & Rentenwert
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Berechne deine voraussichtliche gesetzliche Monatsrente auf Basis deiner Entgeltpunkte (Rentenpunkte) und des aktuellen Rentenwerts von {CURRENT_VALUES.rentenwertFormatted}.
        </p>
      </div>

      <RentenBerechnungCalculator />

      <SourceFootnote />
    </div>
  );
}
