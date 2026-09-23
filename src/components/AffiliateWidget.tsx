import React, { useEffect, useState, useRef } from 'react';
import { ShieldCheck, Info } from 'lucide-react';

interface AffiliateWidgetProps {
  type: 'rente' | 'riester';
  title?: string;
}

export default function AffiliateWidget({ type, title }: AffiliateWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementId = type === 'rente' ? 'tcpp-iframe-rente' : 'tcpp-iframe-riester';
  const [showFallbackIframe, setShowFallbackIframe] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setShowFallbackIframe(false);
    const scriptId = `script-pv-${type}-${Date.now()}`;

    // Clean up any old widget scripts of this type
    const oldScripts = document.querySelectorAll(`script[id^="script-pv-${type}"]`);
    oldScripts.forEach((s) => s.remove());

    const container = document.getElementById(elementId) || containerRef.current;
    if (container) {
      container.innerHTML = '';
    }

    // Append fresh script element
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = type === 'rente' 
      ? 'https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-rente/rente-iframe.js'
      : 'https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-riester/riester-iframe.js';
    script.async = true;

    document.body.appendChild(script);

    // Fallback safety timer: If no iframe has been injected after 1.2s, enable direct iframe fallback
    const fallbackTimer = setTimeout(() => {
      const currentContainer = document.getElementById(elementId) || containerRef.current;
      if (currentContainer && !currentContainer.querySelector('iframe')) {
        setShowFallbackIframe(true);
      }
    }, 1200);

    return () => {
      clearTimeout(fallbackTimer);
      script.remove();
    };
  }, [type, elementId]);

  const fallbackUrl = type === 'rente'
    ? 'https://form.partner-versicherung.de/form.php?aid=1226&cid=2&partner_id=72057&tracking=&insurance_id=2&module=formv4'
    : 'https://form.partner-versicherung.de/form.php?aid=1226&cid=21&partner_id=72057&tracking=&insurance_id=21&module=formv4';

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
          Partner-Vergleich*
        </span>
      </div>

      {/* Overflow-X wrapper prevents iframe script from expanding parent page on mobile */}
      <div className="w-full max-w-full overflow-x-auto overflow-y-hidden rounded-xl bg-slate-50 min-h-[500px] flex items-center justify-center">
        <div 
          ref={containerRef}
          style={{ width: '100%', minWidth: '280px', maxWidth: '100%' }} 
          id={elementId} 
          className="w-full text-slate-400 text-xs sm:text-sm text-center p-2"
        >
          {showFallbackIframe ? (
            <iframe
              src={fallbackUrl}
              title={title || "Tarif-Vergleich"}
              className="w-full min-h-[550px] border-0 rounded-xl"
              style={{ width: '100%', minHeight: '550px', border: 'none' }}
            />
          ) : (
            <div className="py-12 flex flex-col items-center justify-center gap-2">
              <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-slate-500 font-medium">Lade Vergleichsformular...</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-start gap-1.5 leading-relaxed">
        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <span>
          <strong>* Werbelink / Partnerlink:</strong> Wenn du über dieses Vergleichs- oder Anfrageformular einen Vertrag abschließt, können wir eine Vergütung erhalten. Für dich entstehen dadurch keine zusätzlichen Kosten.
        </span>
      </div>
    </div>
  );
}
