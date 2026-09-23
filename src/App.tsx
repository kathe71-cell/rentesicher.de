import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import VercelAnalytics from './components/VercelAnalytics';

// Pages
import Home from './pages/Home';
import Rentenkommission from './pages/Rentenkommission';
import Rentenluecke from './pages/Rentenluecke';
import PrivateRente from './pages/PrivateRente';
import RiesterRente from './pages/RiesterRente';
import BetrieblicheAltersvorsorge from './pages/BetrieblicheAltersvorsorge';
import EtfRente from './pages/EtfRente';
import Rentenalter from './pages/Rentenalter';
import Rentenberechnung from './pages/Rentenberechnung';
import Rentenanpassung from './pages/Rentenanpassung';
import RenteMit63 from './pages/RenteMit63';
import Grundrente from './pages/Grundrente';
import Witwenrente from './pages/Witwenrente';
import Erwerbsminderungsrente from './pages/Erwerbsminderungsrente';
import Rentenpunkte from './pages/Rentenpunkte';
import Rentenbescheid from './pages/Rentenbescheid';
import Rentensteuer from './pages/Rentensteuer';
import Altersvorsorge from './pages/Altersvorsorge';
import RentenrechnerPage from './pages/RentenrechnerPage';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentenkommission" element={<Rentenkommission />} />
          <Route path="/rentenluecke" element={<Rentenluecke />} />
          <Route path="/private-rente" element={<PrivateRente />} />
          <Route path="/riester-rente" element={<RiesterRente />} />
          <Route path="/betriebliche-altersvorsorge" element={<BetrieblicheAltersvorsorge />} />
          <Route path="/etf-rente" element={<EtfRente />} />
          <Route path="/rentenalter" element={<Rentenalter />} />
          <Route path="/rentenberechnung" element={<Rentenberechnung />} />
          <Route path="/rentenanpassung" element={<Rentenanpassung />} />
          <Route path="/rente-mit-63" element={<RenteMit63 />} />
          <Route path="/grundrente" element={<Grundrente />} />
          <Route path="/witwenrente" element={<Witwenrente />} />
          <Route path="/erwerbsminderungsrente" element={<Erwerbsminderungsrente />} />
          <Route path="/rentenpunkte" element={<Rentenpunkte />} />
          <Route path="/rentenbescheid" element={<Rentenbescheid />} />
          <Route path="/rentensteuer" element={<Rentensteuer />} />
          <Route path="/altersvorsorge" element={<Altersvorsorge />} />
          <Route path="/rentenrechner" element={<RentenrechnerPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <VercelAnalytics />
    </div>
  );
}
