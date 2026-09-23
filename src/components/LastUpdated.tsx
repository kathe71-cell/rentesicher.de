import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { CURRENT_VALUES } from '../data/current-values';

interface LastUpdatedProps {
  className?: string;
}

export default function LastUpdated({ className = '' }: LastUpdatedProps) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 ${className}`}>
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
      <span>{CURRENT_VALUES.lastCheckedText}</span>
    </div>
  );
}
