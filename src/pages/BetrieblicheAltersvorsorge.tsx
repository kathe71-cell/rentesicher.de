import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';
import LastUpdated from '../components/LastUpdated';
import { CURRENT_VALUES } from '../data/current-values';
import { Info } from 'lucide-react';

export default function BetrieblicheAltersvorsorge() {
  const faqs = [
    {
      question: "Wann gilt die Pflicht zum Arbeitgeberzuschuss bei der bAV?",
      answer: `Nach § 1a Abs. 1a BetrAVG muss der Arbeitgeber bei der Entgeltumwandlung über eine Direktversicherung, eine Pensionskasse oder einen Pensionsfonds grundsätzlich ${CURRENT_VALUES.bavArbeitgeberzuschussFormatted} des umgewandelten Entgelts zusätzlich als Zuschuss weiterleiten, soweit er durch die Entgeltumwandlung Sozialversicherungsbeiträge einspart.`
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
        <div className="mb-3">
          <LastUpdated />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Betriebliche Altersvorsorge: Arbeitgeberzuschuss & bAV
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Wie die Entgeltumwandlung nach § 1a BetrAVG funktioniert, unter welchen Voraussetzungen der {CURRENT_VALUES.bavArbeitgeberzuschussFormatted} Arbeitgeberzuschuss greift und worauf in der Auszahlungsphase zu achten ist.
        </p>
      </div>

      <section className="prose prose-slate max-w-none my-10 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Rechtsgrundlage der Entgeltumwandlung (§ 1a BetrAVG)
        </h2>
        <p className="text-slate-700">
          Sozialversicherungspflichtig beschäftigte Arbeitnehmer haben in Deutschland nach § 1a Abs. 1 Betriebsrentengesetz (BetrAVG) einen Rechtsanspruch darauf, von ihren künftigen Entgeltansprüchen Teile steuer- und sozialabgabenfrei in eine betriebliche Altersvorsorge umzuwandeln.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">
          Der {CURRENT_VALUES.bavArbeitgeberzuschussFormatted} Arbeitgeberzuschuss nach § 1a Abs. 1a BetrAVG
        </h2>
        <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl my-6">
          <h3 className="font-bold text-blue-950 mb-2 text-base flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-700" />
            Gesetzliche Formulierung & Bedingung:
          </h3>
          <p className="text-sm text-blue-900 leading-relaxed">
            Soweit der Arbeitgeber durch die Entgeltumwandlung Sozialversicherungsbeiträge einspart, ist er verpflichtet, <strong>{CURRENT_VALUES.bavArbeitgeberzuschussFormatted} des umgewandelten Entgelts zusätzlich</strong> als Arbeitgeberzuschuss an den Versorgungsträger weiterzuleiten.
          </p>
        </div>
      </section>

      <SourceFootnote />
    </div>
  );
}
