import React from 'react';

interface StatusBadgeProps {
  type: 'empfehlung' | 'gesetz' | 'gilt_ab';
  dateStr?: string;
}

export default function StatusBadge({ type, dateStr }: StatusBadgeProps) {
  if (type === 'empfehlung') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-950 border border-amber-300">
        Empfehlung (nicht in Kraft)
      </span>
    );
  }

  if (type === 'gilt_ab') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-950 border border-emerald-300">
        Gilt ab {dateStr || '2026'}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-950 border border-blue-300">
      Geltendes Recht
    </span>
  );
}
