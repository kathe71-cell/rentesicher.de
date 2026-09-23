import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import AdSense from '../components/AdSense';

export default function BetrieblicheAltersvorsorge() {
  const faqs = [
    {
      question: "Ist die betriebliche Altersvorsorge (bAV) sinnvoll?",
      answer: "Ja, insbesondere durch den gesetzlich vorgeschriebenen Arbeitgeberzuschuss von mindestens 15 % bei Entgeltumwandlung. Zudem sparst du Steuern und Sozialabgaben in der Ansparphase."
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
          Betriebliche Altersvorsorge (bAV): Arbeitgeberzuschuss & Steuervorteile
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Wie funktioniert die Entgeltumwandlung? Erfahre alles über den gesetzlichen 15 % Arbeitgeberzuschuss und die Ersparnis bei Sozialabgaben (§ 1a BetrAVG).
        </p>
      </div>

      <AdSense />

      <section className="prose prose-slate max-w-none my-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Rechtsanspruch auf Entgeltumwandlung</h2>
        <p className="text-slate-700">
          Jeder sozialversicherungspflichtig beschäftigte Arbeitnehmer in Deutschland hat einen gesetzlichen Anspruch darauf, einen Teil des Gehalts direkt in eine betriebliche Altersvorsorge umzuwandeln.
        </p>

        <div className="p-5 bg-blue-50 rounded-xl border border-blue-200 my-6">
          <h3 className="font-bold text-blue-950 mb-2">Die 15 % Arbeitgeberzuschuss-Pflicht:</h3>
          <p className="text-xs text-blue-900 leading-relaxed">
            Eingesparte Sozialabgaben muss der Arbeitgeber im Umfang von mindestens 15 % als Zuschuss in deinen bAV-Vertrag weiterleiten.
          </p>
        </div>
      </section>

      <SourceFootnote />
    </div>
  );
}
