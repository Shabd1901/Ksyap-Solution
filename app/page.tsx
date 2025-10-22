"use client"

import { useState, useEffect } from "react"
import Loader from "@/components/loader"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Vision from "@/components/vision"
import ServicesMarquee from "@/components/services-marquee" // This component now handles "Our Services"
import AreasOfService from "@/components/areas-of-service"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Vision />
      <ServicesMarquee /> {/* This is your "Our Services" marquee */}
      <AreasOfService />
      <Contact />
      <Footer />
    </div>
  )
}
