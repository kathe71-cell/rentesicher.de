import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Grundrente() {
  const faqs = [
    {
      question: "Wer erhält den Grundrentenzuschlag?",
      answer: "Der Zuschlag steht Rentnern zu, die mindestens 33 Jahre Grundrentenzeiten (Beitragszeiten aus Beschäftigung, Pflege, Erziehung) aufweisen und unter der Einkommensgrenze liegen."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Grundrente", item: "/grundrente" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Grundrente: Anspruch, Einkommensprüfung & Zuschlag
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Alles zur Grundrente als Zuschlag für langjährige Beitragszahler mit unterdurchschnittlichem Einkommen.
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Grundrentenzeiten & Einkommensprüfung</h2>
        <p className="text-slate-700">
          Die Grundrente muss nicht extra beantragt werden. Die Rentenversicherung prüft automatisch die Einkommensverhältnisse beim Finanzamt.
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
