import React from 'react';
import SourceFootnote, { PrimarySource } from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { CURRENT_VALUES } from '../data/current-values';
import { ShieldCheck, HelpCircle, FileText, Calculator, Heart, Info, ArrowRight } from 'lucide-react';

export default function Witwenrente() {
  const faqs = [
    {
      question: "Wann wird die Witwenrente ausgezahlt?",
      answer: "Die Witwenrente beginnt grundsätzlich mit dem Todesmonat, wenn der Verstorbene noch keine Rente bezog. Bezog der Verstorbene bereits eine Altersrente, beginnt die Witwenrente im Folgemonat des Sterbefalls."
    },
    {
      question: "Wie lange wird die kleine Witwenrente gezahlt?",
      answer: "Nach neuem Recht (Eheschließung ab 2002 oder beide Partner nach 1.1.1962 geboren) wird die kleine Witwenrente für maximal 24 Kalendermonate (2 Jahre) ausgezahlt."
    },
    {
      question: "Wird eigenes Einkommen im Sterbevierteljahr angerechnet?",
      answer: "Nein. In den ersten 3 Kalendermonaten nach dem Todesfall (Sterbevierteljahr) wird die Witwenrente in voller Höhe der Rente des Verstorbenen gezahlt und es findet keinerlei Einkommensanrechnung statt."
    },
    {
      question: "Was passiert mit der Witwenrente bei einer Wiederheirat?",
      answer: "Bei einer erneuten Heirat erlischt der Anspruch auf die Witwenrente. Bezieher der großen Witwenrente können jedoch auf Antrag eine Rentenabfindung in Höhe von 24 Monatsrenten (§ 107 SGB VI) erhalten."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Witwenrente & Hinterbliebenenrente", item: "/witwenrente" }
  ];

  const primarySources: PrimarySource[] = [
    { title: "§ 46 SGB VI - Witwen- und Witwerrente", url: "https://www.gesetze-im-internet.de/sgb_6/__46.html" },
    { title: "§ 97 SGB VI - Einkommensanrechnung auf Rente", url: "https://www.gesetze-im-internet.de/sgb_6/__97.html" },
    { title: "§ 107 SGB VI - Abfindung bei Wiederheirat", url: "https://www.gesetze-im-internet.de/sgb_6/__107.html" },
    { title: "DRV Hinterbliebenenrente Fachportal", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Hinterbliebenenrente/hinterbliebenenrente_node.html" },
    { title: "DRV Broschüre Hinterbliebenenversorgung", url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Publikationen/DE/Broschueren/unsere_wissen/hinterbliebener_hinterbliebenenrente.html" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-8">
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Witwenrente und Hinterbliebenenrente: Voraussetzungen, Höhe und Anrechnung
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Umfassender Leitfaden zur Witwen- und Witwerrente nach dem SGB VI: Gesetzliche Voraussetzungen, Unterschied zwischen Kleiner und Großer Witwenrente, Einkommensanrechnung nach § 97 SGB VI mit konkretem Rechenbeispiel sowie Regeln zur Wiederheirat.
        </p>
      </div>

      <section className="prose prose-slate max-w-none space-y-8">
        {/* Intro Overview Box */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
          <h2 className="text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 shrink-0" />
            Was ist die Witwen- und Witwerrente?
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-0">
            Die Witwenrente (bzw. Witwerrente) ist eine gesetzliche Hinterbliebenenleistung der Deutschen Rentenversicherung nach <strong>§ 46 SGB VI</strong>. Sie dient dazu, den durch den Tod eines Ehepartners oder eingetragenen Lebenspartners wegfallenden Unterhaltsteil teilweise zu ersetzen und den Lebensstandard des überlebenden Partners finanziell abzusichern.
          </p>
        </div>

        {/* Section 1: Prerequisites */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            1. Gesetzliche Voraussetzungen für den Rentenanspruch
          </h2>
          <p className="text-slate-700">
            Damit ein Anspruch auf Witwen- oder Witwerrente entsteht, müssen gemäß § 46 SGB VI folgende rechtliche Bedingungen erfüllt sein:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base">
            <li>
              <strong>Rechtsgültige Ehe oder eingetragene Lebenspartnerschaft:</strong> Die Ehe oder Partnerschaft muss zum Zeitpunkt des Todes bestanden haben.
            </li>
            <li>
              <strong>Mindestehedauer von 1 Jahr:</strong> Die Ehe muss grundsätzlich mindestens ein Jahr gedauert haben. Bei kürzerer Ehedauer wird gesetzlich vermutet, dass es sich um eine „Versorgungsehe“ handelte (Ausnahme: Tod durch unvorhergesehenen Unfall).
            </li>
            <li>
              <strong>Mindestversicherungszeit (Wartezeit) von 5 Jahren:</strong> Der verstorbene Partner muss bis zum Tod die allgemeine Wartezeit von 5 Jahren im Rentenkonto erfüllt haben (§ 50 SGB VI) oder bereits eine Alters- bzw. Erwerbsminderungsrente bezogen haben.
            </li>
            <li>
              <strong>Keine Wiederheirat:</strong> Der überlebende Partner darf bis zum Leistungsbezug nicht erneut geheiratet haben.
            </li>
          </ul>
        </div>

        {/* Section 2: Kleine vs Große Witwenrente */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            2. Kleine vs. Große Witwenrente im Vergleich
          </h2>
          <p className="text-slate-700">
            Der Gesetzgeber unterscheidet strikt zwischen zwei Leistungsformen:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md inline-block mb-2">
                Kleine Witwenrente
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">25 % der Rente des Verstorbenen</h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 pl-4 list-disc">
                <li>Gilt, wenn der Hinterbliebene jünger als die Altersgrenze (47 Jahre) ist.</li>
                <li>Keine Erwerbsminderung vorliegt.</li>
                <li>Kein minderjähriges Kind erzogen wird.</li>
                <li><strong>Dauer:</strong> Nach neuem Recht auf <strong>maximal 24 Kalendermonate</strong> (2 Jahre) begrenzt.</li>
              </ul>
            </div>

            <div className="p-5 bg-white border border-blue-200 rounded-xl shadow-sm bg-blue-50/30">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-1 rounded-md inline-block mb-2">
                Große Witwenrente
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">55 % (bzw. 60 %) der Rente</h3>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2 pl-4 list-disc">
                <li>Voraussetzung: Alter von mindestens 47 Jahren (schrittweise angehoben).</li>
                <li>ODER eigene Erwerbsminderung.</li>
                <li>ODER Erziehung eines eigenen oder des verstorbenen Partners Kindes unter 18 Jahren.</li>
                <li><strong>Dauer:</strong> <strong>Unbefristet (lebenslang)</strong>, solange keine Wiederheirat erfolgt.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Old vs New Law */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            3. Alte vs. Neue Rechtslage (Vertrauensschutz)
          </h2>
          <p className="text-slate-700">
            Ob altes oder neues Hinterbliebenenrecht gilt, richtet sich nach dem Hochzeitsdatum und den Geburtsdaten der Partner:
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-xs sm:text-sm border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold">
                  <th className="p-3 border border-slate-200 text-left">Kriterium</th>
                  <th className="p-3 border border-slate-200 text-left">Altes Recht</th>
                  <th className="p-3 border border-slate-200 text-left">Neues Recht</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">Voraussetzung</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Heirat vor dem 1.1.2002 UND mind. ein Partner vor dem 2.1.1962 geboren</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Heirat ab 1.1.2002 ODER beide Partner nach dem 1.1.1962 geboren</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">Große Witwenrente</td>
                  <td className="p-3 border border-slate-200 font-bold text-slate-900">60 % der Stammrente</td>
                  <td className="p-3 border border-slate-200 font-bold text-blue-900">55 % der Stammrente + Kinderzuschlag</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-900">Kleine Witwenrente</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Unbegrenzt gezahlt</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Begrenzt auf max. 24 Monate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Sterbevierteljahr */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            4. Das Sterbevierteljahr (100 % Rentenzahlung ohne Anrechnung)
          </h2>
          <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl my-4">
            <p className="text-sm text-amber-950 leading-relaxed mb-0">
              In den ersten <strong>drei Kalendermonaten nach dem Sterbemonat</strong> (dem sogenannten <em>Sterbevierteljahr</em>) wird die Witwenrente in <strong>voller Höhe (100 %)</strong> der dem Verstorbenen zustehenden Rente gezahlt. In diesem Zeitraum findet <strong>keine Einkommensanrechnung</strong> statt, um den sofortigen finanziellen Schock abzufedern.
            </p>
          </div>
        </div>

        {/* Section 5: Income Assessment & Calculation */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-700 shrink-0" />
            5. Einkommensanrechnung nach § 97 SGB VI & Freibeträge
          </h2>
          <p className="text-slate-700">
            Nach Ablauf des Sterbevierteljahres wird eigenes Einkommen des Hinterbliebenen (z. B. Erwerbseinkommen, eigene Altersrente, Betriebsrente) auf die Witwenrente angerechnet.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Gesetzliche Netto-Freibeträge:</h3>
          <p className="text-slate-700 text-sm sm:text-base">
            Der Freibetrag ist gesetzlich an das 26,4-fache des aktuellen Rentenwerts gekoppelt. Mit dem aktuellen Bundesrentenwert von {CURRENT_VALUES.rentenwertFormatted} ergeben sich folgende Monatsfreibeträge:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-sm sm:text-base mb-6">
            <li><strong>Freibetrag für Hinterbliebene:</strong> ca. <strong>1.122,53 € Netto</strong> pro Monat.</li>
            <li><strong>Zuschlag pro waisengeldberechtigtem Kind:</strong> ca. <strong>238,11 € Netto</strong> pro Monat.</li>
          </ul>

          <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-md space-y-4">
            <h4 className="text-lg font-bold text-amber-400 mt-0">Konkretes Rechenbeispiel zur 40-%-Anrechnung</h4>
            <div className="text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
              <p><strong>Ausgangslage:</strong> Frau M. erhält eine Große Witwenrente von 800 € brutto. Sie arbeitet angestellt und erzielt ein monatliches Bruttogehalt von 2.200 €.</p>
              <div className="p-3 bg-slate-800 rounded-lg space-y-1 border border-slate-700 font-mono text-xs">
                <div>1. Bruttogehalt: 2.200,00 €</div>
                <div>2. Pauschaler Abzug für Erwerbseinkommen (40 %): - 880,00 €</div>
                <div className="text-amber-300 font-bold">➔ Anrechenbares Nettoeinkommen: 1.320,00 €</div>
                <div className="pt-2">3. Gesetzlicher Freibetrag: - 1.122,53 €</div>
                <div className="text-amber-300 font-bold">➔ Übersteigender Betrag: 197,47 €</div>
                <div className="pt-2">4. Anrechnung (40 % von 197,47 €): - 78,99 € Kürzung</div>
              </div>
              <p className="text-emerald-400 font-bold text-sm pt-2">
                Ergebnis: Ausgezahlte Witwenrente = 800,00 € - 78,99 € = 721,01 € netto/monatlich.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Remarriage & Settlement */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            6. Wiederheirat & Rentenabfindung nach § 107 SGB VI
          </h2>
          <p className="text-slate-700">
            Heiratet der Bezieher einer Witwenrente erneut, fällt der Rentenanspruch mit Ablauf des Monats der Eheschließung weg. Auf Antrag zahlt die Rentenversicherung jedoch eine **Rentenabfindung**:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base">
            <li><strong>Große Witwenrente:</strong> Abfindung in Höhe des **24-fachen durchschnittlichen Monatsbetrags** (2 Jahresrenten) der letzten 12 Monate.</li>
            <li><strong>Kleine Witwenrente:</strong> Abfindung in Höhe des verbleibenden Restbetrags bis zum Ablauf der 24-Monate-Frist.</li>
          </ul>
        </div>

        {/* Section 7: Application & Documents */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            7. Antragstellung und benötigte Unterlagen
          </h2>
          <p className="text-slate-700">
            Die Witwenrente wird nicht automatisch gewährt, sondern muss bei der Deutschen Rentenversicherung beantragt werden. Folgende Dokumente werden benötigt:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Sterbeurkunde des verstorbenen Partners</span>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Heiratsurkunde bzw. Partnerschaftsurkunde</span>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Rentenversicherungsnummern beider Ehepartner</span>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-700 shrink-0" />
              <span>Nachweise über eigenes Einkommen (Gehalt/Rente)</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="my-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-700 shrink-0" />
            Häufige Fragen zur Witwenrente (FAQ)
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
