import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function SourceFootnote() {
  return (
    <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500 bg-slate-100/70 p-5 rounded-xl space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-3 font-semibold text-slate-700">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-slate-600 shrink-0" />
          <span>Offizielle Primärquellen & Gesetzesgrundlagen (Stand: September 2026)</span>
        </div>
        <span className="text-[11px] text-slate-400 font-normal">Fachredaktion rentesicher.de</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
        <a 
          href="https://www.deutsche-rentenversicherung.de" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-slate-700 hover:text-blue-900"
        >
          <span>Deutsche Rentenversicherung Bund</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>

        <a 
          href="https://www.bmas.de" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-slate-700 hover:text-blue-900"
        >
          <span>BMAS (Bundesministerium für Arbeit)</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>

        <a 
          href="https://www.gesetze-im-internet.de" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-slate-700 hover:text-blue-900"
        >
          <span>Bundesgesetzblatt / SGB VI & BetrAVG</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>

      <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
        <strong>Unabhängigkeits- & Haftungshinweis:</strong> Diese Website ersetzt keine individuelle Renten-, Steuer-, Rechts- oder Finanzberatung. Für persönliche Empfehlungen wenden Sie sich an die Deutsche Rentenversicherung, einen nach § 10 RDG zugelassenen Rentenberater oder einen Steuerberater.
      </p>
    </div>
  );
}
