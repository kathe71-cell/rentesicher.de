import React from 'react';
import RentenEintrittsCalculator from '../components/RentenEintrittsCalculator';
import SourceFootnote, { PrimarySource } from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { Calendar, HelpCircle, CheckCircle2, Clock } from 'lucide-react';

export default function Rentenalter() {
  const faqs = [
    {
      question: "Wann erreiche ich meine reguläre Regelaltersgrenze?",
      answer: "Für alle Geburtsjahrgänge ab 1964 liegt die gesetzliche Regelaltersgrenze bei exakt 67 Jahren (§ 35 SGB VI). Für Jahrgänge von 1947 bis 1963 erfolgte die Anhebung schrittweise pro Jahrgang."
    },
    {
      question: "Wann kann ich frühestens in Rente gehen?",
      answer: "Wer 35 Beitragsjahre nachweist (langjährig Versicherte), kann ab Alter 63 mit Abschlägen (0,3 % pro Monat vorzeitig, max. 14,4 %) in Rente gehen. Wer 45 Beitragsjahre vorweist, kann abschlagsfrei (je nach Jahrgang ab 63 bis 65 Jahren) in Rente gehen."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Renteneintrittsalter", item: "/rentenalter" }
  ];

  const primarySources: PrimarySource[] = [
    { title: "§ 35 SGB VI - Regelaltersrente", url: "https://www.gesetze-im-internet.de/sgb_6/__35.html" },
    { title: "§ 235 SGB VI - Anhebung der Regelaltersgrenze", url: "https://www.gesetze-im-internet.de/sgb_6/__235.html" },
    { title: "DRV Ratgeber Regelaltersrente", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Regelaltersrente/regelaltersrente_node.html" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Wann kann ich in Rente? Rentenalter einfach erklärt
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Ermittle mit unserem Rechner dein exaktes gesetzliches Reguläres Eintrittsalter sowie die gesetzlichen Bedingungen für Frührente und die Rente nach 45 Beitragsjahren.
        </p>
      </div>

      <RentenEintrittsCalculator />

      <section className="prose prose-slate max-w-none my-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Die Anhebung der Regelaltersgrenze auf 67 Jahre (§ 235 SGB VI)
          </h2>
          <p className="text-slate-700">
            Seit dem Gesetz zur Anpassung der Regelaltersgrenze wird das gesetzliche Eintrittsalter für die Regelaltersrente für Jahrgänge ab 1947 schrittweise von 65 auf 67 Jahre angehoben:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold">
                  <th className="p-3 border border-slate-200 text-left">Geburtsjahrgang</th>
                  <th className="p-3 border border-slate-200 text-left">Gesetzliche Regelaltersgrenze</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">Bis 1946</td>
                  <td className="p-3 border border-slate-200 text-slate-700">65 Jahre</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">1947 bis 1958</td>
                  <td className="p-3 border border-slate-200 text-slate-700">65 Jahre + 1 Monat pro Jahrgang</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">1959 bis 1963</td>
                  <td className="p-3 border border-slate-200 text-slate-700">66 Jahre + 2 Monate pro Jahrgang</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">Ab Geburtsjahrgang 1964</td>
                  <td className="p-3 border border-slate-200 text-blue-900 font-bold">Exakt 67 Jahre</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Übersicht der Vorruhestandsoptionen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-1">35 Beitragsjahre (Langjährig)</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Eintritt ab 63 Jahren möglich. Rentenabschlag: 0,3 % für jeden Monat vorzeitigen Eintritts vor der Regelaltersgrenze (max. 14,4 %).
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-1">45 Beitragsjahre (Besonders langjährig)</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Abschlagsfreier Eintritt vor Erreichen der Altersgrenze 67 (je nach Jahrgang ab 63 bis 65 Jahren).
              </p>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-700 shrink-0" />
            Häufige Fragen zum Rentenalter (FAQ)
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
