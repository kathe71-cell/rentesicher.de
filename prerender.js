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
    description: 'Unabhängiges Fachportal zur Rentensicherheit: Rentenkommission 2026, Rentenwert 42,52 €, 3-Säulen-Altersvorsorge & 3 interaktive Rechner.'
  },
  {
    url: '/rentenkommission',
    title: 'Rentenkommission 2026: Die 33 Empfehlungen im Überblick',
    description: 'Verständliche Analyse aller 33 Empfehlungen der Rentenkommission 2026, Haltelinie 48 % und Rechtsstatus im Vergleich.'
  },
  {
    url: '/rentenluecke',
    title: 'Rentenlücke berechnen 2026: Interaktiver Online-Rechner',
    description: 'Berechne deine monatliche Versorgungslücke im Alter auf Basis deines Gehalts, deiner erwarteten Rente und Inflation.'
  },
  {
    url: '/private-rente',
    title: 'Private Rentenversicherung Vergleich 2026 & Steuervorteile',
    description: 'Private Vorsorge als 3. Säule: Halbeinkünfteverfahren, lebenslange Rentenauszahlung und geprüfte Vergleichstarife.'
  },
  {
    url: '/riester-rente',
    title: 'Riester-Rente 2026: Staatliche Förderung & Zulagen-Rechner',
    description: 'Lohnt sich Riester noch? Grundzulage 175 €, Kinderzulage 300 € und steuerlicher Sonderausgabenabzug.'
  },
  {
    url: '/betriebliche-altersvorsorge',
    title: 'Betriebliche Altersvorsorge (bAV): Arbeitgeberzuschuss 15 %',
    description: 'Entgeltumwandlung & bAV: Rechtsanspruch, 15 % gesetzlicher Arbeitgeberzuschuss und Abgabenersparnis.'
  },
  {
    url: '/etf-rente',
    title: 'ETF-Sparplan für Rente: Rendite, Kosten & ETF statt Riester',
    description: 'ETF-Altersvorsorge mit MSCI World: 7 % historische Rendite p.a., minimalste Kosten und volle Flexibilität.'
  },
  {
    url: '/rentenalter',
    title: 'Renteneintrittsalter 2026: Wann kann ich in Rente gehen?',
    description: 'Interaktiver Eintritts-Rechner: Reguläres Alter 67, Rente mit 63 und Bedingungen für 45 Beitragsjahre.'
  },
  {
    url: '/rentenberechnung',
    title: 'Gesetzliche Rentenberechnung: Rentenformel & Rentenwert 42,52 €',
    description: 'Wie wird die Rente berechnet? Entgeltpunkte, Zugangsfaktor, Rentenwert 2026 und Brutto-Netto-Rechner.'
  },
  {
    url: '/rentenanpassung',
    title: 'Rentenanpassung 2026: +4,24 % Erhöhung des Rentenwerts',
    description: 'Alle Fakten zur Rentenerhöhung 2026 auf 42,52 € je Entgeltpunkt und historischer Rentenwert-Vergleich.'
  },
  {
    url: '/rente-mit-63',
    title: 'Rente mit 63: Voraussetzungen, Abschläge & 45 Beitragsjahre',
    description: 'Wer darf noch mit 63 in Rente? Unterschiede für langjährig und besonders langjährig Versicherte.'
  },
  {
    url: '/grundrente',
    title: 'Grundrente 2026: Anspruch, 33 Jahre Grundrentenzeiten & Prüfung',
    description: 'Grundrentenzuschlag für langjährige Beitragszahler mit unterdurchschnittlichem Einkommen im Detail.'
  },
  {
    url: '/witwenrente',
    title: 'Witwenrente 2026: Große & Kleine Hinterbliebenenrente',
    description: 'Anspruchsvoraussetzungen, Freibeträge bei eigenem Einkommen und Berechnung der Witwenrente.'
  },
  {
    url: '/erwerbsminderungsrente',
    title: 'Erwerbsminderungsrente (EM-Rente): Voraussetzungen & Schutz',
    description: 'Absicherung bei Verlust der Erwerbsfähigkeit, Zurechnungszeiten und Abzüge im Überblick.'
  },
  {
    url: '/rentenpunkte',
    title: 'Entgeltpunkte (Rentenpunkte) 2026: Berechnen & Gegenwert',
    description: 'Wie viel ist 1 Rentenpunkt 2026 wert? (42,52 €) – Punkte für Ausgleich, Erziehung und Durchschnittsgehalt.'
  },
  {
    url: '/rentenbescheid',
    title: 'Rentenbescheid prüfen & Renteninformation richtig lesen',
    description: 'Checkliste zur Überprüfung deines DRV-Versicherungsverlaufs, Anrechnungszeiten und Widerspruchsfristen.'
  },
  {
    url: '/rentensteuer',
    title: 'Besteuerung von Renten 2026: Besteuerungsanteil & Freibetrag',
    description: 'Wann müssen Rentner Steuern zahlen? Rentenfreibetrag, Nachgelagerte Besteuerung und Grundfreibetrag 2026.'
  },
  {
    url: '/altersvorsorge',
    title: 'Altersvorsorge Vergleich 2026: Die 3 Säulen im Überblick',
    description: 'Gegenüberstellung von Gesetzlicher Rente, bAV, Riester, Privater Rente und ETF-Sparplänen.'
  },
  {
    url: '/rentenrechner',
    title: 'Interaktiver Rentenrechner-Hub 2026: Alle 3 Rechner kostenlos',
    description: 'Berechne deine Rentenlücke, deine gesetzliche Monatsrente und dein individuelles Renteneintrittsalter.'
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
