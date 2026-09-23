import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useLocation, Link, Routes, Route, MemoryRouter } from 'react-router-dom';
import { Calculator, ChevronDown, X, Menu, ChevronUp, Check, Share2, AlertTriangle, TrendingUp, Info, ShieldCheck, BookOpen, ExternalLink, ArrowRight, HelpCircle, ShieldAlert, AlertCircle, CheckCircle2, XCircle, Calendar, Clock } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return /* @__PURE__ */ jsxs("header", { className: "bg-slate-900 text-white sticky top-0 z-50 shadow-md border-b border-slate-800", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-amber-600 text-slate-950 text-xs py-1 px-4 font-bold text-center", children: /* @__PURE__ */ jsx("span", { children: "* Rentenwert 2026: 42,52 € / EP • Rentenanpassung: +4,24 % • Unabhängiges Fachportal" }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-inner group-hover:bg-amber-400 transition-colors", children: "€" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("span", { className: "text-xl font-extrabold tracking-tight text-white block leading-none", children: [
            "rentesicher",
            /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: ".de" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium tracking-wide", children: "Fachportal Altersvorsorge 2026" })
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
            children: "Rentenkommission 2026"
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
                /* @__PURE__ */ jsx(Link, { to: "/riester-rente", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Riester-Rente 2026" }),
                /* @__PURE__ */ jsx(Link, { to: "/betriebliche-altersvorsorge", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Betriebliche Altersvorsorge (bAV)" }),
                /* @__PURE__ */ jsx(Link, { to: "/etf-rente", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "ETF-Sparplan für Rente" }),
                /* @__PURE__ */ jsx(Link, { to: "/altersvorsorge", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Altersvorsorge Übersicht" }),
                /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-slate-400 font-bold px-2 mt-2 mb-1 border-t border-slate-100 pt-2", children: "Gesetzliche Rente & Themen" }),
                /* @__PURE__ */ jsx(Link, { to: "/rentenberechnung", onClick: () => setDropdownOpen(false), className: "px-2 py-1 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Gesetzliche Rentenberechnung" }),
                /* @__PURE__ */ jsx(Link, { to: "/rentenalter", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Rentenalter & Eintrittszeitpunkt" }),
                /* @__PURE__ */ jsx(Link, { to: "/rentenanpassung", onClick: () => setDropdownOpen(false), className: "px-2 py-1.5 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-800 block", children: "Rentenanpassung 2026 (+4,24%)" }),
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
      /* @__PURE__ */ jsx(Link, { to: "/rentenkommission", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800", children: "Rentenkommission 2026" }),
      /* @__PURE__ */ jsxs(Link, { to: "/rentenrechner", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Calculator, { className: "w-4 h-4" }),
        " Rechner-Hub (Alle 3 Rechner)"
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenluecke", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800", children: "Rentenlücken-Rechner" }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenberechnung", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800", children: "Gesetzlicher Rentenrechner" }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenalter", onClick: () => setMobileMenuOpen(false), className: "px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800", children: "Renteneintritts-Rechner" }),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-amber-400 font-bold pt-3 pb-1", children: "Vorsorge & Vergleiche" }),
      /* @__PURE__ */ jsx(Link, { to: "/private-rente", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Private Rentenversicherung" }),
      /* @__PURE__ */ jsx(Link, { to: "/riester-rente", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Riester-Rente 2026" }),
      /* @__PURE__ */ jsx(Link, { to: "/betriebliche-altersvorsorge", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Betriebliche Altersvorsorge (bAV)" }),
      /* @__PURE__ */ jsx(Link, { to: "/etf-rente", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "ETF-Sparplan für Rente" }),
      /* @__PURE__ */ jsx(Link, { to: "/altersvorsorge", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Altersvorsorge Übersicht" }),
      /* @__PURE__ */ jsx("div", { className: "text-[11px] uppercase tracking-wider text-amber-400 font-bold pt-3 pb-1", children: "Rentenwissen & Begriffe" }),
      /* @__PURE__ */ jsx(Link, { to: "/rentenanpassung", onClick: () => setMobileMenuOpen(false), className: "px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 rounded-lg", children: "Rentenanpassung 2026" }),
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
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/riester-rente", className: "hover:text-amber-400 transition-colors", children: "Riester-Rente 2026" }) }),
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
  return /* @__PURE__ */ jsxs("div", { className: "my-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calculator, { className: "w-6 h-6 text-amber-600" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900", children: "Interaktiver Rentenlücken-Rechner 2026" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 mt-1", children: "Modellrechnung zur Orientierung bezüglich deiner monatlichen Versorgungslücke." })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleShare,
          className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors",
          children: [
            copied ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-600" }) : /* @__PURE__ */ jsx(Share2, { className: "w-3.5 h-3.5" }),
            copied ? "Link kopiert!" : "Berechnung teilen"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2", children: "Aktuelles Nettoeinkommen (€)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: gehalt,
            onChange: (e) => setGehalt(Number(e.target.value)),
            className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 font-semibold"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Monatliches Auszahlungsgehalt heute" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2", children: "Erwartete Gesetzliche Rente (€)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: gesetzlicheRente,
            onChange: (e) => setGesetzlicheRente(Number(e.target.value)),
            className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 font-semibold"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Laut offizieller DRV-Renteninformation" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2", children: "Wunsch-Einkommen im Alter (€)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: wunschEinkommen,
            onChange: (e) => setWunschEinkommen(Number(e.target.value)),
            className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 font-semibold"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Richtwert: ca. 80% des heutigen Netto" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-slate-900 text-white rounded-xl mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-amber-500/20 text-amber-400 rounded-lg shrink-0", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold", children: "Monatliche Rentenlücke" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-amber-400 mt-1", children: [
            rentenluecke.toLocaleString("de-DE"),
            " € ",
            /* @__PURE__ */ jsx("span", { className: "text-xs font-normal text-slate-300", children: "/ Monat" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Differenz zwischen Wunscheinkommen und gesetzlicher Rente." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-500/20 text-blue-400 rounded-lg shrink-0", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold", children: "Geschätzter Kapitalbedarf (25 Jahre)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-white mt-1", children: [
            kapitalBedarf.toLocaleString("de-DE"),
            " €"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Gesamtsumme der Lücken über 25 Rentenjahre." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200/60", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-4 h-4 text-slate-400 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("strong", { children: "* Hinweis zur Berechnung:" }),
        " Vereinfachte Modellrechnung ohne Inflation, Rendite, Steuern, künftige Rentenanpassungen und bereits vorhandenes Vorsorgevermögen."
      ] })
    ] })
  ] });
}

function AffiliateWidget({ type, title }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const scriptId = `script-pv-${type}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = type === "rente" ? "https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-rente/rente-iframe.js" : "https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-riester/riester-iframe.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [type]);
  const elementId = type === "rente" ? "tcpp-iframe-rente" : "tcpp-iframe-riester";
  return /* @__PURE__ */ jsxs("div", { className: "my-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-blue-700" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900", children: title || (type === "rente" ? "Unverbindlicher Rentenversicherung-Vergleich" : "Riester-Vorsorge Anfordern") })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full", children: "Partner-Vergleich" })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { width: "100%" }, id: elementId, className: "min-h-[420px] rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 text-sm", children: /* @__PURE__ */ jsx("span", { children: "Lade Vergleichsformular..." }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-start gap-1.5 leading-relaxed", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-4 h-4 text-slate-400 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("span", { children: [
        /* @__PURE__ */ jsx("strong", { children: "* Werbung / Affiliate-Partnerschaft:" }),
        " Wenn du über dieses Vergleichs- oder Anfrageformular einen Vertrag abschließt, können wir eine Vergütung erhalten. Für dich entstehen dadurch keine zusätzlichen Kosten."
      ] })
    ] })
  ] });
}

function AdSense({ slot = "1234567890", format = "auto", responsive = true }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
      }
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "my-8 text-center bg-slate-100/50 p-3 rounded-xl border border-slate-200/60 overflow-hidden min-h-[90px] flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-1", children: "Anzeige / Werbeplatzierung" }),
    /* @__PURE__ */ jsx(
      "ins",
      {
        className: "adsbygoogle",
        style: { display: "block", width: "100%" },
        "data-ad-client": "ca-pub-7078147966379221",
        "data-ad-slot": slot,
        "data-ad-format": format,
        "data-full-width-responsive": responsive ? "true" : "false"
      }
    )
  ] });
}

function SourceFootnote() {
  return /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500 bg-slate-100/70 p-5 rounded-xl space-y-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-3 font-semibold text-slate-700", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-slate-600 shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: "Offizielle Primärquellen & Gesetzesgrundlagen (Stand: September 2026)" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 font-normal", children: "Fachredaktion rentesicher.de" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.deutsche-rentenversicherung.de",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "p-2 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-slate-700 hover:text-blue-900",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Deutsche Rentenversicherung Bund" }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3 text-slate-400" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.bmas.de",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "p-2 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-slate-700 hover:text-blue-900",
          children: [
            /* @__PURE__ */ jsx("span", { children: "BMAS (Bundesministerium für Arbeit)" }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3 text-slate-400" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.gesetze-im-internet.de",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "p-2 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between text-slate-700 hover:text-blue-900",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Bundesgesetzblatt / SGB VI & BetrAVG" }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3 text-slate-400" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-slate-500 pt-1 leading-relaxed", children: [
      /* @__PURE__ */ jsx("strong", { children: "Unabhängigkeits- & Haftungshinweis:" }),
      " Diese Website ersetzt keine individuelle Renten-, Steuer-, Rechts- oder Finanzberatung. Für persönliche Empfehlungen wenden Sie sich an die Deutsche Rentenversicherung, einen nach § 10 RDG zugelassenen Rentenberater oder einen Steuerberater."
    ] })
  ] });
}

function StatusBadge({ type, dateStr }) {
  if (type === "empfehlung") {
    return /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-950 border border-amber-300", children: "Empfehlung (nicht in Kraft)" });
  }
  if (type === "gilt_ab") {
    return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-950 border border-emerald-300", children: [
      "Gilt ab ",
      dateStr || "2026"
    ] });
  }
  return /* @__PURE__ */ jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-950 border border-blue-300", children: "Geltendes Recht" });
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

function Home() {
  const faqs = [
    {
      question: "Welche gesetzlichen Regelungen sichern die Rentenauszahlung 2026?",
      answer: "Die Auszahlung der gesetzlichen Rente beruht auf dem umlagefinanzierten System der gesetzlichen Rentenversicherung. Der Schutz vor nominalen Rentenkürzungen ist gesetzlich im Schutzklausel-Mechanismus (§ 68 Abs. 4 SGB VI) geregelt."
    },
    {
      question: "Was bedeuten die Empfehlungen der Rentenkommission?",
      answer: "Die Kommission 'Verlässlicher Generationenvertrag' hat wissenschaftliche Empfehlungen zur Stabilisierung des Rentenniveaus bei 48 % erarbeitet. Diese Empfehlungen sind Handlungsvorschläge und entfalten erst dann rechtliche Wirkung, wenn sie vom Gesetzgeber beschlossen werden."
    },
    {
      question: "Wie hoch ist der bundeseinheitliche Rentenwert 2026?",
      answer: "Der aktuelle Rentenwert liegt seit dem 1. Juli 2026 bundeseinheitlich bei 42,52 € je Entgeltpunkt. Ein Modell-Eckrentner mit 45 Entgeltpunkten erzielt damit eine Brutto-Standardrente von 1.913,40 € pro Monat."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("section", { className: "mb-12 text-center sm:text-left", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4", children: /* @__PURE__ */ jsx("span", { children: "§ Stand September 2026 • BMAS & DRV Daten" }) }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4", children: [
        "Rentensicherheit & Alterssicherung 2026 ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-blue-900", children: "Gesetzliche Daten, Formeln & Orientierung" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 max-w-3xl leading-relaxed", children: "Unabhängiges Fachportal zur gesetzlichen Rentenentwicklung, den Empfehlungen der Rentenkommission und Berechnungsmöglichkeiten für die private und betriebliche Vorsorge." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-900 text-white rounded-2xl shadow-lg mb-10 border-l-4 border-amber-500", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "Fakten-Check & Gesetzliche Rahmenbedingungen 2026" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed text-slate-100", children: [
        /* @__PURE__ */ jsx("strong", { children: "Die gesetzliche Schutzklausel verhindert nominale Rentenkürzungen (§ 68 Abs. 4 SGB VI)." }),
        " Der aktuelle Rentenwert beträgt 2026 bundeseinheitlich ",
        /* @__PURE__ */ jsx("strong", { children: "42,52 €" }),
        " je Entgeltpunkt (Standardrente: 1.913,40 € brutto nach 45 Beitragsjahren). Zusätzliche betriebliche oder private Vorsorge kann dazu dienen, eine individuelle Versorgungslücke im Vergleich zum früheren Erwerbseinkommen zu reduzieren."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase font-bold text-slate-400 block mb-1", children: "Rentenwert 2026" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-blue-900", children: "42,52 €" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 mt-1 block", children: "Pro Entgeltpunkt (§ 68 SGB VI)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase font-bold text-slate-400 block mb-1", children: "Rentenanpassung" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-emerald-600", children: "+4,24 %" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 mt-1 block", children: "Erhöhung ab 1. Juli 2026" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase font-bold text-slate-400 block mb-1", children: "Ziel-Rentenniveau" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-amber-600", children: "48,0 %" }),
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
    /* @__PURE__ */ jsx(AffiliateWidget, { type: "rente", title: "Unverbindlicher Rentenversicherungs-Vergleich 2026" }),
    /* @__PURE__ */ jsxs("section", { className: "my-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-2", children: "Modellrechnung: Persönliche Rentenlücke ermitteln" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm mb-6", children: "Kalkuliere eine erste Orientierung über die Differenz zwischen deinem Wunscheinkommen und deiner erwarteten Gesetzlichen Rente." }),
      /* @__PURE__ */ jsx(RentenLueckeCalculator, {})
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "my-12 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-900", children: "Rentenkommission: Die 33 Empfehlungen im Überblick" }),
        /* @__PURE__ */ jsx(StatusBadge, { type: "empfehlung" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 leading-relaxed mb-6", children: "Der Berichterstellungs-Bericht der wissenschaftlichen Kommission beinhaltet 33 Reformpunkte zur Weiterentwicklung des Generationenvertrags." }),
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
      titel: "Stabilisierung der Haltelinie beim Sicherungsniveau (48 %)",
      status: "empfehlung",
      kategorie: "Rentenniveau",
      beschreibung: "Empfehlung, das Rentenniveau vor Steuern bis mindestens 2031 (bzw. 2035) gesetzlich bei 48 % abzusichern, um eine Entkopplung der Renten von den Löhnen zu verhindern."
    },
    {
      id: 2,
      titel: "Festlegung einer Beitragssatzobergrenze (20 % bzw. 22 %)",
      status: "empfehlung",
      kategorie: "Beitragssatz",
      beschreibung: "Vorschlag, den Beitragssatz zur gesetzlichen Rentenversicherung bis 2030 nicht über 20 % und bis 2035 nicht über 22 % steigen zu lassen."
    },
    {
      id: 3,
      titel: "Einrichtung eines Kapitalstocks zur Beitragsdämpfung",
      status: "gilt_ab",
      dateStr: "2026",
      kategorie: "Kapitaldeckung",
      beschreibung: "Aufbau einer kapitalgedeckten Komponente (Generationenkapital) aus Bundesmitteln zur langfristigen Dämpfung künftiger Beitragsanstiege ab den 2030er Jahren."
    },
    {
      id: 4,
      titel: "Anpassung des Ausgleichsfaktors im Nachhaltigkeitsfaktor",
      status: "empfehlung",
      kategorie: "Rentenformel",
      beschreibung: "Wissenschaftlicher Vorschlag zur Anpassung der Dämpfungsfaktoren bei Eintritt geburtenstarker Jahrgänge in den Ruhestand."
    },
    {
      id: 5,
      titel: "Stärkung der betrieblichen Altersvorsorge (bAV) in KMU",
      status: "empfehlung",
      kategorie: "Betriebsrente",
      beschreibung: "Vereinfachung von Sozialpartner-Modellen und Ausweitung der Geringverdiener-Förderung im Betriebskrankenkassen- und Firmenumfeld."
    },
    {
      id: 6,
      titel: "Förderung von Opting-Out-Systemen im Betrieb",
      status: "empfehlung",
      kategorie: "Betriebsrente",
      beschreibung: "Empfehlung für automatische Einbezugssysteme bei der betrieblichen Altersvorsorge auf Tarifvertragsebene (mit Widerspruchsrecht)."
    },
    {
      id: 7,
      titel: "Weiterentwicklung der Erwerbsminderungsrente",
      status: "gesetz",
      kategorie: "EM-Rente",
      beschreibung: "Bereits gesetzlich umgesetzte Verlängerung der Zurechnungszeit bis zum regulären Renteneintrittsalter."
    },
    {
      id: 8,
      titel: "Verbindliche Digitale Rentenübersicht",
      status: "gesetz",
      kategorie: "Transparenz",
      beschreibung: "Bereits gesetzlich verankertes Portal zur trägerübergreifenden Abfrage aller Rentenansprüche (gesetzlich, betrieblich, privat)."
    },
    {
      id: 9,
      titel: "Überprüfung des Rechtskreises Ost/West-Angleichung",
      status: "gesetz",
      kategorie: "Rentenwert",
      beschreibung: "Gesetzlich vollzogene Vereinheitlichung des Rentenwerts in Ost und West ab dem 1. Juli 2023."
    },
    {
      id: 10,
      titel: "Regelmäßige Begutachtung des Generationenvertrags",
      status: "empfehlung",
      kategorie: "Monitoring",
      beschreibung: "Empfehlung zur Installation eines ständigen unabhängigen Sachverständigenrats für Alterssicherungssysteme."
    },
    {
      id: 11,
      titel: "Verlängerung der Gleitzone bei Erwerbsminderung",
      status: "empfehlung",
      kategorie: "EM-Rente",
      beschreibung: "Erleichterung des Wiedereinstiegs in das Erwerbsleben für Bezieher teilweiser Erwerbsminderungsrenten."
    },
    {
      id: 12,
      titel: "Evaluierung der Altersgrenzen im Handwerk",
      status: "empfehlung",
      kategorie: "Pflichtversicherung",
      beschreibung: "Vorschlag zur Überprüfung der Pflichtversicherung für selbstständige Handwerker nach 18 Jahren."
    },
    {
      id: 13,
      titel: "Einbeziehung aller nicht anderweitig abgesicherten Selbstständigen",
      status: "empfehlung",
      kategorie: "Pflichtversicherung",
      beschreibung: "Politische Zielsetzung zur Einbeziehung von Selbstständigen in die gesetzliche Rentenversicherung (mit Opt-Out bei Vorsorgenachweis)."
    },
    {
      id: 14,
      titel: "Flexibilisierung des Übergangs vom Erwerbsleben in den Ruhestand",
      status: "gesetz",
      kategorie: "Flexirente",
      beschreibung: "Bereits umgesetzte Abschaffung der Hinzuverdienstgrenzen bei vorzeitigen Altersrenten."
    },
    {
      id: 15,
      titel: "Förderung des Weiterarbeitens über die Regelaltersgrenze hinaus",
      status: "gesetz",
      kategorie: "Flexirente",
      beschreibung: "Zuschläge zur Rente (+0,5 % pro Monat) und Verzicht auf Arbeitnehmerbeiträge zur Arbeitslosenversicherung."
    },
    {
      id: 16,
      titel: "Anpassung der Mindestversicherungszeit für Reha-Leistungen",
      status: "gesetz",
      kategorie: "Rehabilitation",
      beschreibung: "Stärkung des Grundsatzes 'Reha vor Rente' durch vereinfachten Zugang zu medizinischen Leistungen der DRV."
    },
    {
      id: 17,
      titel: "Transparente Berichterstattung über Steuerzuschüsse",
      status: "empfehlung",
      kategorie: "Bundeszuschuss",
      beschreibung: "Empfehlung zur klaren Abgrenzung beitragsgedeckter Leistungen von versicherungsfremden Leistungen des Bundes."
    },
    {
      id: 18,
      titel: "Weiterentwicklung der Riester-Förderung zu einem Altersvorsorgedepot",
      status: "empfehlung",
      kategorie: "Private Vorsorge",
      beschreibung: "Vorschlag für ein kostenarmes, gefördertes Anspardepot ohne strikte Beitragsgarantiepflicht (Reformmodell ab 2027 in Beratung)."
    },
    {
      id: 19,
      titel: "Dynamisierung der Förderung für Geringverdiener",
      status: "empfehlung",
      kategorie: "Förderung",
      beschreibung: "Regelmäßige Anpassung der Einkommensgrenzen für die bAV-Geringverdienerförderung nach § 100 EStG."
    },
    {
      id: 20,
      titel: "Stärkung der Mütterrente / Kindererziehungszeiten",
      status: "gesetz",
      kategorie: "Erziehungszeiten",
      beschreibung: "Gesetzlich verankerte Anrechnung von bis zu 36 Monaten Kindererziehung pro Kind."
    },
    {
      id: 21,
      titel: "Vereinfachung der Antragsverfahren bei Erwerbsminderung",
      status: "empfehlung",
      kategorie: "Verwaltung",
      beschreibung: "Bürokratieabbau und digitale Antragstellung für EM-Rentner."
    },
    {
      id: 22,
      titel: "Plausibilisierung von Ausbildungsanrechnungszeiten",
      status: "gesetz",
      kategorie: "Anrechnungszeiten",
      beschreibung: "Regelung zur Berücksichtigung von Fachschul- und Hochschulzeiten (bis zu 8 Jahre, bewertet als Anrechnungszeit)."
    },
    {
      id: 23,
      titel: "Harmonisierung der Rentenwertbestimmungsverordnung",
      status: "gesetz",
      kategorie: "Rentenwert",
      beschreibung: "Jährliche Verordnung zur Festsetzung des aktuellen Rentenwerts auf Basis der Nominallohnentwicklung."
    },
    {
      id: 24,
      titel: "Automatisierte Ermittlung des Grundrentenzuschlags",
      status: "gesetz",
      kategorie: "Grundrente",
      beschreibung: "Gesetzlicher Datenabgleich zwischen Rentenversicherung und Finanzbehörden ohne gesonderten Antrag."
    },
    {
      id: 25,
      titel: "Sicherung der Nachhaltigkeitsreserve",
      status: "gesetz",
      kategorie: "Liquidität",
      beschreibung: "Gesetzlich vorgeschriebene Mindestreserve von 0,2 Monatsausgaben in der Rentenversicherung."
    },
    {
      id: 26,
      titel: "Erweiterung der Reha-Leistungen für pflegende Angehörige",
      status: "gesetz",
      kategorie: "Pflege",
      beschreibung: "Verbesserte Rentenpunkt-Gutschriften bei häuslicher Pflege ab Pflegegrad 2."
    },
    {
      id: 27,
      titel: "Reform der versicherungsfremden Leistungen",
      status: "empfehlung",
      kategorie: "Bundeszuschuss",
      beschreibung: "Forderung nach vollständiger Erstattung gesamtgesellschaftlicher Aufgaben durch den Bundeshaushalt."
    },
    {
      id: 28,
      titel: "Vereinfachung des Versorgungsausgleichs bei Scheidung",
      status: "gesetz",
      kategorie: "Familienrecht",
      beschreibung: "Direkte Übertragung von Entgeltpunkten auf das Rentenkonto des ausgleichsberechtigten Ehegatten."
    },
    {
      id: 29,
      titel: "Verstärkte Prävention im betrieblichen Gesundheitsmanagement",
      status: "empfehlung",
      kategorie: "Gesundheit",
      beschreibung: "Kopplung von Präventionsmaßnahmen an DRV-Reha-Angebote zur Erhaltung der Erwerbsfähigkeit."
    },
    {
      id: 30,
      titel: "Schutz von Erwerbsminderungsrentnern vor Armut",
      status: "gesetz",
      kategorie: "Sozialschutz",
      beschreibung: "Gesetzlicher Zuschlag für Bestands-EM-Rentner mit Renteneintritt zwischen 2001 und 2018."
    },
    {
      id: 31,
      titel: "Verbesserung der Renteninformationen bezüglich Inflation",
      status: "empfehlung",
      kategorie: "Transparenz",
      beschreibung: "Ausweis von kaufkraftbereinigten Hochrechnungen in der jährlichen DRV-Renteninformation."
    },
    {
      id: 32,
      titel: "Förderung ehrenamtlicher Tätigkeit im Ruhestand",
      status: "gesetz",
      kategorie: "Ehrenamt",
      beschreibung: "Anrechnungsfreie Aufwandsentschädigungen für Rentner bei ehrenamtlichem Engagement."
    },
    {
      id: 33,
      titel: "Regelmäßige Vorlegung eines Sozialberichts der Bundesregierung",
      status: "gesetz",
      kategorie: "Transparenz",
      beschreibung: "Gesetzliche Pflicht zur vierjährigen Vorlage des Berichts über die Lage der Alterssicherung."
    }
  ];
  const faqs = [
    {
      question: "Sind die Empfehlungen der Rentenkommission bereits geltendes Gesetz?",
      answer: "Nein. Bei den 33 Reformpunkten der Kommission 'Verlässlicher Generationenvertrag' handelt es sich um wissenschaftliche und politische Handlungsempfehlungen. Gesetzliche Wirkung entfalten sie erst, wenn sie vom Deutschen Bundestag beschlossen und im Bundesgesetzblatt verkündet werden."
    },
    {
      question: "Was bedeutet das Generationenkapital im Vergleich zur empfohlenen Kapitalrente?",
      answer: "Das gesetzlich beschlossene Generationenkapital ist ein staatlicher Ausgleichsfonds, der durch Bundesmittel am Kapitalmarkt angelegt wird, um ab den 2030er Jahren die Beitragszahler zu entlasten. Es verändert nicht die individuelle Beitragszahlung des Bürgers, im Gegensatz zu privaten Vorsorgeformen."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenkommission 2026", item: "/rentenkommission" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-amber-100/80 border border-amber-300 text-amber-950 rounded-2xl mb-8 flex items-start gap-3 text-xs sm:text-sm", children: [
      /* @__PURE__ */ jsx(ShieldAlert, { className: "w-5 h-5 text-amber-700 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Wichtiger Status-Hinweis:" }),
        " Die Rentenkommission 2026 hat Handlungsempfehlungen vorgelegt. Diese sind ",
        /* @__PURE__ */ jsx("u", { children: "nicht automatisch geltendes Recht" }),
        ". Einige Punkte wurden bereits im SGB VI verankert, andere befinden sich in der Gesetzgebung oder sind unverbindliche Vorschläge."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Die 33 Empfehlungen der Rentenkommission verständlich erklärt" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Systematische Aufstellung der Empfehlungen der Regierungskommission „Verlässlicher Generationenvertrag“. Bei allen Punkten unterscheiden wir strikt zwischen bloßen Vorschlägen, politischen Zielsetzungen und bereits geltendem Recht." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-5 bg-slate-900 text-white rounded-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
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
          className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors shrink-0",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Zum BMAS-Portal" }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-3.5 h-3.5" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-12", children: empfehlungen.map((emp) => /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "w-7 h-7 rounded-full bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center border border-slate-200", children: [
            "#",
            emp.id
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-base font-bold text-slate-900", children: emp.titel })
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
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Rentenlücke berechnen: Wie viel Rente bekomme ich wirklich?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Viele Arbeitnehmer unterschätzen die Versorgungslücke im Alter. Mit unserem kostenlosen Online-Rechner ermittelst du sekundenschnell deine individuelle Rentenlücke und dein nötiges Sparziel." })
    ] }),
    /* @__PURE__ */ jsx(RentenLueckeCalculator, {}),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Warum entsteht eine Rentenlücke?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Die gesetzliche Rentenversicherung ist als Basisversorgung konzipiert. Da das gesetzliche Rentenniveau 2026 bei ca. 48 % liegt, ersetzt die gesetzliche Rente im Schnitt nicht einmal die Hälfte deines Bruttoeinkommens." }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mt-6 mb-3", children: "Wichtige Einflussfaktoren auf deine Netto-Rente:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Kranken- und Pflegeversicherung:" }),
          " Auf die Bruttorente werden ca. 11,5 % Sozialabgaben fällig."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Einkommensteuer:" }),
          " Für Renteneintritte ab 2026 unterliegt der Großteil der Rente der vollen Einkommensteuer."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Inflation / Kaufkraftverlust:" }),
          " Eine jährliche Inflation von 2 % halbiert die Kaufkraft deines Ersparten in etwa 35 Jahren."
        ] })
      ] })
    ] }),
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
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Private Rentenversicherung im Vergleich 2026: Steuerliche Regelungen & Modelle" }),
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
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Klassische vs. Fondsgebundene Rentenversicherung" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Bei der Wahl einer privaten Rentenversicherung stehen Verbraucher grundsätzlich vor der Entscheidung zwischen zwei Hauptformen:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-2 text-base", children: "Klassische Rentenversicherung" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed mb-3", children: "Legt die Beiträge im Sicherungsvermögen des Versicherers an. Bietet eine vertraglich festgelegte Höchstrechnungszins-Garantie plus Überschussbeteiligung." }),
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
        " der Einkommensteuer (§ 22 Nr. 1 Satz 3 Buchst. a Doppelbuchst. bb EStG). Die Höhe des Ertragsanteils richtet sich nach dem Alter bei Rentenbeginn:"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-4 not-prose", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm border-collapse border border-slate-200", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100 text-slate-900 border-b border-slate-200", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Alter bei Rentenbeginn" }),
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Steuerpflichtiger Ertragsanteil (%)" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Steuerfreier Anteil (%)" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200", children: "62 Jahre" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 font-bold text-blue-900", children: "21 %" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "79 %" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200", children: "65 Jahre" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 font-bold text-blue-900", children: "18 %" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "82 %" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200", children: "67 Jahre" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 font-bold text-blue-900", children: "17 %" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "83 %" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mt-6", children: "2. Einmalkapitalauszahlung (§ 20 Abs. 1 Nr. 6 EStG)" }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-700", children: [
        "Entscheidet sich der Versicherte bei Vertragsende für die einmalige Kapitalabfindung, gilt für nach 2011 abgeschlossene Verträge: Wenn die Auszahlung nach Vollendung des ",
        /* @__PURE__ */ jsx("strong", { children: "62. Lebensjahres" }),
        " erfolgt und der Vertrag mindestens ",
        /* @__PURE__ */ jsx("strong", { children: "12 Jahre Laufzeit" }),
        " aufwies, ist nur die ",
        /* @__PURE__ */ jsx("u", { children: "Hälfte des Unterschiedsbetrags" }),
        " (Auszahlungssumme abzüglich eingezahlter Beiträge) steuerpflichtig."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mt-8", children: "Wichtige Kennzahlen: Rentenfaktor und Kostenstruktur" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Garantierter Rentenfaktor:" }),
          " Der Rentenfaktor legt fest, wie viel Euro monatliche Rente pro 10.000 Euro angespartem Kapital ausgezahlt werden. Ein garantierter Faktor schützt vor späteren Absenkungen seitens der Versicherung."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Effektive Vertragskosten (Effective Costs):" }),
          " Die Effektivkosten mindern die jährliche Gesamtrendite der Geldanlage. Sie setzen sich zusammen aus Abschlusskosten (Abschluss- und Vertriebskosten), laufenden Verwaltungskosten und Fondskosten."
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mt-8", children: "Für wen eignet sich eine private Rentenversicherung?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Eine private Rentenversicherung eignet sich vor allem für Sparer, die einen planbaren, lebenslangen Einkommensstrom wünschen und das Risiko, im Alter ohne Ersparnisse dazustehen, absichern möchten. Für Anleger mit sehr kurzem Anlagehorizont oder hohem Liquiditätsbedarf während der Ansparphase ist sie aufgrund der Abschlusskosten meist weniger geeignet." })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function RiesterRente() {
  const faqs = [
    {
      question: "Wer ist für die Riester-Förderung 2026 unmittelbar zulagenberechtigt?",
      answer: "Unmittelbar zulagenberechtigt sind versicherungspflichtige Arbeitnehmer, Auszubildende, Pflichtversicherte in der gesetzlichen Rentenversicherung, Beamtinnen und Beamte sowie Bezieher von Lohnersatzleistungen (z. B. Krankengeld, Elterngeld)."
    },
    {
      question: "Wie hoch ist der Mindesteigenbeitrag bei der Riester-Rente?",
      answer: "Um die volle staatliche Zulagenförderung zu erhalten, müssen Sparer 4 % ihres sozialversicherungspflichtigen Vorjahreseinkommens (abzüglich der zustehenden Zulagen) als Eigenbeitrag in den Vertrag einzahlen – mindestens jedoch den Sockelbeitrag von 60 € pro Jahr."
    },
    {
      question: "Werden künftige Reformen (z. B. Altersvorsorgedepot) rückwirkend auf bestehende Riester-Verträge angewendet?",
      answer: "Bestehende Riester-Verträge genießen Besitzstandsschutz. Geplante Reformen zur Einführung eines staatlich geförderten Altersvorsorgedepots befinden sich in der Gesetzgebungsberatung und stellen kein geltendes Recht für Bestandsverträge dar."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Riester-Rente 2026", item: "/riester-rente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Riester-Rente 2026: Zulagen, Steuerabzug & Förderbedingungen" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Umfassende Darstellung der gesetzlichen Bestimmungen der Riester-Förderung nach § 79 ff. EStG, Berechnung des Mindesteigenbeitrags und sachliche Gegenüberstellung von Vor- und Nachteilen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 border border-blue-200 text-blue-950 rounded-xl mb-8 text-xs sm:text-sm flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-5 h-5 text-blue-700 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Differenzierung geltendes Recht vs. Reformvorschläge:" }),
        " Die nachfolgenden Zulagenwerte entsprechen der im EStG verankerten Rechtslage 2026. Vorschläge für künftige Reformen (z. B. ein rentenunabhängiges Altersvorsorgedepot ab 2027) sind noch nicht beschlossen."
      ] })
    ] }),
    /* @__PURE__ */ jsx(AffiliateWidget, { type: "riester", title: "Riester-Förderung & Tarife anfordern" }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Die staatlichen Riester-Zulagen im Detail (Rechtsstand 2026)" }),
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
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-700 border-r border-slate-200", children: "175,00 €" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Zahlung von 4 % des Vorjahresbrutto (mind. 60 € Sockelbeitrag) (§ 84 EStG)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Kinderzulage (ab 2008 geb.)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-700 border-r border-slate-200", children: "300,00 €" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Kindergeldanspruch im jeweiligen Beitragsjahr (§ 85 EStG)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Kinderzulage (vor 2008 geb.)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-700 border-r border-slate-200", children: "185,00 €" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Kindergeldanspruch im jeweiligen Beitragsjahr (§ 85 EStG)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Berufseinsteigerbonus" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-700 border-r border-slate-200", children: "200,00 €" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Einmalig für Zulagenberechtigte unter 25 Jahren (§ 84 Abs. 2 EStG)" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Sonderausgabenabzug und Günstigerprüfung (§ 10a EStG)" }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-700", children: [
        "Beiträge zur Riester-Rente können bis zu einem Höchstbetrag von ",
        /* @__PURE__ */ jsx("strong", { children: "2.100 Euro pro Kalenderjahr" }),
        " (Eigenbeiträge plus Zulagen) als Sonderausgaben in der Einkommensteuererklärung geltend gemacht werden. Das Finanzamt führt automatisch eine Günstigerprüfung durch: Ist der Steuervorteil höher als die bereits erhaltenen Zulagen, wird die Differenz dem Steuerpflichtigen erstattet."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Berechnung des Mindesteigenbeitrags" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Um den vollen Anspruch auf die Zulagen zu sichern, muss der berechnete Mindesteigenbeitrag erbracht werden. Formel:" }),
      /* @__PURE__ */ jsx("div", { className: "p-4 bg-slate-900 text-white rounded-xl font-mono text-xs sm:text-sm my-4", children: "Mindesteigenbeitrag = (4 % des sozialversicherungspflichtigen Vorjahreseinkommens) – (Zustehende Zulagen)" }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Nachgelagerte Besteuerung im Ruhestand (§ 22 Nr. 5 EStG)" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Riester-Rentenleistungen unterliegen in der Auszahlungsphase der vollen nachgelagerten Besteuerung. Das bedeutet, dass die erhaltene Monatsrente mit dem individuellen Einkommensteuersatz im Alter versteuert werden muss." })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function BetrieblicheAltersvorsorge() {
  const faqs = [
    {
      question: "Wann gilt die Pflicht zum 15 % Arbeitgeberzuschuss bei der bAV?",
      answer: "Nach § 1a Abs. 1a BetrAVG muss der Arbeitgeber bei der Entgeltumwandlung über eine Direktversicherung, eine Pensionskasse oder einen Pensionsfonds grundsätzlich 15 % des umgewandelten Entgelts zusätzlich als Zuschuss an den Versorgungsträger weiterleiten, soweit er durch die Entgeltumwandlung Sozialversicherungsbeiträge einspart."
    },
    {
      question: "Welche Abzüge fallen im Ruhestand auf die Betriebsrente an?",
      answer: "In der Auszahlungsphase unterliegt die Betriebsrente als Versorgungsbezug nach § 229 SGB V grundsätzlich der vollen gesetzlichen Kranken- und Pflegeversicherung. Für die Krankenversicherung gilt jedoch ein monatlicher Freibetrag nach § 226 SGB V."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Betriebliche Altersvorsorge", item: "/betriebliche-altersvorsorge" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Betriebliche Altersvorsorge (bAV): Arbeitgeberzuschuss & Durchführungswege" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Wie die Entgeltumwandlung nach § 1a BetrAVG funktioniert, unter welchen Voraussetzungen der 15 % Arbeitgeberzuschuss greift und worauf in der Auszahlungsphase zu achten ist." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Rechtsgrundlage der Entgeltumwandlung (§ 1a BetrAVG)" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Sozialversicherungspflichtig beschäftigte Arbeitnehmer haben in Deutschland nach § 1a Abs. 1 Betriebsrentengesetz (BetrAVG) einen Rechtsanspruch darauf, von ihren künftigen Entgeltansprüchen bis zu 4 % der Beitragsbemessungsgrenze der allgemeinen Rentenversicherung steuer- und sozialabgabenfrei in eine betriebliche Altersvorsorge umzuwandeln." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Der 15 % Arbeitgeberzuschuss nach § 1a Abs. 1a BetrAVG" }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-blue-50 border border-blue-200 rounded-xl my-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-bold text-blue-950 mb-2 text-base flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Info, { className: "w-5 h-5 text-blue-700" }),
          "Gesetzliche Formulierung & Bedingung:"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-blue-900 leading-relaxed", children: [
          "Soweit der Arbeitgeber durch die Entgeltumwandlung Sozialversicherungsbeiträge einspart, ist er verpflichtet, ",
          /* @__PURE__ */ jsx("strong", { children: "15 Prozent des umgewandelten Entgelts zusätzlich" }),
          " als Arbeitgeberzuschuss an den Versorgungsträger (Direktversicherung, Pensionskasse oder Pensionsfonds) weiterzuleiten."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t border-blue-200 text-xs text-blue-800", children: [
          "Quelle: ",
          /* @__PURE__ */ jsx("a", { href: "https://www.gesetze-im-internet.de/betravg/__1a.html", target: "_blank", rel: "noopener noreferrer", className: "underline font-semibold", children: "§ 1a BetrAVG auf Gesetze-im-Internet.de" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900", children: "Rechenbeispiel zur Entgeltumwandlung" }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm not-prose text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-slate-700", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-1", children: [
            /* @__PURE__ */ jsx("span", { children: "Gewünschte monatliche Sparrate des Arbeitnehmers:" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "100,00 €" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b pb-1 text-emerald-700", children: [
            /* @__PURE__ */ jsx("span", { children: "+ Gesetzlicher Arbeitgeberzuschuss (15 %):" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: "+ 15,00 €" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-bold text-slate-900 pt-1", children: [
            /* @__PURE__ */ jsx("span", { children: "Monatlicher Gesamtbeitrag im bAV-Vertrag:" }),
            /* @__PURE__ */ jsx("span", { className: "text-blue-900", children: "115,00 €" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 mt-3", children: "* Der Netto-Aufwand für den Arbeitnehmer ist geringer als 100 €, da der Betrag vor Abzug von Lohnsteuer und Sozialabgaben vom Bruttogehalt umgewandelt wird." })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mt-8", children: "Die 5 Durchführungswege der betrieblichen Altersvorsorge" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1 text-sm", children: "1. Direktversicherung" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Der Arbeitgeber schließt eine Lebens- oder Rentenversicherung auf das Leben des Arbeitnehmers ab. Häufigster Weg bei Entgeltumwandlung." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1 text-sm", children: "2. Pensionskasse" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Umlage- oder kapitalgedeckte rechtlich selbstständige Versorgungseinrichtung mehrerer Unternehmen." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1 text-sm", children: "3. Pensionsfonds" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Rechtlich selbstständige Einrichtung mit höherer Aktienquote und flexibleren Anlagemöglichkeiten." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1 text-sm", children: "4. Direktzusage / Pensionszusage" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Der Arbeitgeber sagt dem Arbeitnehmer unmittelbar eine Versorgungsleistung aus dem Firmenvermögen zu." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mt-8", children: "Auszahlungsphase & Abzüge im Ruhestand" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "In der Ansparphase geförderte Betriebsrenten unterliegen in der Auszahlungsphase der vollen nachgelagerten Besteuerung mit dem individuellen Einkommensteuersatz. Zudem werden auf Betriebsrenten Beiträge zur gesetzlichen Kranken- und Pflegeversicherung erhoben. Für die Krankenversicherung gilt ein gesetzlicher Freibetrag (§ 226 SGB V), sodass erst Beträge oberhalb dieser Grenze verbeitragt werden." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mt-8", children: "Übertragbarkeit bei Arbeitgeberwechsel (§ 4 BetrAVG)" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Bei einem Wechsel des Arbeitgebers besteht nach § 4 BetrAVG unter bestimmten Voraussetzungen der Anspruch auf Übertragung des gebildeten Kapitals auf den neuen Arbeitgeber (Portabilität)." })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function EtfRente() {
  const faqs = [
    {
      question: "Welche Rolle können breit gestreute Aktien-ETFs bei der Altersvorsorge spielen?",
      answer: "Breit gestreute Aktien-ETFs (z. B. auf den MSCI World oder FTSE All-World) ermöglichen Privatanlegern die Teilhabe an der globalen Wirtschaftsentwicklung. Durch niedrige laufende Produktkosten (TER) eignen sie sich für den langfristigen Vermögensaufbau über mehrere Jahrzehnte."
    },
    {
      question: "Welche Kosten fallen bei einem ETF-Sparplan an?",
      answer: "Bei ETFs fallen laufende Gesamtkostenquoten (TER – Total Expense Ratio) von ca. 0,10 % bis 0,50 % p.a. an. Hinzu kommen je nach Broker eventuelle Depotführungsgebühren, Ausführungsgebühren für Sparpläne sowie handelsübliche Kauf- und Verkauf-Spreads."
    },
    {
      question: "Was ist das Sequenzrisiko (Sequence of Returns Risk)?",
      answer: "Das Sequenzrisiko bezeichnet die Gefahr, dass kurz vor oder zu Beginn des Ruhestands ein strammer Börsencrash eintritt. Wenn in dieser Phase Anteile verkauft werden müssen, um den Lebensunterhalt zu bestreiten, wird das Kapital übermäßig schnell aufgebraucht."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "ETF Altersvorsorge", item: "/etf-rente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "ETF-Sparplan für die Altersvorsorge: Möglichkeiten, Kosten & Risiken" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Welche Rolle breit gestreute Aktien-ETFs beim langfristigen Vermögensaufbau spielen können, wie Gesamtkosten wirken und welche Risiken vor Rentenbeginn beachtet werden müssen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-amber-50 border border-amber-200 text-amber-950 rounded-xl mb-8 text-xs sm:text-sm flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(ShieldAlert, { className: "w-5 h-5 text-amber-700 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Wichtiger Hinweis:" }),
        " Diese Seite stellt keine individuelle Anlageberatung oder Kaufempfehlung dar. Wertpapierangebote unterliegen Kursschwankungen und Verlustrisiken."
      ] })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10 space-y-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Funktionsweise von Aktien-ETFs in der Altersvorsorge" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Ein ETF (Exchange Traded Fund) ist ein börsengehandelter Indexfonds, der die Wertentwicklung eines festgelegten Marktindexes (z. B. MSCI World mit über 1.400 Unternehmen aus 23 Industrieländern) möglichst exakt abbildet. Durch die breite Streuung (Diversifikation) wird das Einzelwertrisiko von Unternehmenspleiten im Vergleich zu Einzelaktien drastisch reduziert." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Kostenstruktur eines ETF-Sparplans" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Obwohl ETFs im Vergleich zu aktiv gemanagten Investmentfonds sehr kostengünstig sind, fallen auch hier gebührenrelevante Faktoren an:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Gesamtkostenquote (TER):" }),
          " Die laufenden Fondskosten bewegen sich bei weltweiten Standard-ETFs meist zwischen 0,10 % und 0,30 % pro Jahr und werden direkt aus dem Fondsvermögen entnommen."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Depot- & Sparplanausführungsgebühren:" }),
          " Manche Banken verlangen fixe oder prozentuale Gebühren pro Sparratenausführung (z. B. 1,50 % der Sparrate oder Festgebühren von 1,50 €). Viele Direktbroker bieten jedoch kostenfreie Aktionssparpläne an."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Handelsspannen (Spread):" }),
          " Die Differenz zwischen Kauf- und Verkaufspreis an der Börse."
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Historische Renditebetrachtung & Risikohinweis" }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-slate-900 text-white rounded-xl my-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2", children: [
          /* @__PURE__ */ jsx(Info, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "Historische Daten & Methodik" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-200 leading-relaxed", children: [
          "Historisch erzielte der MSCI World Index über Zeiträume von 15 bis 30 Jahren (Betrachtungszeitraum 1970–2025, Quelle: MSCI Inc. Index Data) eine durchschnittliche Rendite von nominal ca. 6 % bis 8 % pro Jahr vor Inflation.",
          /* @__PURE__ */ jsx("strong", { className: "text-amber-400 block mt-2", children: "Wichtig: Weder historische Erträge noch vergangene Wertentwicklungen sind eine Garantie oder ein verlässlicher Indikator für zukünftige Renditen." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900", children: "Zentrale Risiken bei der ETF-Altersvorsorge" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1 text-sm", children: "Kursschwankungen & Verlustrisiko" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Aktienmärkte unterliegen zyklischen Schwankungen. In Krisenzeiten können weltweite Indizes vorübergehend um 30 % bis 50 % einbrechen." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1 text-sm", children: "Sequenzrisiko (Entnahmerisiko)" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Tritt kurz vor Rentenbeginn ein starker Kursverfall ein, müssen Anteile zu niedrigen Preisen verkauft werden. Ein schrittweiser Umschichtungsprozess (Derisking) vor dem Ruhestand ist daher ratsam." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1 text-sm", children: "Währungsrisiko" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Globale Indizes wie der MSCI World notieren zu großen Teilen in US-Dollar. Wechselkursschwankungen zwischen Euro und US-Dollar beeinflussen die Rendite im Heimatland." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1 text-sm", children: "Keine Beitrags- oder Rentengarantie" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Im Gegensatz zu klassischen Rentenversicherungen gibt es bei reinen ETF-Depots keine Mindestbeitragsgarantie und keine Versicherung gegen das Langlebigkeitsrisiko." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mt-8", children: "Unterschiede zwischen ETF-Eigenanlage und Rentenversicherung" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Ein eigenverantwortlicher ETF-Sparplan bietet maximale Flexibilität und die geringste Kostenbelastung, erfordert jedoch Disziplin in Marktphasen mit fallenden Kursen. Eine fondsgebundene Rentenversicherung verpackt ETFs hingegen in einen Versicherungsmantel mit lebenslanger Garantierente und Ertragsanteilsbesteuerung, fordert dafür aber laufende Versicherungskosten." })
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
  return /* @__PURE__ */ jsxs("div", { className: "my-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 text-emerald-600" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900", children: '„Wann kann ich in Rente?"-Rechner 2026' })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 mt-1", children: "Ermittle dein gesetzliches Reguläres Eintrittsalter und Frühestmögliche Optionen." })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleShare,
          className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors",
          children: [
            copied ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-600" }) : /* @__PURE__ */ jsx(Share2, { className: "w-3.5 h-3.5" }),
            copied ? "Link kopiert!" : "Ergebnis teilen"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2", children: "Dein Geburtsjahr" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: geburtsjahr,
            onChange: (e) => setGeburtsjahr(Number(e.target.value)),
            className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-slate-900 font-semibold"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Z. B. 1965 (Jahrgang für Regelaltersgrenze 67)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2", children: "Voraussichtliche Beitragsjahre (Wartezeit)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            value: beitragsjahre,
            onChange: (e) => setBeitragsjahre(Number(e.target.value)),
            className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-slate-900 font-semibold"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Inkl. Ausbildung, Kindererziehung & Arbeitslosigkeit" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-900 text-white rounded-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold", children: "Regulärer Renteneintritt" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-white mt-1", children: [
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
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-amber-500/20 text-amber-400 rounded-lg shrink-0", children: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold", children: "Frühestmöglicher Eintritt" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-amber-400 mt-1", children: [
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
      question: "Wann kann ich frühestens in Rente gehen?",
      answer: "Wer 35 Beitragsjahre nachweist (langjährig Versicherte), kann ab Alter 63 mit Abschlägen (0,3 % pro Monat vorzeitig, max. 14,4 %) in Rente gehen. Wer 45 Beitragsjahre vorweist, kann früher abschlagsfrei in Rente gehen."
    },
    {
      question: "Wurde die Rente mit 63 abgeschafft?",
      answer: "Die ursprüngliche 'Rente mit 63' ohne Abschläge gilt seit den Geburtsjahrgängen ab 1964 nicht mehr mit 63, sondern schrittweise erst ab Alter 65 (für besonders langjährig Versicherte mit 45 Beitragsjahren)."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Renteneintrittsalter 2026", item: "/rentenalter" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Wann kann ich in Rente? Renteneintrittsalter 2026 & Frührente" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Ermittle mit unserem Rechner dein exaktes gesetzliches Reguläres Eintrittsalter sowie die Bedingungen für Frührente und die Rente nach 45 Beitragsjahren." })
    ] }),
    /* @__PURE__ */ jsx(RentenEintrittsCalculator, {}),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Regelaltersgrenze nach Geburtsjahrgang" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-4", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm text-slate-700 border-collapse border border-slate-200", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100 text-slate-900 border-b border-slate-200", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Geburtsjahrgang" }),
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Reguläres Rentenalter" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Eintrittsjahr" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 font-semibold", children: "1959" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200", children: "66 Jahre + 2 Monate" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "2025 / 2026" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 font-semibold", children: "1960" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200", children: "66 Jahre + 4 Monate" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "2026 / 2027" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 font-semibold", children: "1961" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200", children: "66 Jahre + 6 Monate" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "2027 / 2028" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 font-semibold", children: "1964 und später" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 border-r border-slate-200 font-bold text-blue-900", children: "67 Jahre" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Ab 2031" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
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
  return /* @__PURE__ */ jsxs("div", { className: "my-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calculator, { className: "w-6 h-6 text-blue-700" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900", children: "Gesetzlicher Rentenrechner 2026" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-500 mt-1", children: [
          "Formel nach § 64 SGB VI: ",
          /* @__PURE__ */ jsx("em", { children: "Rente = EP × ZF × RW × RAF" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleShare,
          className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors",
          children: [
            copied ? /* @__PURE__ */ jsx(Check, { className: "w-3.5 h-3.5 text-emerald-600" }) : /* @__PURE__ */ jsx(Share2, { className: "w-3.5 h-3.5" }),
            copied ? "Link kopiert!" : "Ergebnis teilen"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2", children: "Gesammelte Entgeltpunkte (EP)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            step: "0.1",
            value: entgeltpunkte,
            onChange: (e) => setEntgeltpunkte(Number(e.target.value)),
            className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-900 font-semibold"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "45 EP = Standard-Eckrentner" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2", children: "Aktueller Rentenwert 2026 (€)" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            step: "0.01",
            value: rentenwert,
            onChange: (e) => setRentenwert(Number(e.target.value)),
            className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-900 font-semibold"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-slate-400 mt-1 block", children: [
          "Amtlich ab 1. Juli 2026: 42,52 € (",
          /* @__PURE__ */ jsx("a", { href: "https://www.deutsche-rentenversicherung.de", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-blue-700", children: "DRV Quelle" }),
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2", children: "Zugangsfaktor (Abschläge / Zuschläge)" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            value: zugangsfaktor,
            onChange: (e) => setZugangsfaktor(Number(e.target.value)),
            className: "w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-slate-900 font-semibold",
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
    /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-900 text-white rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1", children: "Brutto-Monatsrente" }),
        /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-white", children: [
          bruttoRente.toFixed(2).replace(".", ","),
          " €"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-1 block", children: "Vor KV/PV & Steuern" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1", children: "Pauschale Abzüge (KV/PV ~12.4%)" }),
        /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-amber-400", children: [
          "- ",
          abzuege.toFixed(2).replace(".", ","),
          " €"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-1 block", children: "KVdR + Pflegeversicherung" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1", children: "Geschätzte Rente nach KV/PV" }),
        /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-emerald-400", children: [
          nettoRenteEst.toFixed(2).replace(".", ","),
          " €"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-1 block", children: "Vor individueller Einkommensteuer" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200/60", children: [
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
      question: "Wie wird die gesetzliche Rente berechnet?",
      answer: "Die Rentenformel lautet: Monatliche Rente = Entgeltpunkte × Zugangsfaktor × Aktueller Rentenwert × Rentenartfaktor."
    },
    {
      question: "Wie hoch ist die Standardrente (Eckrente) 2026?",
      answer: "Die Standardrente für einen Modellrentner mit 45 Entgeltpunkten beträgt 2026 genau 1.913,40 € brutto pro Monat (45 × 42,52 €)."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenberechnung", item: "/rentenberechnung" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Wie wird meine Rente berechnet? Rentenformel & Rentenwert 2026" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Berechne deine voraussichtliche gesetzliche Monatsrente auf Basis deiner Entgeltpunkte (Rentenpunkte) und des bundeseinheitlichen Rentenwerts von 42,52 €." })
    ] }),
    /* @__PURE__ */ jsx(RentenBerechnungCalculator, {}),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Die gesetzliche Rentenformel im Detail" }),
      /* @__PURE__ */ jsx("div", { className: "p-6 bg-slate-900 text-white rounded-xl font-mono text-sm mb-6", children: "Rente = Entgeltpunkte (EP) × Zugangsfaktor (ZF) × Rentenwert (RW) × Rentenartfaktor (RAF)" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Entgeltpunkte (EP):" }),
          " Wer in einem Jahr exakt das Durchschnittsentgelt aller Versicherten verdient, erhält genau 1,0 Entgeltpunkt."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Zugangsfaktor (ZF):" }),
          " Berücksichtigt Zu- oder Abschläge bei früherem oder späterem Renteneintritt (1,0 bei regulärem Eintritt)."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Aktueller Rentenwert (RW):" }),
          " Der Gegenwert eines Entgeltpunkts. 2026 liegt er bei 42,52 €."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Rentenartfaktor (RAF):" }),
          " 1,0 für Altersrenten und volle Erwerbsminderungsrenten; 0,55 für Witwenrenten."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Rentenanpassung() {
  const faqs = [
    {
      question: "Wie hoch ist die Rentenanpassung 2026?",
      answer: "Die Rentenerhöhung beträgt zum 1. Juli 2026 bundeseinheitlich +4,24 %. Der Rentenwert steigt damit von 40,79 € auf 42,52 € je Entgeltpunkt."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenanpassung 2026", item: "/rentenanpassung" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Rentenanpassung 2026: +4,24 % Erhöhung des Rentenwerts" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Alle Hintergründe zur Rentenwertbestimmungsverordnung 2026, der Koppelung an die Lohnentwicklung und historischer Vergleich der Rentenanpassungen." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Historischer Vergleich der Rentenanpassungen" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm text-slate-700 border-collapse border border-slate-200", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100 text-slate-900 border-b border-slate-200", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Jahr" }),
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Rentenanpassung" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Neuer Rentenwert / EP" })
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
      question: "Wer kann noch mit 63 ohne Abschläge in Rente gehen?",
      answer: "Abschlagsfrei mit 63 konnten nur Jahrgänge vor 1953 in Rente gehen. Für jüngere Jahrgänge verschiebt sich das Alter schrittweise auf 65 Jahre (bei 45 Beitragsjahren)."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rente mit 63", item: "/rente-mit-63" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Rente mit 63: Voraussetzungen, Abschläge & Neuregelung 2026" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Verständliche Erklärung zur Altersrente für besonders langjährig Versicherte (45 Jahre Wartezeit) und langjährig Versicherte (35 Jahre Wartezeit)." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Voraussetzungen im Überblick" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Wer 35 Beitragsjahre nachweisen kann, darf ab 63 in Rente gehen, muss jedoch pro Monat vor der Regelaltersgrenze einen Abschlag von 0,3 % hinnehmen (max. 14,4 %)." })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Grundrente() {
  const faqs = [
    {
      question: "Wer erhält den Grundrentenzuschlag?",
      answer: "Der Zuschlag steht Rentnern zu, die mindestens 33 Jahre Grundrentenzeiten (Beitragszeiten aus Beschäftigung, Pflege, Erziehung) aufweisen und unter der Einkommensgrenze liegen."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Grundrente", item: "/grundrente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Grundrente 2026: Anspruch, Einkommensprüfung & Zuschlag" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Alles zur Grundrente als Zuschlag für langjährige Beitragszahler mit unterdurchschnittlichem Einkommen." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Grundrentenzeiten & Einkommensprüfung" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Die Grundrente muss nicht extra beantragt werden. Die Rentenversicherung prüft automatisch die Einkommensverhältnisse beim Finanzamt." })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Witwenrente() {
  const faqs = [
    {
      question: "Wie unterscheidet sich die kleine von der großen Witwenrente?",
      answer: "Die kleine Witwenrente beträgt 25 % der Rente des Verstorbenen (max. 2 Jahre), während die große Witwenrente 55 % (oder 60 % nach altem Recht) beträgt und dauerhaft gezahlt wird."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Witwenrente", item: "/witwenrente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Witwen- & Hinterbliebenenrente 2026: Große vs. Kleine Witwenrente" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Rechtliche Regelungen zur Versorgung von Ehepartnern, Freibeträge bei eigenem Einkommen und Antragsverfahren." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Freibeträge bei Anrechnung eigenen Einkommens" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Eigenes Einkommen der Witwe / des Witwers wird oberhalb des gesetzlichen Freibetrags zu 40 % auf die Hinterbliebenenrente angerechnet." })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Erwerbsminderungsrente() {
  const faqs = [
    {
      question: "Wann liegt eine volle Erwerbsminderung vor?",
      answer: "Eine volle Erwerbsminderung liegt vor, wenn der Versicherte wegen Krankheit oder Behinderung auf absehbare Zeit weniger als 3 Stunden täglich auf dem allgemeinen Arbeitsmarkt tätig sein kann."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Erwerbsminderungsrente", item: "/erwerbsminderungsrente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Erwerbsminderungsrente (EM-Rente): Voraussetzungen & Zurechnungszeit" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Absicherung bei teilweisem oder vollständigem Verlust der Erwerbsfähigkeit." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Verbesserte Zurechnungszeiten" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Durch die jüngsten Gesetzesreformen werden EM-Rentner so gestellt, als hätten sie mit ihrem bisherigen Durchschnittseinkommen bis zur Regelaltersgrenze weitergearbeitet." })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Rentenpunkte() {
  const faqs = [
    {
      question: "Wie viel Euro ist 1 Rentenpunkt (Entgeltpunkt) 2026 wert?",
      answer: "Ein Entgeltpunkt (Rentenpunkt) entspricht ab dem 1. Juli 2026 bundeseinheitlich genau 42,52 € Brutto-Monatsrente."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Entgeltpunkte / Rentenpunkte", item: "/rentenpunkte" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Entgeltpunkte (Rentenpunkte) 2026: Berechnung & Wert" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Wie sammelt man Rentenpunkte? Erklärung des vorläufigen Durchschnittsentgelts und Punktegutschrift für Erziehung und Pflege." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Berechnung der Entgeltpunkte" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Entgeltpunkte = Dein Bruttojahreseinkommen ÷ Durchschnittsentgelt aller Versicherten." })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Rentenbescheid() {
  const faqs = [
    {
      question: "Warum sollte man den Rentenbescheid prüfen?",
      answer: "Fehlerhafte Ausbildungszeiten, fehlende Kindererziehungszeiten oder unvollständige Versicherungsverläufe können die Monatsrente erheblich mindern."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenbescheid prüfen", item: "/rentenbescheid" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Rentenbescheid prüfen & Renteninformation verstehen" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Checkliste für deinen jährlichen DRV-Versicherungsverlauf und Einspruchsfristen." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Wichtige Prüfpunkte im Rentenbescheid" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-slate-700", children: [
        /* @__PURE__ */ jsx("li", { children: "Vollständigkeit der Beitragszeiten (Lehre, Studium, Zivildienst)" }),
        /* @__PURE__ */ jsx("li", { children: "Korrekt erfasste Kindererziehungszeiten (Mütterrente)" }),
        /* @__PURE__ */ jsx("li", { children: "Zeiten der Pflege von Angehörigen" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Rentensteuer() {
  const faqs = [
    {
      question: "Wie viel Prozent meiner Rente muss ich versteuern?",
      answer: "Der steuerpflichtige Rentenanteil richtet sich nach dem Jahr des Renteneintritts. Für Neurentner im Jahr 2026 beträgt der Besteuerungsanteil ca. 84 % (mit schrittweisem Übergang zur Vollbesteuerung)."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Besteuerung von Renten", item: "/rentensteuer" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Besteuerung von Renten 2026: Rentenfreibetrag & Grundfreibetrag" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Wann müssen Rentner eine Steuererklärung abgeben? Erklärung der nachgelagerten Besteuerung nach dem Alterseinkünftegesetz." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Grundfreibetrag 2026" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Wer als Einzelperson ein zu versteuerndes Einkommen unterhalb des steuerlichen Grundfreibetrags erzielt, zahlt keine Einkommensteuer." })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function Altersvorsorge() {
  const faqs = [
    {
      question: "Welche Altersvorsorge passt zu mir?",
      answer: "Das hängt von deinem Alter, Einkommen, Förderansprüchen (z. B. Kinder) und Risikoprofil ab. Eine Kombination aus Gesetzlicher Rente, ETF-Sparplan und ggf. bAV / Riester bietet optimale Diversifikation."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Altersvorsorge Übersicht", item: "/altersvorsorge" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Altersvorsorge im Vergleich 2026: Strategien für jeden Lebensabschnitt" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Gesamtschau aller Vorsorgeoptionen in Deutschland – von staatlich geförderten Verträgen bis zu eigenverantwortlichen Anlageformen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 my-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-slate-900 mb-2", children: "Private Rentenversicherung" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 mb-4", children: "Garantierte lebenslange Rente und Steuervorteile beim Halbeinkünfteverfahren." }),
        /* @__PURE__ */ jsx(Link, { to: "/private-rente", className: "text-xs font-bold text-blue-900 hover:underline", children: "Zum Vergleich →" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-slate-900 mb-2", children: "Riester-Rente 2026" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 mb-4", children: "Hohe staatliche Zulagen für Familien und Geringverdiener." }),
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
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function RentenrechnerPage() {
  const [activeTab, setActiveTab] = useState("luecke");
  const faqs = [
    {
      question: "Sind die Rechner auf rentesicher.de kostenlos?",
      answer: "Ja, alle 3 interaktiven Rechner stehen vollständig kostenlos, ohne Registrierung und ohne Weitergabe persönlicher Daten zur freien Nutzung bereit."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Interaktiver Rechner-Hub", item: "/rentenrechner" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center sm:text-left", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Die 3 Rentenrechner 2026: Rentenlücke, Rente & Renteneintritt" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Wähle das gewünschte Berechnungstool aus, um deine monatliche Versorgungslücke, deine gesetzliche Brutto- und Nettorente oder dein reguläres Eintrittsalter zu berechnen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-slate-200/80 rounded-2xl mb-8", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveTab("luecke"),
          className: `w-full sm:w-1/3 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${activeTab === "luecke" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"}`,
          children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-amber-600" }),
            /* @__PURE__ */ jsx("span", { children: "1. Rentenlücke" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveTab("berechnung"),
          className: `w-full sm:w-1/3 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${activeTab === "berechnung" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"}`,
          children: [
            /* @__PURE__ */ jsx(Calculator, { className: "w-4 h-4 text-blue-700" }),
            /* @__PURE__ */ jsx("span", { children: "2. Gesetzliche Rente" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveTab("eintritt"),
          className: `w-full sm:w-1/3 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${activeTab === "eintritt" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"}`,
          children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-emerald-600" }),
            /* @__PURE__ */ jsx("span", { children: "3. Rentenalter" })
          ]
        }
      )
    ] }),
    activeTab === "luecke" && /* @__PURE__ */ jsx(RentenLueckeCalculator, {}),
    activeTab === "berechnung" && /* @__PURE__ */ jsx(RentenBerechnungCalculator, {}),
    activeTab === "eintritt" && /* @__PURE__ */ jsx(RentenEintrittsCalculator, {}),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("div", { className: "my-12 grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Rentenlücken-Rechner" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Eingabe: Einkommen & Rente → Ausgabe: Monatliche Lücke & Kapitalbedarf." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Gesetzlicher Rentenrechner" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Eingabe: Entgeltpunkte & Rentenwert (42,52 €) → Ausgabe: Brutto- & Nettorente." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Renteneintritts-Rechner" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Eingabe: Geburtsjahr & Beitragsjahre → Ausgabe: Regulärer & frühestmöglicher Eintritt." })
      ] })
    ] }),
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

function App() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsxs(Routes, { children: [
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
