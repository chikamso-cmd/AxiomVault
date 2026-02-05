import {useState} from 'react'
import { ShieldCheck, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import LOGO from '../assets/LOGO.png'



export default function Nav() {
     const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="w-full fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 sticky top-0 bg-[#0B1C46]/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Link to="/" className="flex gap-2 items-center">
            {/* <ShieldCheck size={28} className="text-orange-500" />

            <h1 className="text-white text-[25px]">
              Axiom<span className="text-green-500">Vault</span> Inc
            </h1> */}
            <img src={LOGO} alt="AxiomVault Inc logo" className='w-40 ' />
          </Link>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link
            to="/dashboard"
            className="hover:text-axiom-red transition-colors duration-300 font-bold"
          >
            Dashboard
          </Link>
          <Link
            to="/threats"
            className="hover:text-axiom-red transition-colors duration-300 font-bold"
          >
            Threats
          </Link>
          <Link
            to="/analytics"
            className="hover:text-axiom-red transition-colors duration-300 font-bold"
          >
            Analytics
          </Link>
          <Link
            to="/about"
            className="hover:text-axiom-red transition-colors duration-300 font-bold"
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="hover:text-axiom-red transition-colors duration-300 font-bold"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* <button className="text-sm text-gray-300">Sign In</button> */}
          <button className="hidden md:block bg-red-700 hover:bg-axiom-red transition px-4 py-2 rounded-lg text-sm font-medium">
            Launch Console
          </button>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B1C46] h-[300px] space-y-2 border-b border-white/10 px-6 py-4 transition-all duration-500 ease-in-out sticky top-[64px] z-40">
          <div className="flex flex-col gap-4">
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-axiom-red transition-colors duration-300 font-bold"
            >
              Dashboard
            </Link>
            <Link
              to="/threats"
              className="text-gray-300 hover:text-axiom-red transition-colors duration-300 font-bold"
            >
              Threats
            </Link>
            <Link
              to="/analytics"
              className="text-gray-300 hover:text-axiom-red transition-colors duration-300 font-bold"
            >
              Analytics
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-axiom-red transition-colors duration-300 font-bold"
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-axiom-red transition-colors duration-300 font-bold"
            >
              Contact
            </Link>
            <button className="bg-orange-500 hover:bg-axiom-red transition px-4 py-2 rounded-lg text-sm font-medium w-full">
              Launch Console
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
