import React, { useState } from 'react';
import { Calculator, Award, Info, Share2, Check } from 'lucide-react';

export default function RentenBerechnungCalculator() {
  const [entgeltpunkte, setEntgeltpunkte] = useState<number>(45); // Standard Eckrentner: 45 EP
  const [rentenwert, setRentenwert] = useState<number>(42.52); // Rentenwert 2026: 42,52 €
  const [zugangsfaktor, setZugangsfaktor] = useState<number>(1.0); // 1.0 für regulären Eintritt
  const [copied, setCopied] = useState<boolean>(false);

  const bruttoRente = entgeltpunkte * zugangsfaktor * rentenwert;
  // Abzüge: Krankenversicherung der Rentner (7.3% + 0.8% Zusatz) + Pflegeversicherung (3.4%) = ~11.5%
  const abzuege = bruttoRente * 0.115;
  const nettoRenteEst = bruttoRente - abzuege;

  const handleShare = () => {
    if (typeof window === 'undefined') return;
    const url = `${window.location.origin}/rentenberechnung?ep=${entgeltpunkte}&rw=${rentenwert}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-700" />
            <h3 className="text-xl font-bold text-slate-900">Gesetzlicher Rentenrechner 2026</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Berechnung nach der offiziellen Rentenformel: <em>Rente = EP × ZF × RW × RAF</em>
          </p>
        </div>
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          {copied ? 'Link kopiert!' : 'Ergebnis teilen'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Gesammelte Entgeltpunkte (EP)
          </label>
          <input
            type="number"
            step="0.1"
            value={entgeltpunkte}
            onChange={(e) => setEntgeltpunkte(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-900 font-semibold"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">45 EP = Standard-Eckrentner</span>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Aktueller Rentenwert 2026 (€)
          </label>
          <input
            type="number"
            step="0.01"
            value={rentenwert}
            onChange={(e) => setRentenwert(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-900 font-semibold"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">Amtlich ab 1. Juli 2026: 42,52 €</span>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Zugangsfaktor (Abschläge / Zuschläge)
          </label>
          <select
            value={zugangsfaktor}
            onChange={(e) => setZugangsfaktor(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-900 font-semibold"
          >
            <option value={1.0}>1,00 (Regulärer Renteneintritt)</option>
            <option value={0.856}>0,856 (Vorzeitiger Eintritt: 4 Jahre früher = -14,4 %)</option>
            <option value={0.928}>0,928 (Vorzeitiger Eintritt: 2 Jahre früher = -7,2 %)</option>
            <option value={1.06}>1,06 (Späterer Eintritt: 1 Jahr später = +6,0 %)</option>
          </select>
          <span className="text-[11px] text-slate-400 mt-1 block">0,3 % Abschlag pro Monat vorzeitig</span>
        </div>
      </div>

      {/* Result Card */}
      <div className="p-6 bg-slate-900 text-white rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Brutto-Monatsrente</span>
          <div className="text-3xl font-extrabold text-white">
            {bruttoRente.toFixed(2).replace('.', ',')} €
          </div>
          <span className="text-xs text-slate-400 mt-1 block">Vor Abzügen für KV/PV</span>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Geschätzte Abzüge (KV/PV ~11,5%)</span>
          <div className="text-3xl font-extrabold text-amber-400">
            - {abzuege.toFixed(2).replace('.', ',')} €
          </div>
          <span className="text-xs text-slate-400 mt-1 block">Kranken- & Pflegeversicherung</span>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Geschätzte Netto-Rente</span>
          <div className="text-3xl font-extrabold text-emerald-400">
            {nettoRenteEst.toFixed(2).replace('.', ',')} €
          </div>
          <span className="text-xs text-slate-400 mt-1 block">Vor individueller Einkommensteuer</span>
        </div>
      </div>
    </div>
  );
}
