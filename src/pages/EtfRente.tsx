import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function EtfRente() {
  const faqs = [
    {
      question: "Ist ein ETF-Sparplan besser als eine Riester- oder Versicherungslösung?",
      answer: "ETF-Sparpläne zeichnen sich durch extrem geringe Kosten (TER 0,1 % bis 0,2 % p.a.) und hohe historische Renditechancen (6–8 % p.a. beim MSCI World) aus. Sie bieten maximale Flexibilität, verzichten aber auf staatliche Garantien und lebenslange Annuitäten."
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          ETF-Sparplan für die Rente: Rendite, Sicherheit & ETF statt Riester
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Warum weltweite Aktien-ETFs (z. B. MSCI World oder FTSE All-World) als Renditemotor für den Ruhestand unverzichtbar sind.
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">ETF vs. Klassische Rentenversicherung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">ETF-Sparplan (Eigenanlag)</h3>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
              <li>Keine Abschluss- und Verwaltungskosten</li>
              <li>Jederzeit frei verfügbar & flexibel</li>
              <li>Durchschnittlich 7 % historische Rendite p.a.</li>
              <li>Keine lebenslange Rentengarantie</li>
            </ul>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">Rentenversicherung / Riester</h3>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
              <li>Staatliche Zulagen & Steuervorteile</li>
              <li>Lebenslange garantierte Monatsrente</li>
              <li>Absicherung des Langlebigkeitsrisikos</li>
              <li>Geringere Nettorendite durch Vertragskosten</li>
            </ul>
          </div>
        </div>
      </section>

      <SourceFootnote />
    </div>
  );
}
