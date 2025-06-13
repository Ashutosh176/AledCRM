import React from 'react';
import { Play, ExternalLink, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useTime } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const DemoVideo = () => {
  const scrollRef = React.useRef(null);
  const time = useTime();
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start']
  });

  // Enhanced parallax transforms for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const y4 = useTransform(scrollYProgress, [0, 1], ['0%', '85%']);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotate3 = useTransform(time, [0, 10000], [0, 360], { clamp: false });
  
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.4]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 0.9]);
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.6]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 0.7, 0.7, 0.2]);

  const scrollToContact = () => {
    document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section
      id="demo"
      ref={scrollRef}
      className="relative py-16 overflow-hidden text-center bg-black"
    >
      {/* Enhanced Particle System */}
      <Particles
  id="tsparticles"
  init={particlesInit}
  className="absolute inset-0 z-[1]"
  options={{
    fullScreen: false,
    background: { color: 'transparent' },
    particles: {
      number: {
        value: 160, // ← Increased from 80 to 160
        density: {
          enable: true,
          value_area: 1000 // You can also slightly decrease this to 800 if you want them to be more packed
        }
      },
      color: { 
        value: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B']
      },
      shape: { 
        type: ['circle', 'star'],
        star: { nb_sides: 5 }
      },
      opacity: { 
        value: 0.3,
        random: true,
        animation: { 
          enable: true, 
          speed: 1, 
          opacity_min: 0.1,
          sync: false
        }
      },
      size: { 
        value: 2, 
        random: true,
        animation: { 
          enable: true, 
          speed: 1.5, 
          size_min: 0.5,
          sync: false
        }
      },
      move: { 
        enable: true, 
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'bounce'
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: '#ffffff',
        opacity: 0.08,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' }
      },
      modes: {
        repulse: { distance: 80, duration: 0.3 },
        push: { particles_nb: 3 }
      }
    },
    detectRetina: true
  }}
/>


      {/* Animated Gradient Base Layer */}
      <motion.div
        style={{ opacity: opacity1 }}
        className="absolute inset-0 z-[2]"
      >
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #1e1b4b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #312e81 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #1e1b4b 0%, transparent 50%), radial-gradient(circle at 20% 50%, #312e81 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Geometric Layer 1 - Slow Parallax */}
      <motion.div
        style={{ y: y1, opacity: opacity2 }}
        className="absolute inset-0 z-[3]"
      >
        {/* Smaller rotating rings */}
        <motion.div
          style={{ rotate: rotate1, scale: scale1 }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/15 rounded-full"
        />
        <motion.div
          style={{ rotate: rotate2, scale: scale2 }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400/15 rounded-full"
        />
      </motion.div>

      {/* Geometric Layer 2 - Medium Parallax */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 z-[4]"
      >
        {/* Smaller floating shapes */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 180],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-1/5 w-12 h-12 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-lg backdrop-blur-sm border border-blue-400/20"
        />
        
        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [0, -90],
            scale: [1.05, 1, 1.05]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-1/5 w-10 h-10 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full backdrop-blur-sm border border-purple-400/20"
        />

        {/* Smaller central energy core */}
        <motion.div
          style={{ scale: scale1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full bg-gradient-conic from-blue-500/8 via-purple-500/15 via-pink-500/8 to-blue-500/8 rounded-full blur-xl"
          />
        </motion.div>
      </motion.div>

      {/* Fast Parallax Layer with Smaller Glowing Elements */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 z-[5]"
      >
        {/* Smaller animated glowing orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
              x: [0, Math.sin(i) * 30, 0],
              y: [0, Math.cos(i) * 20, 0]
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
            className={`absolute w-2 h-2 rounded-full blur-sm`}
            style={{
              left: `${25 + (i * 15)}%`,
              top: `${35 + (i * 10)}%`,
              backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'][i % 4] + '60'
            }}
          />
        ))}
      </motion.div>

      {/* Ultra-fast Parallax with Grid Pattern */}
      <motion.div
        style={{ y: y4, rotate: rotate3 }}
        className="absolute inset-0 z-[6] opacity-5"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Final overlay */}
      <motion.div
        style={{ opacity: opacity1 }}
        className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50 z-10"
      />

      {/* Main Content - Reduced Size */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium text-xs uppercase tracking-wider">Live Demo</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
            Experience ALED CRM
            <br />
            <span className="text-2xl md:text-3xl">in Action</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Discover how our CRM transforms sales processes with cutting-edge automation
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-purple-500/20 border border-white/10 backdrop-blur-sm">
            {/* Compact Video Container */}
            <div className="aspect-video bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center relative group">
              {/* Dynamic animated background */}
              <motion.div
                animate={{
                  background: [
                    'conic-gradient(from 0deg, #1e40af, #7c3aed, #db2777, #1e40af)',
                    'conic-gradient(from 180deg, #1e40af, #7c3aed, #db2777, #1e40af)'
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 opacity-15"
              />
              
              <div className="absolute inset-0 bg-black/20" />
              
              <div className="text-center px-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-3 mx-auto cursor-pointer border border-white/20 shadow-lg group-hover:bg-white/20 transition-all duration-300"
                >
                  <Play className="w-6 h-6 text-white ml-0.5" />
                </motion.div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  Product Demo
                </h3>
                <p className="text-white/80 text-sm">
                  5-minute comprehensive walkthrough
                </p>
              </div>

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 flex items-center justify-center transition-opacity cursor-pointer"
              >
                <div className="bg-white/90 backdrop-blur-lg rounded-lg p-4 shadow-xl border border-white/20">
                  <p className="text-gray-800 font-medium text-sm">
                    🎬 HD Video Experience
                  </p>
                  <p className="text-gray-600 text-xs mt-1">
                    Click to start demo
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-3 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-500/25 flex items-center gap-2 mx-auto overflow-hidden"
            >
              {/* Button background animation */}
              <motion.div
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              
              <ExternalLink className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Book Live Demo</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                →
              </motion.span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 flex items-center justify-center gap-4 text-xs text-white/70"
            >
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <span>30-min session</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                <span>Live Q&A</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                <span>Custom setup</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideo;