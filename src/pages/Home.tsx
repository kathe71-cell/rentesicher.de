import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import RentenLueckeCalculator from '../components/RentenLueckeCalculator';
import AffiliateWidget from '../components/AffiliateWidget';
import SourceFootnote from '../components/SourceFootnote';
import StatusBadge from '../components/StatusBadge';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { CURRENT_VALUES } from '../data/current-values';

export default function Home() {
  const faqs = [
    {
      question: "Welche gesetzlichen Regelungen sichern die Rentenauszahlung?",
      answer: "Die Auszahlung der gesetzlichen Rente beruht auf dem umlagefinanzierten System der gesetzlichen Rentenversicherung. Der Schutz vor nominalen Rentenkürzungen ist gesetzlich im Schutzklausel-Mechanismus (§ 68 Abs. 4 SGB VI) geregelt."
    },
    {
      question: "Was bedeuten die Empfehlungen der Rentenkommission?",
      answer: "Die Rentenkommission hat 33 Empfehlungen zur Weiterentwicklung der Alterssicherung vorgelegt. Diese Empfehlungen stellen wissenschaftliche und politische Handlungsvorschläge dar und sind nicht automatisch geltendes Recht."
    },
    {
      question: "Wie hoch ist der aktuelle Rentenwert?",
      answer: `Der aktuelle Rentenwert liegt derzeit bei ${CURRENT_VALUES.rentenwertFormatted} je Entgeltpunkt. Ein Modell-Eckrentner mit 45 Entgeltpunkten erzielt damit eine Brutto-Standardrente von ${CURRENT_VALUES.standardrenteFormatted} pro Monat.`
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      {/* Hero Header */}
      <section className="mb-10 text-center sm:text-left">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          Rentensicherheit & Alterssicherung <br />
          <span className="text-blue-900">Gesetzliche Rente, Formeln & Orientierung</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Unabhängiges Informationsportal zur gesetzlichen Rentenentwicklung, den Empfehlungen der Rentenkommission und Berechnungsmöglichkeiten für die private und betriebliche Vorsorge.
        </p>
      </section>

      {/* Position-0 Featured Snippet Box */}
      <div className="p-5 sm:p-6 bg-slate-900 text-white rounded-2xl shadow-lg mb-10 border-l-4 border-amber-500">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Fakten-Check & Gesetzliche Rahmenbedingungen</span>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-slate-100">
          <strong>Die gesetzliche Schutzklausel verhindert nominale Rentenkürzungen (§ 68 Abs. 4 SGB VI).</strong> Der aktuelle Rentenwert beträgt derzeit <strong>{CURRENT_VALUES.rentenwertFormatted}</strong> je Entgeltpunkt (Standardrente: {CURRENT_VALUES.standardrenteFormatted} brutto nach 45 Beitragsjahren). Zusätzliche betriebliche oder private Vorsorge kann dazu dienen, eine individuelle Versorgungslücke im Vergleich zum früheren Erwerbseinkommen zu reduzieren.
        </p>
      </div>

      {/* Highlights Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Aktueller Rentenwert</span>
          <div className="text-3xl font-extrabold text-blue-900">{CURRENT_VALUES.rentenwertFormatted}</div>
          <span className="text-xs text-slate-500 mt-1 block">Pro Entgeltpunkt (§ 68 SGB VI)</span>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Rentenanpassung</span>
          <div className="text-3xl font-extrabold text-emerald-600">{CURRENT_VALUES.rentenanpassungFormatted}</div>
          <span className="text-xs text-slate-500 mt-1 block">Letzte Anpassung</span>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Ziel-Rentenniveau</span>
          <div className="text-3xl font-extrabold text-amber-600">{CURRENT_VALUES.haltelinieFormatted}</div>
          <span className="text-xs text-slate-500 mt-1 block">Gesetzliche Haltelinie</span>
        </div>
      </div>

      {/* Main Content Section 1 */}
      <section className="prose prose-slate max-w-none mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Die 3 Säulen der Alterssicherung in Deutschland
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Das deutsche Alterssicherungssystem ruht auf drei Säulen. Die gesetzliche Rentenversicherung gewährt die Basisversorgung, während betriebliche Angebote und private Vorsorgeformen als Ergänzung dienen können.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-8">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-3">1</div>
            <h3 className="font-bold text-slate-900 mb-1">Gesetzliche Rente</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">Umlagefinanzierte Basisversorgung nach Entgeltpunkten für Pflichtversicherte.</p>
            <Link to="/rentenberechnung" className="text-xs font-bold text-blue-900 hover:underline inline-flex items-center gap-1">
              Rentenrechner <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-950 flex items-center justify-center font-bold mb-3">2</div>
            <h3 className="font-bold text-slate-900 mb-1">Betriebliche Vorsorge</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">bAV & Entgeltumwandlung nach § 1a BetrAVG mit gesetzlichem Zuschuss.</p>
            <Link to="/betriebliche-altersvorsorge" className="text-xs font-bold text-amber-700 hover:underline inline-flex items-center gap-1">
              bAV Details <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-950 flex items-center justify-center font-bold mb-3">3</div>
            <h3 className="font-bold text-slate-900 mb-1">Private Vorsorge</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">Private Rentenversicherung, Riester-Rente & breite ETF-Sparpläne.</p>
            <Link to="/private-rente" className="text-xs font-bold text-emerald-800 hover:underline inline-flex items-center gap-1">
              Private Rente <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Prominent Affiliate Renten-Widget */}
      <AffiliateWidget type="rente" title="Unverbindlicher Rentenversicherungs-Vergleich" />

      {/* Rentenlücken Calculator Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Modellrechnung: Persönliche Rentenlücke ermitteln
        </h2>
        <p className="text-slate-600 text-sm mb-6">
          Kalkuliere eine erste Orientierung über die Differenz zwischen deinem Wunscheinkommen und deiner erwarteten Gesetzlichen Rente.
        </p>
        <RentenLueckeCalculator />
      </section>

      {/* Rentenkommission Section */}
      <section className="my-12 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-xl font-bold text-slate-900">Rentenkommission: Die 33 Empfehlungen im Überblick</h2>
          <StatusBadge type="empfehlung" />
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Der Abschlussbericht der Rentenkommission enthält 33 Empfehlungen zur Weiterentwicklung der Alterssicherung.
        </p>
        <Link
          to="/rentenkommission"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-amber-400 hover:bg-slate-800 text-sm font-bold transition-colors"
        >
          <span>Alle 33 Empfehlungen lesen</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* FAQs */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-blue-900" />
          Häufig gestellte Fragen (FAQ)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2 text-base">{faq.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <SourceFootnote />
    </div>
  );
}
