import React, { useEffect } from 'react';
import { ShieldCheck, Info } from 'lucide-react';

interface AffiliateWidgetProps {
  type: 'rente' | 'riester';
  title?: string;
}

export default function AffiliateWidget({ type, title }: AffiliateWidgetProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scriptId = `script-pv-${type}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = type === 'rente' 
        ? 'https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-rente/rente-iframe.js'
        : 'https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-riester/riester-iframe.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [type]);

  const elementId = type === 'rente' ? 'tcpp-iframe-rente' : 'tcpp-iframe-riester';

  return (
    <div className="my-6 sm:my-8 p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-full overflow-hidden">
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {title || (type === 'rente' ? 'Unverbindlicher Rentenversicherung-Vergleich' : 'Riester-Vorsorge Anfordern')}
          </h3>
        </div>
        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
          Partner-Vergleich
        </span>
      </div>

      {/* Overflow-X wrapper prevents iframe script from expanding parent page on mobile */}
      <div className="w-full max-w-full overflow-x-auto overflow-y-hidden rounded-xl bg-slate-50 min-h-[420px] flex items-center justify-center">
        <div style={{ width: '100%', minWidth: '280px', maxWidth: '100%' }} id={elementId} className="w-full text-slate-400 text-xs sm:text-sm text-center p-4">
          <span>Lade Vergleichsformular...</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-start gap-1.5 leading-relaxed">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <span>
          <strong>* Werbung / Affiliate-Partnerschaft:</strong> Wenn du über dieses Vergleichs- oder Anfrageformular einen Vertrag abschließt, können wir eine Vergütung erhalten. Für dich entstehen dadurch keine zusätzlichen Kosten.
        </span>
      </div>
    </div>
  );
}
