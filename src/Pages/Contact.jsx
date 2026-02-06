import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d198d767-1254-4e77-81e3-b318b880593e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <Nav />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-axiom-red">Axiom Vault</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Schedule a consultation with our threat researchers and solution
            architects. We are here to assist with deployment, incident
            response, and enterprise support.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-400">
                Reach out through our secure channels below. Our team typically
                responds within one business day.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-axiom-red/10 text-orange-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400">support@axiomvault.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-axiom-red/10 text-orange-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-400">
                    +234 907 821 4093, +234 808 527 6954
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-axiom-red/10 text-orange-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-gray-400">Anambra State, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-axiom-red"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-axiom-red"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-axiom-red resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-axiom-red hover:bg-orange-600 transition rounded-xl py-3 font-medium shadow-lg"
              >
                <Send size={18} />
                Send Message
              </button>
              <span className="block text-center text-sm text-gray-400 mt-4">
                {result}
              </span>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-gray-500 text-sm">
          <Footer />
        </div>
      </div>
    </div>
  );
}
