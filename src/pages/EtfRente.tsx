import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { Info, ShieldAlert } from 'lucide-react';

export default function EtfRente() {
  const faqs = [
    {
      question: "Welche Rolle können breit gestreute Aktien-ETFs bei der Altersvorsorge spielen?",
      answer: "Breit gestreute Aktien-ETFs (z. B. auf den MSCI World oder FTSE All-World) ermöglichen Privatanlegern die Teilhabe an der globalen Wirtschaftsentwicklung. Durch niedrige laufende Produktkosten (TER) eignen sie sich für den langfristigen Vermögensaufbau über mehrere Jahrzehnte."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "ETF Altersvorsorge", item: "/etf-rente" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          ETF zur Altersvorsorge: Chancen, Kosten und Risiken
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Welche Rolle breit gestreute Aktien-ETFs beim langfristigen Vermögensaufbau spielen können, wie Gesamtkosten wirken und welche Risiken vor Rentenbeginn beachtet werden müssen.
        </p>
      </div>

      {/* Disclaimer Box */}
      <div className="p-4 bg-amber-50 border border-amber-200 text-amber-950 rounded-xl mb-8 text-xs sm:text-sm flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong>Wichtiger Hinweis:</strong> Diese Seite stellt keine individuelle Anlageberatung oder Kaufempfehlung dar. Wertpapierangebote unterliegen Kursschwankungen und Verlustrisiken.
        </div>
      </div>

      <section className="prose prose-slate max-w-none my-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Funktionsweise von Aktien-ETFs in der Altersvorsorge
        </h2>
        <p className="text-slate-700">
          Ein ETF (Exchange Traded Fund) ist ein börsengehandelter Indexfonds, der die Wertentwicklung eines festgelegten Marktindexes (z. B. MSCI World mit über 1.400 Unternehmen aus 23 Industrieländern) möglichst exakt abbildet.
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
