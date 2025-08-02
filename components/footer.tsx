"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

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
    { name: "Services", href: "#services-marquee" }, // Updated ID
    { name: "Areas", href: "#areas-of-service" }, // Added for clarity
    { name: "Team", href: "#team" },
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
    <footer className="relative border-t border-gray-200">
      {/* Background - adjusted for light theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/70 to-white" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl" />{" "}
        {/* Adjusted for light theme */}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">Ksyap</span>{" "}
              <span className="bg-gradient-to-r from-purple-700 to-cyan-600 bg-clip-text text-transparent">
                Solution
              </span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
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
                    className="p-3 glassmorphism-card-subtle border border-gray-200 rounded-full hover:border-gray-300 transition-all duration-300 group" /* Adjusted for light theme */
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
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
            <h4 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="w-1 h-1 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-full mr-3 group-hover:scale-105 transition-transform duration-300" />
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
            <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-700 to-cyan-600 bg-clip-text text-transparent">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-700 flex items-center">
                  <span className="w-1 h-1 bg-gradient-to-r from-purple-700 to-cyan-600 rounded-full mr-3" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 to-purple-700 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <div className="text-gray-700">
                  <p>A203/Aims Building, Opposite K.D.Empire</p>
                  <p>Indralok Phase 6, Thane 401105</p>
                  <p>Mumbai, Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div className="text-gray-700">
                  <p>+91 97696 37525</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                <div className="text-gray-700">
                  <p>ksyapsolution@gmail.com</p>
                  <p>info@ksyapsolution.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 mt-12 pt-8 text-center"
        >
          <p className="text-gray-600">
            © {currentYear} Ksyap Solution. All rights reserved. | Designed with ❤️ for the future of business.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
