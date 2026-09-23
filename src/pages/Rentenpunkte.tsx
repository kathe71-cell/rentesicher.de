import React from 'react';
import SourceFootnote, { PrimarySource } from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { CURRENT_VALUES } from '../data/current-values';
import { ShieldCheck, HelpCircle, Calculator, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Rentenpunkte() {
  const faqs = [
    {
      question: "Wie viel Bruttoeinkommen brauche ich für 1 Rentenpunkt?",
      answer: "Um exakt 1,0 Entgeltpunkt zu erhalten, müssen Sie in einem Kalenderjahr genau das vorläufige Durchschnittsentgelt aller versicherten Arbeitnehmer erzielen."
    },
    {
      question: "Wie viel Euro ist 1 Rentenpunkt monatlich wert?",
      answer: `Der monatliche Wert eines Entgeltpunkts entspricht dem aktuellen Rentenwert von derzeit ${CURRENT_VALUES.rentenwertFormatted} (gemäß § 68 SGB VI).`
    },
    {
      question: "Wie viele Rentenpunkte bekommt man für die Kindererziehung?",
      answer: "Für Kindererziehungszeiten (Mütterrente) wird pro Kind für bis zu 36 Kalendermonate jeweils ca. 1,0 Entgeltpunkt pro Jahr (insgesamt bis zu 3,0 EP) im Rentenkonto gutgeschrieben."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Entgeltpunkte (Rentenpunkte)", item: "/rentenpunkte" }
  ];

  const primarySources: PrimarySource[] = [
    { title: "§ 63 SGB VI - Grundsätze der Rentenberechnung", url: "https://www.gesetze-im-internet.de/sgb_6/__63.html" },
    { title: "§ 68 SGB VI - Aktueller Rentenwert", url: "https://www.gesetze-im-internet.de/sgb_6/__68.html" },
    { title: "DRV Ratgeber Entgeltpunkte", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Rentenberechnung/rentenberechnung.html" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Entgeltpunkte (Rentenpunkte): Berechnung, Wert & Beispiele
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Fachlicher Ratgeber zu Entgeltpunkten nach § 63 SGB VI: Funktionsweise der Währung der Rentenversicherung, Berechnungsformel auf Basis des Durchschnittseinkommens, Höchstgrenzen und Gutschriften für Kinder und Pflege.
        </p>
      </div>

      <section className="prose prose-slate max-w-none space-y-8">
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-700 shrink-0" />
            Was sind Entgeltpunkte?
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-0">
            Entgeltpunkte (umgangssprachlich <em>Rentenpunkte</em>) bilden gemäß <strong>§ 63 SGB VI</strong> die zentrale Berechnungseinheit der gesetzlichen Rentenversicherung. Sie drücken das Verhältnis des individuellen Jahreseinkommens eines Arbeitnehmers zum Durchschnittseinkommen aller Versicherten im selben Kalenderjahr aus.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Die Berechnungsformel der Entgeltpunkte
          </h2>
          <p className="text-slate-700">
            Die Ermittlung der jährlichen Entgeltpunkte erfolgt nach einer einfachen mathematischen Formel:
          </p>

          <div className="p-5 bg-slate-900 text-white rounded-xl my-4 space-y-2">
            <div className="font-mono text-amber-400 font-bold text-sm sm:text-base">
              Entgeltpunkte (EP) = Individueller Bruttojahresarbeitsverdienst / Vorläufiges Durchschnittsentgelt
            </div>
            <p className="text-xs text-slate-300">
              Verdient ein Arbeitnehmer in einem Jahr exakt so viel wie der Durchschnitt aller Versicherten, erhält er genau <strong>1,0000 Entgeltpunkt</strong>.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Monatsmonetarisierung: Was ist 1 Rentenpunkt wert?
          </h2>
          <p className="text-slate-700">
            Der Monatsrentenwert eines Entgeltpunkts ist im <strong>Aktuellen Rentenwert (§ 68 SGB VI)</strong> geregelt. Jeder gesammelte Entgeltpunkt bringt zum Renteneintritt monatlich genau diesen Euro-Betrag an Bruttorente:
          </p>
          <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl my-4">
            <div className="text-lg font-bold text-blue-950">
              Aktueller Rentenwert: {CURRENT_VALUES.rentenwertFormatted} monatlich pro EP
            </div>
            <p className="text-xs text-blue-900 mt-1">
              Ein Standard-Eckrentner mit 45 Beitragsjahren und jeweils 1,0 EP kommt somit auf eine monatliche Brutto-Standardrente von <strong>{CURRENT_VALUES.standardrenteFormatted}</strong>.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Beitragsfreie Entgeltpunkte: Kindererziehung & Pflege
          </h2>
          <p className="text-slate-700">
            Entgeltpunkte werden nicht nur durch eigene Beitragszahlung aus Erwerbseinkommen erworben, sondern auch durch staatlich anerkannte Sozialzeiten:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base">
            <li><strong>Kindererziehungszeiten (Mütterrente):</strong> Bis zu 36 Monate pro Kind. Pro Jahr wird ca. 1,0 EP im Versicherungskonto gutgeschrieben (insgesamt bis zu 3,0 EP pro Kind).</li>
            <li><strong>Häusliche Pflege von Angehörigen:</strong> Wer Angehörige ab Pflegegrad 2 ehrenamtlich pflegt, erhält je nach Pflegegrad und Aufwand Entgeltpunkte direkt von der Pflegekasse eingezahlt.</li>
          </ul>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-700 shrink-0" />
            Häufige Fragen zu Entgeltpunkten (FAQ)
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
