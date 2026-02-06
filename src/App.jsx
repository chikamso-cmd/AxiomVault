import "./App.css";
import { useEffect } from "react";
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Analytics from "./Pages/Analytics";
import Threats from "./Pages/Threats";
import ContactPage from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import TermsOfUse from "./Pages/terms/Terms";
import PrivacyPolicy from "./Pages/Policy/Policy";
import CookiesPolicy from "./Pages/cookies/CookiesPolicy";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/threats" element={<Threats />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
