// Zentrale Daten- & Konfigurationsdatei für veränderliche gesetzliche Parameter
// Änderungen an Rentenwerten, Anpassungssätzen oder Freibeträgen werden ausschließlich hier gepflegt.

export const CURRENT_VALUES = {
  // Rentenwerte & Rentenanpassung
  rentenwert: 42.52,
  rentenwertFormatted: '42,52 €',
  rentenanpassungPercent: 4.24,
  rentenanpassungFormatted: '+4,24 %',
  standardrenteBrutto: 1913.40,
  standardrenteFormatted: '1.913,40 €',
  halteliniePercent: 48.0,
  haltelinieFormatted: '48,0 %',

  // Riester-Rente Parameter
  riesterGrundzulage: 175.00,
  riesterGrundzulageFormatted: '175,00 €',
  riesterKinderzulageAb2008: 300.00,
  riesterKinderzulageAb2008Formatted: '300,00 €',
  riesterKinderzulageVor2008: 185.00,
  riesterKinderzulageVor2008Formatted: '185,00 €',
  riesterHoechstbetrag: 2100.00,
  riesterHoechstbetragFormatted: '2.100,00 €',
  riesterMindestbeitragProzent: 4.0,

  // Betriebliche Altersvorsorge (bAV)
  bavArbeitgeberzuschussProzent: 15,
  bavArbeitgeberzuschussFormatted: '15 %',

  // Fachliches Überprüfungsdatum
  lastCheckedDate: 'September 2026',
  lastCheckedText: 'Zuletzt fachlich geprüft: September 2026'
};
