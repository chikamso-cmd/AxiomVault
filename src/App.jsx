import "./App.css";
import {useEffect} from "react"
import LandingPage from "./Pages/LandingPage";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./Pages/Analytics";
import Threats from "./Pages/Threats";
import ContactPage from "./Pages/Contact";


function App() {

useEffect(() => {
window.scrollTo(0, 0);
}, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/threats" element={<Threats />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
