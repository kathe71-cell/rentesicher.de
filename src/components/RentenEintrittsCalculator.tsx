import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, CheckCircle2, Share2, Check } from 'lucide-react';

export default function RentenEintrittsCalculator() {
  const [geburtsjahr, setGeburtsjahr] = useState<number>(1965);
  const [beitragsjahre, setBeitragsjahre] = useState<number>(40);
  const [copied, setCopied] = useState<boolean>(false);

  // Reguläre Regelaltersgrenze
  let regAge = 67;
  if (geburtsjahr < 1947) regAge = 65;
  else if (geburtsjahr >= 1947 && geburtsjahr <= 1958) regAge = 65 + (geburtsjahr - 1946) / 12;
  else if (geburtsjahr >= 1959 && geburtsjahr <= 1963) regAge = 66 + (geburtsjahr - 1958) / 12;
  else regAge = 67;

  const regYear = Math.floor(geburtsjahr + regAge);

  // Frühestmöglicher Eintritt
  let earAge = 63;
  let earNotes = '';
  let abschlagPercent = 0;

  if (beitragsjahre >= 45) {
    // Besonders langjährig Versicherte
    if (geburtsjahr >= 1964) {
      earAge = 65;
      earNotes = 'Abschlagsfreie Altersrente für besonders langjährig Versicherte (45 Beitragsjahre)';
      abschlagPercent = 0;
    } else {
      earAge = 63 + Math.min(2, Math.max(0, (geburtsjahr - 1952) * (2 / 12)));
      earNotes = 'Abschlagsfreie Rente für besonders langjährig Versicherte';
      abschlagPercent = 0;
    }
  } else if (beitragsjahre >= 35) {
    // Langjährig Versicherte
    earAge = 63;
    const missingMonths = (regAge - 63) * 12;
    abschlagPercent = Math.min(14.4, missingMonths * 0.3);
    earNotes = `Altersrente für langjährig Versicherte mit ${abschlagPercent.toFixed(1).replace('.', ',')}% dauerhaftem Abschlag`;
  } else {
    earAge = regAge;
    earNotes = 'Kein vorzeitiger Renteneintritt möglich (weniger als 35 Beitragsjahre)';
    abschlagPercent = 0;
  }

  const earYear = Math.floor(geburtsjahr + earAge);

  const handleShare = () => {
    if (typeof window === 'undefined') return;
    const url = `${window.location.origin}/rentenalter?bj=${geburtsjahr}&bjahre=${beitragsjahre}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Calendar className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-bold text-slate-900">„Wann kann ich in Rente?"-Rechner 2026</h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">Ermittle dein gesetzliches Reguläres Eintrittsalter und Frühestmögliche Optionen.</p>
        </div>
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
          {copied ? 'Link kopiert!' : 'Ergebnis teilen'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Dein Geburtsjahr
          </label>
          <input
            type="number"
            value={geburtsjahr}
            onChange={(e) => setGeburtsjahr(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-slate-900 font-semibold"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">Z. B. 1965 (Jahrgang für Regelaltersgrenze 67)</span>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
            Voraussichtliche Beitragsjahre (Wartezeit)
          </label>
          <input
            type="number"
            value={beitragsjahre}
            onChange={(e) => setBeitragsjahre(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-slate-900 font-semibold"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">Inkl. Ausbildung, Kindererziehung & Arbeitslosigkeit</span>
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-900 text-white rounded-xl">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Regulärer Renteneintritt</span>
            <div className="text-3xl font-extrabold text-white mt-1">
              Alter {Math.floor(regAge)} <span className="text-lg font-medium text-slate-400">({regYear})</span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Reguläre Regelaltersgrenze. Abschlagsfrei nach gesetzlicher Vorgabe.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
          <div className="p-3 bg-amber-500/20 text-amber-400 rounded-lg shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Frühestmöglicher Eintritt</span>
            <div className="text-3xl font-extrabold text-amber-400 mt-1">
              Alter {Math.floor(earAge)} <span className="text-lg font-medium text-slate-300">({earYear})</span>
            </div>
            <p className="text-xs text-slate-300 mt-1">{earNotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
