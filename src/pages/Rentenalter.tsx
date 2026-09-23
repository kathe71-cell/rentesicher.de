import React from 'react';
import RentenEintrittsCalculator from '../components/RentenEintrittsCalculator';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';

export default function Rentenalter() {
  const faqs = [
    {
      question: "Wann kann ich frühestens in Rente gehen?",
      answer: "Wer 35 Beitragsjahre nachweist (langjährig Versicherte), kann ab Alter 63 mit Abschlägen (0,3 % pro Monat vorzeitig, max. 14,4 %) in Rente gehen. Wer 45 Beitragsjahre vorweist, kann früher abschlagsfrei in Rente gehen."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Renteneintrittsalter", item: "/rentenalter" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Wann kann ich in Rente? Rentenalter einfach erklärt
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Ermittle mit unserem Rechner dein exaktes gesetzliches Reguläres Eintrittsalter sowie die Bedingungen für Frührente und die Rente nach 45 Beitragsjahren.
        </p>
      </div>

      <RentenEintrittsCalculator />

      <SourceFootnote />
    </div>
  );
}
