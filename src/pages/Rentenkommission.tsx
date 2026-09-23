import React from 'react';
import StatusBadge from '../components/StatusBadge';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { ShieldAlert, ExternalLink, BookOpen } from 'lucide-react';

export default function Rentenkommission() {
  const empfehlungen = [
    {
      id: 1,
      titel: "Politische Zielgröße von mindestens 70 % Nettoersatzquote im Mehrsäulensystem",
      status: "zielsetzung" as const,
      kategorie: "Mehrsäulensystem",
      beschreibung: "Empfehlung einer Gesamtzielgröße für das Alterssicherungsniveau über alle drei Säulen (gesetzlich, betrieblich, privat), um den Lebensstandard im Alter verlässlich abzusichern."
    },
    {
      id: 2,
      titel: "Zusätzlicher Ausweis der Nettoersatzquote in Berichten und Auskünften",
      status: "empfehlung" as const,
      kategorie: "Transparenz",
      beschreibung: "Erweiterung der Berichterstattung um die kaufkraft- und steuerbereinigte Nettoersatzquote, um Bürgern eine realistischere Einschätzung ihrer späteren Gesamtversorgung zu ermöglichen."
    },
    {
      id: 3,
      titel: "Verbesserung der Datenbasis und Erhebung trägerübergreifender Kennzahlen",
      status: "empfehlung" as const,
      kategorie: "Statistik & Forschung",
      beschreibung: "Verbindung von Rentenversicherungsdaten mit Steuerdaten und Betriebspensionen zur präzisen Erfassung von Versorgungslücken und Altersarmut."
    },
    {
      id: 4,
      titel: "Weiterentwicklung und trägerübergreifende Etablierung der Digitalen Rentenübersicht",
      status: "gesetz" as const,
      kategorie: "Digitalisierung",
      beschreibung: "Gesetzlich verankertes Portal (rentenuebersicht.de) zur gebündelten, trägerübergreifenden Abfrage aller Anwartschaften aus gesetzlicher, betrieblicher und privater Vorsorge."
    },
    {
      id: 5,
      titel: "Stärkere Kopplung des Renteneintrittsalters an die Lebenserwartung ab 2031",
      status: "empfehlung" as const,
      kategorie: "Renteneintritt",
      beschreibung: "Wissenschaftliche Empfehlung, das Regelaltersrentenalter nach Erreichen der Altersgrenze von 67 Jahren ab 2031 dynamisch an die fernere Lebenserwartung anzupassen."
    },
    {
      id: 6,
      titel: "Reform bzw. Auslauf der abschlagsfreien Rente für besonders langjährig Versicherte („Rente ab 63 / 65“)",
      status: "empfehlung" as const,
      kategorie: "Frührente",
      beschreibung: "Vorschlag zur Überprüfung der versicherungsfremden Sonderregelungen bei 45 Beitragsjahren zum Schutz der langfristigen Finanzierbarkeit der Gesetzlichen Rentenversicherung."
    },
    {
      id: 7,
      titel: "Gesetzliche Sicherung der Mindesthaltelinie beim Rentenniveau (48 %)",
      status: "gilt_ab" as const,
      dateStr: "Rentenpaket",
      kategorie: "Rentenniveau",
      beschreibung: "Gesetzliche Verankerung einer Untergrenze für das Rentenniveau vor Steuern bei 48 %, um eine Entkopplung der Renten von der allgemeinen Lohnentwicklung zu verhindern."
    },
    {
      id: 8,
      titel: "Festlegung einer Beitragsgrenze (Beitragssatzkorridor max. 20 % bis 2030, max. 22 % bis 2035)",
      status: "empfehlung" as const,
      kategorie: "Beitragssatz",
      beschreibung: "Empfehlung zur Begrenzung der Beitragsnetzbelastung für Arbeitnehmer und Arbeitgeber, um Lohnnebenkosten stabil zu halten."
    },
    {
      id: 9,
      titel: "Anpassung des Ausgleichsfaktors im Nachhaltigkeitsfaktor der Rentenformel",
      status: "empfehlung" as const,
      kategorie: "Rentenformel",
      beschreibung: "Dämpfung der jährlichen Rentenanpassung bei Eintritt geburtenstarker Jahrgänge (Babyboomer) in den Ruhestand über den Nachhaltigkeitsfaktor nach § 68 SGB VI."
    },
    {
      id: 10,
      titel: "Reform der geförderten privaten Altersvorsorge (Altersvorsorgedepot ohne Garantiezwang)",
      status: "gilt_ab" as const,
      dateStr: "Reformvorhaben",
      kategorie: "Private Vorsorge",
      beschreibung: "Weiterentwicklung der Riester-Förderung zu einem chancenreichen, geförderten Anspardepot ohne strikte Beitragsgarantiepflicht zur Nutzung von Kapitalmarktchancen."
    },
    {
      id: 11,
      titel: "Stärkung der betrieblichen Altersvorsorge (bAV) und Opt-Out-Modelle im Betrieb",
      status: "empfehlung" as const,
      kategorie: "Betriebsrente",
      beschreibung: "Vereinfachung von Sozialpartner-Modellen und Förderung automatischer Einbezugssysteme bei der bAV auf Betriebsebene (mit Widerspruchsrecht)."
    },
    {
      id: 12,
      titel: "Obligatorische Altersvorsorge für alle nicht anderweitig abgesicherten Selbstständigen",
      status: "zielsetzung" as const,
      kategorie: "Pflichtversicherung",
      beschreibung: "Politische Zielsetzung zur Einbeziehung aller Selbstständigen in die gesetzliche Rentenversicherung (mit Opt-Out bei Nachweis einer gleichwertigen Altersvorsorge)."
    },
    {
      id: 13,
      titel: "Ausweitung und Dynamisierung der bAV-Geringverdienerförderung (§ 100 EStG)",
      status: "gesetz" as const,
      kategorie: "Steuerförderung",
      beschreibung: "Gesetzlicher Zuschuss des Staates an Arbeitgeber, wenn diese Geringverdienern einen zusätzlichen Beitrag zur betrieblichen Altersvorsorge zahlen."
    },
    {
      id: 14,
      titel: "Weiterentwicklung der Erwerbsminderungsrente durch verlängerte Zurechnungszeiten",
      status: "gesetz" as const,
      kategorie: "EM-Rente",
      beschreibung: "Gesetzlich vollzogene schrittweise Verlängerung der Zurechnungszeit bei Erwerbsminderung bis zum regulären Renteneintrittsalter."
    },
    {
      id: 15,
      titel: "Flexibilisierung der Zuverdienstgrenzen bei teilweiser Erwerbsminderung",
      status: "gesetz" as const,
      kategorie: "EM-Rente",
      beschreibung: "Gesetzliche Erleichterungen beim Wiedereinstieg in das Erwerbsleben für Bezieher teilweiser Erwerbsminderungsrenten ohne Rentenverlust."
    },
    {
      id: 16,
      titel: "Ausbau von Anreizsystemen für das Weiterarbeiten über die Regelaltersgrenze hinaus",
      status: "gesetz" as const,
      kategorie: "Flexirente",
      beschreibung: "Gesetzliche Rentenzuschläge (+0,5 % pro Monat) bei freiwilligem Aufschub des Rentenbeginns sowie Wegfall der Arbeitgeberbeiträge zur Arbeitslosenversicherung."
    },
    {
      id: 17,
      titel: "Stärkung von Reha-Leistungen nach dem Grundsatz „Reha vor Rente“",
      status: "gesetz" as const,
      kategorie: "Rehabilitation",
      beschreibung: "Ausbau medizinischer und beruflicher Reha-Angebote der Rentenversicherung zur langfristigen Erhaltung der Erwerbsfähigkeit im Betrieb."
    },
    {
      id: 18,
      titel: "Anrechnung von Kindererziehungszeiten (Mütterrente) weiter fortführen",
      status: "gesetz" as const,
      kategorie: "Familienleistung",
      beschreibung: "Gesetzlich verankerte Gutschrift von bis zu 36 Monaten Kindererziehungszeiten pro Kind im Rentenkonto."
    },
    {
      id: 19,
      titel: "Transparente Berichterstattung und volle Gegenfinanzierung versicherungsfremder Leistungen",
      status: "empfehlung" as const,
      kategorie: "Bundeszuschuss",
      beschreibung: "Forderung nach vollständiger Erstattung gesamtgesellschaftlicher Aufgaben (z. B. Mütterrente, Grundrente) durch Bundeszuschüsse aus dem allgemeinen Steuerhaushalt."
    },
    {
      id: 20,
      titel: "Einrichtung eines ständigen unabhängigen Sachverständigenrats für Alterssicherung",
      status: "empfehlung" as const,
      kategorie: "Monitoring",
      beschreibung: "Einsetzung eines wissenschaftlichen Expertengremiums zur kontinuierlichen Überwachung der finanziellen Tragfähigkeit und Generationengerechtigkeit."
    },
    {
      id: 21,
      titel: "Automatisierter Einkommensabgleich beim Grundrentenzuschlag",
      status: "gesetz" as const,
      kategorie: "Grundrente",
      beschreibung: "Gesetzlich umgesetzter automatischer Datenaustausch zwischen der Deutschen Rentenversicherung und den Finanzbehörden ohne gesonderten Antrag."
    },
    {
      id: 22,
      titel: "Ausbau von Präventionsprogrammen im betrieblichen Gesundheitsmanagement",
      status: "empfehlung" as const,
      kategorie: "Gesundheit",
      beschreibung: "Stärkere Verknüpfung von betrieblicher Gesundheitsförderung mit Reha-Maßnahmen der Rentenversicherung zur Vermeidung frühzeitiger Erwerbsminderung."
    },
    {
      id: 23,
      titel: "Evaluierung der Handwerker-Pflichtversicherung",
      status: "empfehlung" as const,
      kategorie: "Handwerk",
      beschreibung: "Überprüfung der 18-jährigen Pflichtversicherungsdauer für selbstständige Handwerker auf zeitgemäße Ausgestaltung und Übergangsmöglichkeiten."
    },
    {
      id: 24,
      titel: "Vollständige Angleichung der Rentenwerte in Ost und West",
      status: "gesetz" as const,
      kategorie: "Rentenwert",
      beschreibung: "Vollzogene gesetzliche Vereinheitlichung des aktuellen Rentenwerts in den neuen und alten Bundesländern (in Kraft seit 1. Juli 2023)."
    },
    {
      id: 25,
      titel: "Absicherung der Mindestnachhaltigkeitsreserve",
      status: "gesetz" as const,
      kategorie: "Liquidität",
      beschreibung: "Gesetzlich vorgeschriebener Mindestpuffer der Nachhaltigkeitsreserve (0,2 Monatsausgaben) zur Sicherung der monatlichen Rentenauszahlungen."
    },
    {
      id: 26,
      titel: "Berücksichtigung von Pflegenden im Rentenrecht",
      status: "gesetz" as const,
      kategorie: "Pflege",
      beschreibung: "Gesetzliche Übernahme von Rentenversicherungsbeiträgen durch die Pflegekasse für Angehörige, die Personen ab Pflegegrad 2 ehrenamtlich pflegen."
    },
    {
      id: 27,
      titel: "Digitalisierung und Entbürokratisierung von Verwaltungs- und Antragsverfahren",
      status: "empfehlung" as const,
      kategorie: "Verwaltung",
      beschreibung: "Vereinfachung von Renten- und Reha-Anträgen durch durchgehende digitale Workflows und barrierefreie Online-Dienste der DRV."
    },
    {
      id: 28,
      titel: "Verpflichtende gesetzliche Kapitalrente mit einem zusätzlichen Beitrag von 2 %",
      status: "empfehlung" as const,
      kategorie: "Kapitalrente",
      beschreibung: "Handlungsempfehlung zur Einführung einer obligatorischen kapitalgedeckten Altersvorsorgekomponente mit 2 % Zusatzbeitrag zur Ergänzung der Umlagedeckung."
    },
    {
      id: 29,
      titel: "Vereinfachung des Versorgungsausgleichs bei Ehescheidungen",
      status: "gesetz" as const,
      kategorie: "Familienrecht",
      beschreibung: "Direkte rentenrechtliche Übertragung von Entgeltpunkten auf das Beitragskonto des ausgleichsberechtigten Ehegatten nach § 12 VersAusglG."
    },
    {
      id: 30,
      titel: "Zuschläge für Bestandsbezieher von Erwerbsminderungsrenten",
      status: "gesetz" as const,
      kategorie: "EM-Rente",
      beschreibung: "Gesetzlich umgesetzter pauschaler Zuschlag (4,5 % bis 7,5 %) für Erwerbsminderungsrentner mit Rentenbeginn zwischen 2001 und 2018."
    },
    {
      id: 31,
      titel: "Kaufkraftbereinigte Ausweise in der jährlichen Renteninformation",
      status: "empfehlung" as const,
      kategorie: "Transparenz",
      beschreibung: "Vorschlag zur Darstellung von Modellhochrechnungen unter Berücksichtigung einer angenommenen Inflationsrate in den jährlichen DRV-Schreiben."
    },
    {
      id: 32,
      titel: "Anrechnungsfreie Aufwandsentschädigungen bei ehrenamtlicher Tätigkeit",
      status: "gesetz" as const,
      kategorie: "Ehrenamt",
      beschreibung: "Gesetzlicher Schutz von Aufwandsentschädigungen (Ehrenamts- und Übungsleiterpauschale) vor Rentenkürzungen bei Altersrentnern."
    },
    {
      id: 33,
      titel: "Vierjährlicher Sozialbericht der Bundesregierung zur Lage der Alterssicherung",
      status: "gesetz" as const,
      kategorie: "Berichterstattung",
      beschreibung: "Gesetzlich verankerte Verpflichtung der Bundesregierung zur regelmäßigen Vorlage eines umfassenden Sozialberichts über alle drei Säulen."
    }
  ];

  const faqs = [
    {
      question: "Sind die Empfehlungen der Rentenkommission bereits geltendes Gesetz?",
      answer: "Nein. Bei den 33 Reformpunkten der Kommission handelt es sich um wissenschaftliche und politische Handlungsempfehlungen. Gesetzliche Wirkung entfalten sie erst, wenn sie vom Deutschen Bundestag beschlossen und im Bundesgesetzblatt verkündet werden."
    },
    {
      question: "Was bedeutet das Generationenkapital im Vergleich zur empfohlenen Kapitalrente?",
      answer: "Das gesetzlich beschlossene Generationenkapital ist ein staatlicher Ausgleichsfonds, der durch Bundesmittel am Kapitalmarkt angelegt wird, um ab den 2030er Jahren die Beitragszahler zu entlasten. Die in Empfehlung 28 vorgeschlagene Kapitalrente sieht hingegen einen individuellen 2 % Zusatzbeitrag vor."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenkommission", item: "/rentenkommission" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      <div className="mb-3">
        <LastUpdated />
      </div>

      {/* Top Disclaimer Header - Exact Prompt Wording */}
      <div className="p-4 bg-amber-100/90 border border-amber-300 text-amber-950 rounded-2xl mb-8 flex items-start gap-3 text-xs sm:text-sm shadow-sm">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong>Wichtiger Status-Hinweis:</strong> Die Rentenkommission 2026 hat Empfehlungen zur Weiterentwicklung der Alterssicherung vorgelegt. Diese Empfehlungen sind <u>nicht automatisch geltendes Recht</u>.
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Die 33 Empfehlungen der Rentenkommission
        </h1>
        <p className="text-slate-700 text-base leading-relaxed font-medium">
          Der Abschlussbericht der Rentenkommission enthält 33 Empfehlungen zur Weiterentwicklung der Alterssicherung.
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mt-2">
          Systematische Aufstellung aller 33 Reformpunkte der Regierungskommission „Verlässlicher Generationenvertrag“. Bei allen Punkten unterscheiden wir strikt zwischen bloßen Vorschlägen, politischen Zielsetzungen und bereits geltendem Recht.
        </p>
      </div>

      {/* Official Source Link Box */}
      <div className="p-5 bg-slate-900 text-white rounded-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-amber-400 shrink-0" />
          <div>
            <div className="font-bold text-sm">Offizielle Veröffentlichung des BMAS</div>
            <div className="text-xs text-slate-300">Abschlussbericht der Kommission „Verlässlicher Generationenvertrag“</div>
          </div>
        </div>
        <a 
          href="https://www.bmas.de" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold hover:bg-amber-400 active:scale-95 transition-all shrink-0"
        >
          <span>Zum BMAS-Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 33 Recommendations List */}
      <div className="space-y-4 mb-12">
        {empfehlungen.map((emp) => (
          <div key={emp.id} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center border border-slate-200 shrink-0">
                  #{emp.id}
                </span>
                <h2 className="text-base font-bold text-slate-900 leading-snug">{emp.titel}</h2>
              </div>
              <StatusBadge type={emp.status} dateStr={emp.dateStr} />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9">
              {emp.beschreibung}
            </p>
          </div>
        ))}
      </div>

      <SourceFootnote />
    </div>
  );
}
