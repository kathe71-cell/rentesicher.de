import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { CURRENT_VALUES } from '../data/current-values';

export default function Rentenanpassung() {
  const faqs = [
    {
      question: "Wie wird die jährliche Rentenanpassung berechnet?",
      answer: "Die Rentenanpassung erfolgt jährlich zum 1. Juli per Verordnung der Bundesregierung auf Basis der bundesweiten Lohnentwicklung und des Nachhaltigkeitsfaktors."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenanpassung", item: "/rentenanpassung" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Rentenanpassung: Aktuelle Erhöhung & Entwicklung
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Alle Hintergründe zur jährlichen Rentenwertbestimmungsverordnung, der Koppelung an die Lohnentwicklung und historischer Vergleich der Rentenanpassungen.
        </p>
      </div>

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Aktueller Stand der Rentenanpassung</h2>
        <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 font-semibold mb-6 text-sm">
          Der aktuelle Rentenwert beträgt derzeit <strong>{CURRENT_VALUES.rentenwertFormatted}</strong> je Entgeltpunkt (Rentenanpassung: <strong>{CURRENT_VALUES.rentenanpassungFormatted}</strong>).
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Historische Entwicklung der Rentenanpassungen</h2>
        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full text-left text-sm text-slate-700 border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                <th className="p-3 border-r border-slate-200">Jahr</th>
                <th className="p-3 border-r border-slate-200">Rentenanpassung</th>
                <th className="p-3">Rentenwert / EP</th>
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
