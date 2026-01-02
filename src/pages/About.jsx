import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  FaBook, FaMicroscope, FaGraduationCap, FaUsers,
  FaAward, FaCalendarAlt, FaMapMarkerAlt, FaPhone,
  FaEnvelope, FaClock, FaChalkboardTeacher
} from 'react-icons/fa';
import { IoMdSchool, IoIosFlask } from 'react-icons/io';

// Import images (you'll need to add these to your assets)
// import founderImage from '../assets/founder.jpg';
// import labImage from '../assets/lab.jpg';
// import classImage from '../assets/classroom.jpg';
// import successImage from '../assets/success.jpg';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Biology-themed floating elements
  const biologyElements = ["🧬", "🔬", "🧪", "🦠", "🧫", "🧠", "💊", "🌱", "🩺", "📚", "📈", "🎯"];

  // Institute details
  const instituteDetails = [
    {
      icon: <FaGraduationCap className="text-emerald-500 text-3xl" />,
      title: "Established",
      description: "2015",
      subtext: "Years of Excellence"
    },
    {
      icon: <FaUsers className="text-teal-500 text-3xl" />,
      title: "Students Taught",
      description: "5000+",
      subtext: "Successful Students"
    },
    {
      icon: <FaAward className="text-cyan-500 text-3xl" />,
      title: "Success Rate",
      description: "98%",
      subtext: "In Board Exams"
    },
    {
      icon: <FaChalkboardTeacher className="text-emerald-600 text-3xl" />,
      title: "Expert Faculty",
      description: "25+",
      subtext: "Qualified Teachers"
    }
  ];

  // Courses offered
  const courses = [
    {
      icon: "🎓",
      title: "HSC Biology",
      description: "Complete syllabus coverage with practical sessions",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: "🏛️",
      title: "Varsity Admission",
      description: "Medical college entrance preparation",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: "⚡",
      title: "Crash Course",
      description: "Intensive revision programs",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: "⚕️",
      title: "NEET & Medical",
      description: "National level exam preparation",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  // Facilities
  const facilities = [
    {
      icon: <FaMicroscope className="text-emerald-500 text-2xl" />,
      title: "Modern Lab",
      description: "Fully equipped biology laboratory"
    },
    {
      icon: <IoIosFlask className="text-teal-500 text-2xl" />,
      title: "Practical Sessions",
      description: "Hands-on experimental learning"
    },
    {
      icon: <FaBook className="text-cyan-500 text-2xl" />,
      title: "Digital Library",
      description: "Extensive study materials"
    },
    {
      icon: <FaClock className="text-emerald-600 text-2xl" />,
      title: "Flexible Timing",
      description: "Multiple batch options available"
    }
  ];

  // Contact details
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-emerald-500" />,
      title: "Location",
      description: "123 Science Street, Academic Area, Dhaka",
      details: "3rd Floor, Emerald Tower"
    },
    {
      icon: <FaPhone className="text-teal-500" />,
      title: "Contact Number",
      description: "+880 1234-567890",
      details: "9:00 AM - 8:00 PM"
    },
    {
      icon: <FaEnvelope className="text-cyan-500" />,
      title: "Email Address",
      description: "info@arcbiology.edu.bd",
      details: "admissions@arcbiology.edu.bd"
    },
    {
      icon: <FaCalendarAlt className="text-emerald-600" />,
      title: "Admission Open",
      description: "Year Round",
      details: "Limited seats per batch"
    }
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-20 px-4 md:px-8 overflow-hidden relative"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 20%),
          radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.08) 0%, transparent 20%),
          radial-gradient(circle at 40% 80%, rgba(5, 150, 105, 0.06) 0%, transparent 20%),
          radial-gradient(circle at 60% 20%, rgba(20, 184, 166, 0.06) 0%, transparent 20%)
        `
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-16 h-16 rounded-full bg-emerald-400/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-1/3 w-12 h-12 rounded-full bg-teal-500/30 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating biology elements */}
      {biologyElements.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl opacity-10 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (Math.random() - 0.5) * 40, 0],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? {
              opacity: 1,
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            } : {}}
            transition={{
              duration: 1.5,
              delay: 0.3,
              backgroundPosition: {
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            About ARC of Biology
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: "128px" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Premier Biology Coaching Center in Bangladesh
          </motion.p>
        </motion.div>

        {/* Institute Introduction */}
        <motion.div
          className="bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-sm border border-emerald-100 rounded-3xl p-8 md:p-12 mb-16 shadow-xl shadow-emerald-200 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
            y: -5
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg mr-4">
                  <IoMdSchool className="text-white text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h3>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  At <span className="text-emerald-600 font-semibold">ARC of Biology</span>, we are dedicated to revolutionizing biology education in Bangladesh. Founded in 2015, we have become the leading coaching center for biology aspirants aiming for excellence in HSC, medical college admissions, and competitive exams.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Our mission is to nurture scientific minds and create the next generation of medical professionals and biologists. We believe in making complex biological concepts simple and accessible to every student.
                </p>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-4 my-6">
                  <p className="text-gray-800 italic">
                    "We don't just teach biology, we inspire a passion for life sciences that lasts a lifetime."
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, type: "spring" }}
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-500 p-1 rounded-2xl shadow-lg">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Why Choose ARC?</h4>
                  <ul className="space-y-3">
                    {[
                      "Expert faculty from reputed universities",
                      "Modern laboratory facilities",
                      "Personalized attention & small batch sizes",
                      "Regular assessment & feedback system",
                      "Digital learning resources",
                      "Success-oriented teaching methodology"
                    ].map((point, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Since 2015
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Institute Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {instituteDetails.map((detail, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-emerald-200 transition-all"
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)'
              }}
            >
              <div className="flex justify-center mb-4">{detail.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {detail.description}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">{detail.title}</h4>
              <p className="text-gray-600 text-sm">{detail.subtext}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Courses Offered */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <motion.div
              className="flex items-center mb-8"
              variants={item}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-lg mr-4">
                <FaBook className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Courses We Offer</h3>
            </motion.div>

            <div className="space-y-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`bg-gradient-to-br ${course.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all overflow-hidden relative group`}
                  whileHover={{
                    y: -5,
                    scale: 1.02
                  }}
                >
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{course.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{course.title}</h4>
                      <p className="text-emerald-100">{course.description}</p>
                    </div>
                    <motion.div
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>

                  {/* Course badge */}
                  {course.title.includes("HSC") && (
                    <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Facilities Section */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="mt-12"
            >
              <motion.div
                className="flex items-center mb-6"
                variants={item}
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg mr-4">
                  <FaMicroscope className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Facilities</h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl p-4 shadow-sm hover:shadow-emerald-100 transition-all"
                    whileHover={{
                      y: -4,
                      borderColor: 'rgb(16, 185, 129)'
                    }}
                  >
                    <div className="flex items-center">
                      <div className="mr-3">{facility.icon}</div>
                      <div>
                        <h5 className="font-bold text-gray-900">{facility.title}</h5>
                        <p className="text-gray-600 text-sm">{facility.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Contact Information */}
          <div>
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="mb-12"
            >
              <motion.div
                className="flex items-center mb-8"
                variants={item}
              >
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Contact Information</h3>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-emerald-100 transition-all"
                    whileHover={{
                      y: -5,
                      backgroundColor: 'rgba(236, 253, 245, 0.8)'
                    }}
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-4 mt-1">{info.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-emerald-700 text-lg mb-1">{info.description}</p>
                        <p className="text-gray-600 text-sm">{info.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Teaching Methodology */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="bg-gradient-to-br from-emerald-500/10 via-teal-600/15 to-cyan-500/20 backdrop-blur-sm border border-emerald-200 rounded-2xl p-8 shadow-lg"
            >
              <motion.div
                className="flex items-center mb-6"
                variants={item}
              >
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 rounded-lg mr-4">
                  <FaChalkboardTeacher className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Teaching Approach</h3>
              </motion.div>

              <div className="space-y-4">
                {[
                  {
                    title: "Concept-Based Learning",
                    desc: "Focus on understanding rather than memorization"
                  },
                  {
                    title: "Interactive Sessions",
                    desc: "Regular Q&A and doubt clearing sessions"
                  },
                  {
                    title: "Practical Exposure",
                    desc: "Laboratory experiments and field observations"
                  },
                  {
                    title: "Personal Mentoring",
                    desc: "One-on-one guidance for every student"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="flex items-start"
                  >
                    <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900">{item.title}</h5>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Batch Timings */}
            <motion.div
              className="mt-8 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">Batch Timings</h4>
              <div className="space-y-2">
                {[
                  { time: "8:00 AM - 10:00 AM", batch: "Morning Batch" },
                  { time: "3:00 PM - 5:00 PM", batch: "Afternoon Batch" },
                  { time: "5:30 PM - 7:30 PM", batch: "Evening Batch" }
                ].map((slot, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-emerald-50 last:border-0">
                    <span className="text-gray-700">{slot.batch}</span>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-br from-white/80 to-emerald-50/80 backdrop-blur-sm border border-emerald-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <motion.div
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-relaxed"
              animate={{
                textShadow: ["0 0 5px rgba(16,185,129,0.1)", "0 0 15px rgba(16,185,129,0.2)", "0 0 5px rgba(16,185,129,0.1)"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            >
              "We don't just prepare students for exams, we prepare biologists for life."
            </motion.div>

            <motion.div
              className="h-1 w-48 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={isInView ? { width: "192px" } : {}}
              transition={{ duration: 1, delay: 1.4 }}
            />

            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.6 }}
            >
              Join ARC of Biology and embark on a journey of discovery, learning, and success in the fascinating world of biology.
            </motion.p>

            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:shadow-emerald-200 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              <span className="flex items-center">
                Start Your Journey Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;