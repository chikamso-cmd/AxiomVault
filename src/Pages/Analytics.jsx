import React from "react";
import {
  BarChart2,
  Clock,
  TrendingUp,
  CreditCard,
  Globe,
  Smartphone,
} from "lucide-react";
import Nav from "../components/Nav";
import { Stat, Insight } from "../components/ThreatsStats";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B24] via-[#0B1C46] to-[#081436] text-white">
      {/* Navbar */}

      <Nav />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-14 text-center md:pt-35 pt-26">
        <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-green-500/10 text-axiom-red">
          AI-DRIVEN SOC ANALYTICS
        </span>

        <h1 className="text-3xl md:text-5xl font-bold text-axiom-red mb-4">
          Fraud Analytics
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          Gain deep visibility into anomalous transactions, identity risks, and
          user behavior with forensic-grade evidence for audit and compliance.
        </p>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <motion.div variants={itemVariants}>
            <Stat
              icon={<TrendingUp size={16} />}
              title="Total Transactions"
              value="2.4M"
              change="+18%"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Stat
              icon={<BarChart2 size={16} />}
              title="Fraud Detection Rate"
              value="99.97%"
              change="+2.1%"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Stat
              icon={<CreditCard size={16} />}
              title="False Positives"
              value="0.03%"
              change="-12%"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Stat
              icon={<Clock size={16} />}
              title="Avg Response Time"
              value="47ms"
              change="-8%"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Insights */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Key Insights</h2>
          <p className="text-gray-400">
            Prioritized intelligence for the incidents that matter most
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
            <Insight
              icon={<Clock size={18} />}
              title="Temporal Anomaly Detection"
              subtitle="21:00 - 23:00 UTC correlates with high-risk activity"
              value="34% of daily alerts"
              gradient="from-orange-500 to-red-500"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Insight
              icon={<CreditCard size={18} />}
              title="Top Fraud Category"
              subtitle="CNP and account recovery flows targetted"
              value="48% of all incidents"
              gradient="from-yellow-500 to-orange-500"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Insight
              icon={<Globe size={18} />}
              title="Geospatial Threat Vectors"
              subtitle="High-velocity login attempts cluster by region"
              value="22% of flagged sessions"
              gradient="from-orange-500 to-pink-500"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Insight
              icon={<Smartphone size={18} />}
              title="Device Fingerprint Risk"
              subtitle="Unrecognized devices correlate to higher risk scores"
              value="12.3% alert rate"
              gradient="from-pink-500 to-red-500"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Explore Your Analytics
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Build reports by customer, channel, or geography with live dashboards
        </p>

        <Link to="/dashboard">
          <button className="bg-axiom-red hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium">
            Open Analytics Dashboard
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        <Footer />
      </footer>
    </div>
  );
}
