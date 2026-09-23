import React from 'react';
import AffiliateWidget from '../components/AffiliateWidget';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function PrivateRente() {
  const faqs = [
    {
      question: "Wann ist eine private Rentenversicherung sinnvoll?",
      answer: "Eine private Rentenversicherung lohnt sich besonders für Angestellte und Selbstständige, die ihre gesetzliche Rentenlücke schließen wollen und von steuerfreien Zinseszins-Effekten sowie der günstigen Ertragsanteilsbesteuerung im Alter profitieren möchten."
    },
    {
      question: "Was ist der Unterschied zwischen Kapitalwahlrecht und lebenslanger Rente?",
      answer: "Bei Renteneintritt kannst du wählen, ob du das angesparte Guthaben auf einmal steuerbegünstigt ausgezahlt bekommst (Kapitalabfindung) oder eine garantierte lebenslange Monatsrente erhältst."
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
          Private Rentenversicherung im Vergleich 2026: Wann lohnt sich die Vorsorge?
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Die private Rentenversicherung ist die flexible 3. Säule der Altersvorsorge. Erfahre alles über Vor- und Nachteile, steuerliche Vorteile (§ 20 EStG Halbeinkünfteverfahren) und vergleiche passende Tarife.
        </p>
      </div>

      <AffiliateWidget type="rente" title="Kostenlosen Tarife-Vergleich anfordern" />

      <AdSense />

      <section className="prose prose-slate max-w-none my-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Vorteile einer privaten Rentenversicherung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1">Steuervorteile im Alter</h3>
            <p className="text-xs text-slate-600">Bei Rentenbeginn ab 62 Jahren und 12 Jahren Laufzeit muss nur die Hälfte der Gewinne versteuert werden (Halbeinkünfteverfahren).</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1">Garantierte Rentenzahlung</h3>
            <p className="text-xs text-slate-600">Lebenslange Auszahlung unabhängig davon, wie alt du wirst (Langlebigkeitsrisiko abgesichert).</p>
          </div>
        </div>
      </section>

      <SourceFootnote />
    </div>
  );
}
