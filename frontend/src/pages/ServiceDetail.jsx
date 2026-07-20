import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const ServiceDetail = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const serviceData = {
    software: {
      title: 'Software Development',
      color: 'from-blue-500 to-indigo-600',
      glowColor: 'rgba(59, 130, 246, 0.25)',
      accentColor: '#3b82f6',
      projects: [
        {
          type: 'Web & Enterprise Application',
          title: 'Hospital Management System',
          objective: 'To streamline hospital operations, manage patient records digitally, and improve healthcare delivery efficiency.',
          technologies: 'React, Node.js, Express, MySQL, Tailwind CSS',
          features: ['Patient Registration & Tracking', 'Appointment Scheduling', 'Billing & Invoicing', 'Pharmacy Management', 'Doctor Dashboard'],
          benefits: 'Reduces paperwork, minimizes errors, accelerates patient care, and provides real-time analytics for administration.',
          application: 'Large-scale hospitals, multi-specialty clinics, and healthcare networks.'
        },
        {
          type: 'Mobile Application',
          title: 'Restaurant Delivery App',
          objective: 'Connect local restaurants with customers for seamless food ordering and delivery tracking.',
          technologies: 'React Native, Firebase, Google Maps API, Stripe',
          features: ['Real-time GPS Tracking', 'Secure Payments', 'Menu Management', 'Review & Rating System'],
          benefits: 'Increases restaurant reach, provides convenience to customers, and optimizes delivery routes.',
          application: 'Food delivery startups and restaurant chains.'
        }
      ]
    },
    iot: {
      title: 'IoT Solutions',
      color: 'from-emerald-400 to-teal-500',
      glowColor: 'rgba(52, 211, 153, 0.25)',
      accentColor: '#34d399',
      projects: [
        {
          type: 'IoT Automation',
          title: 'Smart Home Automation',
          objective: 'To provide users with remote control and automation of home appliances for energy efficiency and security.',
          technologies: 'Raspberry Pi, Arduino, MQTT, React, Node.js',
          features: ['Remote Appliance Control', 'Energy Consumption Monitoring', 'Automated Lighting', 'Security Camera Integration'],
          benefits: 'Reduces electricity bills, enhances home security, and provides ultimate convenience through mobile apps.',
          application: 'Modern residential homes and smart apartment complexes.'
        }
      ]
    },
    designing: {
      title: 'UI/UX & Design',
      color: 'from-rose-400 to-orange-500',
      glowColor: 'rgba(251, 113, 133, 0.25)',
      accentColor: '#fb7185',
      projects: [
        {
          type: 'UI/UX Design & Branding',
          title: 'FinTech App Redesign',
          objective: 'To modernize the user interface of a financial application to improve user retention and trust.',
          technologies: 'Figma, Adobe XD, Illustrator',
          features: ['Interactive Prototypes', 'Custom Iconography', 'Dark Mode Theme', 'Simplified Navigation Flow'],
          benefits: 'Increases user engagement, reduces bounce rate, and establishes a premium brand identity.',
          application: 'Banking applications, investment platforms, and crypto wallets.'
        }
      ]
    }
  };

  const data = serviceData[category];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Service not found</h2>
          <button
            onClick={() => navigate('/services')}
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const handleNextClick = (project) => {
    navigate('/contact', { 
      state: { 
        serviceCategory: category, 
        projectType: project.type,
        projectTitle: project.title
      } 
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-6 mt-4 text-sm font-medium"
        >
          <FiArrowLeft /> Back to Services
        </motion.button>

        {/* Header */}
        <div
          className={`rounded-3xl bg-gradient-to-r ${data.color} p-10 md:p-16 text-white mb-12 relative overflow-hidden`}
          style={{ boxShadow: `0 0 60px ${data.glowColor}` }}
        >
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10"
          >
            {data.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 relative z-10"
          >
            Explore our specialized project categories and real-world implementations.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {data.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.4) 100%)',
                border: '1px solid rgba(0,229,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="inline-block px-4 py-2 rounded-full font-semibold text-sm mb-6 uppercase tracking-wide"
                style={{
                  background: 'rgba(0,229,255,0.08)',
                  border: '1px solid rgba(0,229,255,0.2)',
                  color: '#00e5ff',
                }}
              >
                {project.type}
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">{project.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <FiCheckCircle style={{ color: data.accentColor }} /> Objective
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.objective}</p>
                  
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <FiCheckCircle style={{ color: data.accentColor }} /> Benefits
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.benefits}</p>
                </div>
                
                <div
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'rgba(0,229,255,0.03)',
                    border: '1px solid rgba(0,229,255,0.08)',
                  }}
                >
                  <h3 className="font-semibold text-white mb-2">Technologies Used</h3>
                  <p className="font-medium text-sm mb-6" style={{ color: data.accentColor }}>{project.technologies}</p>
                  
                  <h3 className="font-semibold text-white mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ background: data.accentColor, boxShadow: `0 0 6px ${data.glowColor}` }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(0,229,255,0.1)' }}>
                    <h3 className="font-semibold text-white mb-1 text-sm">Real-World Application</h3>
                    <p className="text-slate-500 text-xs">{project.application}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4" style={{ borderTop: '1px solid rgba(0,229,255,0.08)' }}>
                <button 
                  onClick={() => handleNextClick(project)}
                  className="group px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #6366f1 100%)',
                    boxShadow: '0 0 20px rgba(37,99,235,0.3)',
                    color: 'white',
                  }}
                >
                  Start Similar Project
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
