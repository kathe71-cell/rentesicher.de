import React from 'react';
import SourceFootnote, { PrimarySource } from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { ShieldCheck, HelpCircle, Calendar, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function RenteMit63() {
  const faqs = [
    {
      question: "Kann ich heute noch mit 63 Jahren abschlagsfrei in Rente gehen?",
      answer: "Nein. Eine abschlagsfreie Rente mit exakt 63 Jahren galt nur für vor 1953 Geborene. Für jüngere Jahrgänge steigt das Eintrittsalter schrittweise an. Ab Geburtsjahrgang 1964 liegt das abschlagsfreie Eintrittsalter bei 45 Beitragsjahren bei exakt 65 Jahren."
    },
    {
      question: "Welche Abschläge fallen an, wenn ich mit 35 Beitragsjahren früher in Rente gehe?",
      answer: "Bei der Altersrente für langjährig Versicherte (35 Jahre Wartezeit) beträgt der dauerhafte Abschlag 0,3 % für jeden Monat, den Sie vor Ihrer regulären Regelaltersgrenze in Rente gehen (maximal 14,4 % Abschlag)."
    },
    {
      question: "Darf ich als Frührentner unbegrenzt hinzuverdienen?",
      answer: "Ja. Die Hinzuverdienstgrenzen bei vorgezogenen Altersrenten wurden zum 1. Januar 2023 ersatzlos aufgehoben. Sie können beliebig viel hinzuverdienen, ohne dass die Rente gekürzt wird."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rente mit 63", item: "/rente-mit-63" }
  ];

  const primarySources: PrimarySource[] = [
    { title: "§ 36 SGB VI - Altersrente für langjährig Versicherte", url: "https://www.gesetze-im-internet.de/sgb_6/__36.html" },
    { title: "§ 38 SGB VI - Besonders langjährig Versicherte", url: "https://www.gesetze-im-internet.de/sgb_6/__38.html" },
    { title: "DRV Altersrenten Übersicht", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Altersrente-fuer-langjaehrig-Versicherte/altersrente_fuer_langjaehrig_versicherte_node.html" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Rente mit 63: Voraussetzungen, Abschläge & Regelungen
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Umfassende rechtliche Einordnung der vorgezogenen Altersrenten nach SGB VI: Unterschiede zwischen der Altersrente für besonders langjährig Versicherte (45 Beitragsjahre) und langjährig Versicherte (35 Beitragsjahre) sowie Wegfall der Hinzuverdienstgrenzen.
        </p>
      </div>

      <section className="prose prose-slate max-w-none space-y-8">
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-700 shrink-0" />
            Was bedeutet „Rente mit 63“ heute?
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-0">
            Der Begriff „Rente mit 63“ ist eine populäre Bezeichnung für zwei unterschiedliche gesetzliche Rentenarten im Sozialgesetzbuch VI: Die <strong>Altersrente für besonders langjährig Versicherte (§ 38 SGB VI)</strong> und die <strong>Altersrente für langjährig Versicherte (§ 36 SGB VI)</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Altersrente für besonders langjährig Versicherte (45 Beitragsjahre)
          </h2>
          <p className="text-slate-700">
            Wer mindestens <strong>45 Jahre an Pflichtbeitragszeiten</strong> nachweisen kann, kann ohne finanzielle Abschläge vorzeitig in den Ruhestand treten. Das Eintrittsalter wurde jedoch für jüngere Jahrgänge angehoben:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold">
                  <th className="p-3 border border-slate-200 text-left">Geburtsjahrgang</th>
                  <th className="p-3 border border-slate-200 text-left">Abschlagsfreies Eintrittsalter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">Vor 1953</td>
                  <td className="p-3 border border-slate-200 text-emerald-700 font-bold">Exakt 63 Jahre</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">1953 bis 1963</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Stufenweise Anhebung um 2 Monate pro Jahrgang</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">Ab Geburtsjahrgang 1964</td>
                  <td className="p-3 border border-slate-200 text-blue-900 font-bold">Exakt 65 Jahre</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">Was zählt zu den 45 Jahren Wartezeit?</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-sm sm:text-base">
            <li>Pflichtbeiträge aus Beschäftigung und Selbstständigkeit</li>
            <li>Kindererziehungszeiten (bis zum 10. Lebensjahr) und Pflegezeiten</li>
            <li>Bezug von Krankengeld, Übergangsgeld oder Arbeitslosengeld I (Ausnahme: Arbeitslosengeld I in den letzten 2 Jahren vor Rentenbeginn)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Altersrente für langjährig Versicherte (35 Beitragsjahre mit Abschlägen)
          </h2>
          <p className="text-slate-700">
            Wer mindestens <strong>35 Beitragsjahre</strong> aufweist, kann weiterhin ab dem <strong>63. Lebensjahr</strong> in Rente gehen – allerdings nur mit **dauerhaften Rentenabschlägen**:
          </p>
          <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl my-4">
            <h3 className="font-bold text-amber-950 text-base mt-0 mb-1">Berechnung der Abschläge (§ 77 SGB VI)</h3>
            <p className="text-sm text-amber-900 leading-relaxed mb-0">
              Für jeden Monat, den die Rente vor der individuellen Regelaltersgrenze (z. B. 67 Jahre) in Anspruch genommen wird, wird die Rente um <strong>0,3 % dauerhaft gekürzt</strong>. Bei einem Renteneintritt 4 Jahre vor der Regelaltersgrenze beläuft sich der Abschlag auf <strong>14,4 %</strong>.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Wegfall der Hinzuverdienstgrenzen seit 2023
          </h2>
          <p className="text-slate-700">
            Seit dem 1. Januar 2023 wurden die gesetzlichen Hinzuverdienstgrenzen bei allen vorgezogenen Altersrenten aufgehoben. Frührentner können beliebig viel Arbeitslohn oder Gehalt erzielen, ohne dass die Rente gekürzt wird.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-700 shrink-0" />
            Häufige Fragen zur Rente mit 63 (FAQ)
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
