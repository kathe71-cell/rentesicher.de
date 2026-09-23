import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown, Calculator, BookOpen, Layers, Award } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md border-b border-slate-800">
      {/* Top Banner strip */}
      <div className="bg-amber-600 text-slate-950 text-xs py-1 px-4 font-bold text-center">
        <span>* Rentenwert 2026: 42,52 € / EP • Rentenanpassung: +4,24 % • Unabhängiges Fachportal</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-inner group-hover:bg-amber-400 transition-colors">
            €
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white block leading-none">
              rentesicher<span className="text-amber-500">.de</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide">
              Fachportal Altersvorsorge 2026
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          <Link
            to="/"
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('/') ? 'bg-slate-800 text-amber-400 font-semibold' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Startseite
          </Link>

          <Link
            to="/rentenkommission"
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('/rentenkommission') ? 'bg-slate-800 text-amber-400 font-semibold' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Rentenkommission 2026
          </Link>

          <Link
            to="/rentenrechner"
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              isActive('/rentenrechner') ? 'bg-amber-500 text-slate-950 font-bold' : 'text-amber-400 hover:text-amber-300 hover:bg-slate-800/60'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Rechner-Hub</span>
          </Link>

          <Link
            to="/rentenluecke"
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('/rentenluecke') ? 'bg-slate-800 text-amber-400 font-semibold' : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Rentenlücke
          </Link>

          {/* Mega Dropdown for Themes & Topics */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1"
            >
              <span>Themen & Vorsorge</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>

            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute right-0 mt-2 w-80 bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 p-4 grid grid-cols-1 gap-2 z-50"
              >
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold px-2 mb-1">Drei Säulen der Vorsorge</div>
                <Link to="/private-rente" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Private Rentenversicherung</Link>
                <Link to="/riester-rente" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Riester-Rente 2026</Link>
                <Link to="/betriebliche-altersvorsorge" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Betriebliche Altersvorsorge (bAV)</Link>
                <Link to="/etf-rente" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">ETF-Sparplan für Rente</Link>
                <Link to="/altersvorsorge" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Altersvorsorge Übersicht</Link>

                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold px-2 mt-2 mb-1 border-t border-slate-100 pt-2">Gesetzliche Rente & Themen</div>
                <Link to="/rentenberechnung" onClick={() => setDropdownOpen(false)} className="px-2 py-1 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Gesetzliche Rentenberechnung</Link>
                <Link to="/rentenalter" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Rentenalter & Eintrittszeitpunkt</Link>
                <Link to="/rentenanpassung" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Rentenanpassung 2026 (+4,24%)</Link>
                <Link to="/rente-mit-63" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Rente mit 63</Link>
                <Link to="/grundrente" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Grundrente</Link>
                <Link to="/witwenrente" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Witwen- & Hinterbliebenenrente</Link>
                <Link to="/erwerbsminderungsrente" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Erwerbsminderungsrente</Link>
                <Link to="/rentenpunkte" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Entgeltpunkte (Rentenpunkte)</Link>
                <Link to="/rentenbescheid" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Rentenbescheid prüfen</Link>
                <Link to="/rentensteuer" onClick={() => setDropdownOpen(false)} className="px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block">Besteuerung von Renten</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Menü öffnen"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2 font-medium">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800">Startseite</Link>
            <Link to="/rentenkommission" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800">Rentenkommission 2026</Link>
            <Link to="/rentenrechner" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center gap-2">
              <Calculator className="w-4 h-4" /> Rechner-Hub (Alle 3 Rechner)
            </Link>
            <Link to="/rentenluecke" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800">Rentenlücken-Rechner</Link>
            <Link to="/rentenberechnung" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800">Gesetzlicher Rentenrechner</Link>
            <Link to="/rentenalter" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800">Renteneintritts-Rechner</Link>

            <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold pt-3 pb-1">Vorsorge & Vergleiche</div>
            <Link to="/private-rente" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Private Rentenversicherung</Link>
            <Link to="/riester-rente" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Riester-Rente 2026</Link>
            <Link to="/betriebliche-altersvorsorge" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Betriebliche Altersvorsorge (bAV)</Link>
            <Link to="/etf-rente" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">ETF-Sparplan für Rente</Link>
            <Link to="/altersvorsorge" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Altersvorsorge Übersicht</Link>

            <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold pt-3 pb-1">Rentenwissen & Begriffe</div>
            <Link to="/rentenanpassung" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Rentenanpassung 2026</Link>
            <Link to="/rente-mit-63" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Rente mit 63</Link>
            <Link to="/grundrente" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Grundrente</Link>
            <Link to="/witwenrente" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Witwenrente</Link>
            <Link to="/erwerbsminderungsrente" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Erwerbsminderungsrente</Link>
            <Link to="/rentenpunkte" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Entgeltpunkte</Link>
            <Link to="/rentenbescheid" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Rentenbescheid</Link>
            <Link to="/rentensteuer" onClick={() => setMobileMenuOpen(false)} className="px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg">Rentenbesteuerung</Link>
          </div>
        </div>
      )}
    </header>
  );
}
