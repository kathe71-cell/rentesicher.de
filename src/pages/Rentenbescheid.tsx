import React from 'react';
import SourceFootnote, { PrimarySource } from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { ShieldCheck, HelpCircle, FileText, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

export default function Rentenbescheid() {
  const faqs = [
    {
      question: "Wie lange habe ich Zeit, um Einspruch gegen einen Rentenbescheid einzulegen?",
      answer: "Die gesetzliche Widerspruchsfrist nach § 84 SGG beträgt exakt einen Monat nach Zustellung des Rentenbescheids."
    },
    {
      question: "Kann ein Rentenbescheid nach Ablauf der Monatsfrist noch korrigiert werden?",
      answer: "Ja. Über einen Überprüfungsantrag nach § 44 SGB X kann ein fehlerhafter Bescheid auch nachträglich für bis zu 4 Jahre rückwirkend korrigiert werden."
    },
    {
      question: "Wo finde ich die detaillierte Aufstellung meiner Beitragszeiten im Bescheid?",
      answer: "Die detaillierte chronologische Aufschlüsselung aller gemeldeten Beitrags- und Anrechnungszeiten befindet sich in der Anlage 'Versicherungsverlauf' Ihres Rentenbescheids."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenbescheid", item: "/rentenbescheid" }
  ];

  const primarySources: PrimarySource[] = [
    { title: "§ 115 SGB VI - Rentenbescheid & Auszahlung", url: "https://www.gesetze-im-internet.de/sgb_6/__115.html" },
    { title: "§ 84 SGG - Widerspruchsfrist", url: "https://www.gesetze-im-internet.de/sgg/__84.html" },
    { title: "§ 44 SGB X - Rückwirkender Überprüfungsantrag", url: "https://www.gesetze-im-internet.de/sgb_10/__44.html" },
    { title: "DRV Ratgeber Rentenbescheid verstehen", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Rentenbescheid/rentenbescheid_node.html" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Rentenbescheid prüfen: Aufbau, Widerspruch & Prüfpunkte
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Systematische Anleitung zur Überprüfung des Rentenbescheids nach SGB VI: Aufbau des Bescheids, typische Lücken im Versicherungsverlauf, Widerspruchsfristen (§ 84 SGG) und Überprüfungsanträge (§ 44 SGB X).
        </p>
      </div>

      <section className="prose prose-slate max-w-none space-y-8">
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-700 shrink-0" />
            Was ist der Rentenbescheid?
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-0">
            Der Rentenbescheid ist ein offizieller Verwaltungsakt der Deutschen Rentenversicherung nach <strong>§ 115 SGB VI</strong>. Er regelt verbindlich die Bewilligung einer Rente, das Renteneintrittsdatum, die Brutto- und Netto-Rentenhöhe sowie den zugrunde liegenden Versicherungsverlauf.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Der Aufbau des Rentenbescheids im Überblick
          </h2>
          <p className="text-slate-700">
            Ein vollständiger Rentenbescheid gliedert sich in folgende Kernabschnitte:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-1">1. Tenor / Hauptteil</h3>
              <p className="text-xs text-slate-600">Enthält die Rentenart, das Rentenbeginndatum und den monatlichen Auszahlungsbetrag.</p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-1">2. Rentenberechnung</h3>
              <p className="text-xs text-slate-600">Berechnung nach der Rentenformel: Entgeltpunkte × Zugangsfaktor × Aktueller Rentenwert.</p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-1">3. Anlage Versicherungsverlauf</h3>
              <p className="text-xs text-slate-600">Chronologische Aufstellung aller vom Arbeitgeber oder Träger gemeldeten Beitrags- und Anrechnungszeiten.</p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-1">4. Rechtsbehelfsbelehrung</h3>
              <p className="text-xs text-slate-600">Information über die Möglichkeit und die gesetzliche Frist zur Einlegung eines Widerspruchs.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Die 4 häufigsten Fehlerstellen im Rentenbescheid
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base">
            <li><strong>Fehlende Ausbildungszeiten:</strong> Zeiten der Schul-, Fachschul- oder Hochschulausbildung fehlen oder sind nicht als Anrechnungszeiten anerkannt (§ 58 SGB VI).</li>
            <li><strong>Unvollständige Kindererziehungszeiten:</strong> Mütter oder Väter haben nicht für alle Kinder die vollen Kindererziehungs- oder Berücksichtigungszeiten im Konto.</li>
            <li><strong>Nicht erfasste Pflegezeiten:</strong> Zeiten der häuslichen Pflege von Angehörigen wurden von der Pflegekasse nicht korrekt an die Rentenversicherung gemeldet.</li>
            <li><strong>Falsche Jahresarbeitsverdienste:</strong> Verdienstdaten vergangener Arbeitgeber wurden fehlerhaft oder unvollständig übermittelt.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Widerspruch (§ 84 SGG) & Überprüfungsantrag (§ 44 SGB X)
          </h2>
          <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl space-y-3">
            <h3 className="font-bold text-amber-950 text-base mt-0">Gesetzliche Fristen und Rechtsmittel</h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Gegen einen fehlerhaften Rentenbescheid kann innerhalb von <strong>einem Monat nach Bekanntgabe</strong> schriftlich Widerspruch bei der DRV eingelegt werden (§ 84 SGG).
            </p>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-semibold">
              Wichtig: Ist die Monatsfrist bereits verstrichen, kann gemäß <strong>§ 44 SGB X ein Überprüfungsantrag</strong> gestellt werden. Fehlerhafte Nachzahlungen können dadurch rückwirkend für bis zu 4 Kalenderjahre eingefordert werden.
            </p>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-700 shrink-0" />
            Häufige Fragen zum Rentenbescheid (FAQ)
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
