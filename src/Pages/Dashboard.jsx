import React from "react";
import {
  Shield,
  Bell,
  Activity,
  AlertTriangle,
  CheckCircle,
  FileText,
} from "lucide-react";
import Nav from "../components/Nav";
import {
  Threat,
  TimelineItem,
  StatCard,
  StatusRow,
  Action,
} from "../components/ThreatsStats";
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

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B24] via-[#0B1C46] to-[#081436] text-white font-sans pt-25">
      <div>
        <Nav />
      </div>
      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">
              Security Command Center
            </h1>
            <p className="text-sm text-gray-400">
              Real-time threat monitoring and incident response
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {["1h", "24h", "7d", "30d"].map((t) => (
              <button
                key={t}
                className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                  t === "24h"
                    ? "bg-green-500 text-black"
                    : "bg-[#0B1F4A] text-gray-300 hover:bg-[#102A64]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          <motion.div variants={itemVariants}>
              <StatCard title="Incidents Detected" value="142" change="+23%" />
          </motion.div>
          <motion.div variants={itemVariants}>
              <StatCard title="Threats Blocked" value="50,847" change="+8.2%" />
          </motion.div>
          <motion.div variants={itemVariants}>
              <StatCard title="Detection Rate" value="99.7%" change="+0.2%" />
          </motion.div>
          <motion.div variants={itemVariants}>
              <StatCard title="Avg Response Time" value="340ms" change="-4.1%" />
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <ActiveThreats />
            <Timeline />
          </div>

          {/* Right */}
          <div className="space-y-6">
            <SystemStatus />
            <RiskLevel />
            <QuickActions />
          </div>
        </section>
      </main>
    </div>
  );
}



function ActiveThreats() {
  return (
    <div className="bg-[#0B1F4A]/70 border border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <AlertTriangle size={16} className="text-red-400" /> Active Threats
        </h3>
        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
          ● Live
        </span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="space-y-3 text-sm"
      >
        <motion.div variants={itemVariants}>
          <Threat
            level="critical"
            title="DDoS Attack Detected"
            meta="2 minutes ago"
            blocked="245,000"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
            <Threat
              level="high"
              title="Unusual Login Pattern"
              meta="15 minutes ago"
              blocked="3,400"
            />
        </motion.div>
        <motion.div variants={itemVariants}>
            <Threat
              level="high"
              title="Credential Stuffing Attempt"
              meta="32 minutes ago"
              blocked="1,240"
            />
        </motion.div>
        <motion.div variants={itemVariants}>
            <Threat
              level="medium"
              title="SQL Injection Attempt"
              meta="1 hour ago"
              blocked="145"
            />
        </motion.div>
        <motion.div variants={itemVariants}>
            <Threat
              level="low"
              title="Rate Limit Exceeded"
              meta="2 hours ago"
              blocked="56"
            />
        </motion.div>
      </motion.div>

      <button className="w-full mt-4 py-2 border border-green-500/30 text-green-400 rounded-lg text-sm hover:bg-green-500/10">
        View All Threats →
      </button>
    </div>
  );
}


function Timeline() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="bg-[#0B1F4A]/70 border border-white/10 rounded-xl p-4"
    >
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Activity size={16} className="text-blue-400" /> Incident Timeline
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="space-y-4 text-sm"
      >
        <motion.div variants={itemVariants}>
          <TimelineItem
            time="14:32"
            title="DDoS Attack Initiated"
            status="MITIGATED"
            color="red"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TimelineItem
            time="14:28"
            title="Credential Stuffing Detected"
            status="BLOCKED"
            color="orange"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <TimelineItem
            time="14:15"
            title="System Health Check"
            status="NORMAL"
            color="green"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}



function SystemStatus() {
  return (
    <div className="bg-[#0B1F4A]/70 border border-white/10 rounded-xl p-4">
      <h3 className="font-semibold mb-4">System Status</h3>

      <div className="space-y-3 text-sm">
        <StatusRow label="Uptime" value="99.98%" />
        <StatusRow label="Load" value="34%" />
        <StatusRow label="Latency" value="12ms" />
        <StatusRow label="Errors" value="0" />
      </div>
    </div>
  );
}



function RiskLevel() {
  return (
    <div className="bg-[#0B1F4A]/70 border border-white/10 rounded-xl p-4 text-center">
      <h3 className="font-semibold mb-4">Overall Risk Level</h3>

      <div className="relative w-28 h-28 mx-auto mb-3">
        <div className="absolute inset-0 rounded-full border-8 border-green-500/20" />
        <div className="absolute inset-2 rounded-full border-8 border-green-400" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-green-400">25%</p>
          <p className="text-xs text-gray-400">LOW</p>
        </div>
      </div>

      <ul className="text-xs text-gray-400 space-y-1">
        <li>✓ All systems secure</li>
        <li>✓ No active threats</li>
        <li>✓ Normal traffic patterns</li>
      </ul>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="bg-[#0B1F4A]/70 border border-white/10 rounded-xl p-4">
      <h3 className="font-semibold mb-4">Quick Actions</h3>

      <div className="space-y-3 text-sm">
        <Action icon={<FileText size={14} />} text="Generate Report" />
        <Action icon={<CheckCircle size={14} />} text="Review Logs" />
        <Action icon={<Activity size={14} />} text="Test Response" />
      </div>
    </div>
  );
}


