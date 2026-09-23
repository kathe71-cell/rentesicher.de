import React from 'react';
import SourceFootnote, { PrimarySource } from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { ShieldCheck, HelpCircle, FileText, Calculator, AlertCircle } from 'lucide-react';

export default function Rentensteuer() {
  const faqs = [
    {
      question: "Wie wird der persönliche Rentenfreibetrag berechnet?",
      answer: "Im Jahr nach dem Renteneintritt wird der steuerfreie Teil der Rente einmalig als fester Euro-Betrag ermittelt. Dieser Euro-Betrag bleibt für die gesamte Restlaufzeit der Rente unverändert."
    },
    {
      question: "Werden künftige Rentenerhöhungen voll versteuert?",
      answer: "Ja. Alle künftigen Rentenanpassungen (Rentenerhöhungen) fließen zu 100 % in das zu versteuernde Einkommen ein, da der Rentenfreibetrag als fester Euro-Betrag fixiert bleibt."
    },
    {
      question: "Wann muss ich als Rentner eine Steuererklärung abgeben?",
      answer: "Eine Steuererklärung ist einzureichen, wenn das zu versteuernde Gesamteinkommen (abzüglich Kranken-/Pflegeversicherungsbeiträge und Sonderausgaben) den steuerlichen Grundfreibetrag des jeweiligen Jahres übersteigt."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Besteuerung von Renten", item: "/rentensteuer" }
  ];

  const primarySources: PrimarySource[] = [
    { title: "§ 22 EStG - Besteuerung von Leibrenten", url: "https://www.gesetze-im-internet.de/estg/__22.html" },
    { title: "BMF BMF-Schreiben zur Rentenbesteuerung", url: "https://www.bundesfinanzministerium.de" },
    { title: "DRV Ratgeber Steuern & Rente", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Steuern-und-Rente/steuern-und-rente.html" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Besteuerung von Renten: Rentenfreibetrag & Grundfreibetrag
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Fachlicher Ratgeber zur nachgelagerten Besteuerung von Altersrenten nach § 22 EStG: Stufenweiser Anstieg des steuerpflichtigen Rentenanteils, Fixierung des Rentenfreibetrags und Grundfreibetrag.
        </p>
      </div>

      <section className="prose prose-slate max-w-none space-y-8">
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-700 shrink-0" />
            Das Prinzip der nachgelagerten Besteuerung
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-0">
            Seit dem Alterseinkünftegesetz 2005 werden Gesetzliche Renten in Deutschland **nachgelagert versteuert** (§ 22 Nr. 1 Satz 3 EStG). Das bedeutet: Vorsorgebeiträge während des Erwerbslebens können schrittweise als Sonderausgaben von der Steuer abgesetzt werden, während die späteren Rentenauszahlungen im Alter der Einkommensteuer unterliegen.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Der Besteuerungsanteil nach Renteneintrittsjahr
          </h2>
          <p className="text-slate-700">
            Der Prozentsatz der Rente, der versteuert werden muss, hängt exakt vom Jahr des individuellen Renteneintritts ab. Nach den Regelungen zur Abmilderung der Vollbesteuerung steigt der Besteuerungsanteil schrittweise an:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold">
                  <th className="p-3 border border-slate-200 text-left">Renteneintrittsjahr</th>
                  <th className="p-3 border border-slate-200 text-left">Steuerpflichtiger Anteil</th>
                  <th className="p-3 border border-slate-200 text-left">Steuerfreier Anteil (Rentenfreibetrag)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">Bis 2005</td>
                  <td className="p-3 border border-slate-200 text-slate-700">50 %</td>
                  <td className="p-3 border border-slate-200 text-emerald-700 font-bold">50 %</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">2020</td>
                  <td className="p-3 border border-slate-200 text-slate-700">80 %</td>
                  <td className="p-3 border border-slate-200 text-slate-700">20 %</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">2024</td>
                  <td className="p-3 border border-slate-200 text-slate-700">83 %</td>
                  <td className="p-3 border border-slate-200 text-slate-700">17 %</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">2026</td>
                  <td className="p-3 border border-slate-200 font-bold text-blue-900">ca. 84 %</td>
                  <td className="p-3 border border-slate-200 text-slate-700">ca. 16 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Fixierung des Rentenfreibetrags als Euro-Betrag
          </h2>
          <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl my-4">
            <h3 className="font-bold text-amber-950 text-base mt-0 mb-1">Dauerhafter Festbetrag</h3>
            <p className="text-sm text-amber-900 leading-relaxed mb-0">
              Der ermittelte steuerfreie Prozentanteil wird im zweiten Jahr des Rentenbezugs als **fester Euro-Betrag** für die gesamte Dauer des Rentenbezugs eingefroren. Alle künftigen gesetzlichen Rentenerhöhungen sind folglich zu 100 % steuerpflichtig.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Grundfreibetrag & Pflicht zur Steuererklärung
          </h2>
          <p className="text-slate-700">
            Rentner müssen nur dann Einkommensteuer zahlen, wenn ihr zu versteuerndes Gesamteinkommen (Bruttorente abzüglich Rentenfreibetrag, Kranken-/Pflegeversicherungsbeiträge und Werbungskosten) den gesetzlichen **Grundfreibetrag** übersteigt.
          </p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-700 shrink-0" />
            Häufige Fragen zur Rentenbesteuerung (FAQ)
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
