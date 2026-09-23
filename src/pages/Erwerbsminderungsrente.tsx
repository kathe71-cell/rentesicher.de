import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Erwerbsminderungsrente() {
  const faqs = [
    {
      question: "Wann liegt eine volle Erwerbsminderung vor?",
      answer: "Eine volle Erwerbsminderung liegt vor, wenn der Versicherte wegen Krankheit oder Behinderung auf absehbare Zeit weniger als 3 Stunden täglich auf dem allgemeinen Arbeitsmarkt tätig sein kann."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Erwerbsminderungsrente", item: "/erwerbsminderungsrente" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Erwerbsminderungsrente (EM-Rente): Voraussetzungen & Zurechnungszeit
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Absicherung bei teilweisem oder vollständigem Verlust der Erwerbsfähigkeit.
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Verbesserte Zurechnungszeiten</h2>
        <p className="text-slate-700">
          Durch die jüngsten Gesetzesreformen werden EM-Rentner so gestellt, als hätten sie mit ihrem bisherigen Durchschnittseinkommen bis zur Regelaltersgrenze weitergearbeitet.
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
