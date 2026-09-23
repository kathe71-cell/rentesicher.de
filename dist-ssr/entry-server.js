import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useLocation, Link, Routes, Route, MemoryRouter } from 'react-router-dom';
import { Calculator, ChevronDown, X, Menu, ChevronUp, Check, Share2, AlertTriangle, TrendingUp, ShieldCheck, Info, BookOpen, ArrowRight, CheckCircle2, HelpCircle, Calendar, Clock } from 'lucide-react';
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
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 mt-1", children: "Berechne deine monatliche Versorgungslücke und das erforderliche Kapitalsolltarget." })
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
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
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
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-slate-900 text-white rounded-xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-amber-500/20 text-amber-400 rounded-lg shrink-0", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold", children: "Monatliche Rentenlücke" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-amber-400 mt-1", children: [
            rentenluecke.toLocaleString("de-DE"),
            " € ",
            /* @__PURE__ */ jsx("span", { className: "text-xs font-normal text-slate-300", children: "/ Monat" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Betrag, der monatlich im Ruhestand zur Deckung deiner Lebenshaltungskosten fehlt." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-500/20 text-blue-400 rounded-lg shrink-0", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold", children: "Erforderliches Kapital (25 Jahre)" }),
          /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-white mt-1", children: [
            kapitalBedarf.toLocaleString("de-DE"),
            " €"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Benötigtes Vermögenspolster zu Beginn des Ruhestands (ohne Zinseszins & Inflation)." })
        ] })
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
  return /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500 bg-slate-100/60 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-medium text-slate-700", children: [
      /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 text-slate-500 shrink-0" }),
      /* @__PURE__ */ jsx("span", { children: "Stand: September 2026 | Quellen: Deutsche Rentenversicherung Bund / BMAS / Bundesgesetzblatt" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-slate-500", children: "Unabhängige Informationsplattform • Keine individuellen Empfehlungen" })
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
      question: "Ist die gesetzliche Rente in Deutschland 2026 noch sicher?",
      answer: "Die Auszahlung der gesetzlichen Rente ist durch das Rentwertbestimmungsgesetz und die staatliche Rentengarantie gesichert. Durch den demografischen Wandel sinkt jedoch das Rentenniveau im Verhältnis zum Gehalt, weshalb eine zusätzliche private oder betriebliche Eigenvorsorge dringend empfohlen wird."
    },
    {
      question: "Was bedeutet die Rentenkommission 2026 für meine Rente?",
      answer: "Die Rentenkommission 2026 hat 33 Empfehlungen erarbeitet, um das Rentenniveau bei 48 % zu stabilisieren und den Beitragssatz bis 2035 abzusichern. Es handelt sich um Empfehlungen, die schrittweise in Gesetzgebungsverfahren überführt werden."
    },
    {
      question: "Wie hoch ist der aktuelle Rentenwert 2026?",
      answer: "Der bundeseinheitliche Rentenwert liegt 2026 bei 42,52 € pro Entgeltpunkt. Ein Eckrentner mit 45 Beitragsjahren erhält somit eine monatliche Standardrente von 1.913,40 € brutto."
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
        "Ist die Rente sicher? ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-blue-900", children: "Aktuelle Lage & Drei-Säulen-Vorsorge 2026" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 max-w-3xl leading-relaxed", children: "Unabhängiges Fachportal zur gesetzlichen Rentenentwicklung, den 33 Empfehlungen der Rentenkommission 2026 und der Berechnung deiner persönlichen Rentenlücke." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-900 text-white rounded-2xl shadow-lg mb-10 border-l-4 border-amber-500", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { children: "Definition & Fakten-Check 2026" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed text-slate-100", children: [
        /* @__PURE__ */ jsx("strong", { children: "Die gesetzliche Rentengarantie schützt bestehende Renten vor Kürzungen (§ 68 SGB VI)." }),
        " Allerdings sinkt ohne Eigenvorsorge der Lebensstandard im Alter: Der aktuelle Rentenwert liegt 2026 bei ",
        /* @__PURE__ */ jsx("strong", { children: "42,52 €" }),
        " je Entgeltpunkt (Standardrente: 1.913,40 € brutto nach 45 Beitragsjahren). Um die Versorgungslücke zu schließen, setzt das deutsche Rentensystem auf drei Säulen: Gesetzliche Rente, Betriebliche Altersvorsorge (bAV) und Private Vorsorge."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase font-bold text-slate-400 block mb-1", children: "Rentenwert 2026" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-blue-900", children: "42,52 €" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 mt-1 block", children: "Pro Entgeltpunkt (EP)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase font-bold text-slate-400 block mb-1", children: "Rentenanpassung" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-emerald-600", children: "+4,24 %" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 mt-1 block", children: "Erhöhung ab 1. Juli 2026" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase font-bold text-slate-400 block mb-1", children: "Ziel-Rentenniveau" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-extrabold text-amber-600", children: "48,0 %" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 mt-1 block", children: "Gesetzliche Haltelinie bis 2035" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Die 3 Säulen der Altersvorsorge in Deutschland" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700 leading-relaxed mb-6", children: "Das Rentensystem stützt sich auf drei tragende Säulen. Während die gesetzliche Rente als Basisversorgung dient, ist die Kombination aus betrieblichen Angeboten und steuerlich geförderten privaten Anlageformen entscheidend für einen sorgenfreien Ruhestand." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 rounded-xl border border-slate-200", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold mb-3", children: "1" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Gesetzliche Rente" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed mb-4", children: "Umlagefinanzierte Basisrente nach Entgeltpunkten für Arbeitnehmer und Pflichtversicherte." }),
          /* @__PURE__ */ jsxs(Link, { to: "/rentenberechnung", className: "text-xs font-bold text-blue-900 hover:underline inline-flex items-center gap-1", children: [
            "Rentenrechner ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 rounded-xl border border-slate-200", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-amber-100 text-amber-950 flex items-center justify-center font-bold mb-3", children: "2" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Betriebliche Vorsorge" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed mb-4", children: "Direktversicherung & bAV mit gesetzlich garantiertem 15 % Arbeitgeberzuschuss." }),
          /* @__PURE__ */ jsxs(Link, { to: "/betriebliche-altersvorsorge", className: "text-xs font-bold text-amber-700 hover:underline inline-flex items-center gap-1", children: [
            "bAV Details ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-50 rounded-xl border border-slate-200", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-emerald-100 text-emerald-950 flex items-center justify-center font-bold mb-3", children: "3" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Private Vorsorge" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600 leading-relaxed mb-4", children: "Private Rentenversicherung, Riester-Rente & weltweite ETF-Sparpläne." }),
          /* @__PURE__ */ jsxs(Link, { to: "/private-rente", className: "text-xs font-bold text-emerald-800 hover:underline inline-flex items-center gap-1", children: [
            "Private Rente ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-3.5 h-3.5" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AffiliateWidget, { type: "rente", title: "Unverbindlicher Rentenversicherungs-Vergleich 2026" }),
    /* @__PURE__ */ jsxs("section", { className: "my-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-2", children: "Deine persönliche Rentenlücke berechnen" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm mb-6", children: "Ermittle direkt online, wie viel Geld dir im Alter monatlich im Vergleich zu deinem gewohnten Lebensstandard fehlt." }),
      /* @__PURE__ */ jsx(RentenLueckeCalculator, {})
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "my-12 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-slate-900", children: "Rentenkommission 2026: Die wichtigsten Neuerungen" }),
        /* @__PURE__ */ jsx(StatusBadge, { type: "empfehlung" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 leading-relaxed mb-6", children: "Die Kommission zur nachhaltigen Sicherung des Generationenvertrags hat 33 Reformpunkte vorgelegt. Kernziel ist es, das Rentenniveau von 48 % zu garantieren und exzessive Beitragsanstiege zu vermeiden." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm text-slate-800", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-600 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Fixierung der Haltelinie:" }),
            " Mindestrentenniveau von 48 % bis mindestens 2035."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm text-slate-800", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-600 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Beitragssatz-Deckelung:" }),
            " Obergrenze von 20 % für die Rentenversicherungsbeiträge."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm text-slate-800", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-600 shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Staatlicher Ausgleichsfonds:" }),
            " Kapitalgedeckte Komponente zur Dämpfung der Demografie-Last."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/rentenkommission",
          className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-amber-400 hover:bg-slate-800 text-sm font-bold transition-colors",
          children: [
            /* @__PURE__ */ jsx("span", { children: "Alle 33 Empfehlungen im Detail lesen" }),
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
      titel: "Fixierung des Rentenniveaus bei 48 %",
      status: "empfehlung",
      beschreibung: "Das Sicherungsniveau vor Steuern soll bis mindestens 2035 gesetzlich bei 48 % gehalten werden, um Rentner vor Kaufkraftverlusten zu schützen."
    },
    {
      id: 2,
      titel: "Beitragssatzgrenze von maximal 20 %",
      status: "empfehlung",
      beschreibung: "Der Beitragssatz zur gesetzlichen Rentenversicherung soll bis 2030 nicht über 20 % und bis 2035 nicht über 22 % steigen."
    },
    {
      id: 3,
      titel: "Aufbau Generationenkapital (Staatlicher Fonds)",
      status: "gilt_ab",
      dateStr: "2026",
      beschreibung: "Aufbau eines aktienbasierten Deckungskapitals durch den Bund zur Entlastung des Beitragszahlers ab den 2030er Jahren."
    },
    {
      id: 4,
      titel: "Verbindlicher Ausgleichsmechanismus im Nachhaltigkeitsfaktor",
      status: "empfehlung",
      beschreibung: "Anpassung des Nachhaltigkeitsfaktors zur Abfederung geburtenstarker Jahrgänge (Babyboomer-Eintritt ab 2026)."
    },
    {
      id: 5,
      titel: "Ausbau der betrieblichen Altersvorsorge (bAV) für KMU",
      status: "empfehlung",
      beschreibung: "Verpflichtender Arbeitgeberzuschuss von mindestens 15 % bei Entgeltumwandlung wird ausgeweitet und vereinfacht."
    },
    {
      id: 6,
      titel: "Automatisches Opting-Out bei Betriebsrenten",
      status: "empfehlung",
      beschreibung: "Mitarbeiter nehmen automatisch an der betrieblichen Vorsorge teil, sofern sie nicht aktiv widersprechen."
    },
    {
      id: 7,
      titel: "Stufenweise Anpassung der Erwerbsminderungsrente",
      status: "gesetz",
      beschreibung: "Verbesserte Zurechnungszeiten für Neurentner bei voller und teilweiser Erwerbsminderung bereits gesetzlich umgesetzt."
    },
    {
      id: 8,
      titel: "Einführung eines digitalen Rentenübersicht-Portals",
      status: "gesetz",
      beschreibung: "Zentrale Plattform zur Aggregation von gesetzlicher, betrieblicher und privater Vorsorge (Digitale Rentenübersicht)."
    }
  ];
  const faqs = [
    {
      question: "Sind die Empfehlungen der Rentenkommission bereits Gesetz?",
      answer: "Nein. Die Rentenkommission erarbeitet wissenschaftliche Handlungsempfehlungen für die Bundesregierung. Einige Beschlüsse (wie das Generationenkapital) sind bereits in Gesetzesform gegossen, andere Punkte befinden sich in der parlamentarischen Abstimmung."
    },
    {
      question: "Was garantiert die Rentengarantie nach 2025?",
      answer: "Die gesetzliche Rentengarantie stellt sicher, dass laufende Renten nominal niemals gekürzt werden dürfen – selbst wenn die Lohnentwicklung negativ ausfällt."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Rentenkommission 2026", item: "/rentenkommission" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4", children: /* @__PURE__ */ jsx("span", { children: "§ BMAS Bericht 2026" }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Die 33 Empfehlungen der Rentenkommission 2026 verständlich erklärt" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Umfassende Analyse der Vorschläge der Rentenkommission „Verlässlicher Generationenvertrag“. Bei allen Punkten unterscheiden wir strikt zwischen unverbindlichen Empfehlungen und geltendem Recht." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 text-xs mb-8 flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-amber-600 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Rechtlicher Status-Hinweis:" }),
        " Empfehlungen der Rentenkommission sind noch kein rechtsgültiges Gesetz. Erst wenn der Bundestag ein Gesetz beschließt, treten die Regelungen in Kraft."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-12", children: empfehlungen.map((emp) => /* @__PURE__ */ jsxs("div", { className: "p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center", children: [
            "#",
            emp.id
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900", children: emp.titel })
        ] }),
        /* @__PURE__ */ jsx(StatusBadge, { type: emp.status, dateStr: emp.dateStr })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-600 leading-relaxed pl-9", children: emp.beschreibung })
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
      question: "Wann ist eine private Rentenversicherung sinnvoll?",
      answer: "Eine private Rentenversicherung lohnt sich besonders für Angestellte und Selbstständige, die ihre gesetzliche Rentenlücke schließen wollen und von steuerfreien Zinseszins-Effekten sowie der günstigen Ertragsanteilsbesteuerung im Alter profitieren möchten."
    },
    {
      question: "Was ist der Unterschied zwischen Kapitalwahlrecht und lebenslanger Rente?",
      answer: "Bei Renteneintritt kannst du wählen, ob du das angesparte Guthaben auf einmal steuerbegünstigt ausgezahlt bekommst (Kapitalabfindung) oder eine garantierte lebenslange Monatsrente erhältst."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Private Rentenversicherung", item: "/private-rente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Private Rentenversicherung im Vergleich 2026: Wann lohnt sich die Vorsorge?" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Die private Rentenversicherung ist die flexible 3. Säule der Altersvorsorge. Erfahre alles über Vor- und Nachteile, steuerliche Vorteile (§ 20 EStG Halbeinkünfteverfahren) und vergleiche passende Tarife." })
    ] }),
    /* @__PURE__ */ jsx(AffiliateWidget, { type: "rente", title: "Kostenlosen Tarife-Vergleich anfordern" }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Vorteile einer privaten Rentenversicherung" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Steuervorteile im Alter" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Bei Rentenbeginn ab 62 Jahren und 12 Jahren Laufzeit muss nur die Hälfte der Gewinne versteuert werden (Halbeinkünfteverfahren)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-1", children: "Garantierte Rentenzahlung" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-600", children: "Lebenslange Auszahlung unabhängig davon, wie alt du wirst (Langlebigkeitsrisiko abgesichert)." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function RiesterRente() {
  const faqs = [
    {
      question: "Lohnt sich die Riester-Rente 2026 noch?",
      answer: "Die Riester-Rente ist insbesondere für Familien mit mehreren Kindern und für Geringverdiener durch hohe staatliche Zulagen (Grundzulage 175 €, Kinderzulage bis zu 300 € pro Kind) hochattraktiv. Für Gutverdiener bietet sie zudem attraktive Sonderausgabenabzüge."
    },
    {
      question: "Wie hoch ist die maximale Riester-Förderung?",
      answer: "Der Höchstbetrag für den Sonderausgabenabzug liegt bei 2.100 € pro Jahr inklusive aller staatlichen Zulagen."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Riester-Rente 2026", item: "/riester-rente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Riester-Rente 2026: Staatliche Förderung & Vor- und Nachteile" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Lohnt sich der Riester-Vertrag noch? Erfahre alles über Zulagen, Steuererleichterungen und vergleiche geprüfte Riester-Angebote." })
    ] }),
    /* @__PURE__ */ jsx(AffiliateWidget, { type: "riester", title: "Riester-Förderung & Tarife anfordern" }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Die staatlichen Riester-Zulagen im Überblick" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm text-slate-700 border-collapse border border-slate-200", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-100 text-slate-900 border-b border-slate-200", children: [
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Zulagenart" }),
          /* @__PURE__ */ jsx("th", { className: "p-3 border-r border-slate-200", children: "Höhe pro Jahr" }),
          /* @__PURE__ */ jsx("th", { className: "p-3", children: "Voraussetzung" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Grundzulage" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-600 border-r border-slate-200", children: "175,00 €" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Mindesteigenbeitrag 4% des Vorjahresbrutto (mind. 60 €)" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Kinderzulage (ab 2008 geb.)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-600 border-r border-slate-200", children: "300,00 €" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Anspruch auf Kindergeld" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Kinderzulage (vor 2008 geb.)" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-600 border-r border-slate-200", children: "185,00 €" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Anspruch auf Kindergeld" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "bg-slate-50/50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-3 font-semibold border-r border-slate-200", children: "Berufseinsteiger-Bonus" }),
            /* @__PURE__ */ jsx("td", { className: "p-3 font-bold text-emerald-600 border-r border-slate-200", children: "200,00 €" }),
            /* @__PURE__ */ jsx("td", { className: "p-3", children: "Einmalig unter 25 Jahren" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function BetrieblicheAltersvorsorge() {
  const faqs = [
    {
      question: "Ist die betriebliche Altersvorsorge (bAV) sinnvoll?",
      answer: "Ja, insbesondere durch den gesetzlich vorgeschriebenen Arbeitgeberzuschuss von mindestens 15 % bei Entgeltumwandlung. Zudem sparst du Steuern und Sozialabgaben in der Ansparphase."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "Betriebliche Altersvorsorge", item: "/betriebliche-altersvorsorge" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "Betriebliche Altersvorsorge (bAV): Arbeitgeberzuschuss & Steuervorteile" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Wie funktioniert die Entgeltumwandlung? Erfahre alles über den gesetzlichen 15 % Arbeitgeberzuschuss und die Ersparnis bei Sozialabgaben (§ 1a BetrAVG)." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "Rechtsanspruch auf Entgeltumwandlung" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-700", children: "Jeder sozialversicherungspflichtig beschäftigte Arbeitnehmer in Deutschland hat einen gesetzlichen Anspruch darauf, einen Teil des Gehalts direkt in eine betriebliche Altersvorsorge umzuwandeln." }),
      /* @__PURE__ */ jsxs("div", { className: "p-5 bg-blue-50 rounded-xl border border-blue-200 my-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-blue-950 mb-2", children: "Die 15 % Arbeitgeberzuschuss-Pflicht:" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-900 leading-relaxed", children: "Eingesparte Sozialabgaben muss der Arbeitgeber im Umfang von mindestens 15 % als Zuschuss in deinen bAV-Vertrag weiterleiten." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(SourceFootnote, {})
  ] });
}

function EtfRente() {
  const faqs = [
    {
      question: "Ist ein ETF-Sparplan besser als eine Riester- oder Versicherungslösung?",
      answer: "ETF-Sparpläne zeichnen sich durch extrem geringe Kosten (TER 0,1 % bis 0,2 % p.a.) und hohe historische Renditechancen (6–8 % p.a. beim MSCI World) aus. Sie bieten maximale Flexibilität, verzichten aber auf staatliche Garantien und lebenslange Annuitäten."
    }
  ];
  const breadcrumbs = [
    { name: "Startseite", item: "/" },
    { name: "ETF Altersvorsorge", item: "/etf-rente" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 py-8 leading-relaxed", children: [
    /* @__PURE__ */ jsx(SchemaMarkup, { faqItems: faqs, breadcrumbs }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4", children: "ETF-Sparplan für die Rente: Rendite, Sicherheit & ETF statt Riester" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-base leading-relaxed", children: "Warum weltweite Aktien-ETFs (z. B. MSCI World oder FTSE All-World) als Renditemotor für den Ruhestand unverzichtbar sind." })
    ] }),
    /* @__PURE__ */ jsx(AdSense, {}),
    /* @__PURE__ */ jsxs("section", { className: "prose prose-slate max-w-none my-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 mb-4", children: "ETF vs. Klassische Rentenversicherung" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-2", children: "ETF-Sparplan (Eigenanlag)" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-xs text-slate-600 space-y-1.5 list-disc pl-4", children: [
            /* @__PURE__ */ jsx("li", { children: "Keine Abschluss- und Verwaltungskosten" }),
            /* @__PURE__ */ jsx("li", { children: "Jederzeit frei verfügbar & flexibel" }),
            /* @__PURE__ */ jsx("li", { children: "Durchschnittlich 7 % historische Rendite p.a." }),
            /* @__PURE__ */ jsx("li", { children: "Keine lebenslange Rentengarantie" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-900 mb-2", children: "Rentenversicherung / Riester" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-xs text-slate-600 space-y-1.5 list-disc pl-4", children: [
            /* @__PURE__ */ jsx("li", { children: "Staatliche Zulagen & Steuervorteile" }),
            /* @__PURE__ */ jsx("li", { children: "Lebenslange garantierte Monatsrente" }),
            /* @__PURE__ */ jsx("li", { children: "Absicherung des Langlebigkeitsrisikos" }),
            /* @__PURE__ */ jsx("li", { children: "Geringere Nettorendite durch Vertragskosten" })
          ] })
        ] })
      ] })
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
  const abzuege = bruttoRente * 0.115;
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
          "Berechnung nach der offiziellen Rentenformel: ",
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
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
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
        /* @__PURE__ */ jsx("span", { className: "text-[11px] text-slate-400 mt-1 block", children: "Amtlich ab 1. Juli 2026: 42,52 €" })
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
    /* @__PURE__ */ jsxs("div", { className: "p-6 bg-slate-900 text-white rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1", children: "Brutto-Monatsrente" }),
        /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-white", children: [
          bruttoRente.toFixed(2).replace(".", ","),
          " €"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-1 block", children: "Vor Abzügen für KV/PV" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1", children: "Geschätzte Abzüge (KV/PV ~11,5%)" }),
        /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-amber-400", children: [
          "- ",
          abzuege.toFixed(2).replace(".", ","),
          " €"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-1 block", children: "Kranken- & Pflegeversicherung" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1", children: "Geschätzte Netto-Rente" }),
        /* @__PURE__ */ jsxs("div", { className: "text-3xl font-extrabold text-emerald-400", children: [
          nettoRenteEst.toFixed(2).replace(".", ","),
          " €"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-1 block", children: "Vor individueller Einkommensteuer" })
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
