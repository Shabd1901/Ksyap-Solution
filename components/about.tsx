"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"

export default function About() {
  const emails = ["ksyapsolution@gmail.com", "info@ksyapsolution.com"]
  const phoneDisplay = "+91 97696 37525"
  const phoneDial = "919769637525"

  const social = {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
  }

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">About</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl border border-blue-200 bg-gradient-to-br from-white/60 to-blue-50/50 backdrop-blur-md p-8 shadow-sm"
          >
            <p className="text-lg leading-8 text-slate-800">
              Ksyap solution is a Mumbai/India based software service provider company. Established in 2016, we have
              clients in India, US, Australia, Singapore, UAE and Africa. We provide software services in Oracle JD
              Edwards, SAP, Netsuite, Oracle Cloud Application, Sales Force, Hyland Onbase System, Oracle Retail
              Merchandise, Web Development and Mobile application Development.
            </p>
            <p className="text-lg leading-8 text-slate-800 mt-6">
              We are experts of dealing in Implementation, Support, Migration, Helpdesk support, Upgrade, Auditing,
              Assessment, Training and Testing. We also provide resources on hourly basis or contract basis.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white/60 to-blue-50/50 backdrop-blur-md p-8 shadow-sm"
            aria-labelledby="about-contact-title"
          >
            <h3 id="about-contact-title" className="text-xl font-semibold text-slate-900 mb-4">
              Get in touch
            </h3>

            <div className="space-y-3">
              {emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 p-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition"
                  aria-label={`Email ${email}`}
                >
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-800">{email}</span>
                </a>
              ))}

              <a
                href={`tel:${phoneDial}`}
                className="flex items-center gap-3 p-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition"
                aria-label={`Call ${phoneDisplay}`}
              >
                <Phone className="h-5 w-5 text-mint-600" />
                <span className="text-slate-800">{phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${phoneDial}?text=${encodeURIComponent("Hello Ksyap Solution")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-mint-600" />
                <span className="text-slate-800">WhatsApp</span>
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-slate-600 mb-2">Follow us</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-blue-200 hover:bg-blue-50 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-blue-600" />
                </a>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-blue-200 hover:bg-blue-50 transition"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                </a>
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-blue-200 hover:bg-blue-50 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-cyan-600" />
                </a>
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-blue-200 hover:bg-blue-50 transition"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-blue-600" />
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
