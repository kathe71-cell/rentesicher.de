import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';
import { TrendingUp, AlertTriangle, Info, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function EtfRente() {
  const faqs = [
    {
      question: "Welche Rolle können breit gestreute Aktien-ETFs bei der Altersvorsorge spielen?",
      answer: "Breit gestreute Aktien-ETFs (z. B. auf den MSCI World oder FTSE All-World) ermöglichen Privatanlegern die Teilhabe an der globalen Wirtschaftsentwicklung. Durch niedrige laufende Produktkosten (TER) eignen sie sich für den langfristigen Vermögensaufbau über mehrere Jahrzehnte."
    },
    {
      question: "Welche Kosten fallen bei einem ETF-Sparplan an?",
      answer: "Bei ETFs fallen laufende Gesamtkostenquoten (TER – Total Expense Ratio) von ca. 0,10 % bis 0,50 % p.a. an. Hinzu kommen je nach Broker eventuelle Depotführungsgebühren, Ausführungsgebühren für Sparpläne sowie handelsübliche Kauf- und Verkauf-Spreads."
    },
    {
      question: "Was ist das Sequenzrisiko (Sequence of Returns Risk)?",
      answer: "Das Sequenzrisiko bezeichnet die Gefahr, dass kurz vor oder zu Beginn des Ruhestands ein strammer Börsencrash eintritt. Wenn in dieser Phase Anteile verkauft werden müssen, um den Lebensunterhalt zu bestreiten, wird das Kapital übermäßig schnell aufgebraucht."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "ETF Altersvorsorge", item: "/etf-rente" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          ETF-Sparplan für die Altersvorsorge: Möglichkeiten, Kosten & Risiken
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Welche Rolle breit gestreute Aktien-ETFs beim langfristigen Vermögensaufbau spielen können, wie Gesamtkosten wirken und welche Risiken vor Rentenbeginn beachtet werden müssen.
        </p>
      </div>

      {/* Disclaimer Box */}
      <div className="p-4 bg-amber-50 border border-amber-200 text-amber-950 rounded-xl mb-8 text-xs sm:text-sm flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong>Wichtiger Hinweis:</strong> Diese Seite stellt keine individuelle Anlageberatung oder Kaufempfehlung dar. Wertpapierangebote unterliegen Kursschwankungen und Verlustrisiken.
        </div>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Funktionsweise von Aktien-ETFs in der Altersvorsorge
        </h2>
        <p className="text-slate-700">
          Ein ETF (Exchange Traded Fund) ist ein börsengehandelter Indexfonds, der die Wertentwicklung eines festgelegten Marktindexes (z. B. MSCI World mit über 1.400 Unternehmen aus 23 Industrieländern) möglichst exakt abbildet. Durch die breite Streuung (Diversifikation) wird das Einzelwertrisiko von Unternehmenspleiten im Vergleich zu Einzelaktien drastisch reduziert.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">
          Kostenstruktur eines ETF-Sparplans
        </h2>
        <p className="text-slate-700">
          Obwohl ETFs im Vergleich zu aktiv gemanagten Investmentfonds sehr kostengünstig sind, fallen auch hier gebührenrelevante Faktoren an:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Gesamtkostenquote (TER):</strong> Die laufenden Fondskosten bewegen sich bei weltweiten Standard-ETFs meist zwischen 0,10 % und 0,30 % pro Jahr und werden direkt aus dem Fondsvermögen entnommen.</li>
          <li><strong>Depot- & Sparplanausführungsgebühren:</strong> Manche Banken verlangen fixe oder prozentuale Gebühren pro Sparratenausführung (z. B. 1,50 % der Sparrate oder Festgebühren von 1,50 €). Viele Direktbroker bieten jedoch kostenfreie Aktionssparpläne an.</li>
          <li><strong>Handelsspannen (Spread):</strong> Die Differenz zwischen Kauf- und Verkaufspreis an der Börse.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900">
          Historische Renditebetrachtung & Risikohinweis
        </h2>
        <div className="p-5 bg-slate-900 text-white rounded-xl my-6">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Info className="w-4 h-4" />
            <span>Historische Daten & Methodik</span>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">
            Historisch erzielte der MSCI World Index über Zeiträume von 15 bis 30 Jahren (Betrachtungszeitraum 1970–2025, Quelle: MSCI Inc. Index Data) eine durchschnittliche Rendite von nominal ca. 6 % bis 8 % pro Jahr vor Inflation. 
            <strong className="text-amber-400 block mt-2">
              Wichtig: Weder historische Erträge noch vergangene Wertentwicklungen sind eine Garantie oder ein verlässlicher Indikator für zukünftige Renditen.
            </strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          Zentrale Risiken bei der ETF-Altersvorsorge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1 text-sm">Kursschwankungen & Verlustrisiko</h3>
            <p className="text-xs text-slate-600">
              Aktienmärkte unterliegen zyklischen Schwankungen. In Krisenzeiten können weltweite Indizes vorübergehend um 30 % bis 50 % einbrechen.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1 text-sm">Sequenzrisiko (Entnahmerisiko)</h3>
            <p className="text-xs text-slate-600">
              Tritt kurz vor Rentenbeginn ein starker Kursverfall ein, müssen Anteile zu niedrigen Preisen verkauft werden. Ein schrittweiser Umschichtungsprozess (Derisking) vor dem Ruhestand ist daher ratsam.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1 text-sm">Währungsrisiko</h3>
            <p className="text-xs text-slate-600">
              Globale Indizes wie der MSCI World notieren zu großen Teilen in US-Dollar. Wechselkursschwankungen zwischen Euro und US-Dollar beeinflussen die Rendite im Heimatland.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1 text-sm">Keine Beitrags- oder Rentengarantie</h3>
            <p className="text-xs text-slate-600">
              Im Gegensatz zu klassischen Rentenversicherungen gibt es bei reinen ETF-Depots keine Mindestbeitragsgarantie und keine Versicherung gegen das Langlebigkeitsrisiko.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">
          Unterschiede zwischen ETF-Eigenanlage und Rentenversicherung
        </h2>
        <p className="text-slate-700">
          Ein eigenverantwortlicher ETF-Sparplan bietet maximale Flexibilität und die geringste Kostenbelastung, erfordert jedoch Disziplin in Marktphasen mit fallenden Kursen. Eine fondsgebundene Rentenversicherung verpackt ETFs hingegen in einen Versicherungsmantel mit lebenslanger Garantierente und Ertragsanteilsbesteuerung, fordert dafür aber laufende Versicherungskosten.
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
