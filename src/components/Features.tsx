"use client"

import React from "react"
import {
  Kanban,
  Users,
  Package,
  Calendar,
  RefreshCcw,
  Mail,
  Filter,
  Zap,
  Phone,
  FormInput,
  Shield,
  Webhook,
  Target,
  Clock,
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const Features = () => {
  const scrollRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  })

  // Multiple parallax layers with different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  const features = [
    {
      icon: <Kanban className="w-8 h-8" />,
      title: "Deals Management",
      description: "Kanban boards with multiple customizable pipelines for visual deal tracking",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Contacts & Companies",
      description: "Comprehensive contact management with company hierarchies and relationships",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Products Module",
      description: "Complete product catalog with pricing, inventory, and quote generation",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Activities & Calendar",
      description: "Integrated calendar with activities, tasks, and smart reminders",
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: "Two-way Calendar Sync",
      description: "Seamless synchronization with Google Calendar and Outlook",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Built-in Email Client",
      description: "Native email integration with Gmail, Outlook, and IMAP support",
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Advanced Filters",
      description: "Powerful filtering and field mapping for precise data management",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Workflows",
      description: "Smart automation to streamline repetitive tasks and processes",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "In-App Calling",
      description: "Built-in calling system with call logs and VOIP integration",
    },
    {
      icon: <FormInput className="w-8 h-8" />,
      title: "Web Forms",
      description: "Customizable lead capture forms with automatic CRM integration",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Roles & Permissions",
      description: "Granular access control with custom fields and user management",
    },
    {
      icon: <Webhook className="w-8 h-8" />,
      title: "API & Webhooks",
      description: "Comprehensive API access with webhook support for integrations",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "SLA Automation",
      description: "Service level agreement tracking with automated escalations",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "1-Click Updates",
      description: "Instant system updates and patches with zero downtime",
    },
  ]

  const integrations = [
    { name: "Zapier", icon: <Zap className="w-6 h-6 text-white" /> },
    { name: "Teleforce VOIP", icon: <Phone className="w-6 h-6 text-white" /> },
    { name: "Google Workspace", icon: <Calendar className="w-6 h-6 text-white" /> },
    { name: "WhatsApp (Doublick API)", icon: <Phone className="w-6 h-6 text-white" /> },
    { name: "Microsoft 365", icon: <Mail className="w-6 h-6 text-white" /> },
    { name: "Pusher", icon: <RefreshCcw className="w-6 h-6 text-white" /> },
    { name: "Twilio", icon: <Phone className="w-6 h-6 text-white" /> },
  ]

  return (
    <section id="features" ref={scrollRef} className="relative py-20 overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      {/* Animated Geometric Shapes - Layer 1 */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-[1]">
        <div className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-r from-blue-600/15 to-blue-400/15 rounded-full blur-2xl" />
        <div className="absolute top-64 right-24 w-32 h-32 bg-gradient-to-r from-orange-500/15 to-orange-400/15 rounded-full blur-xl" />
        <div className="absolute bottom-48 left-1/3 w-48 h-48 bg-gradient-to-r from-gray-600/10 to-gray-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-36 h-36 bg-gradient-to-r from-blue-500/12 to-purple-500/12 rounded-full blur-2xl" />
      </motion.div>

      {/* Floating Geometric Elements - Layer 2 */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 z-[2]">
        <motion.div
          style={{ rotate }}
          className="absolute top-40 right-1/3 w-20 h-20 border border-white/8 rotate-45"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-16 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-lg"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-16 w-12 h-12 bg-gradient-to-r from-orange-400/25 to-orange-600/25 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 left-1/4 w-14 h-14 border border-gray-400/15 rounded-full"
        />
      </motion.div>

      {/* Grid Pattern - Layer 3 */}
      <motion.div style={{ y: y3, scale }} className="absolute inset-0 z-[3] opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Enhanced Particle Background */}
      <Particles
        id="features-particles"
        init={particlesInit}
        className="absolute inset-0 z-[4]"
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 60, density: { enable: true, value_area: 1000 } },
            color: { value: ["#ffffff", "#3b82f6", "#f97316", "#6b7280"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.3,
              animation: {
                enable: true,
                speed: 0.8,
                minimumValue: 0.1,
              },
            },
            size: {
              value: 2,
              random: true,
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.5,
              },
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              outModes: "bounce",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: false },
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-[5]">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-gray-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/12 to-gray-500/12 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/20 text-blue-300 rounded-full text-sm font-semibold mb-4">
            Built for Sales Teams
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything You Need to Close More Deals</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive CRM features designed to streamline your sales process, improve team collaboration, and
            accelerate revenue growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-blue-400 mb-4 transition-transform duration-300"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-orange-400 font-semibold text-lg hover:text-orange-300 transition-colors duration-200 flex items-center gap-2 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Powerful Integrations</h3>
            <p className="text-gray-400 mb-10">Connect with your favorite tools and services</p>
            <div className="flex flex-wrap justify-center gap-x-20 gap-y-10">
              {integrations.map((integration, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center text-white group cursor-pointer"
                >
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 group-hover:border-blue-400/40 transition-all duration-300">
                    {integration.icon}
                  </div>
                  <span className="text-sm font-medium mt-3 group-hover:text-blue-300 transition-colors">
                    {integration.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
