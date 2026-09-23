import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useLocation, Link, Routes, Route, MemoryRouter } from 'react-router-dom';
import { Calculator, ChevronDown, X, Menu, ChevronUp, Check, Share2, AlertTriangle, TrendingUp, Info, ShieldCheck, BookOpen, ExternalLink, ArrowRight, HelpCircle, ShieldAlert, AlertCircle, CheckCircle2, XCircle, Calendar, Clock, Heart, FileText, Activity, ArrowDown } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

const CURRENT_VALUES = {
  rentenwertFormatted: "42,52 €",
  rentenanpassungFormatted: "+4,24 %",
  standardrenteFormatted: "1.913,40 €",
  haltelinieFormatted: "48,0 %",
  riesterGrundzulageFormatted: "175,00 €",
  riesterKinderzulageAb2008Formatted: "300,00 €",
  riesterKinderzulageVor2008Formatted: "185,00 €",
  riesterHoechstbetragFormatted: "2.100,00 €",
  riesterMindestbeitragProzent: 4,
  bavArbeitgeberzuschussFormatted: "15 %",
  lastCheckedText: "Zuletzt fachlich geprüft: September 2026"
};

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return /* @__PURE__ */ jsxs("header", { className: "bg-slate-900 text-white sticky top-0 z-50 shadow-md border-b border-slate-800", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-amber-600 text-slate-950 text-xs py-1 px-4 font-bold text-center", children: /* @__PURE__ */ jsxs("span", { children: [
      "* Aktueller Rentenwert: ",
      CURRENT_VALUES.rentenwertFormatted,
      " / EP • Rentenanpassung: ",
      CURRENT_VALUES.rentenanpassungFormatted,
      " • Unabhängiges Fachportal"
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-inner group-hover:bg-amber-400 transition-colors", children: "€" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xl font-extrabold tracking-tight text-white block leading-none", children: [
            "rentesicher",
            /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: ".de" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium tracking-wide", children: "Fachportal für Alterssicherung" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-1 text-sm font-medium", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/",
            className: `px-3 py-2 rounded-lg transition-colors ${isActive("/") ? "bg-slate-800 text-amber-400 font-semibold" : "text-slate-200 hover:text-white hover:bg-slate-800/60"}`,
            children: "Startseite"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/rentenkommission",
            className: `px-3 py-2 rounded-lg transition-colors ${isActive("/rentenkommission") ? "bg-slate-800 text-amber-400 font-semibold" : "text-slate-200 hover:text-white hover:bg-slate-800/60"}`,
            children: "Rentenkommission"
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/rentenrechner",
            className: `px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${isActive("/rentenrechner") ? "bg-amber-500 text-slate-950 font-bold" : "text-amber-400 hover:text-amber-300 hover:bg-slate-800/60"}`,
            children: [
              /* @__PURE__ */ jsx(Calculator, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsx("span", { children: "Rechner-Hub" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/rentenluecke",
            className: `px-3 py-2 rounded-lg transition-colors ${isActive("/rentenluecke") ? "bg-slate-800 text-amber-400 font-semibold" : "text-slate-200 hover:text-white hover:bg-slate-800/60"}`,
            children: "Rentenlücke"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setDropdownOpen(!dropdownOpen),
              className: "px-3 py-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsx("span", { children: "Themen & Vorsorge" }),
                /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4 text-slate-400" })
              ]
            }
          ),
          dropdownOpen && /* @__PURE__ */ jsxs(
            "div",
            {
              onMouseLeave: () => setDropdownOpen(false),
              className: "absolute right-0 mt-2 w-80 bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 p-4 grid grid-cols-1 gap-2 z-50",
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-slate-400 font-bold px-2 mb-1", children: "Drei Säulen der Vorsorge" }),
                /* @__PURE__ */ jsx(Link, { to: "/private-rente", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Private Rentenversicherung" }),
                /* @__PURE__ */ jsx(Link, { to: "/riester-rente", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Riester-Rente Förderung" }),
                /* @__PURE__ */ jsx(Link, { to: "/betriebliche-altersvorsorge", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Betriebliche Altersvorsorge (bAV)" }),
                /* @__PURE__ */ jsx(Link, { to: "/etf-rente", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "ETF-Sparplan für Rente" }),
                /* @__PURE__ */ jsx(Link, { to: "/altersvorsorge", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Altersvorsorge Übersicht" }),
                /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-slate-400 font-bold px-2 mt-2 mb-1 border-t border-slate-100 pt-2", children: "Gesetzliche Rente & Themen" }),
                /* @__PURE__ */ jsx(Link, { to: "/rentenberechnung", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Gesetzliche Rentenberechnung" }),
                /* @__PURE__ */ jsx(Link, { to: "/rentenalter", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Rentenalter & Eintrittszeitpunkt" }),
                /* @__PURE__ */ jsx(Link, { to: "/rentenanpassung", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Rentenanpassung & Historie" }),
                /* @__PURE__ */ jsx(Link, { to: "/rente-mit-63", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Rente mit 63" }),
                /* @__PURE__ */ jsx(Link, { to: "/grundrente", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Grundrente" }),
                /* @__PURE__ */ jsx(Link, { to: "/witwenrente", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Witwen- & Hinterbliebenenrente" }),
                /* @__PURE__ */ jsx(Link, { to: "/erwerbsminderungsrente", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Erwerbsminderungsrente" }),
                /* @__PURE__ */ jsx(Link, { to: "/rentenpunkte", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Entgeltpunkte (Rentenpunkte)" }),
                /* @__PURE__ */ jsx(Link, { to: "/rentenbescheid", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Rentenbescheid prüfen" }),
                /* @__PURE__ */ jsx(Link, { to: "/rentensteuer", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Besteuerung von Renten" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          className: "lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none",
          "aria-label": "Menü öffnen",
          children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
        }
      )
    ] }),
    mobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-6 max-h-[85vh] overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 font-medium", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800", children: "Startseite" }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenkommission", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800", children: "Rentenkommission" }),
      /* @__PURE__ */ jsxs(Link, { to: "/rentenrechner", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Calculator, { className: "w-4 h-4" }),
        " Rechner-Hub (Alle 3 Rechner)"
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenluecke", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800", children: "Rentenlücken-Rechner" }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenberechnung", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800", children: "Gesetzlicher Rentenrechner" }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenalter", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800", children: "Renteneintritts-Rechner" }),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-amber-400 font-bold pt-3 pb-1", children: "Vorsorge & Vergleiche" }),
      /* @__PURE__ */ jsx(Link, { to: "/private-rente", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Private Rentenversicherung" }),
      /* @__PURE__ */ jsx(Link, { to: "/riester-rente", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Riester-Rente Förderung" }),
      /* @__PURE__ */ jsx(Link, { to: "/betriebliche-altersvorsorge", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Betriebliche Altersvorsorge (bAV)" }),
      /* @__PURE__ */ jsx(Link, { to: "/etf-rente", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "ETF-Sparplan für Rente" }),
      /* @__PURE__ */ jsx(Link, { to: "/altersvorsorge", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Altersvorsorge Übersicht" }),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-amber-400 font-bold pt-3 pb-1", children: "Rentenwissen & Begriffe" }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenanpassung", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Rentenanpassung" }),
      /* @__PURE__ */ jsx(Link, { to: "/rente-mit-63", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Rente mit 63" }),
      /* @__PURE__ */ jsx(Link, { to: "/grundrente", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Grundrente" }),
      /* @__PURE__ */ jsx(Link, { to: "/witwenrente", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Witwenrente" }),
      /* @__PURE__ */ jsx(Link, { to: "/erwerbsminderungsrente", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Erwerbsminderungsrente" }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenpunkte", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Entgeltpunkte" }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenbescheid", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Rentenbescheid" }),
      /* @__PURE__ */ jsx(Link, { to: "/rentensteuer", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Rentenbesteuerung" })
    ] }) })
  ] });
}

function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-slate-950 text-slate-400 text-sm mt-auto border-t border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-800", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-extrabold text-slate-950 text-lg", children: "€" }),
          /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold text-white tracking-tight", children: [
            "rentesicher",
            /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: ".de" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 leading-relaxed", children: "Unabhängiges Fach- und Informationsportal zur gesetzlichen, betrieblichen und privaten Altersvorsorge in Deutschland." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-200 mb-3", children: "Rechner & Tools" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/rentenrechner", className: "hover:text-amber-400 transition-colors", children: "Rechner-Hub (Alle 3 Rechner)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/rentenluecke", className: "hover:text-amber-400 transition-colors", children: "Rentenlücken-Rechner" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/rentenberechnung", className: "hover:text-amber-400 transition-colors", children: "Gesetzlicher Rentenrechner" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/rentenalter", className: "hover:text-amber-400 transition-colors", children: "Renteneintritts-Rechner" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/rentenpunkte", className: "hover:text-amber-400 transition-colors", children: "Entgeltpunkte-Rechner" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-200 mb-3", children: "Drei Säulen Vorsorge" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/private-rente", className: "hover:text-amber-400 transition-colors", children: "Private Rentenversicherung" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/riester-rente", className: "hover:text-amber-400 transition-colors", children: "Riester-Rente" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/betriebliche-altersvorsorge", className: "hover:text-amber-400 transition-colors", children: "Betriebliche Altersvorsorge (bAV)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/etf-rente", className: "hover:text-amber-400 transition-colors", children: "ETF-Sparplan für Rente" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/altersvorsorge", className: "hover:text-amber-400 transition-colors", children: "Altersvorsorge Vergleich" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-200 mb-3", children: "Rechtliches & Transparenz" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/impressum", className: "hover:text-amber-400 transition-colors font-medium", children: "→ Impressum (§ 5 DDG)" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/datenschutz", className: "hover:text-amber-400 transition-colors", children: "Datenschutzerklärung" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/sitemap.xml", className: "hover:text-amber-400 transition-colors", children: "Sitemap XML" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/feed.xml", className: "hover:text-amber-400 transition-colors", children: "RSS 2.0 Feed" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/llms.txt", className: "hover:text-amber-400 transition-colors", children: "LLM Info (llms.txt)" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 mb-6 leading-relaxed", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-slate-300 mb-1", children: "Haftungsausschluss & Hinweis zur Rentenberatung:" }),
      /* @__PURE__ */ jsx("p", { children: "Diese Seite dient ausschließlich der allgemeinen Information und Orientierung. Sie ersetzt keine individuelle Renten- oder Rechtsberatung. Für persönliche Empfehlungen wende dich bitte an einen zertifizierten Rentenberater oder die Deutsche Rentenversicherung Bund." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500", children: [
      /* @__PURE__ */ jsx("div", { children: "Stand: September 2026 | Quellen: Deutsche Rentenversicherung Bund / BMAS / Bundesgesetzblatt" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("span", { children: "© 2026 rentesicher.de" }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-700", children: "•" }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Zero-CDN • DSGVO-konform" })
      ] })
    ] })
  ] }) });
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  if (!isVisible) return null;
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: scrollToTop,
      "aria-label": "Nach oben scrollen",
      className: "fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-slate-900 text-amber-400 hover:bg-slate-800 shadow-xl border border-slate-700 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 no-print",
      children: /* @__PURE__ */ jsx(ChevronUp, { className: "w-6 h-6 stroke-[2.5]" })
    }
  );
}

function VercelAnalytics() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined" && window.va) {
      window.va("pageview", {
        route: location.pathname + location.search
      });
    }
  }, [location]);
  return /* @__PURE__ */ jsx(Analytics, {});
}

function RentenLueckeCalculator() {
  const [gehalt, setGehalt] = useState(3200);
  const [gesetzlicheRente, setGesetzlicheRente] = useState(1600);
  const [wunschEinkommen, setWunschEinkommen] = useState(2600);
  const [copied, setCopied] = useState(false);
  const rentenluecke = Math.max(0, wunschEinkommen - gesetzlicheRente);
  const kapitalBedarf = rentenluecke * 12 * 25;
  const handleShare = () => {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}/rentenluecke?gehalt=${gehalt}&rente=${gesetzlicheRente}&wunsch=${wunschEinkommen}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { id: "rechner-luecke", className: "my-6 sm:my-8 bg-white p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calculator, { className: "w-6 h-6 text-amber-600 shrink-0" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold text-slate-900", children: "Interaktiver Rentenlücken-Rechner" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-500 mt-1", children: "Ermittle deine monatliche Vorsorgelücke und das erforderliche Gesamtsparziel." })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleShare,
          className: "inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95 transition-all w-full sm:w-auto",
          children: [
            copied ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-600" }) : /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4" }),
            copied ? "Link kopiert!" : "Berechnung teilen"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2", children: "Aktuelles Nettoeinkommen (€)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            inputMode: "numeric",
            value: gehalt || "",
            onChange: (e) => setGehalt(Number(e.target.value)),
            className: "w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base sm:text-lg font-bold text-slate-900 shadow-sm"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Monatliches Auszahlungsgehalt heute" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2", children: "Erwartete Gesetzliche Rente (€)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            inputMode: "numeric",
            value: gesetzlicheRente || "",
            onChange: (e) => setGesetzlicheRente(Number(e.target.value)),
            className: "w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base sm:text-lg font-bold text-slate-900 shadow-sm"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Laut offizieller DRV-Renteninformation" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2", children: "Wunsch-Einkommen im Alter (€)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            inputMode: "numeric",
            value: wunschEinkommen || "",
            onChange: (e) => setWunschEinkommen(Number(e.target.value)),
            className: "w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-base sm:text-lg font-bold text-slate-900 shadow-sm"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Richtwert: ca. 80% des heutigen Netto" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-5 sm:p-6 bg-slate-900 text-white rounded-xl mb-4 shadow-inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3.5", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-1", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block", children: "Monatliche Rentenlücke" }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1", children: [
            rentenluecke.toLocaleString("de-DE"),
            " € ",
            /* @__PURE__ */ jsx("span", { className: "text-xs font-normal text-slate-300", children: "/ Monat" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Differenz zwischen Wunscheinkommen und gesetzlicher Rente." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-500/20 text-blue-400 rounded-xl shrink-0 mt-1", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block", children: "Geschätzter Kapitalbedarf (25 Jahre)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl sm:text-3xl font-extrabold text-white mt-1", children: [
            kapitalBedarf.toLocaleString("de-DE"),
            " €"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Gesamtsumme der Lücken über 25 Rentenjahre." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200/60 leading-relaxed", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-4 h-4 text-slate-400 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("strong", { children: "* Hinweis zur Berechnung:" }),
        " Vereinfachte Modellrechnung ohne Inflation, Rendite, Steuern, künftige Rentenanpassungen und bereits vorhandenes Vorsorgevermögen."
      ] })
    ] })
  ] });
}

function AffiliateWidget({ type, title }) {
  const containerRef = useRef(null);
  const elementId = type === "rente" ? "tcpp-iframe-rente" : "tcpp-iframe-riester";
  const [showFallbackIframe, setShowFallbackIframe] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    setShowFallbackIframe(false);
    const scriptId = `script-pv-${type}-${Date.now()}`;
    const oldScripts = document.querySelectorAll(`script[id^="script-pv-${type}"]`);
    oldScripts.forEach((s) => s.remove());
    const container = document.getElementById(elementId) || containerRef.current;
    if (container) {
      container.innerHTML = "";
    }
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = type === "rente" ? "https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-rente/rente-iframe.js" : "https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-riester/riester-iframe.js";
    script.async = true;
    document.body.appendChild(script);
    const fallbackTimer = setTimeout(() => {
      const currentContainer = document.getElementById(elementId) || containerRef.current;
      if (currentContainer && !currentContainer.querySelector("iframe")) {
        setShowFallbackIframe(true);
      }
    }, 1200);
    return () => {
      clearTimeout(fallbackTimer);
      script.remove();
    };
  }, [type, elementId]);
  const fallbackUrl = type === "rente" ? "https://form.partner-versicherung.de/form.php?aid=1226&cid=2&partner_id=72057&tracking=&insurance_id=2&module=formv4" : "https://form.partner-versicherung.de/form.php?aid=1226&cid=21&partner_id=72057&tracking=&insurance_id=21&module=formv4";
  return /* @__PURE__ */ jsxs("div", { className: "my-6 sm:my-8 p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-blue-700 shrink-0" }),
        /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-bold text-slate-900 leading-snug", children: title || (type === "rente" ? "Unverbindlicher Rentenversicherung-Vergleich" : "Riester-Vorsorge Anfordern") })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full shrink-0", children: "Partner-Vergleich*" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-full overflow-x-auto overflow-y-hidden rounded-xl bg-slate-50 min-h-[500px] flex items-center justify-center", children: /* @__PURE__ */ jsx(
      "div",
      {
        ref: containerRef,
        style: { width: "100%", minWidth: "280px", maxWidth: "100%" },
        id: elementId,
        className: "w-full text-slate-400 text-xs sm:text-sm text-center p-2",
        children: showFallbackIframe ? /* @__PURE__ */ jsx(
          "iframe",
          {
            src: fallbackUrl,
            title: title || "Tarif-Vergleich",
            className: "w-full min-h-[550px] border-0 rounded-xl",
            style: { width: "100%", minHeight: "550px", border: "none" }
          }
        ) : /* @__PURE__ */ jsxs("div", { className: "py-12 flex flex-col items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-500 font-medium", children: "Lade Vergleichsformular..." })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-start gap-1.5 leading-relaxed", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-4 h-4 text-slate-400 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("strong", { children: "* Werbelink / Partnerlink:" }),
        " Wenn du über dieses Vergleichs- oder Anfrageformular einen Vertrag abschließt, können wir eine Vergütung erhalten. Für dich entstehen dadurch keine zusätzlichen Kosten."
      ] })
    ] })
  ] });
}

function SourceFootnote({ sources }) {
  const defaultSources = [
    { title: "Deutsche Rentenversicherung Bund", url: "https://www.deutsche-rentenversicherung.de" },
    { title: "BMAS (Bundesministerium für Arbeit)", url: "https://www.bmas.de" },
    { title: "Gesetze im Internet / SGB VI", url: "https://www.gesetze-im-internet.de/sgb_6/" }
  ];
  const activeSources = sources && sources.length > 0 ? sources : defaultSources;
  return /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500 bg-slate-100/70 p-5 rounded-xl space-y-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-3 font-semibold text-slate-700", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-slate-600 shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: "Offizielle Primärquellen & Gesetzesgrundlagen" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-500 font-medium", children: "Zuletzt fachlich geprüft: September 2026" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]", children: activeSources.map((source, i) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: source.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "p-2.5 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-slate-700 hover:text-blue-900",
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-medium truncate pr-2", children: source.title }),
          /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5 text-slate-400 shrink-0" })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-slate-500 pt-1 leading-relaxed", children: [
      /* @__PURE__ */ jsx("strong", { children: "Unabhängigkeits- & Haftungshinweis:" }),
      " Diese Website ersetzt keine individuelle Renten-, Steuer-, Rechts- oder Finanzberatung. Für persönliche Empfehlungen wenden Sie sich an die Deutsche Rentenversicherung, einen nach § 10 RDG zugelassenen Rentenberater oder einen Steuerberater."
    ] })
  ] });
}

function StatusBadge({ type, dateStr }) {
  if (type === "empfehlung") {
    return /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-950 border border-amber-300 shrink-0", children: "Empfehlung der Kommission" });
  }
  if (type === "zielsetzung") {
    return /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-950 border border-purple-300 shrink-0", children: "Politische Zielsetzung" });
  }
  if (type === "gilt_ab") {
    return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-950 border border-emerald-300 shrink-0", children: [
      "Gesetzliches Vorhaben ",
      dateStr ? `(ab ${dateStr})` : ""
    ] });
  }
  return /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-950 border border-blue-300 shrink-0", children: "Geltendes Recht (SGB VI)" });
}

function SchemaMarkup({ faqItems, breadcrumbs }) {
  const schemaList = [];
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemaList.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": b.name,
        "item": b.item.startsWith("http") ? b.item : `https://www.rentesicher.de${b.item}`
      }))
    });
  }
  if (faqItems && faqItems.length > 0) {
    schemaList.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }
  if (schemaList.length === 0) return null;
  return /* @__PURE__ */ jsx(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(schemaList) }
    }
  );
}

function LastUpdated({ className = "" }) {
  return /* @__PURE__ */ jsxs("div", { className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200 ${className}`, children: [
    /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3.5 h-3.5 text-emerald-600 shrink-0" }),
    /* @__PURE__ */ jsx("span", { children: CURRENT_VALUES.lastCheckedText })
  ] });
}

function Home() {
  const faqs = [
    {
      question: "Welche gesetzlichen Regelungen sichern die Rentenauszahlung?",
      answer: "Die Auszahlung der gesetzlichen Rente beruht auf dem umlagefinanzierten System der gesetzlichen Rentenversicherung. Der Schutz vor nominalen Rentenkürzungen ist gesetzlich im Schutzklausel-Mechanismus (§ 68 Abs. 4 SGB VI) geregelt."
    },
    {
      question: "Was bedeuten die Empfehlungen der Rentenkommission?",
      answer: "Die Kommission 'Verlässlicher Generationenvertrag' hat wissenschaftliche Empfehlungen zur Stabilisierung des Rentenniveaus bei 48 % erarbeitet. Diese Empfehlungen sind Handlungsvorschläge und entfalten erst dann rechtliche Wirkung, wenn sie vom Gesetzgeber beschlossen werden."
    },
    {
      question: "Wie hoch ist der aktuelle Rentenwert?",
      answer: `Der aktuelle Rentenwert liegt derzeit bei ${CURRENT_VALUES.rentenwertFormatted} je Entgeltpunkt. Ein Modell-Eckrentner mit 45 Entgeltpunkten erzielt damit eine Brutto-Standardrente von ${CURRENT_VALUES.standardrenteFormatted} pro Monat.`
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("section", { className: "mb-10 text-center sm:text-left", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4", children: [
        "Rentensicherheit & Alterssicherung ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-blue-900", children: "Gesetzliche Rente, Formeln & Orientierung" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed", children: "Unabhängiges Fachportal zur gesetzlichen Rentenentwicklung, den Empfehlungen der Rentenkommission und Berechnungsmöglichkeiten für die private und betriebliche Vorsorge." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-5 sm:p-6 bg-slate-900 text-white rounded-2xl shadow-lg mb-10 border-l-4 border-amber-500", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "Fakten-Check & Gesetzliche Rahmenbedingungen" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm sm:text-base leading-relaxed text-slate-100", children: [
        /* @__PURE__ */ jsx("strong", { children: "Die gesetzliche Schutzklausel verhindert nominale Rentenkürzungen (§ 68 Abs. 4 SGB VI)." }),
        " Der aktuelle Rentenwert beträgt derzeit ",
        /* @__PURE__ */ jsx("strong", { children: CURRENT_VALUES.rentenwertFormatted }),
        " je Entgeltpunkt (Standardrente: ",
        CURRENT_VALUES.standardrenteFormatted,
        " brutto nach 45 Beitragsjahren). Zusätzliche betriebliche oder private Vorsorge kann dazu dienen, eine individuelle Versorgungslücke im Vergleich zum früheren Erwerbseinkommen zu reduzieren."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase font-bold text-slate-400 block mb-1", children: "Aktueller Rentenwert" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-blue-900", children: CURRENT_VALUES.rentenwertFormatted }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 mt-1 block", children: "Pro Entgeltpunkt (§ 68 SGB VI)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase font-bold text-slate-400 block mb-1", children: "Rentenanpassung" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-emerald-600", children: CURRENT_VALUES.rentenanpassungFormatted }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 mt-1 block", children: "Letzte Anpassung" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase font-bold text-slate-400 block mb-1", children: "Ziel-Rentenniveau" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-amber-600", children: CURRENT_VALUES.haltelinieFormatted }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 mt-1 block", children: "Gesetzliche Haltelinie" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Die 3 Säulen der Alterssicherung in Deutschland" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-6", children: "Das deutsche Alterssicherungssystem ruht auf drei Säulen. Die gesetzliche Rentenversicherung gewährt die Basisversorgung, während betriebliche Angebote und private Vorsorgeformen als Ergänzung dienen können." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 rounded-xl border border-slate-200", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-3", children: "1" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Gesetzliche Rente" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed mb-4", children: "Umlagefinanzierte Basisversorgung nach Entgeltpunkten für Pflichtversicherte." }),
          /* @__PURE__ */ jsxs(Link, { to: "/rentenberechnung", className: "text-xs font-bold text-blue-900 hover:underline inline-flex items-center gap-1", children: [
            "Rentenrechner ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 rounded-xl border border-slate-200", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-amber-100 text-amber-950 flex items-center justify-center font-bold mb-3", children: "2" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Betriebliche Vorsorge" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed mb-4", children: "bAV & Entgeltumwandlung nach § 1a BetrAVG mit gesetzlichem Zuschuss." }),
          /* @__PURE__ */ jsxs(Link, { to: "/betriebliche-altersvorsorge", className: "text-xs font-bold text-amber-700 hover:underline inline-flex items-center gap-1", children: [
            "bAV Details ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 rounded-xl border border-slate-200", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-emerald-100 text-emerald-950 flex items-center justify-center font-bold mb-3", children: "3" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Private Vorsorge" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed mb-4", children: "Private Rentenversicherung, Riester-Rente & breite ETF-Sparpläne." }),
          /* @__PURE__ */ jsxs(Link, { to: "/private-rente", className: "text-xs font-bold text-emerald-800 hover:underline inline-flex items-center gap-1", children: [
            "Private Rente ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AffiliateWidget, { type: "rente", title: "Unverbindlicher Rentenversicherungs-Vergleich" }),
    /* @__PURE__ */ jsxs("section", { className: "my-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-2", children: "Modellrechnung: Persönliche Rentenlücke ermitteln" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm mb-6", children: "Kalkuliere eine erste Orientierung über die Differenz zwischen deinem Wunscheinkommen und deiner erwarteten Gesetzlichen Rente." }),
      /* @__PURE__ */ jsx(RentenLueckeCalculator, {})
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "my-12 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-900", children: "Rentenkommission: Die 33 Empfehlungen im Überblick" }),
        /* @__PURE__ */ jsx(StatusBadge, { type: "empfehlung" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 leading-relaxed mb-6", children: "Der Abschlussbericht der Rentenkommission enthält 33 Empfehlungen zur Weiterentwicklung der Alterssicherung." }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/rentenkommission",
          className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-amber-400 hover:bg-slate-800 text-sm font-bold transition-colors",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Alle 33 Empfehlungen lesen" }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "my-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-blue-900" }),
        "Häufig gestellte Fragen (FAQ)"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-2 text-base", children: faq.question }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm leading-relaxed", children: faq.answer })
      ] }, idx)) })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Rentenkommission() {
  const empfehlungen = [
    {
      id: 1,
      titel: "Politische Zielgröße von mindestens 70 % Nettoersatzquote im Mehrsäulensystem",
      status: "zielsetzung",
      kategorie: "Mehrsäulensystem",
      beschreibung: "Empfehlung einer Gesamtzielgröße für das Alterssicherungsniveau über alle drei Säulen (gesetzlich, betrieblich, privat), um den Lebensstandard im Alter verlässlich abzusichern."
    },
    {
      id: 2,
      titel: "Zusätzlicher Ausweis der Nettoersatzquote in Berichten und Auskünften",
      status: "empfehlung",
      kategorie: "Transparenz",
      beschreibung: "Erweiterung der Berichterstattung um die kaufkraft- und steuerbereinigte Nettoersatzquote, um Bürgern eine realistischere Einschätzung ihrer späteren Gesamtversorgung zu ermöglichen."
    },
    {
      id: 3,
      titel: "Verbesserung der Datenbasis und Erhebung trägerübergreifender Kennzahlen",
      status: "empfehlung",
      kategorie: "Statistik & Forschung",
      beschreibung: "Verbindung von Rentenversicherungsdaten mit Steuerdaten und Betriebspensionen zur präzisen Erfassung von Versorgungslücken und Altersarmut."
    },
    {
      id: 4,
      titel: "Weiterentwicklung und trägerübergreifende Etablierung der Digitalen Rentenübersicht",
      status: "gesetz",
      kategorie: "Digitalisierung",
      beschreibung: "Gesetzlich verankertes Portal (rentenuebersicht.de) zur gebündelten, trägerübergreifenden Abfrage aller Anwartschaften aus gesetzlicher, betrieblicher und privater Vorsorge."
    },
    {
      id: 5,
      titel: "Stärkere Kopplung des Renteneintrittsalters an die Lebenserwartung ab 2031",
      status: "empfehlung",
      kategorie: "Renteneintritt",
      beschreibung: "Wissenschaftliche Empfehlung, das Regelaltersrentenalter nach Erreichen der Altersgrenze von 67 Jahren ab 2031 dynamisch an die fernere Lebenserwartung anzupassen."
    },
    {
      id: 6,
      titel: "Reform bzw. Auslauf der abschlagsfreien Rente für besonders langjährig Versicherte („Rente ab 63 / 65“)",
      status: "empfehlung",
      kategorie: "Frührente",
      beschreibung: "Vorschlag zur Überprüfung der versicherungsfremden Sonderregelungen bei 45 Beitragsjahren zum Schutz der langfristigen Finanzierbarkeit der Gesetzlichen Rentenversicherung."
    },
    {
      id: 7,
      titel: "Gesetzliche Sicherung der Mindesthaltelinie beim Rentenniveau (48 %)",
      status: "gilt_ab",
      dateStr: "Rentenpaket",
      kategorie: "Rentenniveau",
      beschreibung: "Gesetzliche Verankerung einer Untergrenze für das Rentenniveau vor Steuern bei 48 %, um eine Entkopplung der Renten von der allgemeinen Lohnentwicklung zu verhindern."
    },
    {
      id: 8,
      titel: "Festlegung einer Beitragsgrenze (Beitragssatzkorridor max. 20 % bis 2030, max. 22 % bis 2035)",
      status: "empfehlung",
      kategorie: "Beitragssatz",
      beschreibung: "Empfehlung zur Begrenzung der Beitragsnetzbelastung für Arbeitnehmer und Arbeitgeber, um Lohnnebenkosten stabil zu halten."
    },
    {
      id: 9,
      titel: "Anpassung des Ausgleichsfaktors im Nachhaltigkeitsfaktor der Rentenformel",
      status: "empfehlung",
      kategorie: "Rentenformel",
      beschreibung: "Dämpfung der jährlichen Rentenanpassung bei Eintritt geburtenstarker Jahrgänge (Babyboomer) in den Ruhestand über den Nachhaltigkeitsfaktor nach § 68 SGB VI."
    },
    {
      id: 10,
      titel: "Reform der geförderten privaten Altersvorsorge (Altersvorsorgedepot ohne Garantiezwang)",
      status: "gilt_ab",
      dateStr: "Reformvorhaben",
      kategorie: "Private Vorsorge",
      beschreibung: "Weiterentwicklung der Riester-Förderung zu einem chancenreichen, geförderten Anspardepot ohne strikte Beitragsgarantiepflicht zur Nutzung von Kapitalmarktchancen."
    },
    {
      id: 11,
      titel: "Stärkung der betrieblichen Altersvorsorge (bAV) und Opt-Out-Modelle im Betrieb",
      status: "empfehlung",
      kategorie: "Betriebsrente",
      beschreibung: "Vereinfachung von Sozialpartner-Modellen und Förderung automatischer Einbezugssysteme bei der bAV auf Betriebsebene (mit Widerspruchsrecht)."
    },
    {
      id: 12,
      titel: "Obligatorische Altersvorsorge für alle nicht anderweitig abgesicherten Selbstständigen",
      status: "zielsetzung",
      kategorie: "Pflichtversicherung",
      beschreibung: "Politische Zielsetzung zur Einbeziehung aller Selbstständigen in die gesetzliche Rentenversicherung (mit Opt-Out bei Nachweis einer gleichwertigen Altersvorsorge)."
    },
    {
      id: 13,
      titel: "Ausweitung und Dynamisierung der bAV-Geringverdienerförderung (§ 100 EStG)",
      status: "gesetz",
      kategorie: "Steuerförderung",
      beschreibung: "Gesetzlicher Zuschuss des Staates an Arbeitgeber, wenn diese Geringverdienern einen zusätzlichen Beitrag zur betrieblichen Altersvorsorge zahlen."
    },
    {
      id: 14,
      titel: "Weiterentwicklung der Erwerbsminderungsrente durch verlängerte Zurechnungszeiten",
      status: "gesetz",
      kategorie: "EM-Rente",
      beschreibung: "Gesetzlich vollzogene schrittweise Verlängerung der Zurechnungszeit bei Erwerbsminderung bis zum regulären Renteneintrittsalter."
    },
    {
      id: 15,
      titel: "Flexibilisierung der Zuverdienstgrenzen bei teilweiser Erwerbsminderung",
      status: "gesetz",
      kategorie: "EM-Rente",
      beschreibung: "Gesetzliche Erleichterungen beim Wiedereinstieg in das Erwerbsleben für Bezieher teilweiser Erwerbsminderungsrenten ohne Rentenverlust."
    },
    {
      id: 16,
      titel: "Ausbau von Anreizsystemen für das Weiterarbeiten über die Regelaltersgrenze hinaus",
      status: "gesetz",
      kategorie: "Flexirente",
      beschreibung: "Gesetzliche Rentenzuschläge (+0,5 % pro Monat) bei freiwilligem Aufschub des Rentenbeginns sowie Wegfall der Arbeitgeberbeiträge zur Arbeitslosenversicherung."
    },
    {
      id: 17,
      titel: "Stärkung von Reha-Leistungen nach dem Grundsatz „Reha vor Rente“",
      status: "gesetz",
      kategorie: "Rehabilitation",
      beschreibung: "Ausbau medizinischer und beruflicher Reha-Angebote der Rentenversicherung zur langfristigen Erhaltung der Erwerbsfähigkeit im Betrieb."
    },
    {
      id: 18,
      titel: "Anrechnung von Kindererziehungszeiten (Mütterrente) weiter fortführen",
      status: "gesetz",
      kategorie: "Familienleistung",
      beschreibung: "Gesetzlich verankerte Gutschrift von bis zu 36 Monaten Kindererziehungszeiten pro Kind im Rentenkonto."
    },
    {
      id: 19,
      titel: "Transparente Berichterstattung und volle Gegenfinanzierung versicherungsfremder Leistungen",
      status: "empfehlung",
      kategorie: "Bundeszuschuss",
      beschreibung: "Forderung nach vollständiger Erstattung gesamtgesellschaftlicher Aufgaben (z. B. Mütterrente, Grundrente) durch Bundeszuschüsse aus dem allgemeinen Steuerhaushalt."
    },
    {
      id: 20,
      titel: "Einrichtung eines ständigen unabhängigen Sachverständigenrats für Alterssicherung",
      status: "empfehlung",
      kategorie: "Monitoring",
      beschreibung: "Einsetzung eines wissenschaftlichen Expertengremiums zur kontinuierlichen Überwachung der finanziellen Tragfähigkeit und Generationengerechtigkeit."
    },
    {
      id: 21,
      titel: "Automatisierter Einkommensabgleich beim Grundrentenzuschlag",
      status: "gesetz",
      kategorie: "Grundrente",
      beschreibung: "Gesetzlich umgesetzter automatischer Datenaustausch zwischen der Deutschen Rentenversicherung und den Finanzbehörden ohne gesonderten Antrag."
    },
    {
      id: 22,
      titel: "Ausbau von Präventionsprogrammen im betrieblichen Gesundheitsmanagement",
      status: "empfehlung",
      kategorie: "Gesundheit",
      beschreibung: "Stärkere Verknüpfung von betrieblicher Gesundheitsförderung mit Reha-Maßnahmen der Rentenversicherung zur Vermeidung frühzeitiger Erwerbsminderung."
    },
    {
      id: 23,
      titel: "Evaluierung der Handwerker-Pflichtversicherung",
      status: "empfehlung",
      kategorie: "Handwerk",
      beschreibung: "Überprüfung der 18-jährigen Pflichtversicherungsdauer für selbstständige Handwerker auf zeitgemäße Ausgestaltung und Übergangsmöglichkeiten."
    },
    {
      id: 24,
      titel: "Vollständige Angleichung der Rentenwerte in Ost und West",
      status: "gesetz",
      kategorie: "Rentenwert",
      beschreibung: "Vollzogene gesetzliche Vereinheitlichung des aktuellen Rentenwerts in den neuen und alten Bundesländern (in Kraft seit 1. Juli 2023)."
    },
    {
      id: 25,
      titel: "Absicherung der Mindestnachhaltigkeitsreserve",
      status: "gesetz",
      kategorie: "Liquidität",
      beschreibung: "Gesetzlich vorgeschriebener Mindestpuffer der Nachhaltigkeitsreserve (0,2 Monatsausgaben) zur Sicherung der monatlichen Rentenauszahlungen."
    },
    {
      id: 26,
      titel: "Berücksichtigung von Pflegenden im Rentenrecht",
      status: "gesetz",
      kategorie: "Pflege",
      beschreibung: "Gesetzliche Übernahme von Rentenversicherungsbeiträgen durch die Pflegekasse für Angehörige, die Personen ab Pflegegrad 2 ehrenamtlich pflegen."
    },
    {
      id: 27,
      titel: "Digitalisierung und Entbürokratisierung von Verwaltungs- und Antragsverfahren",
      status: "empfehlung",
      kategorie: "Verwaltung",
      beschreibung: "Vereinfachung von Renten- und Reha-Anträgen durch durchgehende digitale Workflows und barrierefreie Online-Dienste der DRV."
    },
    {
      id: 28,
      titel: "Verpflichtende gesetzliche Kapitalrente mit einem zusätzlichen Beitrag von 2 %",
      status: "empfehlung",
      kategorie: "Kapitalrente",
      beschreibung: "Handlungsempfehlung zur Einführung einer obligatorischen kapitalgedeckten Altersvorsorgekomponente mit 2 % Zusatzbeitrag zur Ergänzung der Umlagedeckung."
    },
    {
      id: 29,
      titel: "Vereinfachung des Versorgungsausgleichs bei Ehescheidungen",
      status: "gesetz",
      kategorie: "Familienrecht",
      beschreibung: "Direkte rentenrechtliche Übertragung von Entgeltpunkten auf das Beitragskonto des ausgleichsberechtigten Ehegatten nach § 12 VersAusglG."
    },
    {
      id: 30,
      titel: "Zuschläge für Bestandsbezieher von Erwerbsminderungsrenten",
      status: "gesetz",
      kategorie: "EM-Rente",
      beschreibung: "Gesetzlich umgesetzter pauschaler Zuschlag (4,5 % bis 7,5 %) für Erwerbsminderungsrentner mit Rentenbeginn zwischen 2001 und 2018."
    },
    {
      id: 31,
      titel: "Kaufkraftbereinigte Ausweise in der jährlichen Renteninformation",
      status: "empfehlung",
      kategorie: "Transparenz",
      beschreibung: "Vorschlag zur Darstellung von Modellhochrechnungen unter Berücksichtigung einer angenommenen Inflationsrate in den jährlichen DRV-Schreiben."
    },
    {
      id: 32,
      titel: "Anrechnungsfreie Aufwandsentschädigungen bei ehrenamtlicher Tätigkeit",
      status: "gesetz",
      kategorie: "Ehrenamt",
      beschreibung: "Gesetzlicher Schutz von Aufwandsentschädigungen (Ehrenamts- und Übungsleiterpauschale) vor Rentenkürzungen bei Altersrentnern."
    },
    {
      id: 33,
      titel: "Vierjährlicher Sozialbericht der Bundesregierung zur Lage der Alterssicherung",
      status: "gesetz",
      kategorie: "Berichterstattung",
      beschreibung: "Gesetzlich verankerte Verpflichtung der Bundesregierung zur regelmäßigen Vorlage eines umfassenden Sozialberichts über alle drei Säulen."
    }
  ];
  const faqs = [
    {
      question: "Sind die Empfehlungen der Rentenkommission bereits geltendes Gesetz?",
      answer: "Nein. Bei den 33 Reformpunkten der Kommission handelt es sich um wissenschaftliche und politische Handlungsempfehlungen. Gesetzliche Wirkung entfalten sie erst, wenn sie vom Deutschen Bundestag beschlossen und im Bundesgesetzblatt verkündet werden."
    },
    {
      question: "Was bedeutet das Generationenkapital im Vergleich zur empfohlenen Kapitalrente?",
      answer: "Das gesetzlich beschlossene Generationenkapital ist ein staatlicher Ausgleichsfonds, der durch Bundesmittel am Kapitalmarkt angelegt wird, um ab den 2030er Jahren die Beitragszahler zu entlasten. Die in Empfehlung 28 vorgeschlagene Kapitalrente sieht hingegen einen individuellen 2 % Zusatzbeitrag vor."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenkommission", item: "/rentenkommission" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-amber-100/90 border border-amber-300 text-amber-950 rounded-2xl mb-8 flex items-start gap-3 text-xs sm:text-sm shadow-sm", children: [
      /* @__PURE__ */ jsx(ShieldAlert, { className: "w-5 h-5 text-amber-700 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Wichtiger Status-Hinweis:" }),
        " Die Rentenkommission 2026 hat Empfehlungen zur Weiterentwicklung der Alterssicherung vorgelegt. Diese Empfehlungen sind ",
        /* @__PURE__ */ jsx("u", { children: "nicht automatisch geltendes Recht" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Die 33 Empfehlungen der Rentenkommission" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700 text-base leading-relaxed font-medium", children: "Der Abschlussbericht der Rentenkommission enthält 33 Empfehlungen zur Weiterentwicklung der Alterssicherung." }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm leading-relaxed mt-2", children: "Systematische Aufstellung aller 33 Reformpunkte der Regierungskommission „Verlässlicher Generationenvertrag“. Bei allen Punkten unterscheiden wir strikt zwischen bloßen Vorschlägen, politischen Zielsetzungen und bereits geltendem Recht." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-5 bg-slate-900 text-white rounded-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6 text-amber-400 shrink-0" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold text-sm", children: "Offizielle Veröffentlichung des BMAS" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-300", children: "Abschlussbericht der Kommission „Verlässlicher Generationenvertrag“" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.bmas.de",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold hover:bg-amber-400 active:scale-95 transition-all shrink-0",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Zum BMAS-Portal" }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-12", children: empfehlungen.map((emp) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "w-7 h-7 rounded-full bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center border border-slate-200 shrink-0", children: [
            "#",
            emp.id
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-base font-bold text-slate-900 leading-snug", children: emp.titel })
        ] }),
        /* @__PURE__ */ jsx(StatusBadge, { type: emp.status, dateStr: emp.dateStr })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed pl-9", children: emp.beschreibung })
    ] }, emp.id)) }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Rentenluecke() {
  const faqs = [
    {
      question: "Was genau ist die Rentenlücke?",
      answer: "Die Rentenlücke ist die Differenz zwischen deinem letzten Nettoeinkommen (bzw. deinen benötigten monatlichen Ausgaben im Alter) und deiner Auszahlungsrente aus der gesetzlichen Rentenversicherung."
    },
    {
      question: "Wie viel Prozent meines letzten Netto-Gehalts benötige ich im Alter?",
      answer: "Finanzexperten und Verbraucherschützer empfehlen eine Zielquote von mindestens 80 % des letzten Nettoeinkommens, um den gewohnten Lebensstandard aufrechtzuerhalten."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenlücke berechnen", item: "/rentenluecke" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Rentenlücke berechnen: So groß ist deine Versorgungslücke" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Viele Arbeitnehmer unterschätzen die Versorgungslücke im Alter. Mit unserem kostenlosen Online-Rechner ermittelst du sekundenschnell deine individuelle Rentenlücke und dein nötiges Sparziel." })
    ] }),
    /* @__PURE__ */ jsx(RentenLueckeCalculator, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Warum entsteht eine Rentenlücke?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Die gesetzliche Rentenversicherung ist als Basisversorgung konzipiert. Da das gesetzliche Rentenniveau bei ca. 48 % liegt, ersetzt die gesetzliche Rente im Schnitt nicht einmal die Hälfte deines Bruttoeinkommens." }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mt-6 mb-3", children: "Wichtige Einflussfaktoren auf deine Netto-Rente:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Kranken- und Pflegeversicherung:" }),
          " Auf die Bruttorente werden Abzüge zur Kranken- und Pflegeversicherung fällig."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Einkommensteuer:" }),
          " Nach dem Alterseinkünftegesetz unterliegt ein Großteil der Rente der nachgelagerten Besteuerung."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Inflation / Kaufkraftverlust:" }),
          " Eine jährliche Inflation halbiert die Kaufkraft des Ersparten über längere Zeiträume."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AffiliateWidget, { type: "rente", title: "Monatliche Rentenlücke schließen: Tarife vergleichen" }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function PrivateRente() {
  const faqs = [
    {
      question: "Wann lohnt sich eine private Rentenversicherung?",
      answer: "Eine private Rentenversicherung lohnt sich besonders für Personen, die das Langlebigkeitsrisiko absichern wollen und im Ruhestand eine garantierte, lebenslange monatliche Zusatzrente suchen. Zudem profitieren Versicherte bei Erfüllung gesetzlicher Voraussetzungen von günstigen Besteuerungsregeln bei Auszahlung."
    },
    {
      question: "Wie wird die private Rentenversicherung im Alter versteuert?",
      answer: "Bei lebenslanger Verrentung wird lediglich der Ertragsanteil nach § 22 EStG versteuert (z. B. 17 % Ertragsanteil bei Renteneintritt mit 67 Jahren). Wählt man eine Einmalkapitalauszahlung nach Vollendung des 62. Lebensjahres und nach mindestens 12 Jahren Vertragslaufzeit, wird die Hälfte des Unterschiedsbetrags zwischen Auszahlung und eingezahlten Beiträgen nach § 20 Abs. 1 Nr. 6 EStG besteuert."
    },
    {
      question: "Was ist der garantierte Rentenfaktor?",
      answer: "Der Rentenfaktor gibt an, wie viel Euro monatliche Rente je 10.000 Euro gebildetem Kapital ausgezahlt werden. Ein garantierter Rentenfaktor schützt vor künftigen Senkungen der Rentenzahlung durch die Versicherung."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Private Rentenversicherung", item: "/private-rente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Private Rentenversicherung: Modelle, Vorteile und Steuer" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Die private Rentenversicherung bildet die 3. Säule der deutschen Alterssicherung. Erfahre alles über klassische und fondsgebundene Tarife, den Rentenfaktor, Vertragskosten und die exakte steuerliche Behandlung nach § 20 und § 22 EStG." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 border border-blue-200 text-blue-950 rounded-xl mb-8 text-xs sm:text-sm flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-blue-700 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Steuerlicher Grundsatz-Hinweis:" }),
        " Die konkrete steuerliche Behandlung hängt vom individuellen Vertrag, dem Abschlussdatum und dem gewählten Auszahlungsmodell ab. Vor Abschluss empfiehlt sich eine Abstimmung mit einem Steuerberater."
      ] })
    ] }),
    /* @__PURE__ */ jsx(AffiliateWidget, { type: "rente", title: "Kostenlosen Tarife-Vergleich anfordern" }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Klassische vs. Fondsgebundene Rentenversicherung" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Bei der Wahl einer privaten Rentenversicherung stehen Verbraucher grundsätzlich vor der Entscheidung zwischen zwei Hauptformen:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-2 text-base", children: "Klassische Rentenversicherung" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed mb-3", children: "Legt die Beiträge im Sicherungsvermögen des Versicherers an. Bietet eine vertraglich festgelegte Garantie plus Überschussbeteiligung." }),
          /* @__PURE__ */ jsxs("ul", { className: "text-xs text-slate-700 space-y-1", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-600" }),
              " Hohe Planungssicherheit"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-500" }),
              " Niedriges Renditepotenzial"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-2 text-base", children: "Fondsgebundene Rentenversicherung" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed mb-3", children: "Investiert die Sparbeiträge in Investmentfonds oder kostengünstige weltweite ETFs (z. B. MSCI World). Höhere Renditechancen bei gleichzeitigem Kursrisiko." }),
          /* @__PURE__ */ jsxs("ul", { className: "text-xs text-slate-700 space-y-1", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-emerald-600" }),
              " Höhere Renditechancen"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "w-4 h-4 text-red-500" }),
              " Wertschwankungen im Ersparten"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Steuerliche Behandlung im Detail: Auszahlungsphase" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Im Gegensatz zur gesetzlichen Rente erfolgt die Besteuerung der privaten Rentenversicherung nicht voll nachgelagert, sondern richtet sich nach der gewählten Auszahlungsform:" }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mt-4", children: "1. Lebenslange Rentenzahlung (Ertragsanteil nach § 22 EStG)" }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-700", children: [
        "Wird das Vorsorgeguthaben als lebenslange monatliche Rente ausgezahlt, unterliegt lediglich der sogenannte ",
        /* @__PURE__ */ jsx("strong", { children: "Ertragsanteil" }),
        " der Einkommensteuer (§ 22 Nr. 1 Satz 3 Buchst. a Doppelbuchst. bb EStG). Die Höhe des Ertragsanteils richtet sich nach dem Alter bei Rentenbeginn."
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mt-6", children: "2. Einmalkapitalauszahlung (§ 20 Abs. 1 Nr. 6 EStG)" }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-700", children: [
        "Entscheidet sich der Versicherte bei Vertragsende für die einmalige Kapitalabfindung, gilt für nach 2011 abgeschlossene Verträge: Wenn die Auszahlung nach Vollendung des ",
        /* @__PURE__ */ jsx("strong", { children: "62. Lebensjahres" }),
        " erfolgt und der Vertrag mindestens ",
        /* @__PURE__ */ jsx("strong", { children: "12 Jahre Laufzeit" }),
        " aufwies, ist nur die ",
        /* @__PURE__ */ jsx("u", { children: "Hälfte des Unterschiedsbetrags" }),
        " (Auszahlungssumme abzüglich eingezahlter Beiträge) steuerpflichtig."
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function RiesterRente() {
  const faqs = [
    {
      question: "Wer ist für die Riester-Förderung unmittelbar zulagenberechtigt?",
      answer: "Unmittelbar zulagenberechtigt sind versicherungspflichtige Arbeitnehmer, Auszubildende, Pflichtversicherte in der gesetzlichen Rentenversicherung, Beamtinnen und Beamte sowie Bezieher von Lohnersatzleistungen (z. B. Krankengeld, Elterngeld)."
    },
    {
      question: "Wie hoch ist der Mindesteigenbeitrag bei der Riester-Rente?",
      answer: `Um die volle staatliche Zulagenförderung zu erhalten, müssen Sparer ${CURRENT_VALUES.riesterMindestbeitragProzent} % ihres sozialversicherungspflichtigen Vorjahreseinkommens (abzüglich der zustehenden Zulagen) als Eigenbeitrag in den Vertrag einzahlen – mindestens jedoch den Sockelbeitrag von 60 € pro Jahr.`
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Riester-Rente", item: "/riester-rente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Riester-Rente: Förderung, Vorteile und Nachteile" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Umfassende Darstellung der gesetzlichen Bestimmungen der Riester-Förderung nach § 79 ff. EStG, Berechnung des Mindesteigenbeitrags und sachliche Gegenüberstellung von Vor- und Nachteilen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 border border-blue-200 text-blue-950 rounded-xl mb-8 text-xs sm:text-sm flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-5 h-5 text-blue-700 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Differenzierung geltendes Recht vs. Reformvorschläge:" }),
        " Die nachfolgenden Zulagenwerte entsprechen der im EStG verankerten Rechtslage. Vorschläge für künftige Reformen (z. B. ein staatlich gefördertes Altersvorsorgedepot) sind in der parlamentarischen Beratschlagung."
      ] })
    ] }),
    /* @__PURE__ */ jsx(AffiliateWidget, { type: "riester", title: "Riester-Förderung & Tarife anfordern" }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Die staatlichen Riester-Zulagen im Detail" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Die staatliche Riester-Förderung beruht auf zwei Säulen: direkten staatlichen Zulagen und einem zusätzlichen Sonderausgabenabzug bei der Einkommensteuererklärung (§ 10a EStG)." }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 not-prose", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm text-slate-700 border-collapse border border-slate-200", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100 text-slate-900 border-b border-slate-200", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Förderkomponente" }),
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Höhe (pro Jahr)" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Voraussetzung & Rechtsgrundlage" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Grundzulage" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-700 border-r border-slate-200", children: CURRENT_VALUES.riesterGrundzulageFormatted }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Zahlung von 4 % des Vorjahresbrutto (mind. 60 € Sockelbeitrag) (§ 84 EStG)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Kinderzulage (ab 2008 geb.)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-700 border-r border-slate-200", children: CURRENT_VALUES.riesterKinderzulageAb2008Formatted }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Kindergeldanspruch im jeweiligen Beitragsjahr (§ 85 EStG)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Kinderzulage (vor 2008 geb.)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-700 border-r border-slate-200", children: CURRENT_VALUES.riesterKinderzulageVor2008Formatted }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Kindergeldanspruch im jeweiligen Beitragsjahr (§ 85 EStG)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Berufseinsteigerbonus" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-700 border-r border-slate-200", children: "200,00 €" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Einmalig für Zulagenberechtigte unter 25 Jahren (§ 84 Abs. 2 EStG)" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Sonderausgabenabzug (§ 10a EStG)" }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-700", children: [
        "Beiträge zur Riester-Rente können bis zu einem Höchstbetrag von ",
        /* @__PURE__ */ jsxs("strong", { children: [
          CURRENT_VALUES.riesterHoechstbetragFormatted,
          " pro Kalenderjahr"
        ] }),
        " als Sonderausgaben geltend gemacht werden."
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function BetrieblicheAltersvorsorge() {
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
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Betriebliche Altersvorsorge: Arbeitgeberzuschuss & bAV" }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-base leading-relaxed", children: [
        "Wie die Entgeltumwandlung nach § 1a BetrAVG funktioniert, unter welchen Voraussetzungen der ",
        CURRENT_VALUES.bavArbeitgeberzuschussFormatted,
        " Arbeitgeberzuschuss greift und worauf in der Auszahlungsphase zu achten ist."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Rechtsgrundlage der Entgeltumwandlung (§ 1a BetrAVG)" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Sozialversicherungspflichtig beschäftigte Arbeitnehmer haben in Deutschland nach § 1a Abs. 1 Betriebsrentengesetz (BetrAVG) einen Rechtsanspruch darauf, von ihren künftigen Entgeltansprüchen Teile steuer- und sozialabgabenfrei in eine betriebliche Altersvorsorge umzuwandeln." }),
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900", children: [
        "Der ",
        CURRENT_VALUES.bavArbeitgeberzuschussFormatted,
        " Arbeitgeberzuschuss nach § 1a Abs. 1a BetrAVG"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-blue-50 border border-blue-200 rounded-xl my-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-bold text-blue-950 mb-2 text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Info, { className: "w-5 h-5 text-blue-700" }),
          "Gesetzliche Formulierung & Bedingung:"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-blue-900 leading-relaxed", children: [
          "Soweit der Arbeitgeber durch die Entgeltumwandlung Sozialversicherungsbeiträge einspart, ist er verpflichtet, ",
          /* @__PURE__ */ jsxs("strong", { children: [
            CURRENT_VALUES.bavArbeitgeberzuschussFormatted,
            " des umgewandelten Entgelts zusätzlich"
          ] }),
          " als Arbeitgeberzuschuss an den Versorgungsträger weiterzuleiten."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function EtfRente() {
  const faqs = [
    {
      question: "Welche Rolle können breit gestreute Aktien-ETFs bei der Altersvorsorge spielen?",
      answer: "Breit gestreute Aktien-ETFs (z. B. auf den MSCI World oder FTSE All-World) ermöglichen Privatanlegern die Teilhabe an der globalen Wirtschaftsentwicklung. Durch niedrige laufende Produktkosten (TER) eignen sie sich für den langfristigen Vermögensaufbau über mehrere Jahrzehnte."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "ETF Altersvorsorge", item: "/etf-rente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "ETF zur Altersvorsorge: Chancen, Kosten und Risiken" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Welche Rolle breit gestreute Aktien-ETFs beim langfristigen Vermögensaufbau spielen können, wie Gesamtkosten wirken und welche Risiken vor Rentenbeginn beachtet werden müssen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-amber-50 border border-amber-200 text-amber-950 rounded-xl mb-8 text-xs sm:text-sm flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(ShieldAlert, { className: "w-5 h-5 text-amber-700 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Wichtiger Hinweis:" }),
        " Diese Seite stellt keine individuelle Anlageberatung oder Kaufempfehlung dar. Wertpapierangebote unterliegen Kursschwankungen und Verlustrisiken."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Funktionsweise von Aktien-ETFs in der Altersvorsorge" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Ein ETF (Exchange Traded Fund) ist ein börsengehandelter Indexfonds, der die Wertentwicklung eines festgelegten Marktindexes (z. B. MSCI World mit über 1.400 Unternehmen aus 23 Industrieländern) möglichst exakt abbildet." })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function RentenEintrittsCalculator() {
  const [geburtsjahr, setGeburtsjahr] = useState(1965);
  const [beitragsjahre, setBeitragsjahre] = useState(40);
  const [copied, setCopied] = useState(false);
  let regAge = 67;
  if (geburtsjahr < 1947) regAge = 65;
  else if (geburtsjahr >= 1947 && geburtsjahr <= 1958) regAge = 65 + (geburtsjahr - 1946) / 12;
  else if (geburtsjahr >= 1959 && geburtsjahr <= 1963) regAge = 66 + (geburtsjahr - 1958) / 12;
  else regAge = 67;
  const regYear = Math.floor(geburtsjahr + regAge);
  let earAge = 63;
  let earNotes = "";
  let abschlagPercent = 0;
  if (beitragsjahre >= 45) {
    if (geburtsjahr >= 1964) {
      earAge = 65;
      earNotes = "Abschlagsfreie Altersrente für besonders langjährig Versicherte (45 Beitragsjahre)";
      abschlagPercent = 0;
    } else {
      earAge = 63 + Math.min(2, Math.max(0, (geburtsjahr - 1952) * (2 / 12)));
      earNotes = "Abschlagsfreie Rente für besonders langjährig Versicherte";
      abschlagPercent = 0;
    }
  } else if (beitragsjahre >= 35) {
    earAge = 63;
    const missingMonths = (regAge - 63) * 12;
    abschlagPercent = Math.min(14.4, missingMonths * 0.3);
    earNotes = `Altersrente für langjährig Versicherte mit ${abschlagPercent.toFixed(1).replace(".", ",")}% dauerhaftem Abschlag`;
  } else {
    earAge = regAge;
    earNotes = "Kein vorzeitiger Renteneintritt möglich (weniger als 35 Beitragsjahre)";
    abschlagPercent = 0;
  }
  const earYear = Math.floor(geburtsjahr + earAge);
  const handleShare = () => {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}/rentenalter?bj=${geburtsjahr}&bjahre=${beitragsjahre}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { id: "rechner-eintritt", className: "my-6 sm:my-8 bg-white p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 text-emerald-600 shrink-0" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold text-slate-900", children: '„Wann kann ich in Rente?"-Rechner' })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-500 mt-1", children: "Ermittle dein gesetzliches Reguläres Eintrittsalter und Frühestmögliche Optionen." })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleShare,
          className: "inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95 transition-all w-full sm:w-auto",
          children: [
            copied ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-600" }) : /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4" }),
            copied ? "Link kopiert!" : "Ergebnis teilen"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2", children: "Dein Geburtsjahr" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            inputMode: "numeric",
            value: geburtsjahr || "",
            onChange: (e) => setGeburtsjahr(Number(e.target.value)),
            className: "w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-base sm:text-lg font-bold text-slate-900 shadow-sm"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Z. B. 1965 (Jahrgang für Regelaltersgrenze 67)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2", children: "Voraussichtliche Beitragsjahre (Wartezeit)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            inputMode: "numeric",
            value: beitragsjahre || "",
            onChange: (e) => setBeitragsjahre(Number(e.target.value)),
            className: "w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-base sm:text-lg font-bold text-slate-900 shadow-sm"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Inkl. Ausbildung, Kindererziehung & Arbeitslosigkeit" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 p-5 sm:p-6 bg-slate-900 text-white rounded-xl shadow-inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3.5", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500/20 text-emerald-400 rounded-xl shrink-0 mt-1", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block", children: "Regulärer Renteneintritt" }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl sm:text-3xl font-extrabold text-white mt-1", children: [
            "Alter ",
            Math.floor(regAge),
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-lg font-medium text-slate-400", children: [
              "(",
              regYear,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 mt-1", children: "Reguläre Regelaltersgrenze. Abschlagsfrei nach gesetzlicher Vorgabe." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3.5 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-1", children: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block", children: "Frühestmöglicher Eintritt" }),
          /* @__PURE__ */ jsxs("div", { className: "text-2xl sm:text-3xl font-extrabold text-amber-400 mt-1", children: [
            "Alter ",
            Math.floor(earAge),
            " ",
            /* @__PURE__ */ jsxs("span", { className: "text-lg font-medium text-slate-300", children: [
              "(",
              earYear,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 mt-1", children: earNotes })
        ] })
      ] })
    ] })
  ] });
}

function Rentenalter() {
  const faqs = [
    {
      question: "Wann erreiche ich meine reguläre Regelaltersgrenze?",
      answer: "Für alle Geburtsjahrgänge ab 1964 liegt die gesetzliche Regelaltersgrenze bei exakt 67 Jahren (§ 35 SGB VI). Für Jahrgänge von 1947 bis 1963 erfolgte die Anhebung schrittweise pro Jahrgang."
    },
    {
      question: "Wann kann ich frühestens in Rente gehen?",
      answer: "Wer 35 Beitragsjahre nachweist (langjährig Versicherte), kann ab Alter 63 mit Abschlägen (0,3 % pro Monat vorzeitig, max. 14,4 %) in Rente gehen. Wer 45 Beitragsjahre vorweist, kann abschlagsfrei (je nach Jahrgang ab 63 bis 65 Jahren) in Rente gehen."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Renteneintrittsalter", item: "/rentenalter" }
  ];
  const primarySources = [
    { title: "§ 35 SGB VI - Regelaltersrente", url: "https://www.gesetze-im-internet.de/sgb_6/__35.html" },
    { title: "§ 235 SGB VI - Anhebung der Regelaltersgrenze", url: "https://www.gesetze-im-internet.de/sgb_6/__235.html" },
    { title: "DRV Ratgeber Regelaltersrente", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Regelaltersrente/regelaltersrente_node.html" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Wann kann ich in Rente? Rentenalter einfach erklärt" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base sm:text-lg leading-relaxed", children: "Ermittle mit unserem Rechner dein exaktes gesetzliches Reguläres Eintrittsalter sowie die gesetzlichen Bedingungen für Frührente und die Rente nach 45 Beitragsjahren." })
    ] }),
    /* @__PURE__ */ jsx(RentenEintrittsCalculator, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Die Anhebung der Regelaltersgrenze auf 67 Jahre (§ 235 SGB VI)" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Seit dem Gesetz zur Anpassung der Regelaltersgrenze wird das gesetzliche Eintrittsalter für die Regelaltersrente für Jahrgänge ab 1947 schrittweise von 65 auf 67 Jahre angehoben:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-4", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-xs sm:text-sm border-collapse border border-slate-200", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100 text-slate-800 font-bold", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-slate-200 text-left", children: "Geburtsjahrgang" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-slate-200 text-left", children: "Gesetzliche Regelaltersgrenze" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "Bis 1946" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "65 Jahre" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "1947 bis 1958" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "65 Jahre + 1 Monat pro Jahrgang" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "1959 bis 1963" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "66 Jahre + 2 Monate pro Jahrgang" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "Ab Geburtsjahrgang 1964" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-blue-900 font-bold", children: "Exakt 67 Jahre" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Übersicht der Vorruhestandsoptionen" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 text-base mb-1", children: "35 Beitragsjahre (Langjährig)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600", children: "Eintritt ab 63 Jahren möglich. Rentenabschlag: 0,3 % für jeden Monat vorzeitigen Eintritts vor der Regelaltersgrenze (max. 14,4 %)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 text-base mb-1", children: "45 Beitragsjahre (Besonders langjährig)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600", children: "Abschlagsfreier Eintritt vor Erreichen der Altersgrenze 67 (je nach Jahrgang ab 63 bis 65 Jahren)." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          "Häufige Fragen zum Rentenalter (FAQ)"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: faq.answer })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, { sources: primarySources })
  ] });
}

function RentenBerechnungCalculator() {
  const [entgeltpunkte, setEntgeltpunkte] = useState(45);
  const [rentenwert, setRentenwert] = useState(42.52);
  const [zugangsfaktor, setZugangsfaktor] = useState(1);
  const [copied, setCopied] = useState(false);
  const bruttoRente = entgeltpunkte * zugangsfaktor * rentenwert;
  const abzuege = bruttoRente * 0.124;
  const nettoRenteEst = bruttoRente - abzuege;
  const handleShare = () => {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}/rentenberechnung?ep=${entgeltpunkte}&rw=${rentenwert}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { id: "rechner-berechnung", className: "my-6 sm:my-8 bg-white p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calculator, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold text-slate-900", children: "Gesetzlicher Rentenrechner" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-slate-500 mt-1", children: [
          "Formel nach § 64 SGB VI: ",
          /* @__PURE__ */ jsx("em", { children: "Rente = EP × ZF × RW × RAF" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleShare,
          className: "inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95 transition-all w-full sm:w-auto",
          children: [
            copied ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-emerald-600" }) : /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4" }),
            copied ? "Link kopiert!" : "Ergebnis teilen"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2", children: "Gesammelte Entgeltpunkte (EP)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            inputMode: "decimal",
            value: entgeltpunkte || "",
            onChange: (e) => setEntgeltpunkte(Number(e.target.value)),
            className: "w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-base sm:text-lg font-bold text-slate-900 shadow-sm"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "45 EP = Standard-Eckrentner" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2", children: "Aktueller Rentenwert (€)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            step: "0.01",
            inputMode: "decimal",
            value: rentenwert || "",
            onChange: (e) => setRentenwert(Number(e.target.value)),
            className: "w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-base sm:text-lg font-bold text-slate-900 shadow-sm"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-slate-400 mt-1 block", children: [
          "Aktueller Bundeswert: ",
          rentenwert.toFixed(2).replace(".", ","),
          " € (",
          /* @__PURE__ */ jsx("a", { href: "https://www.deutsche-rentenversicherung.de", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-blue-700", children: "DRV Quelle" }),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2", children: "Zugangsfaktor (Abschläge / Zuschläge)" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            value: zugangsfaktor,
            onChange: (e) => setZugangsfaktor(Number(e.target.value)),
            className: "w-full h-12 px-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-xs sm:text-sm font-semibold text-slate-900 shadow-sm bg-white",
            children: [
              /* @__PURE__ */ jsx("option", { value: 1, children: "1,00 (Regulärer Renteneintritt)" }),
              /* @__PURE__ */ jsx("option", { value: 0.856, children: "0,856 (Vorzeitiger Eintritt: 4 Jahre früher = -14,4 %)" }),
              /* @__PURE__ */ jsx("option", { value: 0.928, children: "0,928 (Vorzeitiger Eintritt: 2 Jahre früher = -7,2 %)" }),
              /* @__PURE__ */ jsx("option", { value: 1.06, children: "1,06 (Späterer Eintritt: 1 Jahr später = +6,0 %)" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "0,3 % Abschlag pro Monat vorzeitig" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-5 sm:p-6 bg-slate-900 text-white rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-5 mb-4 shadow-inner", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1", children: "Brutto-Monatsrente" }),
        /* @__PURE__ */ jsxs("div", { className: "text-2xl sm:text-3xl font-extrabold text-white", children: [
          bruttoRente.toFixed(2).replace(".", ","),
          " €"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-1 block", children: "Vor KV/PV & Steuern" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1", children: "Pauschale Abzüge (KV/PV ~12.4%)" }),
        /* @__PURE__ */ jsxs("div", { className: "text-2xl sm:text-3xl font-extrabold text-amber-400", children: [
          "- ",
          abzuege.toFixed(2).replace(".", ","),
          " €"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-1 block", children: "KVdR + Pflegeversicherung" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1", children: "Geschätzte Rente nach KV/PV" }),
        /* @__PURE__ */ jsxs("div", { className: "text-2xl sm:text-3xl font-extrabold text-emerald-400", children: [
          nettoRenteEst.toFixed(2).replace(".", ","),
          " €"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-1 block", children: "Vor individueller Einkommensteuer" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200/60 leading-relaxed", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-4 h-4 text-slate-400 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("strong", { children: "* Hinweis zu Steuern & Abzügen:" }),
        " Die Auszahlung versteht sich vor individueller Einkommensteuer. Die KV/PV-Beitragssätze variieren je nach Krankenkasse und Pflege-Zusatzbeitrag."
      ] })
    ] })
  ] });
}

function Rentenberechnung() {
  const faqs = [
    {
      question: "Wie lautet die offizielle gesetzliche Rentenformel?",
      answer: "Nach § 64 SGB VI berechnet sich die monatliche Bruttorente wie folgt: Monatliche Rente = Entgeltpunkte × Zugangsfaktor × Aktueller Rentenwert × Rentenartfaktor."
    },
    {
      question: "Welchen Einfluss hat ein vorzeitiger Renteneintritt auf den Zugangsfaktor?",
      answer: "Bei vorzeitigem Renteneintritt sinkt der Zugangsfaktor für jeden Monat um 0,003 (entspricht 0,3 % dauerhaftem Abschlag von der Rente)."
    },
    {
      question: "Wie hoch ist der Rentenartfaktor bei der normalen Altersrente?",
      answer: "Der Rentenartfaktor (§ 67 SGB VI) beträgt für Reguläre Altersrenten und volle Erwerbsminderungsrenten exakt 1,0."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Gesetzliche Rentenberechnung", item: "/rentenberechnung" }
  ];
  const primarySources = [
    { title: "§ 64 SGB VI - Rentenformel für Monatsrente", url: "https://www.gesetze-im-internet.de/sgb_6/__64.html" },
    { title: "§ 67 SGB VI - Rentenartfaktor", url: "https://www.gesetze-im-internet.de/sgb_6/__67.html" },
    { title: "§ 68 SGB VI - Aktueller Rentenwert", url: "https://www.gesetze-im-internet.de/sgb_6/__68.html" },
    { title: "DRV Fachportal Rentenberechnung", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Rentenberechnung/rentenberechnung.html" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Gesetzliche Rentenberechnung: Rentenformel & Rentenwert" }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-600 text-base sm:text-lg leading-relaxed", children: [
        "Berechne deine voraussichtliche gesetzliche Monatsrente auf Basis deiner Entgeltpunkte (Rentenpunkte) und des aktuellen Bundesrentenwerts von ",
        CURRENT_VALUES.rentenwertFormatted,
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx(RentenBerechnungCalculator, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10 space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Die gesetzliche Rentenformel nach § 64 SGB VI" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Die Berechnung der monatlichen Bruttorente folgt im deutschen Rentenrecht einer festgelegten mathematischen Formel:" }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-900 text-white rounded-2xl my-4 space-y-3 shadow-md", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-amber-400 font-bold text-base sm:text-lg", children: "Monatliche Rente = EP × ZF × RW × RAF" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300", children: "Jedes Element dieser Formel repräsentiert eine gesetzliche Komponente des Rentenrechts." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Die 4 Komponenten der Rentenformel im Detail" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 text-base mb-1", children: "1. Entgeltpunkte (EP)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600", children: "Spiegeln das Verhältnis deines jährlichen Bruttoeinkommens zum Durchschnittseinkommen aller Versicherten wider. 1,0 EP entspricht genau einem Jahr Durchschnittsgehalt." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 text-base mb-1", children: "2. Zugangsfaktor (ZF)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600", children: "Berücksichtigt den Zeitpunkt des Renteneintritts. Bei regulärem Eintritt beträgt der ZF 1,0. Bei vorzeitigem Eintritt sinkt er um 0,003 pro Monat (-0,3 % Abschlag)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 text-base mb-1", children: "3. Aktueller Rentenwert (RW)" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-slate-600", children: [
              "Entspricht dem monatlichen Euro-Wert eines einzelnen Entgeltpunkts. Aktueller Wert: ",
              /* @__PURE__ */ jsx("strong", { children: CURRENT_VALUES.rentenwertFormatted }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 text-base mb-1", children: "4. Rentenartfaktor (RAF)" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600", children: "Bestimmt das Auszahlungsniveau je nach Rentenart (§ 67 SGB VI). Bei Altersrenten und vollen Erwerbsminderungsrenten beträgt der Faktor 1,0." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          "Häufige Fragen zur Rentenberechnung (FAQ)"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: faq.answer })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, { sources: primarySources })
  ] });
}

function Rentenanpassung() {
  const faqs = [
    {
      question: "Wie wird die jährliche Rentenanpassung berechnet?",
      answer: "Die Rentenanpassung erfolgt jährlich zum 1. Juli per Verordnung der Bundesregierung auf Basis der bundesweiten Lohnentwicklung und des Nachhaltigkeitsfaktors."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenanpassung", item: "/rentenanpassung" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Rentenanpassung: Aktuelle Erhöhung & Entwicklung" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Alle Hintergründe zur jährlichen Rentenwertbestimmungsverordnung, der Koppelung an die Lohnentwicklung und historischer Vergleich der Rentenanpassungen." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Aktueller Stand der Rentenanpassung" }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 font-semibold mb-6 text-sm", children: [
        "Der aktuelle Rentenwert beträgt derzeit ",
        /* @__PURE__ */ jsx("strong", { children: CURRENT_VALUES.rentenwertFormatted }),
        " je Entgeltpunkt (Rentenanpassung: ",
        /* @__PURE__ */ jsx("strong", { children: CURRENT_VALUES.rentenanpassungFormatted }),
        ")."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Historische Entwicklung der Rentenanpassungen" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6 not-prose", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm text-slate-700 border-collapse border border-slate-200", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100 text-slate-900 border-b border-slate-200", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Jahr" }),
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Rentenanpassung" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Rentenwert / EP" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-amber-50/60 font-bold", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 text-amber-950", children: "2026" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 text-emerald-700", children: "+4,24 %" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-900", children: "42,52 € (bundeseinheitlich)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200", children: "2025" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 text-emerald-700", children: "+3,57 %" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-900", children: "40,79 €" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200", children: "2024" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 text-emerald-700", children: "+4,57 %" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-900", children: "39,32 €" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200", children: "2023" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 text-emerald-700", children: "+4,39 % (West) / +5,86 % (Ost)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 text-slate-900", children: "37,60 € (West) / 37,60 € (Ost)" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function RenteMit63() {
  const faqs = [
    {
      question: "Kann ich heute noch mit 63 Jahren abschlagsfrei in Rente gehen?",
      answer: "Nein. Eine abschlagsfreie Rente mit exakt 63 Jahren galt nur für vor 1953 Geborene. Für jüngere Jahrgänge steigt das Eintrittsalter schrittweise an. Ab Geburtsjahrgang 1964 liegt das abschlagsfreie Eintrittsalter bei 45 Beitragsjahren bei exakt 65 Jahren."
    },
    {
      question: "Welche Abschläge fallen an, wenn ich mit 35 Beitragsjahren früher in Rente gehe?",
      answer: "Bei der Altersrente für langjährig Versicherte (35 Jahre Wartezeit) beträgt der dauerhafte Abschlag 0,3 % für jeden Monat, den Sie vor Ihrer regulären Regelaltersgrenze in Rente gehen (maximal 14,4 % Abschlag)."
    },
    {
      question: "Darf ich als Frührentner unbegrenzt hinzuverdienen?",
      answer: "Ja. Die Hinzuverdienstgrenzen bei vorgezogenen Altersrenten wurden zum 1. Januar 2023 ersatzlos aufgehoben. Sie können beliebig viel hinzuverdienen, ohne dass die Rente gekürzt wird."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rente mit 63", item: "/rente-mit-63" }
  ];
  const primarySources = [
    { title: "§ 36 SGB VI - Altersrente für langjährig Versicherte", url: "https://www.gesetze-im-internet.de/sgb_6/__36.html" },
    { title: "§ 38 SGB VI - Besonders langjährig Versicherte", url: "https://www.gesetze-im-internet.de/sgb_6/__38.html" },
    { title: "DRV Altersrenten Übersicht", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Allgemeine-Informationen/Rentenarten-und-Leistungen/Altersrente-fuer-langjaehrig-Versicherte/altersrente_fuer_langjaehrig_versicherte_node.html" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Rente mit 63: Voraussetzungen, Abschläge & Regelungen" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base sm:text-lg leading-relaxed", children: "Umfassende rechtliche Einordnung der vorgezogenen Altersrenten nach SGB VI: Unterschiede zwischen der Altersrente für besonders langjährig Versicherte (45 Beitragsjahre) und langjährig Versicherte (35 Beitragsjahre) sowie Wegfall der Hinzuverdienstgrenzen." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 border border-slate-200 rounded-2xl", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5 text-blue-700 shrink-0" }),
          "Was bedeutet „Rente mit 63“ heute?"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-700 leading-relaxed mb-0", children: [
          "Der Begriff „Rente mit 63“ ist eine populäre Bezeichnung für zwei unterschiedliche gesetzliche Rentenarten im Sozialgesetzbuch VI: Die ",
          /* @__PURE__ */ jsx("strong", { children: "Altersrente für besonders langjährig Versicherte (§ 38 SGB VI)" }),
          " und die ",
          /* @__PURE__ */ jsx("strong", { children: "Altersrente für langjährig Versicherte (§ 36 SGB VI)" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "1. Altersrente für besonders langjährig Versicherte (45 Beitragsjahre)" }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-700", children: [
          "Wer mindestens ",
          /* @__PURE__ */ jsx("strong", { children: "45 Jahre an Pflichtbeitragszeiten" }),
          " nachweisen kann, kann ohne finanzielle Abschläge vorzeitig in den Ruhestand treten. Das Eintrittsalter wurde jedoch für jüngere Jahrgänge angehoben:"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-4", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-xs sm:text-sm border-collapse border border-slate-200", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100 text-slate-800 font-bold", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-slate-200 text-left", children: "Geburtsjahrgang" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-slate-200 text-left", children: "Abschlagsfreies Eintrittsalter" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "Vor 1953" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-emerald-700 font-bold", children: "Exakt 63 Jahre" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "1953 bis 1963" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "Stufenweise Anhebung um 2 Monate pro Jahrgang" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "Ab Geburtsjahrgang 1964" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-blue-900 font-bold", children: "Exakt 65 Jahre" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mt-4 mb-2", children: "Was zählt zu den 45 Jahren Wartezeit?" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1.5 text-slate-700 text-sm sm:text-base", children: [
          /* @__PURE__ */ jsx("li", { children: "Pflichtbeiträge aus Beschäftigung und Selbstständigkeit" }),
          /* @__PURE__ */ jsx("li", { children: "Kindererziehungszeiten (bis zum 10. Lebensjahr) und Pflegezeiten" }),
          /* @__PURE__ */ jsx("li", { children: "Bezug von Krankengeld, Übergangsgeld oder Arbeitslosengeld I (Ausnahme: Arbeitslosengeld I in den letzten 2 Jahren vor Rentenbeginn)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "2. Altersrente für langjährig Versicherte (35 Beitragsjahre mit Abschlägen)" }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-700", children: [
          "Wer mindestens ",
          /* @__PURE__ */ jsx("strong", { children: "35 Beitragsjahre" }),
          " aufweist, kann weiterhin ab dem ",
          /* @__PURE__ */ jsx("strong", { children: "63. Lebensjahr" }),
          " in Rente gehen – allerdings nur mit **dauerhaften Rentenabschlägen**:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-amber-50 border border-amber-200 rounded-xl my-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-amber-950 text-base mt-0 mb-1", children: "Berechnung der Abschläge (§ 77 SGB VI)" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-amber-900 leading-relaxed mb-0", children: [
            "Für jeden Monat, den die Rente vor der individuellen Regelaltersgrenze (z. B. 67 Jahre) in Anspruch genommen wird, wird die Rente um ",
            /* @__PURE__ */ jsx("strong", { children: "0,3 % dauerhaft gekürzt" }),
            ". Bei einem Renteneintritt 4 Jahre vor der Regelaltersgrenze beläuft sich der Abschlag auf ",
            /* @__PURE__ */ jsx("strong", { children: "14,4 %" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "3. Wegfall der Hinzuverdienstgrenzen seit 2023" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Seit dem 1. Januar 2023 wurden die gesetzlichen Hinzuverdienstgrenzen bei allen vorgezogenen Altersrenten aufgehoben. Frührentner können beliebig viel Arbeitslohn oder Gehalt erzielen, ohne dass die Rente gekürzt wird." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          "Häufige Fragen zur Rente mit 63 (FAQ)"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: faq.answer })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, { sources: primarySources })
  ] });
}

function Grundrente() {
  const faqs = [
    {
      question: "Muss ich den Grundrentenzuschlag extra beantragen?",
      answer: "Nein. Die Deutsche Rentenversicherung prüft den Anspruch auf den Grundrentenzuschlag vollautomatisch. Es ist kein separater Antrag erforderlich."
    },
    {
      question: "Zählen Zeiten der Arbeitslosigkeit als Grundrentenzeiten?",
      answer: "Nein. Zeiten des Bezugs von Arbeitslosengeld I, Arbeitslosengeld II (Bürgergeld) oder reine Anrechnungszeiten zählen gesetzlich nicht als Grundrentenzeiten."
    },
    {
      question: "Wie hoch ist der maximale Grundrentenzuschlag?",
      answer: "Der individuelle Zuschlag unterscheidet sich je nach persönlichem Rentenkonto. Der rechnerische Höchstbetrag liegt bei knapp 400 Euro brutto im Monat."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Grundrente", item: "/grundrente" }
  ];
  const primarySources = [
    { title: "§ 76g SGB VI - Grundrentenzuschlag", url: "https://www.gesetze-im-internet.de/sgb_6/__76g.html" },
    { title: "§ 97a SGB VI - Einkommensanrechnung Grundrente", url: "https://www.gesetze-im-internet.de/sgb_6/__97a.html" },
    { title: "DRV Fachportal Grundrente", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Grundrente/grundrente.html" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Grundrente: Anspruch, Einkommensprüfung & Zuschlag" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base sm:text-lg leading-relaxed", children: "Systematischer Ratgeber zum Grundrentenzuschlag nach § 76g SGB VI: Erforderliche Grundrentenzeiten, automatische Einkommensprüfung beim Finanzamt, Freibeträge und die konkrete Berechnung." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 border border-slate-200 rounded-2xl", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-blue-700 shrink-0" }),
          "Was ist der Grundrentenzuschlag?"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-700 leading-relaxed mb-0", children: [
          "Die sogenannte Grundrente ist keine eigenständige Rentenart, sondern ein gesetzlicher ",
          /* @__PURE__ */ jsx("strong", { children: "Zuschlag zur bestehenden Alters- oder Erwerbsminderungsrente" }),
          " (§ 76g SGB VI). Sie kommt Menschen zugute, die viele Jahre erwerbstätig waren, Kinder erzogen oder Angehörige gepflegt haben, dabei jedoch unterdurchschnittlich verdient haben."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "1. Erforderliche Grundrentenzeiten (Mindestwartezeit)" }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-700", children: [
          "Um einen Anspruch auf den Grundrentenzuschlag zu haben, müssen mindestens ",
          /* @__PURE__ */ jsx("strong", { children: "33 Jahre an Grundrentenzeiten" }),
          " nachgewiesen werden. Ab ",
          /* @__PURE__ */ jsx("strong", { children: "35 Jahren" }),
          " wird der volle Zuschlag berechnet."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-emerald-50 border border-emerald-200 rounded-xl", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-emerald-950 text-sm mb-2", children: "Was zählt als Grundrentenzeit?" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs sm:text-sm text-emerald-900 space-y-1.5 pl-4 list-disc", children: [
              /* @__PURE__ */ jsx("li", { children: "Pflichtbeitragszeiten aus Beschäftigung und Selbstständigkeit" }),
              /* @__PURE__ */ jsx("li", { children: "Kindererziehungszeiten (bis zum 10. Lebensjahr)" }),
              /* @__PURE__ */ jsx("li", { children: "Zeiten der häuslichen Pflege von Angehörigen" }),
              /* @__PURE__ */ jsx("li", { children: "Zeiten des Bezugs von Kranken- oder Übergangsgeld" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-rose-50 border border-rose-200 rounded-xl", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-rose-950 text-sm mb-2", children: "Was zählt NICHT mit?" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs sm:text-sm text-rose-900 space-y-1.5 pl-4 list-disc", children: [
              /* @__PURE__ */ jsx("li", { children: "Zeiten von Arbeitslosengeld I und Bürgergeld (ALG II)" }),
              /* @__PURE__ */ jsx("li", { children: "Freiwillige Beitragszahlungen" }),
              /* @__PURE__ */ jsx("li", { children: "Schul-, Fachschul- und Hochschulausbildungszeiten" }),
              /* @__PURE__ */ jsx("li", { children: "Minijobs ohne eigene Beitragsaufstockung" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "2. Automatische Einkommensprüfung (§ 97a SGB VI)" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Die Gewährung des Grundrentenzuschlags unterliegt einer gesetzlichen Einkommensprüfung. Die Deutsche Rentenversicherung ermittelt das zu versteuernde Einkommen im automatischen Datenabgleich mit den Finanzbehörden:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Freibetrag für Alleinstehende:" }),
            " Bis zu einem Einkommen von ca. ",
            /* @__PURE__ */ jsx("strong", { children: "1.375 € netto" }),
            " im Monat wird der Zuschlag ungekürzt gezahlt. Einkommen darüber wird zu 60 % angerechnet. Ab ca. 1.750 € entfällt der Zuschlag vollständig."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Freibetrag für Ehepaare/Lebenspartner:" }),
            " Der volle Freibetrag liegt bei ca. ",
            /* @__PURE__ */ jsx("strong", { children: "2.145 € netto" }),
            " pro Monat."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "3. Berechnung des Grundrentenzuschlags" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Für die Berechnung werden die gesammelten Entgeltpunkte aus den Grundrentenzeiten herangezogen:" }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-slate-900 text-white rounded-xl space-y-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-amber-400 text-base mt-0", children: "Berechnungslogik nach § 76g SGB VI" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-300 leading-relaxed", children: "Die im Schnitt erreichten Entgeltpunkte (mindestens 0,3 EP, maximal 0,8 EP pro Jahr) werden für maximal 35 Jahre verdoppelt, höchstens jedoch auf 0,8 EP aufgestockt. Von diesem errechneten Zuschlag wird ein gesetzlicher Pauschalabzug von 12,5 % vorgenommen." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          "Häufige Fragen zur Grundrente (FAQ)"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: faq.answer })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, { sources: primarySources })
  ] });
}

function Witwenrente() {
  const faqs = [
    {
      question: "Wann wird die Witwenrente ausgezahlt?",
      answer: "Die Witwenrente beginnt grundsätzlich mit dem Todesmonat, wenn der Verstorbene noch keine Rente bezog. Bezog der Verstorbene bereits eine Altersrente, beginnt die Witwenrente im Folgemonat des Sterbefalls."
    },
    {
      question: "Wie lange wird die kleine Witwenrente gezahlt?",
      answer: "Nach neuem Recht (Eheschließung ab 2002 oder beide Partner nach 1.1.1962 geboren) wird die kleine Witwenrente für maximal 24 Kalendermonate (2 Jahre) ausgezahlt."
    },
    {
      question: "Wird eigenes Einkommen im Sterbevierteljahr angerechnet?",
      answer: "Nein. In den ersten 3 Kalendermonaten nach dem Todesfall (Sterbevierteljahr) wird die Witwenrente in voller Höhe der Rente des Verstorbenen gezahlt und es findet keinerlei Einkommensanrechnung statt."
    },
    {
      question: "Was passiert mit der Witwenrente bei einer Wiederheirat?",
      answer: "Bei einer erneuten Heirat erlischt der Anspruch auf die Witwenrente. Bezieher der großen Witwenrente können jedoch auf Antrag eine Rentenabfindung in Höhe von 24 Monatsrenten (§ 107 SGB VI) erhalten."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Witwenrente & Hinterbliebenenrente", item: "/witwenrente" }
  ];
  const primarySources = [
    { title: "§ 46 SGB VI - Witwen- und Witwerrente", url: "https://www.gesetze-im-internet.de/sgb_6/__46.html" },
    { title: "§ 97 SGB VI - Einkommensanrechnung auf Rente", url: "https://www.gesetze-im-internet.de/sgb_6/__97.html" },
    { title: "§ 107 SGB VI - Abfindung bei Wiederheirat", url: "https://www.gesetze-im-internet.de/sgb_6/__107.html" },
    { title: "DRV Hinterbliebenenrente Fachportal", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Hinterbliebenenrente/hinterbliebenenrente_node.html" },
    { title: "DRV Broschüre Hinterbliebenenversorgung", url: "https://www.deutsche-rentenversicherung.de/SharedDocs/Publikationen/DE/Broschueren/unsere_wissen/hinterbliebener_hinterbliebenenrente.html" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Witwenrente und Hinterbliebenenrente: Voraussetzungen, Höhe und Anrechnung" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base sm:text-lg leading-relaxed", children: "Umfassender Leitfaden zur Witwen- und Witwerrente nach dem SGB VI: Gesetzliche Voraussetzungen, Unterschied zwischen Kleiner und Großer Witwenrente, Einkommensanrechnung nach § 97 SGB VI mit konkretem Rechenbeispiel sowie Regeln zur Wiederheirat." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 border border-slate-200 rounded-2xl", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-5 h-5 text-rose-600 shrink-0" }),
          "Was ist die Witwen- und Witwerrente?"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-700 leading-relaxed mb-0", children: [
          "Die Witwenrente (bzw. Witwerrente) ist eine gesetzliche Hinterbliebenenleistung der Deutschen Rentenversicherung nach ",
          /* @__PURE__ */ jsx("strong", { children: "§ 46 SGB VI" }),
          ". Sie dient dazu, den durch den Tod eines Ehepartners oder eingetragenen Lebenspartners wegfallenden Unterhaltsteil teilweise zu ersetzen und den Lebensstandard des überlebenden Partners finanziell abzusichern."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "1. Gesetzliche Voraussetzungen für den Rentenanspruch" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Damit ein Anspruch auf Witwen- oder Witwerrente entsteht, müssen gemäß § 46 SGB VI folgende rechtliche Bedingungen erfüllt sein:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Rechtsgültige Ehe oder eingetragene Lebenspartnerschaft:" }),
            " Die Ehe oder Partnerschaft muss zum Zeitpunkt des Todes bestanden haben."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Mindestehedauer von 1 Jahr:" }),
            " Die Ehe muss grundsätzlich mindestens ein Jahr gedauert haben. Bei kürzerer Ehedauer wird gesetzlich vermutet, dass es sich um eine „Versorgungsehe“ handelte (Ausnahme: Tod durch unvorhergesehenen Unfall)."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Mindestversicherungszeit (Wartezeit) von 5 Jahren:" }),
            " Der verstorbene Partner muss bis zum Tod die allgemeine Wartezeit von 5 Jahren im Rentenkonto erfüllt haben (§ 50 SGB VI) oder bereits eine Alters- bzw. Erwerbsminderungsrente bezogen haben."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Keine Wiederheirat:" }),
            " Der überlebende Partner darf bis zum Leistungsbezug nicht erneut geheiratet haben."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "2. Kleine vs. Große Witwenrente im Vergleich" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Der Gesetzgeber unterscheidet strikt zwischen zwei Leistungsformen:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md inline-block mb-2", children: "Kleine Witwenrente" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "25 % der Rente des Verstorbenen" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs sm:text-sm text-slate-600 space-y-2 pl-4 list-disc", children: [
              /* @__PURE__ */ jsx("li", { children: "Gilt, wenn der Hinterbliebene jünger als die Altersgrenze (47 Jahre) ist." }),
              /* @__PURE__ */ jsx("li", { children: "Keine Erwerbsminderung vorliegt." }),
              /* @__PURE__ */ jsx("li", { children: "Kein minderjähriges Kind erzogen wird." }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Dauer:" }),
                " Nach neuem Recht auf ",
                /* @__PURE__ */ jsx("strong", { children: "maximal 24 Kalendermonate" }),
                " (2 Jahre) begrenzt."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white border border-blue-200 rounded-xl shadow-sm bg-blue-50/30", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-1 rounded-md inline-block mb-2", children: "Große Witwenrente" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "55 % (bzw. 60 %) der Rente" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-xs sm:text-sm text-slate-600 space-y-2 pl-4 list-disc", children: [
              /* @__PURE__ */ jsx("li", { children: "Voraussetzung: Alter von mindestens 47 Jahren (schrittweise angehoben)." }),
              /* @__PURE__ */ jsx("li", { children: "ODER eigene Erwerbsminderung." }),
              /* @__PURE__ */ jsx("li", { children: "ODER Erziehung eines eigenen oder des verstorbenen Partners Kindes unter 18 Jahren." }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Dauer:" }),
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Unbefristet (lebenslang)" }),
                ", solange keine Wiederheirat erfolgt."
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "3. Alte vs. Neue Rechtslage (Vertrauensschutz)" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Ob altes oder neues Hinterbliebenenrecht gilt, richtet sich nach dem Hochzeitsdatum und den Geburtsdaten der Partner:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-4", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-xs sm:text-sm border-collapse border border-slate-200", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100 text-slate-800 font-bold", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-slate-200 text-left", children: "Kriterium" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-slate-200 text-left", children: "Altes Recht" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-slate-200 text-left", children: "Neues Recht" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "Voraussetzung" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "Heirat vor dem 1.1.2002 UND mind. ein Partner vor dem 2.1.1962 geboren" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "Heirat ab 1.1.2002 ODER beide Partner nach dem 1.1.1962 geboren" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "Große Witwenrente" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-bold text-slate-900", children: "60 % der Stammrente" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-bold text-blue-900", children: "55 % der Stammrente + Kinderzuschlag" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "Kleine Witwenrente" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "Unbegrenzt gezahlt" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "Begrenzt auf max. 24 Monate" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "4. Das Sterbevierteljahr (100 % Rentenzahlung ohne Anrechnung)" }),
        /* @__PURE__ */ jsx("div", { className: "p-5 bg-amber-50 border border-amber-200 rounded-xl my-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-amber-950 leading-relaxed mb-0", children: [
          "In den ersten ",
          /* @__PURE__ */ jsx("strong", { children: "drei Kalendermonaten nach dem Sterbemonat" }),
          " (dem sogenannten ",
          /* @__PURE__ */ jsx("em", { children: "Sterbevierteljahr" }),
          ") wird die Witwenrente in ",
          /* @__PURE__ */ jsx("strong", { children: "voller Höhe (100 %)" }),
          " der dem Verstorbenen zustehenden Rente gezahlt. In diesem Zeitraum findet ",
          /* @__PURE__ */ jsx("strong", { children: "keine Einkommensanrechnung" }),
          " statt, um den sofortigen finanziellen Schock abzufedern."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calculator, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          "5. Einkommensanrechnung nach § 97 SGB VI & Freibeträge"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Nach Ablauf des Sterbevierteljahres wird eigenes Einkommen des Hinterbliebenen (z. B. Erwerbseinkommen, eigene Altersrente, Betriebsrente) auf die Witwenrente angerechnet." }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mt-6 mb-3", children: "Gesetzliche Netto-Freibeträge:" }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-700 text-sm sm:text-base", children: [
          "Der Freibetrag ist gesetzlich an das 26,4-fache des aktuellen Rentenwerts gekoppelt. Mit dem aktuellen Bundesrentenwert von ",
          CURRENT_VALUES.rentenwertFormatted,
          " ergeben sich folgende Monatsfreibeträge:"
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1.5 text-slate-700 text-sm sm:text-base mb-6", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Freibetrag für Hinterbliebene:" }),
            " ca. ",
            /* @__PURE__ */ jsx("strong", { children: "1.122,53 € Netto" }),
            " pro Monat."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Zuschlag pro waisengeldberechtigtem Kind:" }),
            " ca. ",
            /* @__PURE__ */ jsx("strong", { children: "238,11 € Netto" }),
            " pro Monat."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-900 text-white rounded-2xl shadow-md space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-amber-400 mt-0", children: "Konkretes Rechenbeispiel zur 40-%-Anrechnung" }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Ausgangslage:" }),
              " Frau M. erhält eine Große Witwenrente von 800 € brutto. Sie arbeitet angestellt und erzielt ein monatliches Bruttogehalt von 2.200 €."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-800 rounded-lg space-y-1 border border-slate-700 font-mono text-xs", children: [
              /* @__PURE__ */ jsx("div", { children: "1. Bruttogehalt: 2.200,00 €" }),
              /* @__PURE__ */ jsx("div", { children: "2. Pauschaler Abzug für Erwerbseinkommen (40 %): - 880,00 €" }),
              /* @__PURE__ */ jsx("div", { className: "text-amber-300 font-bold", children: "➔ Anrechenbares Nettoeinkommen: 1.320,00 €" }),
              /* @__PURE__ */ jsx("div", { className: "pt-2", children: "3. Gesetzlicher Freibetrag: - 1.122,53 €" }),
              /* @__PURE__ */ jsx("div", { className: "text-amber-300 font-bold", children: "➔ Übersteigender Betrag: 197,47 €" }),
              /* @__PURE__ */ jsx("div", { className: "pt-2", children: "4. Anrechnung (40 % von 197,47 €): - 78,99 € Kürzung" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-emerald-400 font-bold text-sm pt-2", children: "Ergebnis: Ausgezahlte Witwenrente = 800,00 € - 78,99 € = 721,01 € netto/monatlich." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "6. Wiederheirat & Rentenabfindung nach § 107 SGB VI" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Heiratet der Bezieher einer Witwenrente erneut, fällt der Rentenanspruch mit Ablauf des Monats der Eheschließung weg. Auf Antrag zahlt die Rentenversicherung jedoch eine **Rentenabfindung**:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Große Witwenrente:" }),
            " Abfindung in Höhe des **24-fachen durchschnittlichen Monatsbetrags** (2 Jahresrenten) der letzten 12 Monate."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Kleine Witwenrente:" }),
            " Abfindung in Höhe des verbleibenden Restbetrags bis zum Ablauf der 24-Monate-Frist."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "7. Antragstellung und benötigte Unterlagen" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Die Witwenrente wird nicht automatisch gewährt, sondern muss bei der Deutschen Rentenversicherung beantragt werden. Folgende Dokumente werden benötigt:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 text-blue-700 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Sterbeurkunde des verstorbenen Partners" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 text-blue-700 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Heiratsurkunde bzw. Partnerschaftsurkunde" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 text-blue-700 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Rentenversicherungsnummern beider Ehepartner" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 text-blue-700 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Nachweise über eigenes Einkommen (Gehalt/Rente)" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-10", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          "Häufige Fragen zur Witwenrente (FAQ)"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: faq.answer })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, { sources: primarySources })
  ] });
}

function Erwerbsminderungsrente() {
  const faqs = [
    {
      question: "Was ist der Unterschied zwischen teilweiser und voller Erwerbsminderung?",
      answer: "Bei voller Erwerbsminderung können Sie gesundheitsbedingt weniger als 3 Stunden täglich arbeiten. Bei teilweiser Erwerbsminderung liegt Ihr Leistungsvermögen zwischen 3 und unter 6 Stunden pro Tag."
    },
    {
      question: "Gilt bei der Erwerbsminderungsrente Berufsschutz?",
      answer: "Nein, für nach dem 1.1.1961 Geborene gibt es keinen Berufsschutz mehr. Die Erwerbsfähigkeit wird auf dem allgemeinen Arbeitsmarkt geprüft."
    },
    {
      question: "Wie lange wird eine Erwerbsminderungsrente gezahlt?",
      answer: "Die EM-Rente wird grundsätzlich auf maximal 3 Jahre befristet gewährt. Eine unbefristete Rente wird vergeben, wenn eine Besserung des Gesundheitszustands unwahrscheinlich ist."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Erwerbsminderungsrente", item: "/erwerbsminderungsrente" }
  ];
  const primarySources = [
    { title: "§ 43 SGB VI - Rente wegen Erwerbsminderung", url: "https://www.gesetze-im-internet.de/sgb_6/__43.html" },
    { title: "§ 59 SGB VI - Zurechnungszeit", url: "https://www.gesetze-im-internet.de/sgb_6/__59.html" },
    { title: "DRV Fachportal Erwerbsminderungsrente", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Erwerbsminderungsrente/erwerbsminderungsrente.html" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Erwerbsminderungsrente: Voraussetzungen, Reha & Zurechnungszeit" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base sm:text-lg leading-relaxed", children: "Systematischer Leitfaden zur Erwerbsminderungsrente nach § 43 SGB VI: Rechtliche Abgrenzung zwischen teilweiser und voller Erwerbsminderung, Grundsatz „Reha vor Rente“, versicherungsrechtliche Voraussetzungen und Zurechnungszeiten." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 border border-slate-200 rounded-2xl", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5 text-blue-700 shrink-0" }),
          "Was ist die Erwerbsminderungsrente?"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-700 leading-relaxed mb-0", children: [
          "Die Erwerbsminderungsrente (EM-Rente) schützt Versicherte der Deutschen Rentenversicherung, die aufgrund einer schweren Krankheit oder Behinderung nicht mehr oder nur noch eingeschränkt am Erwerbsleben teilnehmen können (",
          /* @__PURE__ */ jsx("strong", { children: "§ 43 SGB VI" }),
          ")."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "1. Abgrenzung: Volle vs. Teilweise Erwerbsminderung" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Die medizinische Begutachtung durch den Sozialmedizinischen Dienst der DRV ermittelt das verbliebene Leistungsvermögen auf dem allgemeinen Arbeitsmarkt:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-1 rounded-md inline-block mb-2", children: "Volle Erwerbsminderung" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "Unter 3 Stunden täglich" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: [
              "Der Versicherte kann gesundheitsbedingt auf absehbare Zeit unter den üblichen Bedingungen des allgemeinen Arbeitsmarktes ",
              /* @__PURE__ */ jsx("strong", { children: "weniger als 3 Stunden täglich" }),
              " erwerbstätig sein. Auszahlungsanspruch: ",
              /* @__PURE__ */ jsx("strong", { children: "100 % der berechneten EM-Rente" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md inline-block mb-2", children: "Teilweise Erwerbsminderung" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-2", children: "3 bis unter 6 Stunden täglich" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: [
              "Der Versicherte kann noch ",
              /* @__PURE__ */ jsx("strong", { children: "mindestens 3, aber unter 6 Stunden täglich" }),
              " arbeiten. Auszahlungsanspruch: ",
              /* @__PURE__ */ jsx("strong", { children: "50 % der vollen EM-Rente" }),
              ". Die Rente ist als Ergänzung zu einer Teilzeittätigkeit gedacht."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "2. Versicherungsrechtliche Voraussetzungen" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Neben den medizinischen Kriterien müssen folgende versicherungsrechtliche Hürden erfüllt sein:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Allgemeine Wartezeit:" }),
            " Mindestens 5 Jahre Vorversicherungszeit in der gesetzlichen Rentenversicherung (§ 50 SGB VI)."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "3-in-5-Regel:" }),
            " In den letzten 5 Jahren vor Eintreten der Erwerbsminderung müssen mindestens ",
            /* @__PURE__ */ jsx("strong", { children: "3 Jahre (36 Monate) Pflichtbeiträge" }),
            " für eine versicherungspflichtige Beschäftigung vorliegen."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "3. Grundsatz „Reha vor Rente“ & Zurechnungszeit (§ 59 SGB VI)" }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-700", children: [
          "Vor Bewilligung einer Rente prüft die Rentenversicherung stets, ob die Erwerbsfähigkeit durch medizinische oder berufliche Rehabilitation wiederhergestellt werden kann (",
          /* @__PURE__ */ jsx("strong", { children: "„Reha vor Rente“ nach § 9 SGB VI" }),
          ")."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-slate-900 text-white rounded-xl my-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-amber-400 text-base mt-0 mb-2", children: "Die Zurechnungszeit (§ 59 SGB VI)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-300 leading-relaxed", children: "Da Erwerbsminderung meist in jüngeren Jahren eintritt, schützt die Zurechnungszeit vor Armut: Das Rentenkonto wird so bewertet, als hätte der Betroffene bis zum regulären Renteneintrittsalter mit seinem bisherigen Durchschnittseinkommen weitergearbeitet." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          "Häufige Fragen zur Erwerbsminderungsrente (FAQ)"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: faq.answer })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, { sources: primarySources })
  ] });
}

function Rentenpunkte() {
  const faqs = [
    {
      question: "Wie viel Bruttoeinkommen brauche ich für 1 Rentenpunkt?",
      answer: "Um exakt 1,0 Entgeltpunkt zu erhalten, müssen Sie in einem Kalenderjahr genau das vorläufige Durchschnittsentgelt aller versicherten Arbeitnehmer erzielen."
    },
    {
      question: "Wie viel Euro ist 1 Rentenpunkt monatlich wert?",
      answer: `Der monatliche Wert eines Entgeltpunkts entspricht dem aktuellen Rentenwert von derzeit ${CURRENT_VALUES.rentenwertFormatted} (gemäß § 68 SGB VI).`
    },
    {
      question: "Wie viele Rentenpunkte bekommt man für die Kindererziehung?",
      answer: "Für Kindererziehungszeiten (Mütterrente) wird pro Kind für bis zu 36 Kalendermonate jeweils ca. 1,0 Entgeltpunkt pro Jahr (insgesamt bis zu 3,0 EP) im Rentenkonto gutgeschrieben."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Entgeltpunkte (Rentenpunkte)", item: "/rentenpunkte" }
  ];
  const primarySources = [
    { title: "§ 63 SGB VI - Grundsätze der Rentenberechnung", url: "https://www.gesetze-im-internet.de/sgb_6/__63.html" },
    { title: "§ 68 SGB VI - Aktueller Rentenwert", url: "https://www.gesetze-im-internet.de/sgb_6/__68.html" },
    { title: "DRV Ratgeber Entgeltpunkte", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Rentenberechnung/rentenberechnung.html" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Entgeltpunkte (Rentenpunkte): Berechnung, Wert & Beispiele" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base sm:text-lg leading-relaxed", children: "Fachlicher Ratgeber zu Entgeltpunkten nach § 63 SGB VI: Funktionsweise der Währung der Rentenversicherung, Berechnungsformel auf Basis des Durchschnittseinkommens, Höchstgrenzen und Gutschriften für Kinder und Pflege." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 border border-slate-200 rounded-2xl", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calculator, { className: "w-5 h-5 text-blue-700 shrink-0" }),
          "Was sind Entgeltpunkte?"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-700 leading-relaxed mb-0", children: [
          "Entgeltpunkte (umgangssprachlich ",
          /* @__PURE__ */ jsx("em", { children: "Rentenpunkte" }),
          ") bilden gemäß ",
          /* @__PURE__ */ jsx("strong", { children: "§ 63 SGB VI" }),
          " die zentrale Berechnungseinheit der gesetzlichen Rentenversicherung. Sie drücken das Verhältnis des individuellen Jahreseinkommens eines Arbeitnehmers zum Durchschnittseinkommen aller Versicherten im selben Kalenderjahr aus."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "1. Die Berechnungsformel der Entgeltpunkte" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Die Ermittlung der jährlichen Entgeltpunkte erfolgt nach einer einfachen mathematischen Formel:" }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-slate-900 text-white rounded-xl my-4 space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-amber-400 font-bold text-sm sm:text-base", children: "Entgeltpunkte (EP) = Individueller Bruttojahresarbeitsverdienst / Vorläufiges Durchschnittsentgelt" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-300", children: [
            "Verdient ein Arbeitnehmer in einem Jahr exakt so viel wie der Durchschnitt aller Versicherten, erhält er genau ",
            /* @__PURE__ */ jsx("strong", { children: "1,0000 Entgeltpunkt" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "2. Monatsmonetarisierung: Was ist 1 Rentenpunkt wert?" }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-700", children: [
          "Der Monatsrentenwert eines Entgeltpunkts ist im ",
          /* @__PURE__ */ jsx("strong", { children: "Aktuellen Rentenwert (§ 68 SGB VI)" }),
          " geregelt. Jeder gesammelte Entgeltpunkt bringt zum Renteneintritt monatlich genau diesen Euro-Betrag an Bruttorente:"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-blue-50 border border-blue-200 rounded-xl my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-blue-950", children: [
            "Aktueller Rentenwert: ",
            CURRENT_VALUES.rentenwertFormatted,
            " monatlich pro EP"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-blue-900 mt-1", children: [
            "Ein Standard-Eckrentner mit 45 Beitragsjahren und jeweils 1,0 EP kommt somit auf eine monatliche Brutto-Standardrente von ",
            /* @__PURE__ */ jsx("strong", { children: CURRENT_VALUES.standardrenteFormatted }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "3. Beitragsfreie Entgeltpunkte: Kindererziehung & Pflege" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Entgeltpunkte werden nicht nur durch eigene Beitragszahlung aus Erwerbseinkommen erworben, sondern auch durch staatlich anerkannte Sozialzeiten:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Kindererziehungszeiten (Mütterrente):" }),
            " Bis zu 36 Monate pro Kind. Pro Jahr wird ca. 1,0 EP im Versicherungskonto gutgeschrieben (insgesamt bis zu 3,0 EP pro Kind)."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Häusliche Pflege von Angehörigen:" }),
            " Wer Angehörige ab Pflegegrad 2 ehrenamtlich pflegt, erhält je nach Pflegegrad und Aufwand Entgeltpunkte direkt von der Pflegekasse eingezahlt."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          "Häufige Fragen zu Entgeltpunkten (FAQ)"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: faq.answer })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, { sources: primarySources })
  ] });
}

function Rentenbescheid() {
  const faqs = [
    {
      question: "Wie lange habe ich Zeit, um Einspruch gegen einen Rentenbescheid einzulegen?",
      answer: "Die gesetzliche Widerspruchsfrist nach § 84 SGG beträgt exakt einen Monat nach Zustellung des Rentenbescheids."
    },
    {
      question: "Kann ein Rentenbescheid nach Ablauf der Monatsfrist noch korrigiert werden?",
      answer: "Ja. Über einen Überprüfungsantrag nach § 44 SGB X kann ein fehlerhafter Bescheid auch nachträglich für bis zu 4 Jahre rückwirkend korrigiert werden."
    },
    {
      question: "Wo finde ich die detaillierte Aufstellung meiner Beitragszeiten im Bescheid?",
      answer: "Die detaillierte chronologische Aufschlüsselung aller gemeldeten Beitrags- und Anrechnungszeiten befindet sich in der Anlage 'Versicherungsverlauf' Ihres Rentenbescheids."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenbescheid", item: "/rentenbescheid" }
  ];
  const primarySources = [
    { title: "§ 115 SGB VI - Rentenbescheid & Auszahlung", url: "https://www.gesetze-im-internet.de/sgb_6/__115.html" },
    { title: "§ 84 SGG - Widerspruchsfrist", url: "https://www.gesetze-im-internet.de/sgg/__84.html" },
    { title: "§ 44 SGB X - Rückwirkender Überprüfungsantrag", url: "https://www.gesetze-im-internet.de/sgb_10/__44.html" },
    { title: "DRV Ratgeber Rentenbescheid verstehen", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Rentenbescheid/rentenbescheid_node.html" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Rentenbescheid prüfen: Aufbau, Widerspruch & Prüfpunkte" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base sm:text-lg leading-relaxed", children: "Systematische Anleitung zur Überprüfung des Rentenbescheids nach SGB VI: Aufbau des Bescheids, typische Lücken im Versicherungsverlauf, Widerspruchsfristen (§ 84 SGG) und Überprüfungsanträge (§ 44 SGB X)." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 border border-slate-200 rounded-2xl", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-blue-700 shrink-0" }),
          "Was ist der Rentenbescheid?"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-700 leading-relaxed mb-0", children: [
          "Der Rentenbescheid ist ein offizieller Verwaltungsakt der Deutschen Rentenversicherung nach ",
          /* @__PURE__ */ jsx("strong", { children: "§ 115 SGB VI" }),
          ". Er regelt verbindlich die Bewilligung einer Rente, das Renteneintrittsdatum, die Brutto- und Netto-Rentenhöhe sowie den zugrunde liegenden Versicherungsverlauf."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "1. Der Aufbau des Rentenbescheids im Überblick" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Ein vollständiger Rentenbescheid gliedert sich in folgende Kernabschnitte:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 text-sm mb-1", children: "1. Tenor / Hauptteil" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Enthält die Rentenart, das Rentenbeginndatum und den monatlichen Auszahlungsbetrag." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 text-sm mb-1", children: "2. Rentenberechnung" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Berechnung nach der Rentenformel: Entgeltpunkte × Zugangsfaktor × Aktueller Rentenwert." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 text-sm mb-1", children: "3. Anlage Versicherungsverlauf" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Chronologische Aufstellung aller vom Arbeitgeber oder Träger gemeldeten Beitrags- und Anrechnungszeiten." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white border border-slate-200 rounded-xl shadow-sm", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 text-sm mb-1", children: "4. Rechtsbehelfsbelehrung" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Information über die Möglichkeit und die gesetzliche Frist zur Einlegung eines Widerspruchs." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "2. Die 4 häufigsten Fehlerstellen im Rentenbescheid" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700 text-sm sm:text-base", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Fehlende Ausbildungszeiten:" }),
            " Zeiten der Schul-, Fachschul- oder Hochschulausbildung fehlen oder sind nicht als Anrechnungszeiten anerkannt (§ 58 SGB VI)."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Unvollständige Kindererziehungszeiten:" }),
            " Mütter oder Väter haben nicht für alle Kinder die vollen Kindererziehungs- oder Berücksichtigungszeiten im Konto."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Nicht erfasste Pflegezeiten:" }),
            " Zeiten der häuslichen Pflege von Angehörigen wurden von der Pflegekasse nicht korrekt an die Rentenversicherung gemeldet."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Falsche Jahresarbeitsverdienste:" }),
            " Verdienstdaten vergangener Arbeitgeber wurden fehlerhaft oder unvollständig übermittelt."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "3. Widerspruch (§ 84 SGG) & Überprüfungsantrag (§ 44 SGB X)" }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-amber-50 border border-amber-200 rounded-xl space-y-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-amber-950 text-base mt-0", children: "Gesetzliche Fristen und Rechtsmittel" }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-amber-900 leading-relaxed", children: [
            "Gegen einen fehlerhaften Rentenbescheid kann innerhalb von ",
            /* @__PURE__ */ jsx("strong", { children: "einem Monat nach Bekanntgabe" }),
            " schriftlich Widerspruch bei der DRV eingelegt werden (§ 84 SGG)."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs sm:text-sm text-amber-900 leading-relaxed font-semibold", children: [
            "Wichtig: Ist die Monatsfrist bereits verstrichen, kann gemäß ",
            /* @__PURE__ */ jsx("strong", { children: "§ 44 SGB X ein Überprüfungsantrag" }),
            " gestellt werden. Fehlerhafte Nachzahlungen können dadurch rückwirkend für bis zu 4 Kalenderjahre eingefordert werden."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          "Häufige Fragen zum Rentenbescheid (FAQ)"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: faq.answer })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, { sources: primarySources })
  ] });
}

function Rentensteuer() {
  const faqs = [
    {
      question: "Wie wird der persönliche Rentenfreibetrag berechnet?",
      answer: "Im Jahr nach dem Renteneintritt wird der steuerfreie Teil der Rente einmalig als fester Euro-Betrag ermittelt. Dieser Euro-Betrag bleibt für die gesamte Restlaufzeit der Rente unverändert."
    },
    {
      question: "Werden künftige Rentenerhöhungen voll versteuert?",
      answer: "Ja. Alle künftigen Rentenanpassungen (Rentenerhöhungen) fließen zu 100 % in das zu versteuernde Einkommen ein, da der Rentenfreibetrag als fester Euro-Betrag fixiert bleibt."
    },
    {
      question: "Wann muss ich als Rentner eine Steuererklärung abgeben?",
      answer: "Eine Steuererklärung ist einzureichen, wenn das zu versteuernde Gesamteinkommen (abzüglich Kranken-/Pflegeversicherungsbeiträge und Sonderausgaben) den steuerlichen Grundfreibetrag des jeweiligen Jahres übersteigt."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Besteuerung von Renten", item: "/rentensteuer" }
  ];
  const primarySources = [
    { title: "§ 22 EStG - Besteuerung von Leibrenten", url: "https://www.gesetze-im-internet.de/estg/__22.html" },
    { title: "BMF BMF-Schreiben zur Rentenbesteuerung", url: "https://www.bundesfinanzministerium.de" },
    { title: "DRV Ratgeber Steuern & Rente", url: "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/In-der-Rente/Steuern-und-Rente/steuern-und-rente.html" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Besteuerung von Renten: Rentenfreibetrag & Grundfreibetrag" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base sm:text-lg leading-relaxed", children: "Fachlicher Ratgeber zur nachgelagerten Besteuerung von Altersrenten nach § 22 EStG: Stufenweiser Anstieg des steuerpflichtigen Rentenanteils, Fixierung des Rentenfreibetrags und Grundfreibetrag." })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 border border-slate-200 rounded-2xl", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold text-slate-900 mt-0 mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-blue-700 shrink-0" }),
          "Das Prinzip der nachgelagerten Besteuerung"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-700 leading-relaxed mb-0", children: "Seit dem Alterseinkünftegesetz 2005 werden Gesetzliche Renten in Deutschland **nachgelagert versteuert** (§ 22 Nr. 1 Satz 3 EStG). Das bedeutet: Vorsorgebeiträge während des Erwerbslebens können schrittweise als Sonderausgaben von der Steuer abgesetzt werden, während die späteren Rentenauszahlungen im Alter der Einkommensteuer unterliegen." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "1. Der Besteuerungsanteil nach Renteneintrittsjahr" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Der Prozentsatz der Rente, der versteuert werden muss, hängt exakt vom Jahr des individuellen Renteneintritts ab. Nach den Regelungen zur Abmilderung der Vollbesteuerung steigt der Besteuerungsanteil schrittweise an:" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-4", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-xs sm:text-sm border-collapse border border-slate-200", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100 text-slate-800 font-bold", children: [
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-slate-200 text-left", children: "Renteneintrittsjahr" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-slate-200 text-left", children: "Steuerpflichtiger Anteil" }),
            /* @__PURE__ */ jsx("th", { className: "p-3 border border-slate-200 text-left", children: "Steuerfreier Anteil (Rentenfreibetrag)" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "Bis 2005" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "50 %" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-emerald-700 font-bold", children: "50 %" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "2020" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "80 %" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "20 %" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "2024" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "83 %" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "17 %" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-semibold text-slate-900", children: "2026" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 font-bold text-blue-900", children: "ca. 84 %" }),
              /* @__PURE__ */ jsx("td", { className: "p-3 border border-slate-200 text-slate-700", children: "ca. 16 %" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "2. Fixierung des Rentenfreibetrags als Euro-Betrag" }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-amber-50 border border-amber-200 rounded-xl my-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-amber-950 text-base mt-0 mb-1", children: "Dauerhafter Festbetrag" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-900 leading-relaxed mb-0", children: "Der ermittelte steuerfreie Prozentanteil wird im zweiten Jahr des Rentenbezugs als **fester Euro-Betrag** für die gesamte Dauer des Rentenbezugs eingefroren. Alle künftigen gesetzlichen Rentenerhöhungen sind folglich zu 100 % steuerpflichtig." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "3. Grundfreibetrag & Pflicht zur Steuererklärung" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Rentner müssen nur dann Einkommensteuer zahlen, wenn ihr zu versteuerndes Gesamteinkommen (Bruttorente abzüglich Rentenfreibetrag, Kranken-/Pflegeversicherungsbeiträge und Werbungskosten) den gesetzlichen **Grundfreibetrag** übersteigt." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-blue-700 shrink-0" }),
          "Häufige Fragen zur Rentenbesteuerung (FAQ)"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-slate-900 mb-2", children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-slate-600 leading-relaxed", children: faq.answer })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, { sources: primarySources })
  ] });
}

function Altersvorsorge() {
  const faqs = [
    {
      question: "Welche Altersvorsorge passt zu mir?",
      answer: "Das hängt von deinem Alter, Einkommen, Förderansprüchen und Risikoprofil ab. Eine Kombination aus Gesetzlicher Rente, ETF-Sparplan und ggf. bAV / Riester bietet optimale Diversifikation."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Altersvorsorge Übersicht", item: "/altersvorsorge" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Altersvorsorge im Vergleich: Die 3 Säulen erklärt" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Gesamtschau aller Vorsorgeoptionen in Deutschland – von staatlich geförderten Verträgen bis zu eigenverantwortlichen Anlageformen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-slate-900 mb-2", children: "Private Rentenversicherung" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 mb-4", children: "Garantierte lebenslange Rente und Steuervorteile im Alter." }),
        /* @__PURE__ */ jsx(Link, { to: "/private-rente", className: "text-xs font-bold text-blue-900 hover:underline", children: "Zum Vergleich →" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-slate-900 mb-2", children: "Riester-Rente" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 mb-4", children: "Staatliche Zulagen für Familien und Geringverdiener." }),
        /* @__PURE__ */ jsx(Link, { to: "/riester-rente", className: "text-xs font-bold text-blue-900 hover:underline", children: "Zulagen prüfen →" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-slate-900 mb-2", children: "Betriebliche Altersvorsorge (bAV)" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 mb-4", children: "15 % gesetzlicher Arbeitgeberzuschuss bei Entgeltumwandlung." }),
        /* @__PURE__ */ jsx(Link, { to: "/betriebliche-altersvorsorge", className: "text-xs font-bold text-blue-900 hover:underline", children: "Details lesen →" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-slate-900 mb-2", children: "ETF-Sparplan für Rente" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 mb-4", children: "Maximale Flexibilität & geringste Kosten für langfristigen Vermögensaufbau." }),
        /* @__PURE__ */ jsx(Link, { to: "/etf-rente", className: "text-xs font-bold text-blue-900 hover:underline", children: "ETF-Strategie ansehen →" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function RentenrechnerPage() {
  const faqs = [
    {
      question: "Sind die Rechner auf rentesicher.de kostenlos?",
      answer: "Ja, alle 3 interaktiven Rechner stehen vollständig kostenlos, ohne Registrierung und ohne Weitergabe persönlicher Daten zur freien Nutzung bereit."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Interaktive Rentenrechner", item: "/rentenrechner" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center sm:text-left", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx(LastUpdated, {}) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Interaktive Rentenrechner: Rentenlücke, Rente & Eintritt" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Kostenlose Modellrechnungen für deine persönliche Vorsorgeplanung. Springe direkt zum gewünschten Rechner:" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#rechner-luecke",
          className: "p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md flex items-center justify-between font-bold text-xs text-slate-800 hover:text-amber-700 transition-all active:scale-95",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-amber-600 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: "1. Rentenlücke" })
            ] }),
            /* @__PURE__ */ jsx(ArrowDown, { className: "w-4 h-4 text-slate-400" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#rechner-berechnung",
          className: "p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md flex items-center justify-between font-bold text-xs text-slate-800 hover:text-blue-900 transition-all active:scale-95",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Calculator, { className: "w-4 h-4 text-blue-700 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: "2. Gesetzliche Rente" })
            ] }),
            /* @__PURE__ */ jsx(ArrowDown, { className: "w-4 h-4 text-slate-400" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#rechner-eintritt",
          className: "p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md flex items-center justify-between font-bold text-xs text-slate-800 hover:text-emerald-700 transition-all active:scale-95",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-emerald-600 shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: "3. Rentenalter" })
            ] }),
            /* @__PURE__ */ jsx(ArrowDown, { className: "w-4 h-4 text-slate-400" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(RentenLueckeCalculator, {}) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(RentenBerechnungCalculator, {}) }),
      /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx(RentenEintrittsCalculator, {}) })
    ] }),
    /* @__PURE__ */ jsx(AffiliateWidget, { type: "rente", title: "Ergebnis nutzen & passende Altersvorsorge-Tarife vergleichen" }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Impressum() {
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Impressum", item: "/impressum" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { breadcrumbs }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-extrabold text-slate-900 tracking-tight mb-6", children: "Impressum" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Jens Kathe",
          /* @__PURE__ */ jsx("br", {}),
          "Hansastraße 6",
          /* @__PURE__ */ jsx("br", {}),
          "34119 Kassel",
          /* @__PURE__ */ jsx("br", {}),
          "Deutschland"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "Kontakt" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "E-Mail: ",
          /* @__PURE__ */ jsx("a", { href: "mailto:jens@kathe.org", className: "text-blue-700 font-semibold underline", children: "jens@kathe.org" }),
          /* @__PURE__ */ jsx("br", {}),
          "Telefon: ",
          /* @__PURE__ */ jsx("a", { href: "tel:+491786652623", className: "text-blue-700 font-semibold underline", children: "+49 178 6652623" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "Umsatzsteuer-ID" }),
        /* @__PURE__ */ jsx("p", { children: "Kleinunternehmer gemäß § 19 UStG. Es wird keine Umsatzsteuer berechnet." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Jens Kathe",
          /* @__PURE__ */ jsx("br", {}),
          "Hansastraße 6",
          /* @__PURE__ */ jsx("br", {}),
          "34119 Kassel"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "Verbraucherstreitbeilegung / Universalschlichtungsstelle" }),
        /* @__PURE__ */ jsx("p", { children: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "Affiliate- & Werbehinweis" }),
        /* @__PURE__ */ jsx("p", { children: "rentesicher.de ist ein unabhängiges Informationsportal. Wir stehen in keinem gesellschaftsrechtlichen Verhältnis zu den verglichenen Anbietern oder Versicherern. Links und Formulare, die mit einem Sternchen (*) oder als Werbung gekennzeichnet sind, stellen Werbe- oder Partnerlinks dar. Bei Abschluss eines Vertrags über diese Links erhalten wir ggf. eine Provision. Für dich entstehen dadurch keine Mehrkosten." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Datenschutz() {
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Datenschutzerklärung", item: "/datenschutz" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { breadcrumbs }),
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-extrabold text-slate-900 tracking-tight mb-6", children: "Datenschutzerklärung (DSGVO)" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-sm", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "1. Datenschutz auf einen Blick" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO): Vollständige Kontaktdaten siehe ",
          /* @__PURE__ */ jsx(Link, { to: "/impressum", className: "text-blue-700 font-semibold underline", children: "Impressum" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "2. Vercel Web Analytics (Cookielose Webanalyse)" }),
        /* @__PURE__ */ jsx("p", { children: "Diese Website nutzt Vercel Web Analytics, einen Analysedienst der Vercel Inc. Der Dienst arbeitet vollständig cookielos und ohne Speicherung von IP-Adressen oder personenbezogenen Daten. Die statistische Auswertung erfolgt anonymisiert auf Servern in der EU." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "3. Google AdSense & Cookies" }),
        /* @__PURE__ */ jsx("p", { children: "Diese Website verwendet Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Ireland Limited („Google“). AdSense verwendet Cookies und Web Beacons, um die Ausspielung relevanter Anzeigen zu ermöglichen. Weitere Informationen zur Datenverarbeitung durch Google findest du in den Datenschutzhinweisen von Google." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "4. Affiliate-Formulare & iFrames (partner-versicherung.de)" }),
        /* @__PURE__ */ jsx("p", { children: "Auf einzelnen Seiten sind Formular-Widgets der partner-versicherung.de integriert. Beim Interagieren mit diesen Widgets werden Daten direkt an die Server des Anbieters übermittelt, um Vergleichsangebote zu berechnen." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-slate-900 text-base mb-2", children: "5. Betroffenenrechte nach DSGVO" }),
        /* @__PURE__ */ jsx("p", { children: "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit deiner gespeicherten Daten. Wende dich hierzu an die im Impressum angegebenen Kontaktdaten." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function ScrollToContent() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans max-w-full overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(ScrollToContent, {}),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow max-w-full overflow-x-hidden", children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/rentenkommission", element: /* @__PURE__ */ jsx(Rentenkommission, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/rentenluecke", element: /* @__PURE__ */ jsx(Rentenluecke, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/private-rente", element: /* @__PURE__ */ jsx(PrivateRente, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/riester-rente", element: /* @__PURE__ */ jsx(RiesterRente, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/betriebliche-altersvorsorge", element: /* @__PURE__ */ jsx(BetrieblicheAltersvorsorge, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/etf-rente", element: /* @__PURE__ */ jsx(EtfRente, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/rentenalter", element: /* @__PURE__ */ jsx(Rentenalter, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/rentenberechnung", element: /* @__PURE__ */ jsx(Rentenberechnung, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/rentenanpassung", element: /* @__PURE__ */ jsx(Rentenanpassung, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/rente-mit-63", element: /* @__PURE__ */ jsx(RenteMit63, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/grundrente", element: /* @__PURE__ */ jsx(Grundrente, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/witwenrente", element: /* @__PURE__ */ jsx(Witwenrente, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/erwerbsminderungsrente", element: /* @__PURE__ */ jsx(Erwerbsminderungsrente, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/rentenpunkte", element: /* @__PURE__ */ jsx(Rentenpunkte, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/rentenbescheid", element: /* @__PURE__ */ jsx(Rentenbescheid, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/rentensteuer", element: /* @__PURE__ */ jsx(Rentensteuer, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/altersvorsorge", element: /* @__PURE__ */ jsx(Altersvorsorge, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/rentenrechner", element: /* @__PURE__ */ jsx(RentenrechnerPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/impressum", element: /* @__PURE__ */ jsx(Impressum, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/datenschutz", element: /* @__PURE__ */ jsx(Datenschutz, {}) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(VercelAnalytics, {})
  ] });
}

function render(url) {
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(MemoryRouter, { initialEntries: [url], children: /* @__PURE__ */ jsx(App, {}) }) })
  );
}

export { render };
