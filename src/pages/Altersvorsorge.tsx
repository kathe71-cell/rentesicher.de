import React from 'react';
import { Link } from 'react-router-dom';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function Altersvorsorge() {
  const faqs = [
    {
      question: "Welche Altersvorsorge passt zu mir?",
      answer: "Das hängt von deinem Alter, Einkommen, Förderansprüchen (z. B. Kinder) und Risikoprofil ab. Eine Kombination aus Gesetzlicher Rente, ETF-Sparplan und ggf. bAV / Riester bietet optimale Diversifikation."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Altersvorsorge Übersicht", item: "/altersvorsorge" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Altersvorsorge im Vergleich 2026: Strategien für jeden Lebensabschnitt
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Gesamtschau aller Vorsorgeoptionen in Deutschland – von staatlich geförderten Verträgen bis zu eigenverantwortlichen Anlageformen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Private Rentenversicherung</h2>
          <p className="text-xs text-slate-600 mb-4">Garantierte lebenslange Rente und Steuervorteile beim Halbeinkünfteverfahren.</p>
          <Link to="/private-rente" className="text-xs font-bold text-blue-900 hover:underline">Zum Vergleich →</Link>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Riester-Rente 2026</h2>
          <p className="text-xs text-slate-600 mb-4">Hohe staatliche Zulagen für Familien und Geringverdiener.</p>
          <Link to="/riester-rente" className="text-xs font-bold text-blue-900 hover:underline">Zulagen prüfen →</Link>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Betriebliche Altersvorsorge (bAV)</h2>
          <p className="text-xs text-slate-600 mb-4">15 % gesetzlicher Arbeitgeberzuschuss bei Entgeltumwandlung.</p>
          <Link to="/betriebliche-altersvorsorge" className="text-xs font-bold text-blue-900 hover:underline">Details lesen →</Link>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-2">ETF-Sparplan für Rente</h2>
          <p className="text-xs text-slate-600 mb-4">Maximale Flexibilität & geringste Kosten für langfristigen Vermögensaufbau.</p>
          <Link to="/etf-rente" className="text-xs font-bold text-blue-900 hover:underline">ETF-Strategie ansehen →</Link>
        </div>
      </div>

      <AdSense />

      <SourceFootnote />
    </div>
  );
}
