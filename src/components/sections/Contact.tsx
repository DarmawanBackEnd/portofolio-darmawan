"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }
    
    setStatus("sending");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      // If no key is set yet, simulate successful submission for development
      setTimeout(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Message from ${name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-xs font-semibold text-purple-400 mb-3"
          >
            <MessageSquare className="h-3 w-3" />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Let's Start <span className="text-gradient">Collaborating</span>
          </motion.h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-indigo-500" />
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                Do you have an exciting project, a full-time job opportunity, or just want to say hi? Please feel free to reach out to me directly via email or use the contact form. I will get back to you as soon as possible!
              </p>

              <div className="space-y-6">
                <a href="mailto:wibisonodarmawan59@gmail.com" className="flex items-center gap-4 group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Official Email</h4>
                    <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">contact@darmawan.dev</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/darmawan-wibisono-933227324/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">LinkedIn Profile</h4>
                    <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">linkedin.com/in/darmawan wibisono</p>
                  </div>
                </a>

                <a href="https://github.com/DarmawanBackEnd" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">GitHub Portfolio</h4>
                    <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">github.com/DarmawanBackEnd</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Premium Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="h-16 w-16 bg-teal-500/15 border border-teal-500/30 text-teal-400 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                      Thank you for your message. I have received it and will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 text-xs font-bold rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name Input */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="form-name" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name..."
                        disabled={status === "sending"}
                        className="w-full rounded-xl border border-white/10 bg-gray-950/60 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-gray-950/80 focus:shadow-md focus:shadow-indigo-500/5 disabled:opacity-50"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="form-email" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@domain.com"
                        disabled={status === "sending"}
                        className="w-full rounded-xl border border-white/10 bg-gray-950/60 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-gray-950/80 focus:shadow-md focus:shadow-indigo-500/5 disabled:opacity-50"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="form-message" className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                        Your Message
                      </label>
                      <textarea
                        id="form-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your message or job details here..."
                        disabled={status === "sending"}
                        className="w-full rounded-xl border border-white/10 bg-gray-950/60 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:bg-gray-950/80 focus:shadow-md focus:shadow-indigo-500/5 resize-none disabled:opacity-50"
                      />
                    </div>

                    {status === "error" && (
                      <div className="text-red-400 text-xs font-semibold bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl">
                        Failed to send message. Please configure your Web3Forms Access Key or email directly to contact@darmawan.dev
                      </div>
                    )}

                    {/* Action Button */}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-500 py-3.5 text-sm font-bold text-white transition-all hover:opacity-95 hover:shadow-lg hover:shadow-indigo-500/10 disabled:opacity-50"
                    >
                      {status === "sending" ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
