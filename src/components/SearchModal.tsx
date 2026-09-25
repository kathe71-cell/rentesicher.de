import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Calculator, ShieldCheck, FileText, ChevronRight, BookOpen } from 'lucide-react';

interface SearchItem {
  id: string;
  title: string;
  category: 'Rechner & Tools' | 'Vorsorge & Säulen' | 'Gesetzliche Rente & Begrifflichkeiten' | 'Ratgeber & Reformen';
  description: string;
  path: string;
  tags: string[];
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    id: 'rentenrechner',
    title: 'Gesamter Rentenrechner Hub',
    category: 'Rechner & Tools',
    description: 'Berechne deine monatliche Brutto- und Nettorente inkl. Abzügen und Steuer.',
    path: '/rentenrechner',
    tags: ['rechner', 'berechnung', 'brutto', 'netto', 'formel', 'entgeltpunkte']
  },
  {
    id: 'rentenluecke',
    title: 'Rentenlücken-Rechner',
    category: 'Rechner & Tools',
    description: 'Ermittle deine Versorgungslücke im Alter unter Berücksichtigung von Inflation.',
    path: '/rentenluecke',
    tags: ['rentenlücke', 'versorgungslücke', 'rechner', 'inflation', 'kaufkraft']
  },
  {
    id: 'rentenberechnung',
    title: 'Gesetzliche Rentenberechnung',
    category: 'Gesetzliche Rente & Begrifflichkeiten',
    description: 'Erklärung der offiziellen Rentenformel: Entgeltpunkte x Zugangsfaktor x Rentenwert x Rentenartfaktor.',
    path: '/rentenberechnung',
    tags: ['formel', 'rentenformel', 'entgeltpunkte', 'zugangsfaktor', 'rentenwert']
  },
  {
    id: 'rentenpunkte',
    title: 'Rentenpunkte & Entgeltpunkte',
    category: 'Gesetzliche Rente & Begrifflichkeiten',
    description: 'Wie Entgeltpunkte gesammelt werden, wie viel 1 Punkt wert ist und wie Durchschnittseinkommen berechnet wird.',
    path: '/rentenpunkte',
    tags: ['entgeltpunkte', 'rentenpunkte', 'durchschnittseinkommen', 'bewertung']
  },
  {
    id: 'rentenalter',
    title: 'Rentenalter & Eintrittszeitpunkt',
    category: 'Gesetzliche Rente & Begrifflichkeiten',
    description: 'Regelaltersgrenze, Rente mit 63/65/67 und Abschläge bei vorzeitigem Renteneintritt.',
    path: '/rentenalter',
    tags: ['rentenalter', 'altersgrenze', 'rente mit 63', 'rente mit 67', 'abschläge']
  },
  {
    id: 'rente-mit-63',
    title: 'Rente mit 63 / Altersrente für langjährig Versicherte',
    category: 'Gesetzliche Rente & Begrifflichkeiten',
    description: 'Voraussetzungen für den vorzeitigen Ruhestand nach 35 oder 45 Beitragsjahren.',
    path: '/rente-mit-63',
    tags: ['rente mit 63', '45 beitragsjahre', '35 jahre', 'abschlagfrei', 'vorruhestand']
  },
  {
    id: 'rentenanpassung',
    title: 'Rentenanpassung & Historie',
    category: 'Gesetzliche Rente & Begrifflichkeiten',
    description: 'Aktuelle Rentenerhöhungen, Entwicklung des Rentenwerts in Ost und West.',
    path: '/rentenanpassung',
    tags: ['rentenerhöhung', 'rentenanpassung', 'rentenwert', 'inflation', 'prozent']
  },
  {
    id: 'rentensteuer',
    title: 'Rentenbesteuerung & Besteuerungsanteil',
    category: 'Gesetzliche Rente & Begrifflichkeiten',
    description: 'Wie Renten versteuert werden, Grundfreibetrag, Rentenfreibetrag und Steuererklärung im Alter.',
    path: '/rentensteuer',
    tags: ['steuer', 'besteuerung', 'rentenfreibetrag', 'finanzamt', 'steuererklärung']
  },
  {
    id: 'rentenbescheid',
    title: 'Rentenbescheid prüfen & verstehen',
    category: 'Gesetzliche Rente & Begrifflichkeiten',
    description: 'Aufbau der jährlichen Renteninformation, Fehlerquellen im Versicherungsverlauf.',
    path: '/rentenbescheid',
    tags: ['rentenbescheid', 'renteninformation', 'versicherungsverlauf', 'kontenklärung']
  },
  {
    id: 'grundrente',
    title: 'Grundrente & Zuschlag',
    category: 'Gesetzliche Rente & Begrifflichkeiten',
    description: 'Zuschlag für langjährige Versicherung bei geringem Einkommen ohne Antragstellung.',
    path: '/grundrente',
    tags: ['grundrente', 'zuschlag', 'mindestrente', 'einkommensprüfung', '33 jahre']
  },
  {
    id: 'erwerbsminderungsrente',
    title: 'Erwerbsminderungsrente (EM-Rente)',
    category: 'Gesetzliche Rente & Begrifflichkeiten',
    description: 'Voraussetzungen bei voller oder teilweiser Erwerbsminderung und medizinischer Begutachtung.',
    path: '/erwerbsminderungsrente',
    tags: ['erwerbsminderung', 'em-rente', 'krankheit', 'berufsunfähigkeit', 'zurechnungszeit']
  },
  {
    id: 'witwenrente',
    title: 'Witwenrente & Hinterbliebenenversorgung',
    category: 'Gesetzliche Rente & Begrifflichkeiten',
    description: 'Kleine und große Witwenrente, Sterbevierteljahr und Einkommensanrechnung.',
    path: '/witwenrente',
    tags: ['witwenrente', 'hinterbliebene', 'sterbevierteljahr', 'waisenrente', 'ehepartner']
  },
  {
    id: 'altersvorsorge',
    title: 'Altersvorsorge Übersicht (Drei Säulen)',
    category: 'Vorsorge & Säulen',
    description: 'Systematischer Vergleich der 3 Säulen: Gesetzlich, betrieblich und privat.',
    path: '/altersvorsorge',
    tags: ['drei säulen', 'vorsorge', 'übersicht', 'sparen', 'vergleich']
  },
  {
    id: 'private-rente',
    title: 'Private Rentenversicherung',
    category: 'Vorsorge & Säulen',
    description: 'Klassische und fondsgebundene Rentenversicherung, Ertragsanteilbesteuerung ab 62 Jahre.',
    path: '/private-rente',
    tags: ['private rente', 'ertragsanteil', 'fondsgebunden', 'lebenslange rente']
  },
  {
    id: 'riester-rente',
    title: 'Riester-Rente Förderung & Zulagen',
    category: 'Vorsorge & Säulen',
    description: 'Staatliche Zulagen, Kinderzulagen und Sonderausgabenabzug beim Riester-Sparen.',
    path: '/riester-rente',
    tags: ['riester', 'zulagen', 'kinderzulage', 'förderung', 'staatlich']
  },
  {
    id: 'betriebliche-altersvorsorge',
    title: 'Betriebliche Altersvorsorge (bAV)',
    category: 'Vorsorge & Säulen',
    description: 'Entgeltumwandlung, Arbeitgeberzuschuss (15%) und Direktversicherung im Betrieb.',
    path: '/betriebliche-altersvorsorge',
    tags: ['bav', 'betrieblich', 'entgeltumwandlung', 'arbeitgeberzuschuss', 'direktversicherung']
  },
  {
    id: 'etf-rente',
    title: 'ETF-Sparplan für die Rente',
    category: 'Vorsorge & Säulen',
    description: 'Langfristiger Vermögensaufbau mit MSCI World, Sparraten, Rendite und Entnahmestrategien.',
    path: '/etf-rente',
    tags: ['etf', 'msci world', 'aktien', 'sparplan', 'entnahmeplan', 'zinseszins']
  },
  {
    id: 'rentenkommission',
    title: 'Rentenkommission & Rentenpaket II',
    category: 'Ratgeber & Reformen',
    description: 'Aktuelle Gesetzesreformen, Haltelinien (48%), Generationenkapital und Zukunftsfähigkeit.',
    path: '/rentenkommission',
    tags: ['rentenkommission', 'rentenpaket', 'haltelinie', 'generationenkapital', 'politik', 'reform']
  }
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredItems = query.trim() === ''
    ? SEARCH_ITEMS.slice(0, 6)
    : SEARCH_ITEMS.filter(item => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.tags.some(tag => tag.toLowerCase().includes(q))
        );
      });

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white text-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-amber-600 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Nach Rechner, Fachbegriff (z.B. Entgeltpunkte, EM-Rente, Riester)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-base font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded font-semibold transition-colors"
            >
              Löschen
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto divide-y divide-slate-100 flex-1">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item.path)}
                className="py-3 px-3 hover:bg-amber-50/70 rounded-xl cursor-pointer transition-colors group flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md uppercase tracking-wider group-hover:bg-amber-200 group-hover:text-amber-900 transition-colors">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-500">
              <BookOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold">Keine Rententhemen oder Rechner zu "{query}" gefunden.</p>
              <p className="text-xs text-slate-400 mt-1">Versuche Begriffe wie „Entgeltpunkte“, „Rentenlücke“, „Riester“ oder „bAV“.</p>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-3 bg-slate-900 text-slate-400 text-xs flex justify-between items-center border-t border-slate-800">
          <div className="flex items-center gap-2">
            <span className="bg-slate-800 text-amber-400 border border-slate-700 px-1.5 py-0.5 rounded text-[10px] font-mono">⌘K</span>
            <span>Öffnen / Schließen</span>
          </div>
          <div className="text-[11px]">
            * Echtzeit-Index • Keine Tracking-Daten
          </div>
        </div>
      </div>
    </div>
  );
}
