"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, Check } from "lucide-react"
import confetti from "canvas-confetti"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        setSubmitStatus("success")
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00bcd4", "#3b82f6", "#8b5cf6"],
        })
        form.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 1500)
    } catch {
      alert("Unable to copy. Please copy manually.")
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 93248 95038"],
      color: "text-green-600",
      borderColor: "border-green-200",
      bgColor: "bg-green-100",
      onClick: () => copyToClipboard("+91 93248 95038"),
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ksyapsolution.com", "ksyapsolution@gmail.com"],
      color: "text-cyan-600",
      borderColor: "border-cyan-200",
      bgColor: "bg-cyan-100",
      isMultipleEmails: true,
    },
    {
      icon: MapPin,
      title: "Address",
      addresses: [
        {
          location: "India",
          details: ["Ksyap India - A203/Aims Building", "Eden Park Road, Thane 401105", "Mumbai"],
        },
        {
          location: "UK",
          details: ["Ksyap UK - 142 Midland Road", "Luton, UK"],
        },
      ],
      color: "text-purple-600",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-100",
      isMultipleAddress: true,
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background mesh - extremely subtle on light background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-purple-700 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss your project requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Get In Touch
            </h3>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              const isPhone = info.title === "Phone"
              const isEmail = info.title === "Email"
              const isAddress = info.title === "Address"

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onClick={isPhone ? info.onClick : undefined}
                  role={isPhone ? "button" : undefined}
                  tabIndex={isPhone ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (isPhone && (e.key === "Enter" || e.key === " ")) info.onClick?.()
                  }}
                  className={`glassmorphism-card-subtle p-6 rounded-2xl border ${info.borderColor} bg-gradient-to-br from-white/50 to-gray-50/50 backdrop-blur-sm hover:border-opacity-40 transition-all duration-300 flex items-start space-x-4 ${isPhone ? "cursor-pointer" : ""}`}
                >
                  <div className={`p-3 rounded-full ${info.bgColor} border ${info.borderColor}`}>
                    <IconComponent className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className={`text-lg font-semibold ${info.color}`}>{info.title}</h4>
                      {isPhone && copiedPhone && <Check className="h-4 w-4 text-green-600" aria-hidden="true" />}
                      {isPhone && copiedPhone && <span className="text-sm text-green-700">Copied</span>}
                    </div>

                    {/* Phone */}
                    {isPhone && (
                      <div className="mt-2 space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700">
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Email - Each on new line */}
                    {isEmail && (
                      <div className="mt-2 space-y-2">
                        {info.details.map((detail, idx) => (
                          <a
                            key={idx}
                            href={`mailto:${detail}`}
                            className="block text-gray-700 underline underline-offset-4 hover:text-cyan-700"
                          >
                            {detail}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Addresses - Both in one box with separate icons */}
                    {isAddress && info.addresses && (
                      <div className="mt-2 space-y-4">
                        {info.addresses.map((addr, addrIdx) => (
                          <div key={addrIdx} className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                            <div className="text-gray-700">
                              {addr.details.map((detail, detailIdx) => (
                                <p key={detailIdx}>{detail}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glassmorphism-card-subtle rounded-2xl border border-gray-200 bg-gradient-to-br from-white/50 to-gray-50/50 backdrop-blur-sm p-8"
          >
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
              {/* Netlify Forms controls */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-100/50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-gray-100/50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 backdrop-blur-sm"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-100/50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-100/50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="ripple-button w-full bg-gradient-to-r from-cyan-600 to-purple-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200 shadow-md shadow-gray-300 hover:shadow-gray-400"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 text-center font-medium bg-green-100 border border-green-200 rounded-lg p-3"
                >
                  ✅ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-center font-medium bg-red-100 border border-red-200 rounded-lg p-3"
                >
                  ❌ Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
