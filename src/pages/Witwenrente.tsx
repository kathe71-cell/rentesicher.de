import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Witwenrente() {
  const faqs = [
    {
      question: "Wie unterscheidet sich die kleine von der großen Witwenrente?",
      answer: "Die kleine Witwenrente beträgt 25 % der Rente des Verstorbenen (max. 2 Jahre), während die große Witwenrente 55 % (oder 60 % nach altem Recht) beträgt und dauerhaft gezahlt wird."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Witwenrente", item: "/witwenrente" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Witwen- & Hinterbliebenenrente 2026: Große vs. Kleine Witwenrente
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Rechtliche Regelungen zur Versorgung von Ehepartnern, Freibeträge bei eigenem Einkommen und Antragsverfahren.
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Freibeträge bei Anrechnung eigenen Einkommens</h2>
        <p className="text-slate-700">
          Eigenes Einkommen der Witwe / des Witwers wird oberhalb des gesetzlichen Freibetrags zu 40 % auf die Hinterbliebenenrente angerechnet.
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
