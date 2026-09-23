import React from 'react';
import { BookOpen } from 'lucide-react';

export default function SourceFootnote() {
  return (
    <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500 bg-slate-100/60 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <div className="flex items-center gap-2 font-medium text-slate-700">
        <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
        <span>Stand: September 2026 | Quellen: Deutsche Rentenversicherung Bund / BMAS / Bundesgesetzblatt</span>
      </div>
      <div className="text-slate-500">
        Unabhängige Informationsplattform • Keine individuellen Empfehlungen
      </div>
    </div>
  );
}
