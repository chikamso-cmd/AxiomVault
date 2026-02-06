import React from "react";
import {
  CreditCard,
  UserX,
  Fingerprint,
  AlertTriangle,
  Brain,
  Activity,
  Network,
  ScanFace,
} from "lucide-react";
import Nav from "../components/Nav";
import { ThreatStat, Method } from "../components/ThreatsStats";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Threats() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B24] via-[#0B1C46] to-[#081436] text-white pt-20">
      {/* Navbar */}
      <Nav />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 text-xs rounded-full bg-green-500/10 text-axiom-red">
          <Activity size={12} /> REAL-TIME THREAT DETECTION
        </span>

        <h1 className="text-3xl md:text-5xl font-bold text-axiom-red mb-4">
          Global Threat Landscape
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 mb-12">
          Monitor emerging attack vectors across payment gateways, identity
          fabrics, and shadow APIs with live telemetry from the AxiomVault
          Threat Intelligence Cloud.
        </p>

        {/* Threat Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div variants={itemVariants}>
            <ThreatStat
              icon={<CreditCard size={16} />}
              title="Card Not Present Fraud"
              value="2,847"
              change="-12%"
              color="orange"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ThreatStat
              icon={<UserX size={16} />}
              title="Credential Stuffing"
              value="1,423"
              change="-8%"
              color="yellow"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ThreatStat
              icon={<Fingerprint size={16} />}
              title="Identity Theft"
              value="3,192"
              change="-15%"
              color="red"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ThreatStat
              icon={<AlertTriangle size={16} />}
              title="Synthetic Fraud"
              value="892"
              change="-5%"
              color="pink"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Detection Methods */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Detection Methods
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Layered detections reduce blind spots and improve time-to-response
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div variants={itemVariants}>
            <Method
              icon={<Brain size={18} />}
              title="ML-Based Detection"
              desc="Models score behavior patterns and adapt to new attack paths"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Method
              icon={<Activity size={18} />}
              title="Behavioral Heuristics"
              desc="Session profiling flags lateral movement and anomaly clusters."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Method
              icon={<Network size={18} />}
              title="Network Intelligence"
              desc="Threat enrichment from IP, ASN, and reputation signals"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Method
              icon={<ScanFace size={18} />}
              title="Biometric Verification"
              desc="Step-up verification with phishing-resistant signals"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Start Protecting Your Business
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Deploy continuous monitoring, automated alert triage, and rapid
          response guidance in minutes.
        </p>

        <button className="bg-axiom-red hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium">
          Launch Console
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        <Footer />
      </footer>
    </div>
  );
}
