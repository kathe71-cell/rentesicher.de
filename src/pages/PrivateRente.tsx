import React from 'react';
import AffiliateWidget from '../components/AffiliateWidget';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';
import { Shield, BookOpen, AlertCircle, FileText, CheckCircle2, XCircle } from 'lucide-react';

export default function PrivateRente() {
  const faqs = [
    {
      question: "Wann lohnt sich eine private Rentenversicherung?",
      answer: "Eine private Rentenversicherung lohnt sich besonders für Personen, die das Langlebigkeitsrisiko absichern wollen und im Ruhestand eine garantierte, lebenslange monatliche Zusatzrente suchen. Zudem profitieren Versicherte bei Erfüllung gesetzlicher Voraussetzungen von günstigen Besteuerungsregeln bei Auszahlung."
    },
    {
      question: "Wie wird die private Rentenversicherung im Alter versteuert?",
      answer: "Bei lebenslanger Verrentung wird lediglich der Ertragsanteil nach § 22 EStG versteuert (z. B. 17 % Ertragsanteil bei Renteneintritt mit 67 Jahren). Wählt man eine Einmalkapitalauszahlung nach Vollendung des 62. Lebensjahres und nach mindestens 12 Jahren Vertragslaufzeit, wird die Hälfte des Unterschiedsbetrags zwischen Auszahlung und eingezahlten Beiträgen nach § 20 Abs. 1 Nr. 6 EStG besteuert."
    },
    {
      question: "Was ist der garantierte Rentenfaktor?",
      answer: "Der Rentenfaktor gibt an, wie viel Euro monatliche Rente je 10.000 Euro gebildetem Kapital ausgezahlt werden. Ein garantierter Rentenfaktor schützt vor künftigen Senkungen der Rentenzahlung durch die Versicherung."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Private Rentenversicherung", item: "/private-rente" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Private Rentenversicherung im Vergleich 2026: Steuerliche Regelungen & Modelle
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Die private Rentenversicherung bildet die 3. Säule der deutschen Alterssicherung. Erfahre alles über klassische und fondsgebundene Tarife, den Rentenfaktor, Vertragskosten und die exakte steuerliche Behandlung nach § 20 und § 22 EStG.
        </p>
      </div>

      {/* Tax Disclaimer Box */}
      <div className="p-4 bg-blue-50 border border-blue-200 text-blue-950 rounded-xl mb-8 text-xs sm:text-sm flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <div>
          <strong>Steuerlicher Grundsatz-Hinweis:</strong> Die konkrete steuerliche Behandlung hängt vom individuellen Vertrag, dem Abschlussdatum und dem gewählten Auszahlungsmodell ab. Vor Abschluss empfiehlt sich eine Abstimmung mit einem Steuerberater.
        </div>
      </div>

      <AffiliateWidget type="rente" title="Kostenlosen Tarife-Vergleich anfordern" />

      <AdSense />

      <section className="prose prose-slate max-w-none my-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Klassische vs. Fondsgebundene Rentenversicherung
        </h2>
        <p className="text-slate-700">
          Bei der Wahl einer privaten Rentenversicherung stehen Verbraucher grundsätzlich vor der Entscheidung zwischen zwei Hauptformen:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6">
          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2 text-base">Klassische Rentenversicherung</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Legt die Beiträge im Sicherungsvermögen des Versicherers an. Bietet eine vertraglich festgelegte Höchstrechnungszins-Garantie plus Überschussbeteiligung.
            </p>
            <ul className="text-xs text-slate-700 space-y-1">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Hohe Planungssicherheit</li>
              <li className="flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-500" /> Niedriges Renditepotenzial</li>
            </ul>
          </div>

          <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2 text-base">Fondsgebundene Rentenversicherung</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Investiert die Sparbeiträge in Investmentfonds oder kostengünstige weltweite ETFs (z. B. MSCI World). Höhere Renditechancen bei gleichzeitigem Kursrisiko.
            </p>
            <ul className="text-xs text-slate-700 space-y-1">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Höhere Renditechancen</li>
              <li className="flex items-center gap-1.5"><XCircle className="w-4 h-4 text-red-500" /> Wertschwankungen im Ersparten</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          Steuerliche Behandlung im Detail: Auszahlungsphase
        </h2>
        <p className="text-slate-700">
          Im Gegensatz zur gesetzlichen Rente erfolgt die Besteuerung der privaten Rentenversicherung nicht voll nachgelagert, sondern richtet sich nach der gewählten Auszahlungsform:
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-4">1. Lebenslange Rentenzahlung (Ertragsanteil nach § 22 EStG)</h3>
        <p className="text-slate-700">
          Wird das Vorsorgeguthaben als lebenslange monatliche Rente ausgezahlt, unterliegt lediglich der sogenannte <strong>Ertragsanteil</strong> der Einkommensteuer (§ 22 Nr. 1 Satz 3 Buchst. a Doppelbuchst. bb EStG). Die Höhe des Ertragsanteils richtet sich nach dem Alter bei Rentenbeginn:
        </p>
        
        <div className="overflow-x-auto my-4 not-prose">
          <table className="w-full text-left text-sm border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                <th className="p-3 border-r border-slate-200">Alter bei Rentenbeginn</th>
                <th className="p-3 border-r border-slate-200">Steuerpflichtiger Ertragsanteil (%)</th>
                <th className="p-3">Steuerfreier Anteil (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="p-3 border-r border-slate-200">62 Jahre</td>
                <td className="p-3 border-r border-slate-200 font-bold text-blue-900">21 %</td>
                <td className="p-3">79 %</td>
              </tr>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <td className="p-3 border-r border-slate-200">65 Jahre</td>
                <td className="p-3 border-r border-slate-200 font-bold text-blue-900">18 %</td>
                <td className="p-3">82 %</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3 border-r border-slate-200">67 Jahre</td>
                <td className="p-3 border-r border-slate-200 font-bold text-blue-900">17 %</td>
                <td className="p-3">83 %</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-6">2. Einmalkapitalauszahlung (§ 20 Abs. 1 Nr. 6 EStG)</h3>
        <p className="text-slate-700">
          Entscheidet sich der Versicherte bei Vertragsende für die einmalige Kapitalabfindung, gilt für nach 2011 abgeschlossene Verträge: Wenn die Auszahlung nach Vollendung des <strong>62. Lebensjahres</strong> erfolgt und der Vertrag mindestens <strong>12 Jahre Laufzeit</strong> aufwies, ist nur die <u>Hälfte des Unterschiedsbetrags</u> (Auszahlungssumme abzüglich eingezahlter Beiträge) steuerpflichtig.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">
          Wichtige Kennzahlen: Rentenfaktor und Kostenstruktur
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-700">
          <li><strong>Garantierter Rentenfaktor:</strong> Der Rentenfaktor legt fest, wie viel Euro monatliche Rente pro 10.000 Euro angespartem Kapital ausgezahlt werden. Ein garantierter Faktor schützt vor späteren Absenkungen seitens der Versicherung.</li>
          <li><strong>Effektive Vertragskosten (Effective Costs):</strong> Die Effektivkosten mindern die jährliche Gesamtrendite der Geldanlage. Sie setzen sich zusammen aus Abschlusskosten (Abschluss- und Vertriebskosten), laufenden Verwaltungskosten und Fondskosten.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">
          Für wen eignet sich eine private Rentenversicherung?
        </h2>
        <p className="text-slate-700">
          Eine private Rentenversicherung eignet sich vor allem für Sparer, die einen planbaren, lebenslangen Einkommensstrom wünschen und das Risiko, im Alter ohne Ersparnisse dazustehen, absichern möchten. Für Anleger mit sehr kurzem Anlagehorizont oder hohem Liquiditätsbedarf während der Ansparphase ist sie aufgrund der Abschlusskosten meist weniger geeignet.
        </p>
      </section>

      <SourceFootnote />
    </div>
  );
}
