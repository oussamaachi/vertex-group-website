import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Services from './pages/Services';
import Maconnerie from './pages/services/Maconnerie';
import Renovation from './pages/services/Renovation';
import Etancheite from './pages/services/Etancheite';
import Coordination from './pages/services/Coordination';
import Fourniture from './pages/services/Fourniture';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
import ScrollProgress from './components/ScrollProgress';

function Layout({ children }) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/maconnerie-generale" element={<Maconnerie />} />
          <Route path="/services/renovation-energetique" element={<Renovation />} />
          <Route path="/services/etancheite-toitures" element={<Etancheite />} />
          <Route path="/services/coordination-chantier" element={<Coordination />} />
          <Route path="/services/fourniture-materiaux" element={<Fourniture />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

