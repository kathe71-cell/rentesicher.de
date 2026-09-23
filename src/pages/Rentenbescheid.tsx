import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Rentenbescheid() {
  const faqs = [
    {
      question: "Warum sollte man den Rentenbescheid prüfen?",
      answer: "Fehlerhafte Ausbildungszeiten, fehlende Kindererziehungszeiten oder unvollständige Versicherungsverläufe können die Monatsrente erheblich mindern."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenbescheid prüfen", item: "/rentenbescheid" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Rentenbescheid prüfen & Renteninformation verstehen
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Checkliste für deinen jährlichen DRV-Versicherungsverlauf und Einspruchsfristen.
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Wichtige Prüfpunkte im Rentenbescheid</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li>Vollständigkeit der Beitragszeiten (Lehre, Studium, Zivildienst)</li>
          <li>Korrekt erfasste Kindererziehungszeiten (Mütterrente)</li>
          <li>Zeiten der Pflege von Angehörigen</li>
        </ul>
      </section>

      <SourceFootnote />
    </div>
  );
}
