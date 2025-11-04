"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ]

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "Vision", href: "#vision" },
    { name: "Services", href: "#services-marquee" },
    { name: "Areas", href: "#areas-of-service" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Oracle JD Edwards",
    "Oracle Cloud Fusion",
    "Oracle NetSuite",
    "SAP Solutions",
    "Salesforce",
    "Mobile & Web Development",
  ]

  return (
    <footer className="relative border-t border-slate-700">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-800/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Ksyap</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solution</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Transforming businesses through innovative technology solutions. Your trusted partner for digital
              transformation in the age of tomorrow.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    //https://www.linkedin.com/company/ksyap-solution/
                    className="p-3 border border-slate-600 rounded-full hover:border-cyan-400 hover:bg-slate-700/50 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-slate-300 group-hover:text-cyan-400" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 group-hover:scale-105 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-slate-300 flex items-center">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-700 mt-12 pt-8 text-center"
        >
          <p className="text-slate-400">
            © {currentYear} Ksyap Solution. All rights reserved. | Designed with ❤️ for the future of business.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
