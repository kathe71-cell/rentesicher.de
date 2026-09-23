import React from 'react';
import AffiliateWidget from '../components/AffiliateWidget';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function RiesterRente() {
  const faqs = [
    {
      question: "Lohnt sich die Riester-Rente 2026 noch?",
      answer: "Die Riester-Rente ist insbesondere für Familien mit mehreren Kindern und für Geringverdiener durch hohe staatliche Zulagen (Grundzulage 175 €, Kinderzulage bis zu 300 € pro Kind) hochattraktiv. Für Gutverdiener bietet sie zudem attraktive Sonderausgabenabzüge."
    },
    {
      question: "Wie hoch ist die maximale Riester-Förderung?",
      answer: "Der Höchstbetrag für den Sonderausgabenabzug liegt bei 2.100 € pro Jahr inklusive aller staatlichen Zulagen."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Riester-Rente 2026", item: "/riester-rente" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Riester-Rente 2026: Staatliche Förderung & Vor- und Nachteile
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Lohnt sich der Riester-Vertrag noch? Erfahre alles über Zulagen, Steuererleichterungen und vergleiche geprüfte Riester-Angebote.
        </p>
      </div>

      <AffiliateWidget type="riester" title="Riester-Förderung & Tarife anfordern" />

      <AdSense />

      <section className="prose prose-slate max-w-none my-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Die staatlichen Riester-Zulagen im Überblick</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-sm text-slate-700 border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                <th className="p-3 border-r border-slate-200">Zulagenart</th>
                <th className="p-3 border-r border-slate-200">Höhe pro Jahr</th>
                <th className="p-3">Voraussetzung</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-semibold border-r border-slate-200">Grundzulage</td>
                <td className="p-3 font-bold text-emerald-600 border-r border-slate-200">175,00 €</td>
                <td className="p-3">Mindesteigenbeitrag 4% des Vorjahresbrutto (mind. 60 €)</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <td className="p-3 font-semibold border-r border-slate-200">Kinderzulage (ab 2008 geb.)</td>
                <td className="p-3 font-bold text-emerald-600 border-r border-slate-200">300,00 €</td>
                <td className="p-3">Anspruch auf Kindergeld</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-semibold border-r border-slate-200">Kinderzulage (vor 2008 geb.)</td>
                <td className="p-3 font-bold text-emerald-600 border-r border-slate-200">185,00 €</td>
                <td className="p-3">Anspruch auf Kindergeld</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="p-3 font-semibold border-r border-slate-200">Berufseinsteiger-Bonus</td>
                <td className="p-3 font-bold text-emerald-600 border-r border-slate-200">200,00 €</td>
                <td className="p-3">Einmalig unter 25 Jahren</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <SourceFootnote />
    </div>
  );
}
