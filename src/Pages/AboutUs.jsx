import { motion } from "motion/react";
// import { motion } from "framer-motion";

import { Shield, Users, Target, Globe } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050B2C] via-[#0B1A4A] to-[#081029] text-white">
      {/* Header */}
      <Nav />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-35 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Securing the Digital Frontier
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg"
        >
          AxiomVault is a premier cybersecurity firm dedicated to fortifying
          modern digital enterprises. We converge managed detection and
          response, cloud security, and fraud intelligence to empower teams to
          eliminate risk without compromising velocity.
        </motion.div>
      </section>

      {/* Mission / Vision */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-10">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur rounded-2xl p-8"
        >
          <Target className="text-axiom-red mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            Empower organizations to detect, contain, and neutralize cyber
            threats through absolute real-time visibility and rapid, automated
            response.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur rounded-2xl p-8"
        >
          <Globe className="text-axiom-red mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            Make military-grade security architecture accessible to every
            growing enterprise, eliminating the need for complex tooling or
            oversized operations teams.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield />,
              title: "Security First",
              desc: "We build with zero-trust principles, least privilege, and immutable security defaults.",
            },
            {
              icon: <Users />,
              title: "Customer Focus",
              desc: "We align to your unique environment, threat landscape, and business objectives.",
            },
            {
              icon: <Target />,
              title: "Innovation",
              desc: "We iterate quickly to stay ahead of evolving threats.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur rounded-xl p-6"
            >
              <div className="text-axiom-red mb-3">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 rounded-2xl p-8 text-center">
          {[
            {
              label: "Clients",
              value: "500+",
            },
            {
              label: "Threats Blocked",
              value: "50M+",
            },
            {
              label: "Countries",
              value: "40+",
            },
            {
              label: "Uptime",
              value: "99.9%",
            },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-axiom-red">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur rounded-2xl p-10"
        >
          <h3 className="text-3xl font-bold mb-4 text-center">Our Story</h3>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            AxiomVault was founded by elite security engineers and incident
            responders who identified a critical gap: modern teams needed
            high-fidelity signal, millisecond response, and measurable security
            outcomes without a bloated stack. As a subsidiary of Omnicipia, we
            leverage enterprise-grade infrastructure, research, and innovation
            to architect a unified platform that fuses detection, investigation,
            and response—so teams can innovate fearlessly while staying
            protected.
          </p>
        </motion.div>
      </section>

      {/* What We Do */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold text-center mb-12">What We Do</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Managed Detection & Response (MDR)",
              desc: "24/7 monitoring with triage, containment, and guided recovery steps.",
            },
            {
              title: "Cloud & Endpoint Security",
              desc: "Visibility across cloud workloads, endpoints, and identity to stop lateral movement.",
            },
            {
              title: "Threat & Fraud Intelligence",
              desc: "Behavioral analytics and risk scoring for transactions and access attempts.",
            },
            {
              title: "Compliance & Reporting",
              desc: "Evidence-driven reporting designed to align with SOC 2, ISO 27001, and PCI.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur rounded-xl p-8"
            >
              <h4 className="text-xl font-semibold mb-3 text-axiom-red">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-10"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">
            Our Technology
          </h3>

          <p className="text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
            AxiomVault is built on a cloud-native security stack with behavioral
            analytics, automated playbooks, and real-time telemetry. Our engine
            continuously learns from live signals to reduce noise while
            increasing detection accuracy.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              "AI-Powered Detection",
              "Real-Time Processing",
              "Cloud Scalability",
              "Zero-Trust Architecture",
              "Encrypted Data Pipelines",
              "Automated Incident Response",
            ].map((tech, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-lg p-4 text-center text-sm text-gray-300 hover:bg-axiom-red transition-all duration-500 hover:scale-105 ease-in-out hover:font-bold"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Leadership & Culture */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-3xl font-bold text-center mb-10">
          Leadership & Culture
        </h3>

        <p className="text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
          Our team includes security engineers, incident responders, and
          analysts who have protected fintech, SaaS, and healthcare companies.
          We operate with transparency, clear escalation paths, and shared
          ownership of outcomes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            "Integrity & Accountability",
            "Diversity & Inclusion",
            "Customer-Centric Thinking",
            "Continuous Innovation",
            "Global Collaboration",
            "Ethical Technology",
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl p-6 text-center text-sm text-gray-300 hover:bg-axiom-red transition-all duration-500 hover:scale-105 ease-in-out"
            >
              {value}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-32 text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Partner With AxiomVault</h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Join teams protecting their digital assets with AxiomVault's
            security platform.
          </p>

          <Link to="/contact">
            <button className="bg-white text-axiom-red font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Contact Our Team
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        <Footer />
      </footer>
    </div>
  );
}
