"use client"

import { motion } from "framer-motion"
import {
  Database,
  Cloud,
  Boxes,
  Users,
  GraduationCap,
  FileStack,
  Smartphone,
  Globe,
  Code,
  ShoppingCart,
} from "lucide-react"

const services = [
  {
    title: "Oracle JD Edwards",
    description:
      "Oracle JD Edwards EnterpriseOne is an integrated ERP software suite. JDE is unique in that organizations running their business processes through the software have choice of database and deployment options. JD Edwards can be deployed on-premise or on the cloud (private, public, or hybrid cloud).",
    icon: Database,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Oracle Cloud Fusion Applications",
    description:
      "Oracle Fusion Applications are a suite of applications built on Oracle Cloud, including cloud-based applications for enterprise resource planning, enterprise performance management, supply chain management and manufacturing, human capital management, and customer experience.",
    icon: Cloud,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Oracle NetSuite",
    description:
      "It's the leading integrated cloud business software suite for enterprise resource planning. It helps you manage inventory, track financials, host e-commerce stores and maintain customer relationship management systems.",
    icon: Boxes,
    gradient: "from-mint-500 to-cyan-500",
  },
  {
    title: "SAP",
    description:
      "SAP is one of the world's leading producers of software for the management of business processes. SAP also develops solutions that facilitate effective data processing and streamline information flow across organizations.",
    icon: Code,
    gradient: "from-blue-600 to-blue-500",
  },
  {
    title: "Sales Force",
    description:
      "Sales Force provides customer relationship management software and applications focused on sales, customer service, marketing automation, e-commerce, analytics, and application development.",
    icon: Users,
    gradient: "from-cyan-600 to-cyan-500",
  },
  {
    title: "App> Mobile Application Development Services",
    description:
      "Have an idea to develop an app for yourself, a group, an enterprise, or Organization, we are available to provide you with an application that will fulfill your idea into reality.",
    icon: Smartphone,
    gradient: "from-slate-600 to-slate-500",
  },
  {
    title: "Website Development",
    description: "We are available to provide you with a website that will fulfill your idea into reality.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Corporate Training",
    description:
      "Would like to get trained into your choice of Software, Skills or program? We provide Corporate, group and individual training onsite to the client, remotely to anywhere on the globe.",
    icon: GraduationCap,
    gradient: "from-mint-600 to-mint-500",
  },
  {
    title: "OnBase",
    description:
      "OnBase is a powerful enterprise content management (ECM) platform that can help your organization improve its efficiency and productivity. Our OnBase consulting services can help you implement, configure, customize, and develop OnBase to meet your specific needs. We also offer training and support services to help you get the most out of your OnBase investment.",
    icon: FileStack,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Oracle Retail Merchandising System",
    description:
      "Underlying every well-run retailer are the efficiencies, business processes, and infrastructure necessary to make sure customers get the product they want, at a price they want, when and where they want it. A real-time, exception-based view across all merchandising transaction data provides retailers with the information they need to make better-informed, rapid decisions, based on a single version of the truth.",
    icon: ShoppingCart,
    gradient: "from-cyan-500 to-blue-600",
  },
]

const ServicesMarquee = () => {
  return (
    <section
      id="services-marquee"
      className="py-20 px-4 bg-gradient-to-br from-slate-50 via-mint-50/50 to-slate-50 overflow-hidden relative"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Services Provided
          </span>
        </h2>
        <p className="text-slate-700 text-xl">Innovative digital solutions built for business success</p>
      </div>

      <div className="marquee-container relative w-full overflow-hidden overflow-x-auto group hide-scrollbar">
        <div className="marquee-content flex w-max animate-marquee group-hover:pause-marquee gap-8 py-4">
          {[...services, ...services].map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group/tile relative min-w-[300px] max-w-xs bg-white/80 border border-blue-200 shadow-lg rounded-xl p-6 transition-all duration-500 overflow-hidden hover:z-20 cursor-pointer flex flex-col justify-between"
              >
                <div
                  className={`p-4 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 border border-slate-200 mb-4 w-fit mx-auto`}
                >
                  <Icon className="h-8 w-8 text-slate-800" />
                </div>

                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-center">
                  {service.title}
                </h3>

                <div className="max-h-0 opacity-0 group-hover/tile:max-h-60 group-hover/tile:opacity-100 transition-all duration-500 ease-in-out overflow-hidden text-center">
                  <p className="text-sm text-slate-700 mt-2">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesMarquee
