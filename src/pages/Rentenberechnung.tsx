import React from 'react';
import RentenBerechnungCalculator from '../components/RentenBerechnungCalculator';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Rentenberechnung() {
  const faqs = [
    {
      question: "Wie wird die gesetzliche Rente berechnet?",
      answer: "Die Rentenformel lautet: Monatliche Rente = Entgeltpunkte × Zugangsfaktor × Aktueller Rentenwert × Rentenartfaktor."
    },
    {
      question: "Wie hoch ist die Standardrente (Eckrente) 2026?",
      answer: "Die Standardrente für einen Modellrentner mit 45 Entgeltpunkten beträgt 2026 genau 1.913,40 € brutto pro Monat (45 × 42,52 €)."
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Wie wird meine Rente berechnet? Rentenformel & Rentenwert 2026
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Berechne deine voraussichtliche gesetzliche Monatsrente auf Basis deiner Entgeltpunkte (Rentenpunkte) und des bundeseinheitlichen Rentenwerts von 42,52 €.
        </p>
      </div>

      <RentenBerechnungCalculator />

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Die gesetzliche Rentenformel im Detail</h2>
        <div className="p-6 bg-slate-900 text-white rounded-xl font-mono text-sm mb-6">
          Rente = Entgeltpunkte (EP) × Zugangsfaktor (ZF) × Rentenwert (RW) × Rentenartfaktor (RAF)
        </div>

        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Entgeltpunkte (EP):</strong> Wer in einem Jahr exakt das Durchschnittsentgelt aller Versicherten verdient, erhält genau 1,0 Entgeltpunkt.</li>
          <li><strong>Zugangsfaktor (ZF):</strong> Berücksichtigt Zu- oder Abschläge bei früherem oder späterem Renteneintritt (1,0 bei regulärem Eintritt).</li>
          <li><strong>Aktueller Rentenwert (RW):</strong> Der Gegenwert eines Entgeltpunkts. 2026 liegt er bei 42,52 €.</li>
          <li><strong>Rentenartfaktor (RAF):</strong> 1,0 für Altersrenten und volle Erwerbsminderungsrenten; 0,55 für Witwenrenten.</li>
        </ul>
      </section>

      <SourceFootnote />
    </div>
  );
}
