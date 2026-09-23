import React, { useState } from 'react';
import { Calculator, AlertTriangle, TrendingUp, Share2, Check, Info } from 'lucide-react';

export default function RentenLueckeCalculator() {
  const [gehalt, setGehalt] = useState<number>(3200);
  const [gesetzlicheRente, setGesetzlicheRente] = useState<number>(1600);
  const [wunschEinkommen, setWunschEinkommen] = useState<number>(2600);
  const [copied, setCopied] = useState<boolean>(false);

  const rentenluecke = Math.max(0, wunschEinkommen - gesetzlicheRente);
  const kapitalBedarf = rentenluecke * 12 * 25;

  const handleShare = () => {
    if (typeof window === 'undefined') return;
    const url = `${window.location.origin}/rentenluecke?gehalt=${gehalt}&rente=${gesetzlicheRente}&wunsch=${wunschEinkommen}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="rechner-luecke" className="my-6 sm:my-8 bg-white p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-amber-600 shrink-0" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Interaktiver Rentenlücken-Rechner</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Ermittle deine monatliche Vorsorgelücke und das erforderliche Gesamtsparziel.</p>
        </div>
        <button
          onClick={handleShare}
          className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95 transition-all w-full sm:w-auto"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          {copied ? 'Link kopiert!' : 'Berechnung teilen'}
        </button>
      </div>

      {/* Input Fields Stack - Mobile Friendly */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Aktuelles Nettoeinkommen (€)
          </label>
          <input
            type="number"
            inputMode="numeric"
            value={gehalt || ''}
            onChange={(e) => setGehalt(Number(e.target.value))}
            className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base sm:text-lg font-bold text-slate-900 shadow-sm"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">Monatliches Auszahlungsgehalt heute</span>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Erwartete Gesetzliche Rente (€)
          </label>
          <input
            type="number"
            inputMode="numeric"
            value={gesetzlicheRente || ''}
            onChange={(e) => setGesetzlicheRente(Number(e.target.value))}
            className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base sm:text-lg font-bold text-slate-900 shadow-sm"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">Laut offizieller DRV-Renteninformation</span>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Wunsch-Einkommen im Alter (€)
          </label>
          <input
            type="number"
            inputMode="numeric"
            value={wunschEinkommen || ''}
            onChange={(e) => setWunschEinkommen(Number(e.target.value))}
            className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base sm:text-lg font-bold text-slate-900 shadow-sm"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">Richtwert: ca. 80% des heutigen Netto</span>
        </div>
      </div>

      {/* Ergebnis Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 sm:p-6 bg-slate-900 text-white rounded-xl mb-4 shadow-inner">
        <div className="flex items-start gap-3.5">
          <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-1">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Monatliche Rentenlücke</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1">
              {rentenluecke.toLocaleString('de-DE')} € <span className="text-xs font-normal text-slate-300">/ Monat</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Differenz zwischen Wunscheinkommen und gesetzlicher Rente.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
          <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl shrink-0 mt-1">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Geschätzter Kapitalbedarf (25 Jahre)</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {kapitalBedarf.toLocaleString('de-DE')} €
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Gesamtsumme der Lücken über 25 Rentenjahre.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200/60 leading-relaxed">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <span>
          <strong>* Hinweis zur Berechnung:</strong> Vereinfachte Modellrechnung ohne Inflation, Rendite, Steuern, künftige Rentenanpassungen und bereits vorhandenes Vorsorgevermögen.
        </span>
      </div>
    </div>
  );
}
