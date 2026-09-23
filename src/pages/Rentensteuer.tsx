import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Rentensteuer() {
  const faqs = [
    {
      question: "Wie viel Prozent meiner Rente muss ich versteuern?",
      answer: "Der steuerpflichtige Rentenanteil richtet sich nach dem Jahr des Renteneintritts. Für Neurentner im Jahr 2026 beträgt der Besteuerungsanteil ca. 84 % (mit schrittweisem Übergang zur Vollbesteuerung)."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Besteuerung von Renten", item: "/rentensteuer" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Besteuerung von Renten: Rentenfreibetrag & Grundfreibetrag
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Wann müssen Rentner eine Steuererklärung abgeben? Erklärung der nachgelagerten Besteuerung nach dem Alterseinkünftegesetz.
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Grundfreibetrag & Steuerfreibetrag</h2>
        <p className="text-slate-700">
          Wer als Einzelperson ein zu versteuerndes Einkommen unterhalb des steuerlichen Grundfreibetrags erzielt, zahlt keine Einkommensteuer.
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
