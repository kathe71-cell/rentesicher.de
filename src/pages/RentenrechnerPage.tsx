import React, { useState } from 'react';
import RentenLueckeCalculator from '../components/RentenLueckeCalculator';
import RentenBerechnungCalculator from '../components/RentenBerechnungCalculator';
import RentenEintrittsCalculator from '../components/RentenEintrittsCalculator';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';
import { Calculator, Calendar, TrendingUp } from 'lucide-react';

export default function RentenrechnerPage() {
  const [activeTab, setActiveTab] = useState<'luecke' | 'berechnung' | 'eintritt'>('luecke');

  const faqs = [
    {
      question: "Sind die Rechner auf rentesicher.de kostenlos?",
      answer: "Ja, alle 3 interaktiven Rechner stehen vollständig kostenlos, ohne Registrierung und ohne Weitergabe persönlicher Daten zur freien Nutzung bereit."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Interaktiver Rechner-Hub", item: "/rentenrechner" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Die 3 Rentenrechner 2026: Rentenlücke, Rente & Renteneintritt
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Wähle das gewünschte Berechnungstool aus, um deine monatliche Versorgungslücke, deine gesetzliche Brutto- und Nettorente oder dein reguläres Eintrittsalter zu berechnen.
        </p>
      </div>

      {/* Tab Selector Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-slate-200/80 rounded-2xl mb-8">
        <button
          onClick={() => setActiveTab('luecke')}
          className={`w-full sm:w-1/3 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
            activeTab === 'luecke'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <TrendingUp className="w-4 h-4 text-amber-600" />
          <span>1. Rentenlücke</span>
        </button>

        <button
          onClick={() => setActiveTab('berechnung')}
          className={`w-full sm:w-1/3 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
            activeTab === 'berechnung'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Calculator className="w-4 h-4 text-blue-700" />
          <span>2. Gesetzliche Rente</span>
        </button>

        <button
          onClick={() => setActiveTab('eintritt')}
          className={`w-full sm:w-1/3 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
            activeTab === 'eintritt'
              ? 'bg-white text-slate-900 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Calendar className="w-4 h-4 text-emerald-600" />
          <span>3. Rentenalter</span>
        </button>
      </div>

      {/* Active Calculator Component */}
      {activeTab === 'luecke' && <RentenLueckeCalculator />}
      {activeTab === 'berechnung' && <RentenBerechnungCalculator />}
      {activeTab === 'eintritt' && <RentenEintrittsCalculator />}

      <AdSense />

      {/* Overview of all 3 calculators */}
      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-1">Rentenlücken-Rechner</h3>
          <p className="text-xs text-slate-600">Eingabe: Einkommen & Rente → Ausgabe: Monatliche Lücke & Kapitalbedarf.</p>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-1">Gesetzlicher Rentenrechner</h3>
          <p className="text-xs text-slate-600">Eingabe: Entgeltpunkte & Rentenwert (42,52 €) → Ausgabe: Brutto- & Nettorente.</p>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-1">Renteneintritts-Rechner</h3>
          <p className="text-xs text-slate-600">Eingabe: Geburtsjahr & Beitragsjahre → Ausgabe: Regulärer & frühestmöglicher Eintritt.</p>
        </div>
      </div>

      <SourceFootnote />
    </div>
  );
}
