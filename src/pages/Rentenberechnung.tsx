import React from 'react';
import RentenBerechnungCalculator from '../components/RentenBerechnungCalculator';
import SourceFootnote, { PrimarySource } from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { CURRENT_VALUES } from '../data/current-values';
import { Calculator, HelpCircle, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Rentenberechnung() {
  const faqs = [
    {
      question: "Wie lautet die offizielle gesetzliche Rentenformel?",
      answer: "Nach § 64 SGB VI berechnet sich die monatliche Bruttorente wie folgt: Monatliche Rente = Entgeltpunkte × Zugangsfaktor × Aktueller Rentenwert × Rentenartfaktor."
    },
    {
      question: "Welchen Einfluss hat ein vorzeitiger Renteneintritt auf den Zugangsfaktor?",
      answer: "Bei vorzeitigem Renteneintritt sinkt der Zugangsfaktor für jeden Monat um 0,003 (entspricht 0,3 % dauerhaftem Abschlag von der Rente)."
    },
    {
      question: "Wie hoch ist der Rentenartfaktor bei der normalen Altersrente?",
      answer: "Der Rentenartfaktor (§ 67 SGB VI) beträgt für Reguläre Altersrenten und volle Erwerbsminderungsrenten exakt 1,0."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Gesetzliche Rentenberechnung", item: "/rentenberechnung" }
  ];

  const primarySources: PrimarySource[] = [
    { title: "§ 64 SGB VI - Rentenformel für Monatsrente", url: "https://www.gesetze-im-internet.de/sgb_6/__64.html" },
    { title: "§ 67 SGB VI - Rentenartfaktor", url: "https://www.gesetze-im-internet.de/sgb_6/__67.html" },
    { title: "§ 68 SGB VI - Aktueller Rentenwert", url: "https://www.gesetze-im-internet.de/sgb_6/__68.html" },
    { title: "DRV Fachportal Rentenberechnung", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Rentenberechnung/rentenberechnung.html" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Gesetzliche Rentenberechnung: Rentenformel & Rentenwert
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Berechne deine voraussichtliche gesetzliche Monatsrente auf Basis deiner Entgeltpunkte (Rentenpunkte) und des aktuellen Bundesrentenwerts von {CURRENT_VALUES.rentenwertFormatted}.
        </p>
      </div>

      <RentenBerechnungCalculator />

      <section className="prose prose-slate max-w-none my-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Die gesetzliche Rentenformel nach § 64 SGB VI
          </h2>
          <p className="text-slate-700">
            Die Berechnung der monatlichen Bruttorente folgt im deutschen Rentenrecht einer festgelegten mathematischen Formel:
          </p>

          <div className="p-6 bg-slate-900 text-white rounded-2xl my-4 space-y-3 shadow-md">
            <div className="font-mono text-amber-400 font-bold text-base sm:text-lg">
              Monatliche Rente = EP × ZF × RW × RAF
            </div>
            <p className="text-xs text-slate-300">
              Jedes Element dieser Formel repräsentiert eine gesetzliche Komponente des Rentenrechts.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Die 4 Komponenten der Rentenformel im Detail
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-1">1. Entgeltpunkte (EP)</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Spiegeln das Verhältnis deines jährlichen Bruttoeinkommens zum Durchschnittseinkommen aller Versicherten wider. 1,0 EP entspricht genau einem Jahr Durchschnittsgehalt.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-1">2. Zugangsfaktor (ZF)</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Berücksichtigt den Zeitpunkt des Renteneintritts. Bei regulärem Eintritt beträgt der ZF 1,0. Bei vorzeitigem Eintritt sinkt er um 0,003 pro Monat (-0,3 % Abschlag).
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-1">3. Aktueller Rentenwert (RW)</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Entspricht dem monatlichen Euro-Wert eines einzelnen Entgeltpunkts. Aktueller Wert: <strong>{CURRENT_VALUES.rentenwertFormatted}</strong>.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-1">4. Rentenartfaktor (RAF)</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Bestimmt das Auszahlungsniveau je nach Rentenart (§ 67 SGB VI). Bei Altersrenten und vollen Erwerbsminderungsrenten beträgt der Faktor 1,0.
              </p>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-700 shrink-0" />
            Häufige Fragen zur Rentenberechnung (FAQ)
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
