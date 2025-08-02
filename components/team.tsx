"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Shabdansh Prajapati",
      role: "Team Lead, UI/UX Developer",
      initials: "SP",
      bio: "Visionary leader with 5+ years in Website Development and ERP Solution Architect.",
      linkedin: "#",
      email: "prajapatishabdansh@gmail.com",
    },
    {
      name: "Shivam Sharma",
      role: "Web Developer",
      initials: "SS",
      bio: "Technology expert specializing in Web and App development technologies.",
      linkedin: "#",
      email: "shivamsharma@gmail.com",
    },
  ]

  return (
    <section id="team" className="py-20 px-4 relative">
      {/* Background mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-600 to-purple-700 bg-clip-text text-transparent">Our Team</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Meet the brilliant minds behind our innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative cursor-pointer rounded-2xl border border-gray-200 bg-gradient-to-br from-white/60 to-gray-50/50 backdrop-blur-md overflow-hidden transition-all duration-500 shadow-md hover:shadow-xl"
            >
              {/* Avatar with initials */}
              <div className="flex items-center justify-center h-64 bg-gradient-to-br from-cyan-500 to-purple-600">
                <div className="h-24 w-24 flex items-center justify-center rounded-full bg-white text-cyan-700 text-3xl font-bold shadow-md">
                  {member.initials}
                </div>
              </div>

              {/* Always Visible: Name & Role */}
              <div className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-2">{member.role}</p>

                {/* Hidden until hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                  <p className="text-sm text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex justify-start space-x-4">
                    <a
                      href={member.linkedin}
                      className="p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-purple-600" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
