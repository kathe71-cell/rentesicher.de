import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Calculator, Award, ArrowRight, HelpCircle, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import RentenLueckeCalculator from '../components/RentenLueckeCalculator';
import RentenBerechnungCalculator from '../components/RentenBerechnungCalculator';
import RentenEintrittsCalculator from '../components/RentenEintrittsCalculator';
import AffiliateWidget from '../components/AffiliateWidget';
import AdSense from '../components/AdSense';
import SourceFootnote from '../components/SourceFootnote';
import StatusBadge from '../components/StatusBadge';
import SchemaMarkup from '../components/SchemaMarkup';

export default function Home() {
  const faqs = [
    {
      question: "Ist die gesetzliche Rente in Deutschland 2026 noch sicher?",
      answer: "Die Auszahlung der gesetzlichen Rente ist durch das Rentwertbestimmungsgesetz und die staatliche Rentengarantie gesichert. Durch den demografischen Wandel sinkt jedoch das Rentenniveau im Verhältnis zum Gehalt, weshalb eine zusätzliche private oder betriebliche Eigenvorsorge dringend empfohlen wird."
    },
    {
      question: "Was bedeutet die Rentenkommission 2026 für meine Rente?",
      answer: "Die Rentenkommission 2026 hat 33 Empfehlungen erarbeitet, um das Rentenniveau bei 48 % zu stabilisieren und den Beitragssatz bis 2035 abzusichern. Es handelt sich um Empfehlungen, die schrittweise in Gesetzgebungsverfahren überführt werden."
    },
    {
      question: "Wie hoch ist der aktuelle Rentenwert 2026?",
      answer: "Der bundeseinheitliche Rentenwert liegt 2026 bei 42,52 € pro Entgeltpunkt. Ein Eckrentner mit 45 Beitragsjahren erhält somit eine monatliche Standardrente von 1.913,40 € brutto."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      {/* Hero Header */}
      <section className="mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
          <span>§ Stand September 2026 • BMAS & DRV Daten</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          Ist die Rente sicher? <br />
          <span className="text-blue-900">Aktuelle Lage & Drei-Säulen-Vorsorge 2026</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Unabhängiges Fachportal zur gesetzlichen Rentenentwicklung, den 33 Empfehlungen der Rentenkommission 2026 und der Berechnung deiner persönlichen Rentenlücke.
        </p>
      </section>

      {/* Position-0 Featured Snippet Box */}
      <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-lg mb-10 border-l-4 border-amber-500">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Definition & Fakten-Check 2026</span>
        </div>
        <p className="text-base leading-relaxed text-slate-100">
          <strong>Die gesetzliche Rentengarantie schützt bestehende Renten vor Kürzungen (§ 68 SGB VI).</strong> Allerdings sinkt ohne Eigenvorsorge der Lebensstandard im Alter: Der aktuelle Rentenwert liegt 2026 bei <strong>42,52 €</strong> je Entgeltpunkt (Standardrente: 1.913,40 € brutto nach 45 Beitragsjahren). Um die Versorgungslücke zu schließen, setzt das deutsche Rentensystem auf drei Säulen: Gesetzliche Rente, Betriebliche Altersvorsorge (bAV) und Private Vorsorge.
        </p>
      </div>

      {/* Highlights Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Rentenwert 2026</span>
          <div className="text-3xl font-extrabold text-blue-900">42,52 €</div>
          <span className="text-xs text-slate-500 mt-1 block">Pro Entgeltpunkt (EP)</span>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Rentenanpassung</span>
          <div className="text-3xl font-extrabold text-emerald-600">+4,24 %</div>
          <span className="text-xs text-slate-500 mt-1 block">Erhöhung ab 1. Juli 2026</span>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Ziel-Rentenniveau</span>
          <div className="text-3xl font-extrabold text-amber-600">48,0 %</div>
          <span className="text-xs text-slate-500 mt-1 block">Gesetzliche Haltelinie bis 2035</span>
        </div>
      </div>

      {/* Main Content Section 1 */}
      <section className="prose prose-slate max-w-none mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Die 3 Säulen der Altersvorsorge in Deutschland
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Das Rentensystem stützt sich auf drei tragende Säulen. Während die gesetzliche Rente als Basisversorgung dient, ist die Kombination aus betrieblichen Angeboten und steuerlich geförderten privaten Anlageformen entscheidend für einen sorgenfreien Ruhestand.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-8">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-3">1</div>
            <h3 className="font-bold text-slate-900 mb-1">Gesetzliche Rente</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">Umlagefinanzierte Basisrente nach Entgeltpunkten für Arbeitnehmer und Pflichtversicherte.</p>
            <Link to="/rentenberechnung" className="text-xs font-bold text-blue-900 hover:underline inline-flex items-center gap-1">
              Rentenrechner <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-950 flex items-center justify-center font-bold mb-3">2</div>
            <h3 className="font-bold text-slate-900 mb-1">Betriebliche Vorsorge</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">Direktversicherung & bAV mit gesetzlich garantiertem 15 % Arbeitgeberzuschuss.</p>
            <Link to="/betriebliche-altersvorsorge" className="text-xs font-bold text-amber-700 hover:underline inline-flex items-center gap-1">
              bAV Details <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-950 flex items-center justify-center font-bold mb-3">3</div>
            <h3 className="font-bold text-slate-900 mb-1">Private Vorsorge</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">Private Rentenversicherung, Riester-Rente & weltweite ETF-Sparpläne.</p>
            <Link to="/private-rente" className="text-xs font-bold text-emerald-800 hover:underline inline-flex items-center gap-1">
              Private Rente <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Prominent Affiliate Renten-Widget */}
      <AffiliateWidget type="rente" title="Unverbindlicher Rentenversicherungs-Vergleich 2026" />

      {/* Rentenlücken Calculator Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Deine persönliche Rentenlücke berechnen
        </h2>
        <p className="text-slate-600 text-sm mb-6">
          Ermittle direkt online, wie viel Geld dir im Alter monatlich im Vergleich zu deinem gewohnten Lebensstandard fehlt.
        </p>
        <RentenLueckeCalculator />
      </section>

      {/* AdSense Slot */}
      <AdSense />

      {/* Rentenkommission Section */}
      <section className="my-12 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-xl font-bold text-slate-900">Rentenkommission 2026: Die wichtigsten Neuerungen</h2>
          <StatusBadge type="empfehlung" />
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Die Kommission zur nachhaltigen Sicherung des Generationenvertrags hat 33 Reformpunkte vorgelegt. Kernziel ist es, das Rentenniveau von 48 % zu garantieren und exzessive Beitragsanstiege zu vermeiden.
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 text-sm text-slate-800">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Fixierung der Haltelinie:</strong> Mindestrentenniveau von 48 % bis mindestens 2035.</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-slate-800">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Beitragssatz-Deckelung:</strong> Obergrenze von 20 % für die Rentenversicherungsbeiträge.</span>
          </div>
          <div className="flex items-start gap-3 text-sm text-slate-800">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Staatlicher Ausgleichsfonds:</strong> Kapitalgedeckte Komponente zur Dämpfung der Demografie-Last.</span>
          </div>
        </div>
        <Link
          to="/rentenkommission"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-amber-400 hover:bg-slate-800 text-sm font-bold transition-colors"
        >
          <span>Alle 33 Empfehlungen im Detail lesen</span>
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
