import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';
import { Building2, CheckCircle2, Info, ExternalLink, Calculator } from 'lucide-react';

export default function BetrieblicheAltersvorsorge() {
  const faqs = [
    {
      question: "Wann gilt die Pflicht zum 15 % Arbeitgeberzuschuss bei der bAV?",
      answer: "Nach § 1a Abs. 1a BetrAVG muss der Arbeitgeber bei der Entgeltumwandlung über eine Direktversicherung, eine Pensionskasse oder einen Pensionsfonds grundsätzlich 15 % des umgewandelten Entgelts zusätzlich als Zuschuss an den Versorgungsträger weiterleiten, soweit er durch die Entgeltumwandlung Sozialversicherungsbeiträge einspart."
    },
    {
      question: "Welche Abzüge fallen im Ruhestand auf die Betriebsrente an?",
      answer: "In der Auszahlungsphase unterliegt die Betriebsrente als Versorgungsbezug nach § 229 SGB V grundsätzlich der vollen gesetzlichen Kranken- und Pflegeversicherung. Für die Krankenversicherung gilt jedoch ein monatlicher Freibetrag nach § 226 SGB V."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Betriebliche Altersvorsorge", item: "/betriebliche-altersvorsorge" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Betriebliche Altersvorsorge (bAV): Arbeitgeberzuschuss & Durchführungswege
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Wie die Entgeltumwandlung nach § 1a BetrAVG funktioniert, unter welchen Voraussetzungen der 15 % Arbeitgeberzuschuss greift und worauf in der Auszahlungsphase zu achten ist.
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Rechtsgrundlage der Entgeltumwandlung (§ 1a BetrAVG)
        </h2>
        <p className="text-slate-700">
          Sozialversicherungspflichtig beschäftigte Arbeitnehmer haben in Deutschland nach § 1a Abs. 1 Betriebsrentengesetz (BetrAVG) einen Rechtsanspruch darauf, von ihren künftigen Entgeltansprüchen bis zu 4 % der Beitragsbemessungsgrenze der allgemeinen Rentenversicherung steuer- und sozialabgabenfrei in eine betriebliche Altersvorsorge umzuwandeln.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">
          Der 15 % Arbeitgeberzuschuss nach § 1a Abs. 1a BetrAVG
        </h2>
        <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl my-6">
          <h3 className="font-bold text-blue-950 mb-2 text-base flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-700" />
            Gesetzliche Formulierung & Bedingung:
          </h3>
          <p className="text-sm text-blue-900 leading-relaxed">
            Soweit der Arbeitgeber durch die Entgeltumwandlung Sozialversicherungsbeiträge einspart, ist er verpflichtet, <strong>15 Prozent des umgewandelten Entgelts zusätzlich</strong> als Arbeitgeberzuschuss an den Versorgungsträger (Direktversicherung, Pensionskasse oder Pensionsfonds) weiterzuleiten.
          </p>
          <div className="mt-3 pt-3 border-t border-blue-200 text-xs text-blue-800">
            Quelle: <a href="https://www.gesetze-im-internet.de/betravg/__1a.html" target="_blank" rel="noopener noreferrer" className="underline font-semibold">§ 1a BetrAVG auf Gesetze-im-Internet.de</a>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900">Rechenbeispiel zur Entgeltumwandlung</h3>
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm not-prose text-sm">
          <div className="space-y-2 text-slate-700">
            <div className="flex justify-between border-b pb-1">
              <span>Gewünschte monatliche Sparrate des Arbeitnehmers:</span>
              <span className="font-bold">100,00 €</span>
            </div>
            <div className="flex justify-between border-b pb-1 text-emerald-700">
              <span>+ Gesetzlicher Arbeitgeberzuschuss (15 %):</span>
              <span className="font-bold">+ 15,00 €</span>
            </div>
            <div className="flex justify-between font-bold text-slate-900 pt-1">
              <span>Monatlicher Gesamtbeitrag im bAV-Vertrag:</span>
              <span className="text-blue-900">115,00 €</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            * Der Netto-Aufwand für den Arbeitnehmer ist geringer als 100 €, da der Betrag vor Abzug von Lohnsteuer und Sozialabgaben vom Bruttogehalt umgewandelt wird.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">
          Die 5 Durchführungswege der betrieblichen Altersvorsorge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1 text-sm">1. Direktversicherung</h3>
            <p className="text-xs text-slate-600">
              Der Arbeitgeber schließt eine Lebens- oder Rentenversicherung auf das Leben des Arbeitnehmers ab. Häufigster Weg bei Entgeltumwandlung.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1 text-sm">2. Pensionskasse</h3>
            <p className="text-xs text-slate-600">
              Umlage- oder kapitalgedeckte rechtlich selbstständige Versorgungseinrichtung mehrerer Unternehmen.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1 text-sm">3. Pensionsfonds</h3>
            <p className="text-xs text-slate-600">
              Rechtlich selbstständige Einrichtung mit höherer Aktienquote und flexibleren Anlagemöglichkeiten.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1 text-sm">4. Direktzusage / Pensionszusage</h3>
            <p className="text-xs text-slate-600">
              Der Arbeitgeber sagt dem Arbeitnehmer unmittelbar eine Versorgungsleistung aus dem Firmenvermögen zu.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">
          Auszahlungsphase & Abzüge im Ruhestand
        </h2>
        <p className="text-slate-700">
          In der Ansparphase geförderte Betriebsrenten unterliegen in der Auszahlungsphase der vollen nachgelagerten Besteuerung mit dem individuellen Einkommensteuersatz. Zudem werden auf Betriebsrenten Beiträge zur gesetzlichen Kranken- und Pflegeversicherung erhoben. Für die Krankenversicherung gilt ein gesetzlicher Freibetrag (§ 226 SGB V), sodass erst Beträge oberhalb dieser Grenze verbeitragt werden.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">
          Übertragbarkeit bei Arbeitgeberwechsel (§ 4 BetrAVG)
        </h2>
        <p className="text-slate-700">
          Bei einem Wechsel des Arbeitgebers besteht nach § 4 BetrAVG unter bestimmten Voraussetzungen der Anspruch auf Übertragung des gebildeten Kapitals auf den neuen Arbeitgeber (Portabilität).
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
