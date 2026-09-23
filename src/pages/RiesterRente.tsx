import React from 'react';
import AffiliateWidget from '../components/AffiliateWidget';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { CURRENT_VALUES } from '../data/current-values';
import { Info } from 'lucide-react';

export default function RiesterRente() {
  const faqs = [
    {
      question: "Wer ist für die Riester-Förderung unmittelbar zulagenberechtigt?",
      answer: "Unmittelbar zulagenberechtigt sind versicherungspflichtige Arbeitnehmer, Auszubildende, Pflichtversicherte in der gesetzlichen Rentenversicherung, Beamtinnen und Beamte sowie Bezieher von Lohnersatzleistungen (z. B. Krankengeld, Elterngeld)."
    },
    {
      question: "Wie hoch ist der Mindesteigenbeitrag bei der Riester-Rente?",
      answer: `Um die volle staatliche Zulagenförderung zu erhalten, müssen Sparer ${CURRENT_VALUES.riesterMindestbeitragProzent} % ihres sozialversicherungspflichtigen Vorjahreseinkommens (abzüglich der zustehenden Zulagen) als Eigenbeitrag in den Vertrag einzahlen – mindestens jedoch den Sockelbeitrag von 60 € pro Jahr.`
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Riester-Rente", item: "/riester-rente" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Riester-Rente: Förderung, Vorteile und Nachteile
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Umfassende Darstellung der gesetzlichen Bestimmungen der Riester-Förderung nach § 79 ff. EStG, Berechnung des Mindesteigenbeitrags und sachliche Gegenüberstellung von Vor- und Nachteilen.
        </p>
      </div>

      {/* Status Notice Box */}
      <div className="p-4 bg-blue-50 border border-blue-200 text-blue-950 rounded-xl mb-8 text-xs sm:text-sm flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <div>
          <strong>Differenzierung geltendes Recht vs. Reformvorschläge:</strong> Die nachfolgenden Zulagenwerte entsprechen der im EStG verankerten Rechtslage. Vorschläge für künftige Reformen (z. B. ein staatlich gefördertes Altersvorsorgedepot) sind in der parlamentarischen Beratschlagung.
        </div>
      </div>

      <AffiliateWidget type="riester" title="Riester-Förderung & Tarife anfordern" />

      <section className="prose prose-slate max-w-none my-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Die staatlichen Riester-Zulagen im Detail
        </h2>
        <p className="text-slate-700">
          Die staatliche Riester-Förderung beruht auf zwei Säulen: direkten staatlichen Zulagen und einem zusätzlichen Sonderausgabenabzug bei der Einkommensteuererklärung (§ 10a EStG).
        </p>

        <div className="overflow-x-auto my-6 not-prose">
          <table className="w-full text-left text-sm text-slate-700 border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                <th className="p-3 border-r border-slate-200">Förderkomponente</th>
                <th className="p-3 border-r border-slate-200">Höhe (pro Jahr)</th>
                <th className="p-3">Voraussetzung & Rechtsgrundlage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-semibold border-r border-slate-200">Grundzulage</td>
                <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">{CURRENT_VALUES.riesterGrundzulageFormatted}</td>
                <td className="p-3">Zahlung von 4 % des Vorjahresbrutto (mind. 60 € Sockelbeitrag) (§ 84 EStG)</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <td className="p-3 font-semibold border-r border-slate-200">Kinderzulage (ab 2008 geb.)</td>
                <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">{CURRENT_VALUES.riesterKinderzulageAb2008Formatted}</td>
                <td className="p-3">Kindergeldanspruch im jeweiligen Beitragsjahr (§ 85 EStG)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 font-semibold border-r border-slate-200">Kinderzulage (vor 2008 geb.)</td>
                <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">{CURRENT_VALUES.riesterKinderzulageVor2008Formatted}</td>
                <td className="p-3">Kindergeldanspruch im jeweiligen Beitragsjahr (§ 85 EStG)</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="p-3 font-semibold border-r border-slate-200">Berufseinsteigerbonus</td>
                <td className="p-3 font-bold text-emerald-700 border-r border-slate-200">200,00 €</td>
                <td className="p-3">Einmalig für Zulagenberechtigte unter 25 Jahren (§ 84 Abs. 2 EStG)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          Sonderausgabenabzug (§ 10a EStG)
        </h2>
        <p className="text-slate-700">
          Beiträge zur Riester-Rente können bis zu einem Höchstbetrag von <strong>{CURRENT_VALUES.riesterHoechstbetragFormatted} pro Kalenderjahr</strong> als Sonderausgaben geltend gemacht werden.
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
