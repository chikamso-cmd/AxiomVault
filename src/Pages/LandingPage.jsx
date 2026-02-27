import { ShieldCheck, Activity, BarChart2, Radar, Menu, X } from "lucide-react";
import Nav from "../components/Nav";
import { Feature, Incident, Stats, Metric } from "../components/ThreatsStats";
import Footer from "../components/Footer";
import Onboarding from "../components/Onboarding";
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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#091F44] via-[#082044] to-[#092042] text-white font-sans pt-10">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
        {/* Left */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-axiom-red/10 text-axiom-red text-xs px-3 py-1 rounded-full mb-4">
            REAL-TIME THREAT INTELLIGENCE
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Enterprise <br />
            <span className="text-axiom-red">Cyber Defense</span>
          </h1>

          <p className="text-gray-300 max-w-lg mb-8">
            Real-time threat detection powered by AI. Stop fraud before it
            happens. Protect your enterprise with military-grade security and
            instant incident response.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-axiom-red hover:bg-[#A6470F] transition px-6 py-3 rounded-lg font-medium text-white w-full md:w-fit">
              Access Command Center →
            </button>

            <button className="border border-axiom-red hover:bg-axiom-red/10 transition px-6 py-3 rounded-lg font-medium text-axiom-red w-full md:w-fit">
              View Demo
            </button>
          </div>

          <div className="flex items-center gap-3 mt-8 text-sm text-gray-300">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-axiom-red" />
              <div className="w-6 h-6 rounded-full bg-[#A64711]" />
              <div className="w-6 h-6 rounded-full bg-[#A64613]" />
            </div>
            <span>50k+ threats blocked daily</span>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-[#092042]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-axiom-red">
                ACTIVE INCIDENTS
              </h3>
              <span className="w-2 h-2 bg-axiom-red rounded-full" />
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
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Enterprise Security Features
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Military-grade protection with instant incident response and threat
          intelligence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            icon={<Activity className="text-[#fffff]" />}
            title="Real-Time Monitoring"
            desc="Watch every transaction in real-time. Detect anomalies instantly."
          />
          <Feature
            icon={<BarChart2 className="text-[#fffff]" />}
            title="Risk Scoring"
            desc="AI-powered risk scoring. Know your threat level at a glance."
          />
          <Feature
            icon={<Radar className="text-[#fffff]" />}
            title="Threat Intelligence"
            desc="Global threat feeds. Exploit detection. Always ahead."
          />
        </div>
      </motion.div>

      {/* Stats */}
      <section className="bg-white/5 backdrop-blur py-12 ">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <Metric value="50K+" label="Threats Blocked Daily" />
          <Metric value="0.34s" label="Average Response Time" />
          <Metric value="99.7%" label="Detection Rate" />
          <Metric value="24/7" label="Enterprise Support" />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6 bg-white mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-vault-navy">
          Secure Your Enterprise Today
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Get real-time threat detection and incident response. Protect what
          matters most.
        </p>

        <button className="bg-axiom-red hover:bg-[#A6470F] transition px-8 py-3 rounded-lg font-medium text-white">
          Launch Command Center →
        </button>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="text-center py-20 px-6 bgimg bg-white relative">
          {/* overlay */}
          <div className="absolute inset-0 top-35 left-[50%] bg-accent-green rounded-full w-[50px] h-[50px] animate-ping  "></div>
          <div className="absolute inset-0 -top-5 left-0 bg-accent-green rounded-full w-[50px] h-[50px] animate-ping "></div>
          <div className="absolute inset-0 top-[99%] md:left-[96%] left-[83%] bg-accent-green rounded-full w-[50px] h-[50px] animate-ping "></div>
          <div className="absolute inset-0 top-5 left-0 bg-accent-green rounded-full w-[25px] h-[25px] animate-ping "></div>
         
          <Onboarding />
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-sm text-gray-500">
        <Footer />
      </footer>
    </div>
  );
}
