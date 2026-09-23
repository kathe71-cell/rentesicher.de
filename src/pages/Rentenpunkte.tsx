import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Rentenpunkte() {
  const faqs = [
    {
      question: "Wie viel Euro ist 1 Rentenpunkt (Entgeltpunkt) 2026 wert?",
      answer: "Ein Entgeltpunkt (Rentenpunkt) entspricht ab dem 1. Juli 2026 bundeseinheitlich genau 42,52 € Brutto-Monatsrente."
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Entgeltpunkte (Rentenpunkte) 2026: Berechnung & Wert
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Wie sammelt man Rentenpunkte? Erklärung des vorläufigen Durchschnittsentgelts und Punktegutschrift für Erziehung und Pflege.
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Berechnung der Entgeltpunkte</h2>
        <p className="text-slate-700">
          Entgeltpunkte = Dein Bruttojahreseinkommen ÷ Durchschnittsentgelt aller Versicherten.
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
