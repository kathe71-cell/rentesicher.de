import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export interface PrimarySource {
  title: string;
  url: string;
}

interface SourceFootnoteProps {
  sources?: PrimarySource[];
}

export default function SourceFootnote({ sources }: SourceFootnoteProps) {
  const defaultSources: PrimarySource[] = [
    { title: "Deutsche Rentenversicherung Bund", url: "https://www.deutsche-rentenversicherung.de" },
    { title: "BMAS (Bundesministerium für Arbeit)", url: "https://www.bmas.de" },
    { title: "Gesetze im Internet / SGB VI", url: "https://www.gesetze-im-internet.de/sgb_6/" }
  ];

  const activeSources = sources && sources.length > 0 ? sources : defaultSources;

  return (
    <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500 bg-slate-100/70 p-5 rounded-xl space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-3 font-semibold text-slate-700">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-slate-600 shrink-0" />
          <span>Offizielle Primärquellen & Gesetzesgrundlagen</span>
        </div>
        <span className="text-[11px] text-slate-500 font-medium">Zuletzt fachlich geprüft: September 2026</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
        {activeSources.map((source, i) => (
          <a 
            key={i}
            href={source.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-slate-700 hover:text-blue-900"
          >
            <span className="font-medium truncate pr-2">{source.title}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </a>
        ))}
      </div>

      <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
        <strong>Unabhängigkeits- & Haftungshinweis:</strong> Diese Website ersetzt keine individuelle Renten-, Steuer-, Rechts- oder Finanzberatung. Für persönliche Empfehlungen wenden Sie sich an die Deutsche Rentenversicherung, einen nach § 10 RDG zugelassenen Rentenberater oder einen Steuerberater.
      </p>
    </div>
  );
}
