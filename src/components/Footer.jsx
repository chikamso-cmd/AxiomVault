import React from 'react'
import {ShieldCheck, Mail, Phone, MapPin} from 'lucide-react'
import {Link} from "react-router-dom"
import Logo1 from '../assets/Logo1.png'

export default function Footer() {
  return (
    <section className="py-6 text-sm text-vault-navy bg-text-primary w-full">
      <div className=" border-b border-b-vault-navy/10 px-20 py-10 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="flex flex-col gap-2">
         
          <Link to="/">
            <img src={Logo1} alt="AxiomVault Inc logo" className="w-40  " />
          </Link>
          <p className="pt-2 font-medium text-left">
            AxiomVault is the first technical layer of defense against internal
            fraud, beginning with payroll. Our platform delivers real-time
            detection and explainable audit trails for auditors, built as a
            scalable foundation for enterprise trust and future regulatory
            security systems
          </p>
        </div>
        <div className="text-left">
          <h2 className="font-bold text-[20px] pb-5 text-vault-navy">Quick Links</h2>
          <ul className="space-y-2 text-[16px] flex gap-2 flex-col">
            <Link
              to="/about"
              className="hover:text-axiom-red transition-colors duration-300 "
            >
              <li>About us</li>
            </Link>
            <Link
              to="/threats"
              className="hover:text-axiom-red transition-colors duration-300"
            >
              <li>Threats</li>
            </Link>
            <Link
              to="/analytics"
              className="hover:text-axiom-red transition-colors duration-300"
            >
              <li>Analytics</li>
            </Link>
            <Link
              to="/dashboard"
              className="hover:text-axiom-red transition-colors duration-300"
            >
              <li>Dashboard</li>
            </Link>
            <Link
              to="/contact"
              className="hover:text-axiom-red transition-colors duration-300"
            >
              <li>Contact us</li>
            </Link>
          </ul>
        </div>
        <div className=" text-left">
          <h2 className="font-bold text-[20px] pb-5 text-vault-navy">Legal Terms</h2>
          <ul className="space-y-2 text-[16px] flex flex-col gap-2">
            <Link
              to="/terms"
              className="hover:text-axiom-red transition-colors duration-300"
            >
              <li>Terms of Use</li>
            </Link>
            <Link
              to="/privacy"
              className="hover:text-axiom-red transition-colors duration-300"
            >
              <li>Privacy Policy</li>
            </Link>
            <Link
              to="/cookies"
              className="hover:text-axiom-red transition-colors duration-300"
            >
              <li>Cookies Policy</li>
            </Link>
          </ul>
        </div>
        <div className=" text-left">
          <h2 className="font-bold text-[20px] pb-5 text-vault-navy">
            Contact Information
          </h2>
          <ul className="space-y-5 text-[16px] flex flex-col gap-2">
            <Link
              to="tel:+2349078214093" title='phone' tel="+2349078214093"
              className=" transition-colors duration-300"
            >
              <li className="flex items-center gap-3">
                <Phone size={20} />
                +234 907 821 4093, +234 808 527 6954
              </li>
            </Link>
            <Link
              to="#"
              className="transition-colors duration-300"
            >
              <li className="flex items-center gap-3">
                <MapPin size={20} /> Anambra State, Nigeria
              </li>
            </Link>
            <Link
              to="#"
              className=" transition-colors duration-300"
            >
              <li className="flex items-center gap-3">
                <Mail size={20} /> support@axiomvault.com
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <p className="text-center mt-5">
        © {new Date().getFullYear()} AxiomVault Inc. All rights reserved. <br />
        A subsidiary of Omnicipia.
      </p>
    </section>
  );
}

