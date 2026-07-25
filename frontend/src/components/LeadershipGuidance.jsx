import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail, FiArrowRight, FiAward, FiCpu, FiPenTool } from 'react-icons/fi';

const leaders = [
  {
    id: 1,
    name: 'Dr. Marcus Vance',
    role: 'Chief Executive & Strategic Vision',
    icon: <FiAward className="w-6 h-6" />,
    badge: 'Executive Leadership',
    glowColor: 'rgba(0, 229, 255, 0.25)',
    iconBg: 'from-cyan-500/20 to-blue-600/20',
    iconColor: '#00e5ff',
    bio: 'Pioneering strategic growth and enterprise digital transformation with over 15 years of industry leadership in software architecture & scalable systems.',
    expertise: ['Strategic Growth', 'Enterprise Tech', 'AI Strategy'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:marcus@sensorgrid.com'
    }
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Head of IoT & Systems Architecture',
    icon: <FiCpu className="w-6 h-6" />,
    badge: 'Technical Guidance',
    glowColor: 'rgba(37, 99, 235, 0.25)',
    iconBg: 'from-emerald-500/20 to-teal-600/20',
    iconColor: '#34d399',
    bio: 'Spearheading intelligent connected devices, smart hardware integration, and high-throughput real-time IoT networks across global deployments.',
    expertise: ['IoT Systems', 'Embedded Devices', 'Edge Computing'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:elena@sensorgrid.com'
    }
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Director of Product & UI/UX Design',
    icon: <FiPenTool className="w-6 h-6" />,
    badge: 'Design Strategy',
    glowColor: 'rgba(99, 102, 241, 0.25)',
    iconBg: 'from-rose-500/20 to-orange-600/20',
    iconColor: '#fb7185',
    bio: 'Championing human-centered design principles and crafting intuitive, modern user experiences that turn complex technical systems into effortless interaction.',
    expertise: ['UI/UX Architecture', 'Design Systems', 'User Research'],
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:david@sensorgrid.com'
    }
  }
];

const LeadershipGuidance = () => {
  return (
    <section id="leadership" className="relative py-20 z-10 overflow-hidden" style={{ background: 'linear-gradient(180deg, #030712 0%, #0a1628 100%)' }}>
      {/* Background ambient highlights matching website theme */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.25) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-5"
              style={{
                background: 'rgba(0,229,255,0.1)',
                border: '1px solid rgba(0,229,255,0.2)',
                color: '#00e5ff',
              }}
            >
              Leadership & Guidance
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Guided by Visionary{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #00e5ff 0%, #2563eb 50%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Our leadership team combines deep technical expertise with strategic vision to steer Sensor Grid toward groundbreaking digital solutions.
          </motion.p>
        </div>

        {/* 3 Responsive Content Cards (No Images / No Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.45) 100%)',
                border: '1px solid rgba(0,229,255,0.12)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Outer Hover Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${leader.glowColor}, inset 0 0 30px ${leader.glowColor}`,
                }}
              />

              {/* Top Border Accent Glow Line */}
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, #00e5ff, transparent)',
                }}
              />

              <div className="relative z-10">
                {/* Content Header: Icon Pill & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${leader.iconBg} flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300`}
                    style={{ color: leader.iconColor, boxShadow: `0 0 15px ${leader.glowColor}` }}
                  >
                    {leader.icon}
                  </div>
                  <div>
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-1"
                      style={{
                        background: 'rgba(0,229,255,0.08)',
                        border: '1px solid rgba(0,229,255,0.2)',
                        color: '#00e5ff',
                      }}
                    >
                      {leader.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium">{leader.role}</p>
                  </div>
                </div>

                {/* Pure Text Bio */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {leader.bio}
                </p>

                {/* Focus Areas Pills */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                    Core Focus Area
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium text-slate-300"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(0,229,255,0.12)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action / Social Link Footer */}
              <div className="relative z-10 pt-4 border-t border-cyan-500/10 flex items-center justify-between mt-2">
                <div className="flex items-center gap-3">
                  <a
                    href={leader.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={leader.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                    aria-label="Twitter Profile"
                  >
                    <FiTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href={leader.social.email}
                    className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                    aria-label="Email Contact"
                  >
                    <FiMail className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href={leader.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: '#00e5ff' }}
                >
                  View Profile <FiArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipGuidance;
