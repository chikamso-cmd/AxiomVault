
import { ShieldCheck, Activity, BarChart2, Radar, Menu, X } from "lucide-react";
import Nav from "../components/Nav";


export default function LandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B24] via-[#0B1C46] to-[#081436] text-white font-sans pt-10">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <span className="inline-block bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full mb-4">
            REAL-TIME THREAT INTELLIGENCE
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Enterprise <br />
            <span className="text-orange-500">Cyber Defense</span>
          </h1>

          <p className="text-gray-300 max-w-lg mb-8">
            Real-time threat detection powered by AI. Stop fraud before it
            happens. Protect your enterprise with military-grade security and
            instant incident response.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium">
              Access Command Center →
            </button>

            <button className="border border-green-500 hover:border-white transition px-6 py-3 rounded-lg font-medium">
              View Demo
            </button>
          </div>

          <div className="flex items-center gap-3 mt-8 text-sm text-gray-400">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-orange-500" />
              <div className="w-6 h-6 rounded-full bg-orange-400" />
              <div className="w-6 h-6 rounded-full bg-orange-300" />
            </div>
            <span>50k+ threats blocked daily</span>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative">
          <div className="bg-[#0B1F4A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-green-400">
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
              <Stat label="Response Time" value="0.34s" />
              <Stat label="Detection Rate" value="99.7%" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Enterprise Security Features
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Military-grade protection with instant incident response and threat
          intelligence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            icon={<Activity className="text-green-400" />}
            title="Real-Time Monitoring"
            desc="Watch every transaction in real-time. Detect anomalies instantly."
          />
          <Feature
            icon={<BarChart2 className="text-green-400" />}
            title="Risk Scoring"
            desc="AI-powered risk scoring. Know your threat level at a glance."
          />
          <Feature
            icon={<Radar className="text-green-400" />}
            title="Threat Intelligence"
            desc="Global threat feeds. Exploit detection. Always ahead."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#07142F] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Metric value="50K+" label="Threats Blocked Daily" />
          <Metric value="0.34s" label="Average Response Time" />
          <Metric value="99.7%" label="Detection Rate" />
          <Metric value="24/7" label="Enterprise Support" />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Secure Your Enterprise Today
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Get real-time threat detection and incident response. Protect what
          matters most.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-lg font-medium">
          Launch Command Center →
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-green-500 font-bold">
            <ShieldCheck size={16} className="text-green-500" />
            AxiomVault
          </div>

          <p>
            © {new Date().getFullYear()} AxiomVault. Inc Cybersecurity.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-[#0B1F4A]/70 border border-white/10 rounded-2xl p-6 text-left shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  );
}

function Incident({ title, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-300">{title}</span>
      <span className="text-red-400 font-medium">{value}</span>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-[#081733] rounded-lg p-3 text-center">
      <p className="text-green-400 font-semibold">{value}</p>
      <p className="text-gray-400 mt-1">{label}</p>
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <p className="text-green-400 text-2xl font-bold mb-1">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
