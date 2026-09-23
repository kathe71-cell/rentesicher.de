import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function RenteMit63() {
  const faqs = [
    {
      question: "Wer kann noch mit 63 ohne Abschläge in Rente gehen?",
      answer: "Abschlagsfrei mit 63 konnten nur Jahrgänge vor 1953 in Rente gehen. Für jüngere Jahrgänge verschiebt sich das Alter schrittweise auf 65 Jahre (bei 45 Beitragsjahren)."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rente mit 63", item: "/rente-mit-63" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Rente mit 63: Voraussetzungen, Abschläge & Neuregelung 2026
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Verständliche Erklärung zur Altersrente für besonders langjährig Versicherte (45 Jahre Wartezeit) und langjährig Versicherte (35 Jahre Wartezeit).
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Voraussetzungen im Überblick</h2>
        <p className="text-slate-700">
          Wer 35 Beitragsjahre nachweisen kann, darf ab 63 in Rente gehen, muss jedoch pro Monat vor der Regelaltersgrenze einen Abschlag von 0,3 % hinnehmen (max. 14,4 %).
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
