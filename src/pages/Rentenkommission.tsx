import React from 'react';
import { Shield, CheckCircle2, AlertTriangle, FileText, ArrowRight } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';

export default function Rentenkommission() {
  const empfehlungen = [
    {
      id: 1,
      titel: "Fixierung des Rentenniveaus bei 48 %",
      status: "empfehlung" as const,
      beschreibung: "Das Sicherungsniveau vor Steuern soll bis mindestens 2035 gesetzlich bei 48 % gehalten werden, um Rentner vor Kaufkraftverlusten zu schützen."
    },
    {
      id: 2,
      titel: "Beitragssatzgrenze von maximal 20 %",
      status: "empfehlung" as const,
      beschreibung: "Der Beitragssatz zur gesetzlichen Rentenversicherung soll bis 2030 nicht über 20 % und bis 2035 nicht über 22 % steigen."
    },
    {
      id: 3,
      titel: "Aufbau Generationenkapital (Staatlicher Fonds)",
      status: "gilt_ab" as const,
      dateStr: "2026",
      beschreibung: "Aufbau eines aktienbasierten Deckungskapitals durch den Bund zur Entlastung des Beitragszahlers ab den 2030er Jahren."
    },
    {
      id: 4,
      titel: "Verbindlicher Ausgleichsmechanismus im Nachhaltigkeitsfaktor",
      status: "empfehlung" as const,
      beschreibung: "Anpassung des Nachhaltigkeitsfaktors zur Abfederung geburtenstarker Jahrgänge (Babyboomer-Eintritt ab 2026)."
    },
    {
      id: 5,
      titel: "Ausbau der betrieblichen Altersvorsorge (bAV) für KMU",
      status: "empfehlung" as const,
      beschreibung: "Verpflichtender Arbeitgeberzuschuss von mindestens 15 % bei Entgeltumwandlung wird ausgeweitet und vereinfacht."
    },
    {
      id: 6,
      titel: "Automatisches Opting-Out bei Betriebsrenten",
      status: "empfehlung" as const,
      beschreibung: "Mitarbeiter nehmen automatisch an der betrieblichen Vorsorge teil, sofern sie nicht aktiv widersprechen."
    },
    {
      id: 7,
      titel: "Stufenweise Anpassung der Erwerbsminderungsrente",
      status: "gesetz" as const,
      beschreibung: "Verbesserte Zurechnungszeiten für Neurentner bei voller und teilweiser Erwerbsminderung bereits gesetzlich umgesetzt."
    },
    {
      id: 8,
      titel: "Einführung eines digitalen Rentenübersicht-Portals",
      status: "gesetz" as const,
      beschreibung: "Zentrale Plattform zur Aggregation von gesetzlicher, betrieblicher und privater Vorsorge (Digitale Rentenübersicht)."
    }
  ];

  const faqs = [
    {
      question: "Sind die Empfehlungen der Rentenkommission bereits Gesetz?",
      answer: "Nein. Die Rentenkommission erarbeitet wissenschaftliche Handlungsempfehlungen für die Bundesregierung. Einige Beschlüsse (wie das Generationenkapital) sind bereits in Gesetzesform gegossen, andere Punkte befinden sich in der parlamentarischen Abstimmung."
    },
    {
      question: "Was garantiert die Rentengarantie nach 2025?",
      answer: "Die gesetzliche Rentengarantie stellt sicher, dass laufende Renten nominal niemals gekürzt werden dürfen – selbst wenn die Lohnentwicklung negativ ausfällt."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenkommission 2026", item: "/rentenkommission" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
          <span>§ BMAS Bericht 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Die 33 Empfehlungen der Rentenkommission 2026 verständlich erklärt
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Umfassende Analyse der Vorschläge der Rentenkommission „Verlässlicher Generationenvertrag“. Bei allen Punkten unterscheiden wir strikt zwischen unverbindlichen Empfehlungen und geltendem Recht.
        </p>
      </div>

      {/* Warning Box on status distinction */}
      <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 text-xs mb-8 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <strong>Rechtlicher Status-Hinweis:</strong> Empfehlungen der Rentenkommission sind noch kein rechtsgültiges Gesetz. Erst wenn der Bundestag ein Gesetz beschließt, treten die Regelungen in Kraft.
        </div>
      </div>

      {/* Grid of Recommendations */}
      <div className="space-y-4 mb-12">
        {empfehlungen.map((emp) => (
          <div key={emp.id} className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">
                  #{emp.id}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{emp.titel}</h3>
              </div>
              <StatusBadge type={emp.status} dateStr={emp.dateStr} />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pl-9">
              {emp.beschreibung}
            </p>
          </div>
        ))}
      </div>

      <SourceFootnote />
    </div>
  );
}
