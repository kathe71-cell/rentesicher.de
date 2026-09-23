import React from 'react';
import SourceFootnote, { PrimarySource } from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { ShieldCheck, HelpCircle, Activity, FileText, CheckCircle2, Clock } from 'lucide-react';

export default function Erwerbsminderungsrente() {
  const faqs = [
    {
      question: "Was ist der Unterschied zwischen teilweiser und voller Erwerbsminderung?",
      answer: "Bei voller Erwerbsminderung können Sie gesundheitsbedingt weniger als 3 Stunden täglich arbeiten. Bei teilweiser Erwerbsminderung liegt Ihr Leistungsvermögen zwischen 3 und unter 6 Stunden pro Tag."
    },
    {
      question: "Gilt bei der Erwerbsminderungsrente Berufsschutz?",
      answer: "Nein, für nach dem 1.1.1961 Geborene gibt es keinen Berufsschutz mehr. Die Erwerbsfähigkeit wird auf dem allgemeinen Arbeitsmarkt geprüft."
    },
    {
      question: "Wie lange wird eine Erwerbsminderungsrente gezahlt?",
      answer: "Die EM-Rente wird grundsätzlich auf maximal 3 Jahre befristet gewährt. Eine unbefristete Rente wird vergeben, wenn eine Besserung des Gesundheitszustands unwahrscheinlich ist."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Erwerbsminderungsrente", item: "/erwerbsminderungsrente" }
  ];

  const primarySources: PrimarySource[] = [
    { title: "§ 43 SGB VI - Rente wegen Erwerbsminderung", url: "https://www.gesetze-im-internet.de/sgb_6/__43.html" },
    { title: "§ 59 SGB VI - Zurechnungszeit", url: "https://www.gesetze-im-internet.de/sgb_6/__59.html" },
    { title: "DRV Fachportal Erwerbsminderungsrente", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Erwerbsminderungsrente/erwerbsminderungsrente.html" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Erwerbsminderungsrente: Voraussetzungen, Reha & Zurechnungszeit
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Systematischer Leitfaden zur Erwerbsminderungsrente nach § 43 SGB VI: Rechtliche Abgrenzung zwischen teilweiser und voller Erwerbsminderung, Grundsatz „Reha vor Rente“, versicherungsrechtliche Voraussetzungen und Zurechnungszeiten.
        </p>
      </div>

      <section className="prose prose-slate max-w-none space-y-8">
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-700 shrink-0" />
            Was ist die Erwerbsminderungsrente?
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-0">
            Die Erwerbsminderungsrente (EM-Rente) schützt Versicherte der Deutschen Rentenversicherung, die aufgrund einer schweren Krankheit oder Behinderung nicht mehr oder nur noch eingeschränkt am Erwerbsleben teilnehmen können (<strong>§ 43 SGB VI</strong>).
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Abgrenzung: Volle vs. Teilweise Erwerbsminderung
          </h2>
          <p className="text-slate-700">
            Die medizinische Begutachtung durch den Sozialmedizinischen Dienst der DRV ermittelt das verbliebene Leistungsvermögen auf dem allgemeinen Arbeitsmarkt:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-1 rounded-md inline-block mb-2">
                Volle Erwerbsminderung
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Unter 3 Stunden täglich</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Der Versicherte kann gesundheitsbedingt auf absehbare Zeit unter den üblichen Bedingungen des allgemeinen Arbeitsmarktes <strong>weniger als 3 Stunden täglich</strong> erwerbstätig sein. Auszahlungsanspruch: <strong>100 % der berechneten EM-Rente</strong>.
              </p>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md inline-block mb-2">
                Teilweise Erwerbsminderung
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3 bis unter 6 Stunden täglich</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Der Versicherte kann noch <strong>mindestens 3, aber unter 6 Stunden täglich</strong> arbeiten. Auszahlungsanspruch: <strong>50 % der vollen EM-Rente</strong>. Die Rente ist als Ergänzung zu einer Teilzeittätigkeit gedacht.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Versicherungsrechtliche Voraussetzungen
          </h2>
          <p className="text-slate-700">
            Neben den medizinischen Kriterien müssen folgende versicherungsrechtliche Hürden erfüllt sein:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base">
            <li><strong>Allgemeine Wartezeit:</strong> Mindestens 5 Jahre Vorversicherungszeit in der gesetzlichen Rentenversicherung (§ 50 SGB VI).</li>
            <li><strong>3-in-5-Regel:</strong> In den letzten 5 Jahren vor Eintreten der Erwerbsminderung müssen mindestens <strong>3 Jahre (36 Monate) Pflichtbeiträge</strong> für eine versicherungspflichtige Beschäftigung vorliegen.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Grundsatz „Reha vor Rente“ & Zurechnungszeit (§ 59 SGB VI)
          </h2>
          <p className="text-slate-700">
            Vor Bewilligung einer Rente prüft die Rentenversicherung stets, ob die Erwerbsfähigkeit durch medizinische oder berufliche Rehabilitation wiederhergestellt werden kann (<strong>„Reha vor Rente“ nach § 9 SGB VI</strong>).
          </p>
          <div className="p-5 bg-slate-900 text-white rounded-xl my-4">
            <h3 className="font-bold text-amber-400 text-base mt-0 mb-2">Die Zurechnungszeit (§ 59 SGB VI)</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Da Erwerbsminderung meist in jüngeren Jahren eintritt, schützt die Zurechnungszeit vor Armut: Das Rentenkonto wird so bewertet, als hätte der Betroffene bis zum regulären Renteneintrittsalter mit seinem bisherigen Durchschnittseinkommen weitergearbeitet.
            </p>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-700 shrink-0" />
            Häufige Fragen zur Erwerbsminderungsrente (FAQ)
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
