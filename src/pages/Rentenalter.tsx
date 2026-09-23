import React from 'react';
import RentenEintrittsCalculator from '../components/RentenEintrittsCalculator';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Rentenalter() {
  const faqs = [
    {
      question: "Wann kann ich frühestens in Rente gehen?",
      answer: "Wer 35 Beitragsjahre nachweist (langjährig Versicherte), kann ab Alter 63 mit Abschlägen (0,3 % pro Monat vorzeitig, max. 14,4 %) in Rente gehen. Wer 45 Beitragsjahre vorweist, kann früher abschlagsfrei in Rente gehen."
    },
    {
      question: "Wurde die Rente mit 63 abgeschafft?",
      answer: "Die ursprüngliche 'Rente mit 63' ohne Abschläge gilt seit den Geburtsjahrgängen ab 1964 nicht mehr mit 63, sondern schrittweise erst ab Alter 65 (für besonders langjährig Versicherte mit 45 Beitragsjahren)."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Renteneintrittsalter 2026", item: "/rentenalter" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Wann kann ich in Rente? Renteneintrittsalter 2026 & Frührente
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Ermittle mit unserem Rechner dein exaktes gesetzliches Reguläres Eintrittsalter sowie die Bedingungen für Frührente und die Rente nach 45 Beitragsjahren.
        </p>
      </div>

      <RentenEintrittsCalculator />

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Regelaltersgrenze nach Geburtsjahrgang</h2>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm text-slate-700 border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                <th className="p-3 border-r border-slate-200">Geburtsjahrgang</th>
                <th className="p-3 border-r border-slate-200">Reguläres Rentenalter</th>
                <th className="p-3">Eintrittsjahr</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 border-r border-slate-200 font-semibold">1959</td>
                <td className="p-3 border-r border-slate-200">66 Jahre + 2 Monate</td>
                <td className="p-3">2025 / 2026</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <td className="p-3 border-r border-slate-200 font-semibold">1960</td>
                <td className="p-3 border-r border-slate-200">66 Jahre + 4 Monate</td>
                <td className="p-3">2026 / 2027</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 border-r border-slate-200 font-semibold">1961</td>
                <td className="p-3 border-r border-slate-200">66 Jahre + 6 Monate</td>
                <td className="p-3">2027 / 2028</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <td className="p-3 border-r border-slate-200 font-semibold">1964 und später</td>
                <td className="p-3 border-r border-slate-200 font-bold text-blue-900">67 Jahre</td>
                <td className="p-3">Ab 2031</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <SourceFootnote />
    </div>
  );
}
