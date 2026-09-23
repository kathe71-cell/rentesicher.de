import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Rentenanpassung() {
  const faqs = [
    {
      question: "Wie hoch ist die Rentenanpassung 2026?",
      answer: "Die Rentenerhöhung beträgt zum 1. Juli 2026 bundeseinheitlich +4,24 %. Der Rentenwert steigt damit von 40,79 € auf 42,52 € je Entgeltpunkt."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenanpassung 2026", item: "/rentenanpassung" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Rentenanpassung 2026: +4,24 % Erhöhung des Rentenwerts
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Alle Hintergründe zur Rentenwertbestimmungsverordnung 2026, der Koppelung an die Lohnentwicklung und historischer Vergleich der Rentenanpassungen.
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Historischer Vergleich der Rentenanpassungen</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-sm text-slate-700 border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                <th className="p-3 border-r border-slate-200">Jahr</th>
                <th className="p-3 border-r border-slate-200">Rentenanpassung</th>
                <th className="p-3">Neuer Rentenwert / EP</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200 bg-amber-50/60 font-bold">
                <td className="p-3 border-r border-slate-200 text-amber-950">2026</td>
                <td className="p-3 border-r border-slate-200 text-emerald-700">+4,24 %</td>
                <td className="p-3 text-slate-900">42,52 € (bundeseinheitlich)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 border-r border-slate-200">2025</td>
                <td className="p-3 border-r border-slate-200 text-emerald-700">+3,57 %</td>
                <td className="p-3 text-slate-900">40,79 €</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <td className="p-3 border-r border-slate-200">2024</td>
                <td className="p-3 border-r border-slate-200 text-emerald-700">+4,57 %</td>
                <td className="p-3 text-slate-900">39,32 €</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 border-r border-slate-200">2023</td>
                <td className="p-3 border-r border-slate-200 text-emerald-700">+4,39 % (West) / +5,86 % (Ost)</td>
                <td className="p-3 text-slate-900">37,60 € (West) / 37,60 € (Ost)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <SourceFootnote />
    </div>
  );
}
