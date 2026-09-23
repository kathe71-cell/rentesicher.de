import React, { useEffect } from 'react';

interface AdSenseProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
}

export default function AdSense({ slot = '1234567890', format = 'auto', responsive = true }: AdSenseProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // ignore adsbygoogle push errors on SSR / SSG
      }
    }
  }, []);

  return (
    <div className="my-8 text-center bg-slate-100/50 p-3 rounded-xl border border-slate-200/60 overflow-hidden min-h-[90px] flex flex-col items-center justify-center">
      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-1">Anzeige / Werbeplatzierung</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-7078147966379221"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
