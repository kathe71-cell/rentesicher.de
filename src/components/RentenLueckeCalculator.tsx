import React, { useState } from 'react';
import { Calculator, AlertTriangle, TrendingUp, DollarSign, Share2, Check } from 'lucide-react';

export default function RentenLueckeCalculator() {
  const [gehalt, setGehalt] = useState<number>(3200);
  const [gesetzlicheRente, setGesetzlicheRente] = useState<number>(1600);
  const [wunschEinkommen, setWunschEinkommen] = useState<number>(2600);
  const [copied, setCopied] = useState<boolean>(false);

  const rentenluecke = Math.max(0, wunschEinkommen - gesetzlicheRente);
  // Rentenlücke hochgerechnet auf 25 Jahre Ruhestand (ohne Inflation)
  const kapitalBedarf = rentenluecke * 12 * 25;

  const handleShare = () => {
    if (typeof window === 'undefined') return;
    const url = `${window.location.origin}/rentenluecke?gehalt=${gehalt}&rente=${gesetzlicheRente}&wunsch=${wunschEinkommen}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-bold text-slate-900">Interaktiver Rentenlücken-Rechner 2026</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">Berechne deine monatliche Versorgungslücke und das erforderliche Kapitalsolltarget.</p>
        </div>
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          {copied ? 'Link kopiert!' : 'Berechnung teilen'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Aktuelles Nettoeinkommen (€)
          </label>
          <input
            type="number"
            value={gehalt}
            onChange={(e) => setGehalt(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 font-semibold"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">Monatliches Auszahlungsgehalt heute</span>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Erwartete Gesetzliche Rente (€)
          </label>
          <input
            type="number"
            value={gesetzlicheRente}
            onChange={(e) => setGesetzlicheRente(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 font-semibold"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">Laut offizieller DRV-Renteninformation</span>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Wunsch-Einkommen im Alter (€)
          </label>
          <input
            type="number"
            value={wunschEinkommen}
            onChange={(e) => setWunschEinkommen(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 font-semibold"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">Richtwert: ca. 80% des heutigen Netto</span>
        </div>
      </div>

      {/* Ergebnis Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-slate-900 text-white rounded-xl">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-500/20 text-amber-400 rounded-lg shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Monatliche Rentenlücke</span>
            <div className="text-3xl font-extrabold text-amber-400 mt-1">
              {rentenluecke.toLocaleString('de-DE')} € <span className="text-xs font-normal text-slate-300">/ Monat</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Betrag, der monatlich im Ruhestand zur Deckung deiner Lebenshaltungskosten fehlt.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
          <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Erforderliches Kapital (25 Jahre)</span>
            <div className="text-3xl font-extrabold text-white mt-1">
              {kapitalBedarf.toLocaleString('de-DE')} €
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Benötigtes Vermögenspolster zu Beginn des Ruhestands (ohne Zinseszins & Inflation).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
