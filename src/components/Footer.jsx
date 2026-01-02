import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt, FaHeart, FaGraduationCap } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Footer() {
  // Social media links for coaching center
  const socialLinks = [
    {
      Icon: FaFacebook,
      url: 'https://facebook.com/arcofbiology',
      label: 'Facebook',
      color: 'text-blue-500',
    },
    {
      Icon: FaInstagram,
      url: 'https://instagram.com/arcofbiology',
      label: 'Instagram',
      color: 'text-pink-500',
    },
    {
      Icon: FaYoutube,
      url: 'https://youtube.com/arcofbiology',
      label: 'YouTube',
      color: 'text-red-500',
    },
    {
      Icon: SiGmail,
      url: 'mailto:info@arcofbiology.com',
      label: 'Email',
      color: 'text-emerald-500',
    }
  ];

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Results', path: '/results' },
    { name: 'Contact', path: '/contact' }
  ];

  // Contact information
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: '123 Science Street, Academic Complex, Dhaka 1205, Bangladesh',
      color: 'text-emerald-400'
    },
    {
      icon: FaPhone,
      text: '+880 1234-567890',
      color: 'text-cyan-400'
    },
    {
      icon: SiGmail,
      text: 'info@arcofbiology.com',
      color: 'text-teal-400'
    }
  ];

  return (
    <motion.footer
      className="relative overflow-hidden pt-20 pb-12 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: 'linear-gradient(135deg, #0f2f24 0%, #1a3f34 30%, #0f2f24 100%)'
      }}
    >
      {/* Leaf/biology-themed background particles */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-teal-600/15 to-cyan-500/20"></div>

        {/* Floating leaf particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              color: `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 100) + 155}, 0.1)`
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, (Math.random() - 0.5) * 40, 0],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            {['🌿', '🍃', '🌱', '🌾', '🌺', '🌸'][i % 6]}
          </motion.div>
        ))}

        {/* Glowing biology elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)`,
              boxShadow: `0 0 ${Math.random() * 40 + 20}px rgba(16, 185, 129, 0.2)`
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, (Math.random() - 0.5) * 80, 0],
              scale: [0.8, 1.4, 0.8],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{
              duration: Math.random() * 12 + 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                <FaGraduationCap className="text-white text-2xl" />
              </div>
              <div>
                <motion.h2
                  className="text-3xl font-bold"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400">
                    ARC of Biology
                  </span>
                </motion.h2>
                <p className="text-emerald-200/80 text-sm mt-1">
                  Excellence in Medical Education Since 2010
                </p>
              </div>
            </div>

            <motion.p
              className="text-emerald-100/80 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Premier biology coaching institute dedicated to nurturing future medical professionals.
              Our proven teaching methodology and expert faculty ensure exceptional results.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map(({ Icon, url, label, color }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${color} bg-white/10 backdrop-blur-sm rounded-full p-3 border border-emerald-500/30 hover:border-white/50 relative group`}
                  whileHover={{
                    y: -8,
                    scale: 1.1,
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2
                    }
                  }}
                >
                  <Icon className="text-xl" />
                  <div className="absolute inset-0 rounded-full border border-emerald-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-8 text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                >
                  <Link to={link.path}>
                    <motion.div
                      className="text-emerald-100/90 hover:text-white flex items-center group text-base"
                      whileHover={{
                        x: 10,
                        color: '#5eead4',
                        textShadow: '0 0 8px rgba(94, 234, 212, 0.5)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-teal-500"
                        animate={{
                          scale: [1, 1.3, 1],
                          boxShadow: ['0 0 0 0 rgba(16, 185, 129, 0)', '0 0 0 4px rgba(16, 185, 129, 0.2)', '0 0 0 0 rgba(16, 185, 129, 0)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      ></motion.span>
                      {link.name}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-8 text-white">
              Contact Us
            </h3>
            <ul className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className={`${item.color} mt-1 mr-4`}
                  >
                    <item.icon className="text-xl" />
                  </motion.div>
                  <span className="text-emerald-100/90 text-base">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Timings */}
            <motion.div
              className="mt-8 p-4 bg-emerald-900/30 rounded-lg border border-emerald-800/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h4 className="font-bold text-emerald-300 mb-2">Class Timings</h4>
              <p className="text-emerald-100/80 text-sm">Morning: 8:00 AM - 12:00 PM</p>
              <p className="text-emerald-100/80 text-sm">Evening: 4:00 PM - 8:00 PM</p>
              <p className="text-emerald-100/80 text-sm mt-2">Weekend batches available</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated divider */}
        <motion.div
          className="h-px my-12 relative"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-70"></div>
          <motion.div
            className="absolute h-full w-20 bg-emerald-400 blur-xl"
            animate={{
              left: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Copyright */}
          <motion.div
            className="text-emerald-100/70 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="mb-2">
              &copy; {new Date().getFullYear()} <span className="text-emerald-300 font-medium">ARC of Biology</span>. All rights reserved.
            </div>
            <p className="text-emerald-200/60 text-xs">
              Approved by Bangladesh Technical Education Board | Registered with Ministry of Education
            </p>
          </motion.div>

          {/* Additional links and made with love */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-end space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-emerald-100/80 hover:text-emerald-300 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-emerald-100/80 hover:text-emerald-300 transition-colors">
                Terms & Conditions
              </a>
              <a href="/refund" className="text-emerald-100/80 hover:text-emerald-300 transition-colors">
                Refund Policy
              </a>
            </div>

            <div className="flex items-center md:ml-6">
              <span className="text-emerald-100/70 text-sm mr-2">Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, 0],
                  color: ['#10b981', '#ef4444', '#10b981']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <FaHeart className="mx-1" />
              </motion.div>
              <span className="text-emerald-100/70 text-sm ml-2">for education</span>
            </div>
          </motion.div>
        </div>

        {/* Accreditation badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-emerald-800/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {[
            { text: 'NEET Certified', color: 'from-emerald-500 to-teal-600' },
            { text: 'Govt. Approved', color: 'from-cyan-500 to-blue-600' },
            { text: '100% Success', color: 'from-amber-500 to-orange-600' },
            { text: 'Expert Faculty', color: 'from-purple-500 to-pink-600' }
          ].map((badge, index) => (
            <motion.div
              key={index}
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} text-white text-xs font-bold shadow-lg`}
              whileHover={{ scale: 1.05, y: -2 }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }
              }}
            >
              {badge.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;