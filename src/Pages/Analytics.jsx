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

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B24] via-[#0B1C46] to-[#081436] text-white">
      {/* Navbar */}
      
      <Nav />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-14 text-center">
        <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400">
          AI ADVANCED ANALYTICS DASHBOARD
        </span>

        <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-4">
          Fraud Analytics
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          Deep insights into fraud patterns, trends, and performance metrics
          across your entire ecosystem
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat
            icon={<TrendingUp size={16} />}
            title="Total Transactions"
            value="2.4M"
            change="+18%"
          />
          <Stat
            icon={<BarChart2 size={16} />}
            title="Fraud Detection Rate"
            value="99.97%"
            change="+2.1%"
          />
          <Stat
            icon={<CreditCard size={16} />}
            title="False Positives"
            value="0.03%"
            change="-12%"
          />
          <Stat
            icon={<Clock size={16} />}
            title="Avg Response Time"
            value="47ms"
            change="-8%"
          />
        </div>
      </section>

      {/* Insights */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Key Insights</h2>
          <p className="text-gray-400">
            Actionable intelligence to optimize your fraud prevention strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Insight
            icon={<Clock size={18} />}
            title="Peak Fraud Hours"
            subtitle="9 PM - 11 PM shows highest fraud activity"
            value="34% of daily fraud"
            gradient="from-orange-500 to-red-500"
          />
          <Insight
            icon={<CreditCard size={18} />}
            title="Top Fraud Category"
            subtitle="Card-not-present transactions"
            value="48% of all fraud"
            gradient="from-yellow-500 to-orange-500"
          />
          <Insight
            icon={<Globe size={18} />}
            title="Geographic Hotspot"
            subtitle="Southeast region requires enhanced monitoring"
            value="22% of transactions"
            gradient="from-orange-500 to-pink-500"
          />
          <Insight
            icon={<Smartphone size={18} />}
            title="Device Risk Factor"
            subtitle="New devices have higher fraud rate"
            value="12.3% fraud rate"
            gradient="from-pink-500 to-red-500"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Explore Your Analytics
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Get detailed analytics, custom reports, and real-time dashboards
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium">
          Open Analytics Dashboard →
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © 2026 FraudShield. Enterprise Fraud Detection.
      </footer>
    </div>
  );
}

/* Components */

