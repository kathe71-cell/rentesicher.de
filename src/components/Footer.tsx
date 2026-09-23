import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm mt-auto border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-extrabold text-slate-950 text-lg">
                €
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                rentesicher<span className="text-amber-500">.de</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Unabhängiges Fach- und Informationsportal zur gesetzlichen, betrieblichen und privaten Altersvorsorge in Deutschland.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Rechner & Tools</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/rentenrechner" className="hover:text-amber-400 transition-colors">Rechner-Hub (Alle 3 Rechner)</Link></li>
              <li><Link to="/rentenluecke" className="hover:text-amber-400 transition-colors">Rentenlücken-Rechner</Link></li>
              <li><Link to="/rentenberechnung" className="hover:text-amber-400 transition-colors">Gesetzlicher Rentenrechner</Link></li>
              <li><Link to="/rentenalter" className="hover:text-amber-400 transition-colors">Renteneintritts-Rechner</Link></li>
              <li><Link to="/rentenpunkte" className="hover:text-amber-400 transition-colors">Entgeltpunkte-Rechner</Link></li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Drei Säulen Vorsorge</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/private-rente" className="hover:text-amber-400 transition-colors">Private Rentenversicherung</Link></li>
              <li><Link to="/riester-rente" className="hover:text-amber-400 transition-colors">Riester-Rente</Link></li>
              <li><Link to="/betriebliche-altersvorsorge" className="hover:text-amber-400 transition-colors">Betriebliche Altersvorsorge (bAV)</Link></li>
              <li><Link to="/etf-rente" className="hover:text-amber-400 transition-colors">ETF-Sparplan für Rente</Link></li>
              <li><Link to="/altersvorsorge" className="hover:text-amber-400 transition-colors">Altersvorsorge Vergleich</Link></li>
            </ul>
          </div>

          {/* Legal & Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Rechtliches & Transparenz</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/impressum" className="hover:text-amber-400 transition-colors font-medium">→ Impressum (§ 5 DDG)</Link></li>
              <li><Link to="/datenschutz" className="hover:text-amber-400 transition-colors">Datenschutzerklärung</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-amber-400 transition-colors">Sitemap XML</a></li>
              <li><a href="/feed.xml" className="hover:text-amber-400 transition-colors">RSS 2.0 Feed</a></li>
              <li><a href="/llms.txt" className="hover:text-amber-400 transition-colors">LLM Info (llms.txt)</a></li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 mb-6 leading-relaxed">
          <p className="font-semibold text-slate-300 mb-1">Haftungsausschluss & Hinweis zur Rentenberatung:</p>
          <p>
            Diese Seite dient ausschließlich der allgemeinen Information und Orientierung. Sie ersetzt keine individuelle Renten- oder Rechtsberatung. Für persönliche Empfehlungen wende dich bitte an einen zertifizierten Rentenberater oder die Deutsche Rentenversicherung Bund.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            Stand: September 2026 | Quellen: Deutsche Rentenversicherung Bund / BMAS / Bundesgesetzblatt
          </div>
          <div className="flex items-center gap-4">
            <span>© 2026 rentesicher.de</span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">Zero-CDN • DSGVO-konform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
