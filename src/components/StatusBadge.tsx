import React from 'react';

interface StatusBadgeProps {
  type: 'empfehlung' | 'gesetz' | 'gilt_ab' | 'zielsetzung';
  dateStr?: string;
}

export default function StatusBadge({ type, dateStr }: StatusBadgeProps) {
  if (type === 'empfehlung') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-950 border border-amber-300 shrink-0">
        Empfehlung der Kommission
      </span>
    );
  }

  if (type === 'zielsetzung') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-950 border border-purple-300 shrink-0">
        Politische Zielsetzung
      </span>
    );
  }

  if (type === 'gilt_ab') {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-950 border border-emerald-300 shrink-0">
        Gesetzliches Vorhaben {dateStr ? `(ab ${dateStr})` : ''}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-950 border border-blue-300 shrink-0">
      Geltendes Recht (SGB VI)
    </span>
  );
}
