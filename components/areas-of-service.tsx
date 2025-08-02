"use client"

import { motion } from "framer-motion"
import {
  Server,
  CloudCog,
  Boxes,
  Settings2,
  Users,
  GraduationCap,
  FileStack,
  Smartphone,
  Laptop,
  ShoppingCart,
} from "lucide-react"

export default function AreasOfService() {
  const areas = [
    {
      title: "Oracle JD Edwards",
      description: [
        "Business Analysis & Solution Designing",
        "Implementation & Post Go live Support",
        "Process and Object Assessment",
        "Helpdesk and Multiclient Support",
        "System enhancement and technical Development",
        "Product Development",
        "Modules: Financial Management, Order Management, Supply Chain Planning, Manufacturing, Procurement, HCM, Reporting & BI, Technical Development, CNC",
      ],
      icon: Server,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Oracle Fusion Cloud Applications",
      description: ["Modules: Financial Management, Procurement Management, HCM, Supply Chain and Manufacturing"],
      icon: CloudCog,
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      title: "Oracle NetSuite",
      description: [
        "Human Resource Management",
        "Financials",
        "Analytics and Business Intelligence",
        "Supply chain, Inventory and Order Management",
      ],
      icon: Boxes,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "SAP",
      description: [
        "Human Resource Management (SAP HRM)",
        "Production Planning (SAP PP)",
        "Material Management (SAP MM)",
        "Financial Supply Chain Management (SAP FSCM)",
        "Sales and Distribution (SAP SD)",
        "Project System (SAP PS)",
        "Financial Accounting and Controlling (SAP FICO)",
      ],
      icon: Settings2,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Salesforce",
      description: ["Offering – Salesforce Administration"],
      icon: Users,
      gradient: "from-sky-500 to-blue-500",
    },
    {
      title: "Training",
      description: [
        "Offering below programs for your career growth and leadership:",
        "Oracle JD Edwards: Financial Management, Sales and Distribution, Manufacturing, HR and Payroll, Technical, CNC",
      ],
      icon: GraduationCap,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      title: "OnBase",
      description: [
        "Implementation and configuration",
        "Customization and development",
        "Training and support",
        "Migration and data conversion",
        "Performance tuning and optimization",
      ],
      icon: FileStack, // or use FileText if you prefer
      gradient: "from-pink-500 to-red-500",
    },
    {
      title: "Mobile App Development",
      description: "Mobile Application Development Services",
      icon: Smartphone,
      gradient: "from-rose-500 to-pink-500",
    },
    {
      title: "Website Development",
      description: ["WordPress", "React", "Angular"],
      icon: Laptop,
      gradient: "from-teal-500 to-green-500",
    },
    {
      title: "Oracle Retail Merchandising System",
      description: [
        "Product management",
        "Inventory replenishment",
        "Purchasing",
        "Vendor management",
        "Financial tracking",
        "Reporting and analytics",
      ],
      icon: ShoppingCart,
      gradient: "from-orange-500 to-yellow-500",
    },
  ]

  return (
    <section id="areas-of-service" className="py-20 px-4 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-700 to-cyan-600 bg-clip-text text-transparent">
              Our Areas of Service
            </span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Comprehensive technology services across multiple business domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden cursor-pointer rounded-2xl border border-gray-200 bg-gradient-to-br from-white/50 to-gray-50/50 backdrop-blur-md p-6 transition-all duration-500 shadow-sm hover:shadow-xl min-h-[100px]"
              >
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${area.gradient} bg-opacity-10 border border-gray-200 mb-4 w-fit mx-auto`}
                >
                  <IconComponent className="h-7 w-7 text-gray-800" />
                </div>

                <h3 className="text-center text-lg font-bold mb-2 bg-gradient-to-r from-purple-700 to-cyan-600 bg-clip-text text-transparent">
                  {area.title}
                </h3>

                <div className="max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden text-center">
                  {Array.isArray(area.description) ? (
                    <ul className="text-sm text-gray-700 mt-2 px-4 list-disc text-left space-y-1">
                      {area.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-700 mt-2 px-2">{area.description}</p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
