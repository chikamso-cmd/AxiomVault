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
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard title="Incidents Detected" value="142" change="+23%" />
          <StatCard title="Threats Blocked" value="50,847" change="+8.2%" />
          <StatCard title="Detection Rate" value="99.7%" change="+0.2%" />
          <StatCard title="Avg Response Time" value="340ms" change="-4.1%" />
        </section>

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

/* Components */

function StatCard({ title, value, change }) {
  const positive = !change.startsWith("-");

  return (
    <div className="bg-[#0B1F4A]/80 border border-white/10 rounded-xl p-4">
      <p className="text-xs text-gray-400 mb-1">{title}</p>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">{value}</h3>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            positive
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {change}
        </span>
      </div>
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

      <div className="space-y-3 text-sm">
        <Threat
          level="critical"
          title="DDoS Attack Detected"
          meta="2 minutes ago"
          blocked="245,000"
        />
        <Threat
          level="high"
          title="Unusual Login Pattern"
          meta="15 minutes ago"
          blocked="3,400"
        />
        <Threat
          level="high"
          title="Credential Stuffing Attempt"
          meta="32 minutes ago"
          blocked="1,240"
        />
        <Threat
          level="medium"
          title="SQL Injection Attempt"
          meta="1 hour ago"
          blocked="145"
        />
        <Threat
          level="low"
          title="Rate Limit Exceeded"
          meta="2 hours ago"
          blocked="56"
        />
      </div>

      <button className="w-full mt-4 py-2 border border-green-500/30 text-green-400 rounded-lg text-sm hover:bg-green-500/10">
        View All Threats →
      </button>
    </div>
  );
}

function Threat({ level, title, meta, blocked }) {
  const colors = {
    critical: "from-red-600/30 to-red-500/10 text-red-400",
    high: "from-orange-500/30 to-orange-400/10 text-orange-400",
    medium: "from-yellow-500/30 to-yellow-400/10 text-yellow-400",
    low: "from-green-500/30 to-green-400/10 text-green-400",
  };

  return (
    <div
      className={`bg-gradient-to-r ${colors[level]} rounded-lg p-3 border border-white/5`}
    >
      <div className="flex justify-between mb-1">
        <p className="font-medium">{title}</p>
        <span className="text-xs">{meta}</span>
      </div>
      <p className="text-xs text-gray-300">Blocked: {blocked} requests</p>
    </div>
  );
}

function Timeline() {
  return (
    <div className="bg-[#0B1F4A]/70 border border-white/10 rounded-xl p-4">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <Activity size={16} className="text-blue-400" /> Incident Timeline
      </h3>

      <div className="space-y-4 text-sm">
        <TimelineItem
          time="14:32"
          title="DDoS Attack Initiated"
          status="MITIGATED"
          color="red"
        />
        <TimelineItem
          time="14:28"
          title="Credential Stuffing Detected"
          status="BLOCKED"
          color="orange"
        />
        <TimelineItem
          time="14:15"
          title="System Health Check"
          status="NORMAL"
          color="green"
        />
      </div>
    </div>
  );
}

function TimelineItem({ time, title, status, color }) {
  const map = {
    red: "text-red-400 bg-red-500/20",
    orange: "text-orange-400 bg-orange-500/20",
    green: "text-green-400 bg-green-500/20",
  };

  return (
    <div className="flex items-start gap-3">
      <div className="text-xs text-gray-400 w-10">{time}</div>
      <div className="flex-1">
        <p className="font-medium">{title}</p>
        <span
          className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${map[color]}`}
        >
          {status}
        </span>
      </div>
    </div>
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

function StatusRow({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">{label}</span>
      <span className="text-green-400 font-medium">{value}</span>
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

function Action({ icon, text }) {
  return (
    <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#081733] hover:bg-[#102A64] transition">
      <span className="flex items-center gap-2">
        {icon}
        {text}
      </span>
      <span className="text-green-400">→</span>
    </button>
  );
}
