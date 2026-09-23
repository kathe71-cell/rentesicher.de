import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const routesToPrerender = [
  {
    url: '/',
    title: 'rentesicher.de – Rentensicherheit & Altersvorsorge 2026',
    description: 'Unabhängiges Fachportal zur Rentensicherheit: Rentenkommission 2026, Gesetzlicher Rentenwert 42,52 €, Drei-Säulen-Altersvorsorge & 3 Rechner.'
  },
  {
    url: '/rentenkommission',
    title: 'Rentenkommission 2026: Die 33 Empfehlungen & Rechtsstatus',
    description: 'Fachliche Übersicht der 33 Empfehlungen der Rentenkommission, Haltelinie 48 % und Unterscheidung von bereits geltendem Recht.'
  },
  {
    url: '/rentenluecke',
    title: 'Rentenlücke berechnen 2026: Interaktive Modellrechnung',
    description: 'Berechne eine erste Orientierung für deine monatliche Versorgungslücke auf Basis von Nettoeinkommen und gesetzlicher Renteninformation.'
  },
  {
    url: '/private-rente',
    title: 'Private Rentenversicherung 2026: Steuerliche Regelungen & Modelle',
    description: 'Fachliche Erläuterung zur privaten Rentenversicherung: Ertragsanteilsbesteuerung nach § 22 EStG vs. Unterschiedsbetrag nach § 20 EStG.'
  },
  {
    url: '/riester-rente',
    title: 'Riester-Rente 2026: Zulagen, Steuerabzug & Förderbedingungen',
    description: 'Rechtsstand 2026 der Riester-Förderung: Grundzulage 175 €, Kinderzulage 300 €, Mindesteigenbeitrag 4 % und Sonderausgabenabzug.'
  },
  {
    url: '/betriebliche-altersvorsorge',
    title: 'Betriebliche Altersvorsorge (bAV): Arbeitgeberzuschuss & Durchführungswege',
    description: 'Entgeltumwandlung nach § 1a BetrAVG: Voraussetzungen des 15 % Arbeitgeberzuschusses, Sozialversicherungseinsparung & Abzüge.'
  },
  {
    url: '/etf-rente',
    title: 'ETF-Sparplan für die Altersvorsorge: Möglichkeiten, Kosten & Risiken',
    description: 'Neutraler Überblick über Aktien-ETFs zur Altersvorsorge: TER-Kosten, Verlust- & Sequenzrisiko sowie historische MSCI-Indexdaten.'
  },
  {
    url: '/rentenalter',
    title: 'Renteneintrittsalter 2026: Wann kann ich in Rente gehen?',
    description: 'Rechner für dein gesetzliches Eintrittsalter: Regelaltersgrenze 67, Rente mit 63 und Bedingungen für langjährig Versicherte.'
  },
  {
    url: '/rentenberechnung',
    title: 'Gesetzliche Rentenberechnung: Rentenformel & Rentenwert 42,52 €',
    description: 'Offizielle Rentenformel nach § 64 SGB VI: Entgeltpunkte, Zugangsfaktor, Rentenwert 2026 und Auswertung vor Einkommensteuer.'
  },
  {
    url: '/rentenanpassung',
    title: 'Rentenanpassung 2026: +4,24 % Erhöhung des Rentenwerts',
    description: 'Fakten zur Rentenwertbestimmungsverordnung 2026 auf 42,52 € je Entgeltpunkt und historischer Rentenwert-Vergleich.'
  },
  {
    url: '/rente-mit-63',
    title: 'Rente mit 63: Voraussetzungen, Abschläge & 45 Beitragsjahre',
    description: 'Bedingungen für Altersrenten vor der Regelaltersgrenze nach § 36 & § 236b SGB VI im Überblick.'
  },
  {
    url: '/grundrente',
    title: 'Grundrente 2026: Anspruch, 33 Jahre Grundrentenzeiten & Prüfung',
    description: 'Informationen zum Grundrentenzuschlag für langjährige Beitragszahler mit unterdurchschnittlichem Einkommen.'
  },
  {
    url: '/witwenrente',
    title: 'Witwenrente 2026: Große & Kleine Hinterbliebenenrente',
    description: 'Anspruchsvoraussetzungen, Freibeträge bei eigenem Einkommen und Berechnung der Witwenrente nach SGB VI.'
  },
  {
    url: '/erwerbsminderungsrente',
    title: 'Erwerbsminderungsrente (EM-Rente): Voraussetzungen & Schutz',
    description: 'Absicherung bei Verlust der Erwerbsfähigkeit, Zurechnungszeiten und Abzüge im Überblick.'
  },
  {
    url: '/rentenpunkte',
    title: 'Entgeltpunkte (Rentenpunkte) 2026: Berechnen & Gegenwert',
    description: 'Wie viel ist 1 Rentenpunkt 2026 wert? (42,52 €) – Punkte für Durchschnittseinkommen, Erziehung und Pflege.'
  },
  {
    url: '/rentenbescheid',
    title: 'Rentenbescheid prüfen & Renteninformation richtig lesen',
    description: 'Checkliste zur Überprüfung deines DRV-Versicherungsverlaufs, Anrechnungszeiten und Widerspruchsfristen.'
  },
  {
    url: '/rentensteuer',
    title: 'Besteuerung von Renten 2026: Besteuerungsanteil & Freibetrag',
    description: 'Besteuerungsanteil im Ruhestand nach dem Alterseinkünftegesetz und steuerlicher Grundfreibetrag 2026.'
  },
  {
    url: '/altersvorsorge',
    title: 'Altersvorsorge Vergleich 2026: Die 3 Säulen im Überblick',
    description: 'Neutraler Vergleich von Gesetzlicher Rente, bAV, Riester, Privater Rentenversicherung und ETF-Sparplänen.'
  },
  {
    url: '/rentenrechner',
    title: 'Interaktiver Rentenrechner-Hub 2026: Modellrechnungen',
    description: 'Kostenlose Modellrechnungen für deine Rentenlücke, deine gesetzliche Monatsrente und dein gesetzliches Eintrittsalter.'
  },
  {
    url: '/impressum',
    title: 'Impressum (§ 5 DDG) – rentesicher.de',
    description: 'Rechtliche Pflichtangaben und Betreiberinformationen von rentesicher.de.'
  },
  {
    url: '/datenschutz',
    title: 'Datenschutzerklärung (DSGVO) – rentesicher.de',
    description: 'Informationen zur cookielosen Datenverarbeitung und zum Datenschutz auf rentesicher.de.'
  }
];

(async () => {
  console.log('🚀 Start Pre-Rendering aller 21 Routen...');

  for (const route of routesToPrerender) {
    const appHtml = render(route.url);

    let html = template
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
      .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`)
      .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`)
      .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.description}" />`)
      .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="https://www.rentesicher.de${route.url === '/' ? '' : route.url}" />`);

    const filePath = route.url === '/' ? 'dist/index.html' : `dist${route.url}/index.html`;
    const dirPath = path.dirname(toAbsolute(filePath));

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(toAbsolute(filePath), html);
    console.log(`  ✓ Vorgerendert: ${filePath} (${(html.length / 1024).toFixed(1)} kB)`);
  }

  console.log('🎉 SSG Pre-Rendering aller 21 Routen erfolgreich abgeschlossen!');
})();
