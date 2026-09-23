import React from 'react';
import SourceFootnote, { PrimarySource } from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { ShieldCheck, HelpCircle, CheckCircle2, Calculator, Info, FileText } from 'lucide-react';

export default function Grundrente() {
  const faqs = [
    {
      question: "Muss ich den Grundrentenzuschlag extra beantragen?",
      answer: "Nein. Die Deutsche Rentenversicherung prüft den Anspruch auf den Grundrentenzuschlag vollautomatisch. Es ist kein separater Antrag erforderlich."
    },
    {
      question: "Zählen Zeiten der Arbeitslosigkeit als Grundrentenzeiten?",
      answer: "Nein. Zeiten des Bezugs von Arbeitslosengeld I, Arbeitslosengeld II (Bürgergeld) oder reine Anrechnungszeiten zählen gesetzlich nicht als Grundrentenzeiten."
    },
    {
      question: "Wie hoch ist der maximale Grundrentenzuschlag?",
      answer: "Der individuelle Zuschlag unterscheidet sich je nach persönlichem Rentenkonto. Der rechnerische Höchstbetrag liegt bei knapp 400 Euro brutto im Monat."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Grundrente", item: "/grundrente" }
  ];

  const primarySources: PrimarySource[] = [
    { title: "§ 76g SGB VI - Grundrentenzuschlag", url: "https://www.gesetze-im-internet.de/sgb_6/__76g.html" },
    { title: "§ 97a SGB VI - Einkommensanrechnung Grundrente", url: "https://www.gesetze-im-internet.de/sgb_6/__97a.html" },
    { title: "DRV Fachportal Grundrente", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Grundrente/grundrente.html" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Grundrente: Anspruch, Einkommensprüfung & Zuschlag
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Systematischer Ratgeber zum Grundrentenzuschlag nach § 76g SGB VI: Erforderliche Grundrentenzeiten, automatische Einkommensprüfung beim Finanzamt, Freibeträge und die konkrete Berechnung.
        </p>
      </div>

      <section className="prose prose-slate max-w-none space-y-8">
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0" />
            Was ist der Grundrentenzuschlag?
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-0">
            Die sogenannte Grundrente ist keine eigenständige Rentenart, sondern ein gesetzlicher <strong>Zuschlag zur bestehenden Alters- oder Erwerbsminderungsrente</strong> (§ 76g SGB VI). Sie kommt Menschen zugute, die viele Jahre erwerbstätig waren, Kinder erzogen oder Angehörige gepflegt haben, dabei jedoch unterdurchschnittlich verdient haben.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Erforderliche Grundrentenzeiten (Mindestwartezeit)
          </h2>
          <p className="text-slate-700">
            Um einen Anspruch auf den Grundrentenzuschlag zu haben, müssen mindestens <strong>33 Jahre an Grundrentenzeiten</strong> nachgewiesen werden. Ab <strong>35 Jahren</strong> wird der volle Zuschlag berechnet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
              <h3 className="font-bold text-emerald-950 text-sm mb-2">Was zählt als Grundrentenzeit?</h3>
              <ul className="text-xs sm:text-sm text-emerald-900 space-y-1.5 pl-4 list-disc">
                <li>Pflichtbeitragszeiten aus Beschäftigung und Selbstständigkeit</li>
                <li>Kindererziehungszeiten (bis zum 10. Lebensjahr)</li>
                <li>Zeiten der häuslichen Pflege von Angehörigen</li>
                <li>Zeiten des Bezugs von Kranken- oder Übergangsgeld</li>
              </ul>
            </div>

            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl">
              <h3 className="font-bold text-rose-950 text-sm mb-2">Was zählt NICHT mit?</h3>
              <ul className="text-xs sm:text-sm text-rose-900 space-y-1.5 pl-4 list-disc">
                <li>Zeiten von Arbeitslosengeld I und Bürgergeld (ALG II)</li>
                <li>Freiwillige Beitragszahlungen</li>
                <li>Schul-, Fachschul- und Hochschulausbildungszeiten</li>
                <li>Minijobs ohne eigene Beitragsaufstockung</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Automatische Einkommensprüfung (§ 97a SGB VI)
          </h2>
          <p className="text-slate-700">
            Die Gewährung des Grundrentenzuschlags unterliegt einer gesetzlichen Einkommensprüfung. Die Deutsche Rentenversicherung ermittelt das zu versteuernde Einkommen im automatischen Datenabgleich mit den Finanzbehörden:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base">
            <li><strong>Freibetrag für Alleinstehende:</strong> Bis zu einem Einkommen von ca. <strong>1.375 € netto</strong> im Monat wird der Zuschlag ungekürzt gezahlt. Einkommen darüber wird zu 60 % angerechnet. Ab ca. 1.750 € entfällt der Zuschlag vollständig.</li>
            <li><strong>Freibetrag für Ehepaare/Lebenspartner:</strong> Der volle Freibetrag liegt bei ca. <strong>2.145 € netto</strong> pro Monat.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Berechnung des Grundrentenzuschlags
          </h2>
          <p className="text-slate-700">
            Für die Berechnung werden die gesammelten Entgeltpunkte aus den Grundrentenzeiten herangezogen:
          </p>
          <div className="p-5 bg-slate-900 text-white rounded-xl space-y-3">
            <h3 className="font-bold text-amber-400 text-base mt-0">Berechnungslogik nach § 76g SGB VI</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Die im Schnitt erreichten Entgeltpunkte (mindestens 0,3 EP, maximal 0,8 EP pro Jahr) werden für maximal 35 Jahre verdoppelt, höchstens jedoch auf 0,8 EP aufgestockt. Von diesem errechneten Zuschlag wird ein gesetzlicher Pauschalabzug von 12,5 % vorgenommen.
            </p>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-700 shrink-0" />
            Häufige Fragen zur Grundrente (FAQ)
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SourceFootnote sources={primarySources} />
    </div>
  );
}
