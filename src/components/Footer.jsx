import React from 'react'
import {ShieldCheck, Mail, Phone, MapPin} from 'lucide-react'
import {Link} from "react-router-dom"
import LOGO from '../assets/LOGO.png'

export default function Footer() {
  return (
    <section className="py-6 text-sm text-gray-500">
      <div className=" border-b border-white/10 max-w-7xl pb-5 mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="flex flex-col gap-2">
          {/* <h1 className="flex items-center gap-2 font-bold text-[20px] text-white">
            {" "}
            <ShieldCheck size={16} className="font-bold" />
            AxiomVault
          </h1> */}
           <img src={LOGO} alt="AxiomVault Inc logo" className='w-40 ' />
          <p className="pt-5 font-medium text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eaque distinctio at, praesentium id sit?
          </p>
        </div>
        <div className="text-left">
          <h2 className="font-bold text-[20px] pb-5 text-white">Quick Links</h2>
          <ul className="space-y-2 text-[16px]">
            <Link
              to="/about"
              className="hover:text-white transition-colors duration-300"
            >
              <li>About us</li>
            </Link>
            <Link
              to="/threats"
              className="hover:text-white transition-colors duration-300"
            >
              <li>Threats</li>
            </Link>
            <Link
              to="/analytics"
              className="hover:text-white transition-colors duration-300"
            >
              <li>Analytics</li>
            </Link>
            <Link
              to="/dashboard"
              className="hover:text-white transition-colors duration-300"
            >
              <li>Dashboard</li>
            </Link>
            <Link
              to="/contact"
              className="hover:text-white transition-colors duration-300"
            >
              <li>Contact us</li>
            </Link>
          </ul>
        </div>
        <div className=" text-left">
          <h2 className="font-bold text-[20px] pb-5 text-white">Legal Terms</h2>
          <ul className="space-y-2 text-[16px]">
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              <li>Terms of Use</li>
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              <li>Privacy Policy</li>
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              <li>Cookies Policy</li>
            </Link>
          </ul>
        </div>
        <div className=" text-left">
          <h2 className="font-bold text-[20px] pb-5 text-white">
            Contact Information
          </h2>
          <ul className="space-y-5 text-[16px]">
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              <li className="flex items-center gap-3">
                <Phone size={20} />
                +2341234567890, +23455567890
              </li>
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              <li className="flex items-center gap-3">
                <MapPin size={20} /> San Francisco, CA, USA
              </li>
            </Link>
            <Link
              to="#"
              className="hover:text-white transition-colors duration-300"
            >
              <li className="flex items-center gap-3">
                <Mail size={20} /> support@axiomvault.com
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <p className="text-center mt-5">
        © {new Date().getFullYear()} AxiomVault. Inc Cybersecurity.
      </p>
    </section>
  );
}
