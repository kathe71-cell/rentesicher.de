import React from 'react';
import SourceFootnote from '../components/SourceFootnote';
import SchemaMarkup from '../components/SchemaMarkup';

export default function Impressum() {
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Impressum", item: "/impressum" }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 leading-relaxed">
      <SchemaMarkup breadcrumbs={breadcrumbs} />

      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
        Impressum
      </h1>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm">
        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h2>
          <p>
            Jens Kathe<br />
            Hansastraße 6<br />
            34119 Kassel<br />
            Deutschland
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:jens@kathe.org" className="text-blue-700 font-semibold underline">jens@kathe.org</a><br />
            Telefon: <a href="tel:+491786652623" className="text-blue-700 font-semibold underline">+49 178 6652623</a>
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">Umsatzsteuer-ID</h2>
          <p>
            Kleinunternehmer gemäß § 19 UStG. Es wird keine Umsatzsteuer berechnet.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Jens Kathe<br />
            Hansastraße 6<br />
            34119 Kassel
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 text-base mb-2">Affiliate- & Werbehinweis</h2>
          <p>
            rentesicher.de ist ein unabhängiges Informationsportal. Wir stehen in keinem gesellschaftsrechtlichen Verhältnis zu den verglichenen Anbietern oder Versicherern. Links und Formulare, die mit einem Sternchen (*) oder als Werbung gekennzeichnet sind, stellen Werbe- oder Partnerlinks dar. Bei Abschluss eines Vertrags über diese Links erhalten wir ggf. eine Provision. Für dich entstehen dadurch keine Mehrkosten.
          </p>
        </div>
      </div>

      <SourceFootnote />
    </div>
  );
}
