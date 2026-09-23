import React from 'react';
import RentenLueckeCalculator from '../components/RentenLueckeCalculator';
import RentenBerechnungCalculator from '../components/RentenBerechnungCalculator';
import RentenEintrittsCalculator from '../components/RentenEintrittsCalculator';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { Calculator, Calendar, TrendingUp, ArrowDown } from 'lucide-react';

export default function RentenrechnerPage() {
  const faqs = [
    {
      question: "Sind die Rechner auf rentesicher.de kostenlos?",
      answer: "Ja, alle 3 interaktiven Rechner stehen vollständig kostenlos, ohne Registrierung und ohne Weitergabe persönlicher Daten zur freien Nutzung bereit."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Interaktive Rentenrechner", item: "/rentenrechner" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-6 text-center sm:text-left">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Interaktive Rentenrechner: Rentenlücke, Rente & Eintritt
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Kostenlose Modellrechnungen für deine persönliche Vorsorgeplanung. Springe direkt zum gewünschten Rechner:
        </p>
      </div>

      {/* Quick Jump Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
        <a
          href="#rechner-luecke"
          className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md flex items-center justify-between font-bold text-xs text-slate-800 hover:text-amber-700 transition-all active:scale-95"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-amber-600 shrink-0" />
            <span>1. Rentenlücke</span>
          </div>
          <ArrowDown className="w-4 h-4 text-slate-400" />
        </a>

        <a
          href="#rechner-berechnung"
          className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md flex items-center justify-between font-bold text-xs text-slate-800 hover:text-blue-900 transition-all active:scale-95"
        >
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-blue-700 shrink-0" />
            <span>2. Gesetzliche Rente</span>
          </div>
          <ArrowDown className="w-4 h-4 text-slate-400" />
        </a>

        <a
          href="#rechner-eintritt"
          className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md flex items-center justify-between font-bold text-xs text-slate-800 hover:text-emerald-700 transition-all active:scale-95"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>3. Rentenalter</span>
          </div>
          <ArrowDown className="w-4 h-4 text-slate-400" />
        </a>
      </div>

      <div className="space-y-12">
        <section>
          <RentenLueckeCalculator />
        </section>

        <section>
          <RentenBerechnungCalculator />
        </section>

        <section>
          <RentenEintrittsCalculator />
        </section>
      </div>

      <SourceFootnote />
    </div>
  );
}
