import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCode, FiCpu, FiPenTool, FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 'software',
      title: 'Software',
      icon: <FiCode className="w-10 h-10" />,
      description: 'We build scalable, secure, and modern software applications.',
      details: [
        'Web Development',
        'Mobile Application',
        'AI & Machine Learning',
        'Full Stack Development'
      ],
      color: 'from-blue-500 to-indigo-600',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      accentColor: '#3b82f6',
    },
    {
      id: 'iot',
      title: 'IoT',
      icon: <FiCpu className="w-10 h-10" />,
      description: 'Connect and automate your world with our intelligent IoT solutions.',
      details: [
        'IoT Automation',
        'Smart Home Systems',
        'Embedded Systems',
        'Sensor Integration'
      ],
      color: 'from-emerald-400 to-teal-500',
      glowColor: 'rgba(52, 211, 153, 0.3)',
      accentColor: '#34d399',
    },
    {
      id: 'designing',
      title: 'Designing',
      icon: <FiPenTool className="w-10 h-10" />,
      description: 'Crafting visually stunning and highly intuitive user experiences.',
      details: [
        'UI/UX Design',
        'Graphic Design',
        'Branding',
        'Wireframing & Prototyping'
      ],
      color: 'from-rose-400 to-orange-500',
      glowColor: 'rgba(251, 113, 133, 0.3)',
      accentColor: '#fb7185',
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 pt-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(0,229,255,0.1)',
                border: '1px solid rgba(0,229,255,0.2)',
                color: '#00e5ff',
              }}
            >
              What We Offer
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Comprehensive solutions to drive your digital transformation journey forward.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%)',
                border: '1px solid rgba(0,229,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Gradient header */}
              <div
                className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="text-white transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {service.icon}
                </div>
                {/* Animated glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${service.glowColor}, transparent 70%)`,
                  }}
                />
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                
                <h4
                  className="font-semibold mb-3 text-sm uppercase tracking-wider"
                  style={{ color: '#00e5ff' }}
                >
                  Project Types
                </h4>
                <ul className="mb-8 space-y-2.5 flex-grow">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-slate-300 text-sm">
                      <div
                        className="w-1.5 h-1.5 rounded-full mr-3 shrink-0"
                        style={{ background: service.accentColor, boxShadow: `0 0 6px ${service.glowColor}` }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/services/${service.id}`}
                  className="mt-auto w-full py-4 rounded-xl font-semibold text-center transition-all flex items-center justify-center gap-2 group/btn"
                  style={{
                    background: 'rgba(0,229,255,0.08)',
                    border: '1px solid rgba(0,229,255,0.2)',
                    color: '#00e5ff',
                  }}
                >
                  <span className="group-hover/btn:mr-1 transition-all">Explore {service.title}</span>
                  <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
