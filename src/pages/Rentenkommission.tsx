import React from 'react';
import StatusBadge from '../components/StatusBadge';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import { AlertCircle, ExternalLink, ShieldAlert, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Rentenkommission() {
  const empfehlungen = [
    {
      id: 1,
      titel: "Stabilisierung der Haltelinie beim Sicherungsniveau (48 %)",
      status: "empfehlung" as const,
      kategorie: "Rentenniveau",
      beschreibung: "Empfehlung, das Rentenniveau vor Steuern bis mindestens 2031 (bzw. 2035) gesetzlich bei 48 % abzusichern, um eine Entkopplung der Renten von den Löhnen zu verhindern."
    },
    {
      id: 2,
      titel: "Festlegung einer Beitragssatzobergrenze (20 % bzw. 22 %)",
      status: "empfehlung" as const,
      kategorie: "Beitragssatz",
      beschreibung: "Vorschlag, den Beitragssatz zur gesetzlichen Rentenversicherung bis 2030 nicht über 20 % und bis 2035 nicht über 22 % steigen zu lassen."
    },
    {
      id: 3,
      titel: "Einrichtung eines Kapitalstocks zur Beitragsdämpfung",
      status: "gilt_ab" as const,
      dateStr: "2026",
      kategorie: "Kapitaldeckung",
      beschreibung: "Aufbau einer kapitalgedeckten Komponente (Generationenkapital) aus Bundesmitteln zur langfristigen Dämpfung künftiger Beitragsanstiege ab den 2030er Jahren."
    },
    {
      id: 4,
      titel: "Anpassung des Ausgleichsfaktors im Nachhaltigkeitsfaktor",
      status: "empfehlung" as const,
      kategorie: "Rentenformel",
      beschreibung: "Wissenschaftlicher Vorschlag zur Anpassung der Dämpfungsfaktoren bei Eintritt geburtenstarker Jahrgänge in den Ruhestand."
    },
    {
      id: 5,
      titel: "Stärkung der betrieblichen Altersvorsorge (bAV) in KMU",
      status: "empfehlung" as const,
      kategorie: "Betriebsrente",
      beschreibung: "Vereinfachung von Sozialpartner-Modellen und Ausweitung der Geringverdiener-Förderung im Betriebskrankenkassen- und Firmenumfeld."
    },
    {
      id: 6,
      titel: "Förderung von Opting-Out-Systemen im Betrieb",
      status: "empfehlung" as const,
      kategorie: "Betriebsrente",
      beschreibung: "Empfehlung für automatische Einbezugssysteme bei der betrieblichen Altersvorsorge auf Tarifvertragsebene (mit Widerspruchsrecht)."
    },
    {
      id: 7,
      titel: "Weiterentwicklung der Erwerbsminderungsrente",
      status: "gesetz" as const,
      kategorie: "EM-Rente",
      beschreibung: "Bereits gesetzlich umgesetzte Verlängerung der Zurechnungszeit bis zum regulären Renteneintrittsalter."
    },
    {
      id: 8,
      titel: "Verbindliche Digitale Rentenübersicht",
      status: "gesetz" as const,
      kategorie: "Transparenz",
      beschreibung: "Bereits gesetzlich verankertes Portal zur trägerübergreifenden Abfrage aller Rentenansprüche (gesetzlich, betrieblich, privat)."
    },
    {
      id: 9,
      titel: "Überprüfung des Rechtskreises Ost/West-Angleichung",
      status: "gesetz" as const,
      kategorie: "Rentenwert",
      beschreibung: "Gesetzlich vollzogene Vereinheitlichung des Rentenwerts in Ost und West ab dem 1. Juli 2023."
    },
    {
      id: 10,
      titel: "Regelmäßige Begutachtung des Generationenvertrags",
      status: "empfehlung" as const,
      kategorie: "Monitoring",
      beschreibung: "Empfehlung zur Installation eines ständigen unabhängigen Sachverständigenrats für Alterssicherungssysteme."
    },
    {
      id: 11,
      titel: "Verlängerung der Gleitzone bei Erwerbsminderung",
      status: "empfehlung" as const,
      kategorie: "EM-Rente",
      beschreibung: "Erleichterung des Wiedereinstiegs in das Erwerbsleben für Bezieher teilweiser Erwerbsminderungsrenten."
    },
    {
      id: 12,
      titel: "Evaluierung der Altersgrenzen im Handwerk",
      status: "empfehlung" as const,
      kategorie: "Pflichtversicherung",
      beschreibung: "Vorschlag zur Überprüfung der Pflichtversicherung für selbstständige Handwerker nach 18 Jahren."
    },
    {
      id: 13,
      titel: "Einbeziehung aller nicht anderweitig abgesicherten Selbstständigen",
      status: "empfehlung" as const,
      kategorie: "Pflichtversicherung",
      beschreibung: "Politische Zielsetzung zur Einbeziehung von Selbstständigen in die gesetzliche Rentenversicherung (mit Opt-Out bei Vorsorgenachweis)."
    },
    {
      id: 14,
      titel: "Flexibilisierung des Übergangs vom Erwerbsleben in den Ruhestand",
      status: "gesetz" as const,
      kategorie: "Flexirente",
      beschreibung: "Bereits umgesetzte Abschaffung der Hinzuverdienstgrenzen bei vorzeitigen Altersrenten."
    },
    {
      id: 15,
      titel: "Förderung des Weiterarbeitens über die Regelaltersgrenze hinaus",
      status: "gesetz" as const,
      kategorie: "Flexirente",
      beschreibung: "Zuschläge zur Rente (+0,5 % pro Monat) und Verzicht auf Arbeitnehmerbeiträge zur Arbeitslosenversicherung."
    },
    {
      id: 16,
      titel: "Anpassung der Mindestversicherungszeit für Reha-Leistungen",
      status: "gesetz" as const,
      kategorie: "Rehabilitation",
      beschreibung: "Stärkung des Grundsatzes 'Reha vor Rente' durch vereinfachten Zugang zu medizinischen Leistungen der DRV."
    },
    {
      id: 17,
      titel: "Transparente Berichterstattung über Steuerzuschüsse",
      status: "empfehlung" as const,
      kategorie: "Bundeszuschuss",
      beschreibung: "Empfehlung zur klaren Abgrenzung beitragsgedeckter Leistungen von versicherungsfremden Leistungen des Bundes."
    },
    {
      id: 18,
      titel: "Weiterentwicklung der Riester-Förderung zu einem Altersvorsorgedepot",
      status: "empfehlung" as const,
      kategorie: "Private Vorsorge",
      beschreibung: "Vorschlag für ein kostenarmes, gefördertes Anspardepot ohne strikte Beitragsgarantiepflicht (Reformmodell ab 2027 in Beratung)."
    },
    {
      id: 19,
      titel: "Dynamisierung der Förderung für Geringverdiener",
      status: "empfehlung" as const,
      kategorie: "Förderung",
      beschreibung: "Regelmäßige Anpassung der Einkommensgrenzen für die bAV-Geringverdienerförderung nach § 100 EStG."
    },
    {
      id: 20,
      titel: "Stärkung der Mütterrente / Kindererziehungszeiten",
      status: "gesetz" as const,
      kategorie: "Erziehungszeiten",
      beschreibung: "Gesetzlich verankerte Anrechnung von bis zu 36 Monaten Kindererziehung pro Kind."
    },
    {
      id: 21,
      titel: "Vereinfachung der Antragsverfahren bei Erwerbsminderung",
      status: "empfehlung" as const,
      kategorie: "Verwaltung",
      beschreibung: "Bürokratieabbau und digitale Antragstellung für EM-Rentner."
    },
    {
      id: 22,
      titel: "Plausibilisierung von Ausbildungsanrechnungszeiten",
      status: "gesetz" as const,
      kategorie: "Anrechnungszeiten",
      beschreibung: "Regelung zur Berücksichtigung von Fachschul- und Hochschulzeiten (bis zu 8 Jahre, bewertet als Anrechnungszeit)."
    },
    {
      id: 23,
      titel: "Harmonisierung der Rentenwertbestimmungsverordnung",
      status: "gesetz" as const,
      kategorie: "Rentenwert",
      beschreibung: "Jährliche Verordnung zur Festsetzung des aktuellen Rentenwerts auf Basis der Nominallohnentwicklung."
    },
    {
      id: 24,
      titel: "Automatisierte Ermittlung des Grundrentenzuschlags",
      status: "gesetz" as const,
      kategorie: "Grundrente",
      beschreibung: "Gesetzlicher Datenabgleich zwischen Rentenversicherung und Finanzbehörden ohne gesonderten Antrag."
    },
    {
      id: 25,
      titel: "Sicherung der Nachhaltigkeitsreserve",
      status: "gesetz" as const,
      kategorie: "Liquidität",
      beschreibung: "Gesetzlich vorgeschriebene Mindestreserve von 0,2 Monatsausgaben in der Rentenversicherung."
    },
    {
      id: 26,
      titel: "Erweiterung der Reha-Leistungen für pflegende Angehörige",
      status: "gesetz" as const,
      kategorie: "Pflege",
      beschreibung: "Verbesserte Rentenpunkt-Gutschriften bei häuslicher Pflege ab Pflegegrad 2."
    },
    {
      id: 27,
      titel: "Reform der versicherungsfremden Leistungen",
      status: "empfehlung" as const,
      kategorie: "Bundeszuschuss",
      beschreibung: "Forderung nach vollständiger Erstattung gesamtgesellschaftlicher Aufgaben durch den Bundeshaushalt."
    },
    {
      id: 28,
      titel: "Vereinfachung des Versorgungsausgleichs bei Scheidung",
      status: "gesetz" as const,
      kategorie: "Familienrecht",
      beschreibung: "Direkte Übertragung von Entgeltpunkten auf das Rentenkonto des ausgleichsberechtigten Ehegatten."
    },
    {
      id: 29,
      titel: "Verstärkte Prävention im betrieblichen Gesundheitsmanagement",
      status: "empfehlung" as const,
      kategorie: "Gesundheit",
      beschreibung: "Kopplung von Präventionsmaßnahmen an DRV-Reha-Angebote zur Erhaltung der Erwerbsfähigkeit."
    },
    {
      id: 30,
      titel: "Schutz von Erwerbsminderungsrentnern vor Armut",
      status: "gesetz" as const,
      kategorie: "Sozialschutz",
      beschreibung: "Gesetzlicher Zuschlag für Bestands-EM-Rentner mit Renteneintritt zwischen 2001 und 2018."
    },
    {
      id: 31,
      titel: "Verbesserung der Renteninformationen bezüglich Inflation",
      status: "empfehlung" as const,
      kategorie: "Transparenz",
      beschreibung: "Ausweis von kaufkraftbereinigten Hochrechnungen in der jährlichen DRV-Renteninformation."
    },
    {
      id: 32,
      titel: "Förderung ehrenamtlicher Tätigkeit im Ruhestand",
      status: "gesetz" as const,
      kategorie: "Ehrenamt",
      beschreibung: "Anrechnungsfreie Aufwandsentschädigungen für Rentner bei ehrenamtlichem Engagement."
    },
    {
      id: 33,
      titel: "Regelmäßige Vorlegung eines Sozialberichts der Bundesregierung",
      status: "gesetz" as const,
      kategorie: "Transparenz",
      beschreibung: "Gesetzliche Pflicht zur vierjährigen Vorlage des Berichts über die Lage der Alterssicherung."
    }
  ];

  const faqs = [
    {
      question: "Sind die Empfehlungen der Rentenkommission bereits geltendes Gesetz?",
      answer: "Nein. Bei den 33 Reformpunkten der Kommission 'Verlässlicher Generationenvertrag' handelt es sich um wissenschaftliche und politische Handlungsempfehlungen. Gesetzliche Wirkung entfalten sie erst, wenn sie vom Deutschen Bundestag beschlossen und im Bundesgesetzblatt verkündet werden."
    },
    {
      question: "Was bedeutet das Generationenkapital im Vergleich zur empfohlenen Kapitalrente?",
      answer: "Das gesetzlich beschlossene Generationenkapital ist ein staatlicher Ausgleichsfonds, der durch Bundesmittel am Kapitalmarkt angelegt wird, um ab den 2030er Jahren die Beitragszahler zu entlasten. Es verändert nicht die individuelle Beitragszahlung des Bürgers, im Gegensatz zu privaten Vorsorgeformen."
    }
  ];

  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenkommission 2026", item: "/rentenkommission" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup faqItems={faqs} breadcrumbs={breadcrumbs} />

      {/* Top Disclaimer Header */}
      <div className="p-4 bg-amber-100/80 border border-amber-300 text-amber-950 rounded-2xl mb-8 flex items-start gap-3 text-xs sm:text-sm">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <strong>Wichtiger Status-Hinweis:</strong> Die Rentenkommission 2026 hat Handlungsempfehlungen vorgelegt. Diese sind <u>nicht automatisch geltendes Recht</u>. Einige Punkte wurden bereits im SGB VI verankert, andere befinden sich in der Gesetzgebung oder sind unverbindliche Vorschläge.
        </div>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Die 33 Empfehlungen der Rentenkommission verständlich erklärt
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Systematische Aufstellung der Empfehlungen der Regierungskommission „Verlässlicher Generationenvertrag“. Bei allen Punkten unterscheiden wir strikt zwischen bloßen Vorschlägen, politischen Zielsetzungen und bereits geltendem Recht.
        </p>
      </div>

      {/* Official Source Link Box */}
      <div className="p-5 bg-slate-900 text-white rounded-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors shrink-0"
        >
          <span>Zum BMAS-Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* 33 Recommendations List */}
      <div className="space-y-4 mb-12">
        {empfehlungen.map((emp) => (
          <div key={emp.id} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center border border-slate-200">
                  #{emp.id}
                </span>
                <h2 className="text-base font-bold text-slate-900">{emp.titel}</h2>
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
