import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiCpu, FiPenTool, FiArrowRight, FiZap, FiGlobe, FiShield } from 'react-icons/fi';
import FloatingLines from '../components/FloatingLines/FloatingLines';

const Home = () => {
  const services = [
    {
      id: 'software',
      title: 'Software',
      icon: <FiCode className="w-8 h-8" />,
      description: 'Custom web, mobile, and enterprise software solutions tailored to your specific business needs.',
      color: 'from-blue-500 to-indigo-600',
      glowColor: 'rgba(59, 130, 246, 0.3)',
    },
    {
      id: 'iot',
      title: 'IoT',
      icon: <FiCpu className="w-8 h-8" />,
      description: 'Smart connected devices and automation systems bridging the physical and digital worlds.',
      color: 'from-emerald-400 to-teal-500',
      glowColor: 'rgba(52, 211, 153, 0.3)',
    },
    {
      id: 'designing',
      title: 'Designing',
      icon: <FiPenTool className="w-8 h-8" />,
      description: 'Premium UI/UX, branding, and graphic design creating unforgettable digital experiences.',
      color: 'from-rose-400 to-orange-500',
      glowColor: 'rgba(251, 113, 133, 0.3)',
    }
  ];

  const stats = [
    { icon: <FiZap />, value: '50+', label: 'Projects Delivered' },
    { icon: <FiGlobe />, value: '20+', label: 'Global Clients' },
    { icon: <FiShield />, value: '99%', label: 'Client Satisfaction' },
    { icon: <FiCpu />, value: '100+', label: 'IoT Devices Deployed' },
  ];

  return (
    <div className="min-h-screen bg-[#030712]">
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* FloatingLines Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <FloatingLines
            enabledWaves={['top', 'middle', 'bottom']}
            linesGradient={['#00e5ff', '#0ea5e9', '#2563eb', '#6366f1', '#0ea5e9', '#00e5ff']}
            lineCount={[10, 15, 20]}
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
            parallaxStrength={0.15}
            animationSpeed={0.8}
            mixBlendMode="normal"
          />
        </div>

        {/* Dark overlay gradient for readability */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(3,7,18,0.3) 0%, rgba(3,7,18,0.7) 70%, rgba(3,7,18,0.85) 100%)',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-28">
          {/* Glowing SG Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8 inline-block"
          >
            <div
              className="relative w-28 h-28 mx-auto rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(37,99,235,0.15) 100%)',
                border: '1px solid rgba(0,229,255,0.3)',
                boxShadow: '0 0 60px rgba(0,229,255,0.2), 0 0 120px rgba(37,99,235,0.1), inset 0 0 30px rgba(0,229,255,0.05)',
              }}
            >
              <span
                className="text-4xl font-black tracking-wider"
                style={{
                  background: 'linear-gradient(135deg, #00e5ff 0%, #2563eb 50%, #6366f1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(0,229,255,0.5))',
                }}
              >
                SG
              </span>
              {/* Animated pulse ring */}
              <div
                className="absolute inset-0 rounded-2xl animate-ping"
                style={{
                  border: '1px solid rgba(0,229,255,0.2)',
                  animationDuration: '3s',
                }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-white">Welcome to </span>
            <br className="hidden sm:block" />
            <span
              style={{
                background: 'linear-gradient(90deg, #00e5ff 0%, #2563eb 40%, #6366f1 70%, #00e5ff 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 4s linear infinite',
              }}
            >
              Sensor Grid
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Delivering innovative <span className="text-cyan-400 font-medium">Software</span>,{' '}
            <span className="text-cyan-400 font-medium">IoT</span>, and{' '}
            <span className="text-cyan-400 font-medium">Design</span> solutions to transform your business for the modern digital era.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
          >
            <Link
              to="/services"
              className="group relative px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #6366f1 100%)',
                boxShadow: '0 0 30px rgba(37,99,235,0.4), 0 4px 15px rgba(0,0,0,0.3)',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Our Services
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #00e5ff 0%, #0ea5e9 50%, #2563eb 100%)',
                }}
              />
            </Link>
            <Link
              to="/contact"
              className="group px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(0,229,255,0.3)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 15px rgba(0,229,255,0.1)',
              }}
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
              <div
                className="w-6 h-10 rounded-full flex justify-center pt-2"
                style={{ border: '1px solid rgba(0,229,255,0.3)' }}
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================== STATS SECTION ======================== */}
      <section className="relative py-16 z-10" style={{ background: 'linear-gradient(180deg, #030712 0%, #0a1628 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: 'rgba(14, 165, 233, 0.05)',
                  border: '1px solid rgba(0,229,255,0.1)',
                }}
              >
                <div className="text-cyan-400 text-2xl mb-3 flex justify-center">{stat.icon}</div>
                <div
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #00e5ff, #2563eb)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== SERVICES SECTION ======================== */}
      <section className="relative py-24 z-10" style={{ background: '#0a1628' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
                style={{
                  background: 'rgba(0,229,255,0.1)',
                  border: '1px solid rgba(0,229,255,0.2)',
                  color: '#00e5ff',
                }}
              >
                What We Do
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                We provide cutting-edge solutions across three core pillars to accelerate your growth.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl p-8 transition-all duration-500 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%)',
                  border: '1px solid rgba(0,229,255,0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: `0 0 40px ${service.glowColor}, inset 0 0 40px ${service.glowColor}`,
                  }}
                />
                {/* Top border glow on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.glowColor}, transparent)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      boxShadow: `0 0 25px ${service.glowColor}`,
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center font-semibold group-hover:gap-3 gap-2 transition-all"
                    style={{ color: '#00e5ff' }}
                  >
                    Explore <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CTA BANNER ======================== */}
      <section className="relative py-24 z-10 overflow-hidden" style={{ background: '#030712' }}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.15) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Build the{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #00e5ff, #2563eb)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Future
              </span>
              ?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and premium design.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-10 py-5 rounded-full text-white font-semibold text-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #6366f1 100%)',
                boxShadow: '0 0 40px rgba(37,99,235,0.4), 0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              Start Your Project
              <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Shimmer keyframe animation */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default Home;
