
import { ShieldCheck, Activity, BarChart2, Radar, Menu, X } from "lucide-react";
import Nav from "../components/Nav";
import {Feature, Incident, Stats, Metric} from  '../components/ThreatsStats'
// import { motion } from "framer-motion";
import Footer from "../components/Footer";

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


export default function LandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B24] via-[#0B1C46] to-[#081436] text-white font-sans pt-10">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-30">
        {/* Left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block bg-green-500/10 text-axiom-red text-xs px-3 py-1 rounded-full mb-4">
              REAL-TIME THREAT INTELLIGENCE
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Enterprise <br />
              <span className="text-axiom-red">Cyber Defense</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-gray-300 max-w-lg mb-8">
              AxiomVault delivers managed detection, cloud security, and fraud
              intelligence in one platform. Gain visibility across identity,
              endpoints, and applications, then respond fast with guided
              playbooks.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ul className="text-sm text-gray-300 space-y-2 mb-8">
              <li>Unified telemetry across cloud, endpoint, and identity</li>
              <li>Behavioral analytics that reduce noise and false positives</li>
              <li>24/7 analyst-backed response and investigation support</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap gap-4">
              <button className="bg-axiom-red hover:bg-axiom-red transition px-6 py-3 rounded-lg font-medium">
                Access Command Center
              </button>
              <button className="border border-gray-400 hover:border-white transition px-6 py-3 rounded-lg font-medium">
                View Demo
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mt-8 text-sm text-gray-400">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-orange-500" />
                <div className="w-6 h-6 rounded-full bg-orange-400" />
                <div className="w-6 h-6 rounded-full bg-orange-300" />
              </div>
              <span>High-fidelity alerts prioritized by risk</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="relative"
        >
          <div className="bg-[#0B1F4A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold axiom-red">
                ACTIVE INCIDENTS
              </h3>
              <span className="w-2 h-2 bg-green-400 rounded-full" />
            </div>

            <div className="space-y-4 text-sm">
              <Incident title="DDoS Attack Detected" value="+23%" />
              <Incident title="Unusual Login Pattern" value="+18%" />
              <Incident title="API Abuse Blocked" value="+12%" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-xs">
              <Stats label="Response Time" value="0.34s" />
              <Stats label="Detection Rate" value="99.7%" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Enterprise Security Features
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Purpose-built controls for detection, investigation, and response
          across modern environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={itemVariants}>
            <Feature
              icon={<Activity className="text-axiom-red" />}
              title="Real-Time Monitoring"
              desc="Correlate identity, endpoint, and network signals in seconds."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Feature
              icon={<BarChart2 className="text-axiom-red" />}
              title="Risk Scoring"
              desc="Adaptive scoring to surface high-impact incidents first."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Feature
              icon={<Radar className="text-axiom-red" />}
              title="Threat Intelligence"
              desc="Curated intel feeds with automated enrichment and context."
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="bg-[#07142F] py-12"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div variants={itemVariants}>
            <Metric value="50K+" label="Signals Processed Daily" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Metric value="0.34s" label="Average Alert Enrichment" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Metric value="99.7%" label="Detection Rate" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Metric value="24/7" label="Analyst Coverage" />
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Secure Your Enterprise Today
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Get continuous monitoring, clear incident timelines, and response
          guidance designed for security and IT teams.
        </p>

        <button className="bg-axiom-red hover:bg-orange-600 transition px-8 py-3 rounded-lg font-medium">
          Launch Command Center 
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <Footer />
        </div>
      </footer>
    </div>
  );
}


