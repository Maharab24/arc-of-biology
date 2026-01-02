import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeCourseSection = ({ id }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [activeFilter, setActiveFilter] = useState("all");
  const [courses, setCourses] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  /* ---------------- Load data from public/Course.json ---------------- */
  useEffect(() => {
    fetch("/Course.json")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error("Failed to load courses:", err));
  }, []);

  /* ---------------- Filter options ---------------- */
  const filterOptions = [
    { id: "all", label: "All Courses" },
    { id: "hsc", label: "HSC" },
    { id: "varsity", label: "Varsity" },
    { id: "crash", label: "Crash Course" },
    { id: "medical", label: "Medical" },
    { id: "olympiad", label: "Olympiad" }
  ];

  /* ---------------- Filter logic ---------------- */
  const filteredCourses =
    activeFilter === "all"
      ? courses
      : courses.filter(course => course.id === activeFilter);

  /* ---------------- Animations ---------------- */
  const floatAnimation = {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  const cardHoverAnimation = {
    scale: 1.05,
    rotateY: 10,
    rotateX: 5,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.3 }
  };

  const glowAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" }
    }
  };

  const floatingBiologyElements = ["🧬", "🔬", "🧪", "🦠", "🧫", "🧠", "💊", "🌱", "🩺"];

  return (
    <div
      id={"courses"}
      ref={containerRef}
      className="min-h-screen  py-20 px-4 sm:px-8 overflow-hidden relative scroll-mt-24"
    >
      {/* Animated background elements */}
      <motion.div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl" animate={glowAnimation} />
      <motion.div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-300/20 to-emerald-300/20 rounded-full blur-3xl" animate={glowAnimation} />

      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-200/30 via-transparent to-transparent"></div>

      {/* Floating icons with different colors */}
      {floatingBiologyElements.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-20 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: `hue-rotate(${i * 40}deg)`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 1.5
          }}
        >
          {icon}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title with gradient */}
        <motion.div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-emerald-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Our Courses
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Choose from our comprehensive biology courses designed for excellence
          </motion.p>
        </motion.div>

        {/* Enhanced Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filterOptions.map(option => (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(option.id)}
              className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === option.id
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-200"
                  : "bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-emerald-300 text-gray-700 hover:text-emerald-600"
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Redesigned Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={cardHoverAnimation}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group cursor-pointer"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-500"></div>

                {/* Card background with gradient */}
                <div className="relative h-full bg-gradient-to-br from-white via-white/95 to-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100/50 shadow-xl">
                  {/* Animated gradient stripe */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
                    animate={hoveredCard === course.id ?
                      { scaleX: [0, 1.2, 1] } :
                      { scaleX: 1 }
                    }
                    transition={{ duration: 0.5 }}
                  />

                  {/* Card content */}
                  <Link to={course.path} className="block h-full p-6">
                    {/* Icon container with gradient */}
                    <div className="relative mb-6">
                      <motion.div
                        className="absolute -inset-4 bg-gradient-to-r from-emerald-200/50 to-cyan-200/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"
                        animate={floatAnimation}
                      />
                      <motion.div
                        className="relative text-6xl mb-4 text-center"
                        animate={floatAnimation}
                      >
                        {course.icon}
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-emerald-800 bg-clip-text text-transparent mb-3">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Course details grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-xl">
                        <div className="text-lg">⏱</div>
                        <div className="text-sm font-medium text-emerald-800">{course.duration}</div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-cyan-50 to-cyan-100/50 rounded-xl">
                        <div className="text-lg">🎯</div>
                        <div className="text-sm font-medium text-cyan-800">{course.level}</div>
                      </div>
                      <div className="col-span-2 flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl">
                        <div className="text-lg">👥</div>
                        <div className="text-sm font-medium text-blue-800">{course.students}</div>
                      </div>
                    </div>

                    {/* Enroll button with gradient */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 p-1"
                    >
                      <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl py-3 text-center">
                        <span className="font-semibold text-white flex items-center justify-center gap-2">
                          Enroll Now
                          <motion.span
                            animate={hoveredCard === course.id ?
                              { x: [0, 5, 0] } :
                              { x: 0 }
                            }
                            transition={{ duration: 0.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </span>
                      </div>
                    </motion.div>

                    {/* Floating particles on hover */}
                    {hoveredCard === course.id && (
                      <>
                        <motion.div
                          className="absolute top-4 right-4 text-2xl opacity-30"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          ✨
                        </motion.div>
                        <motion.div
                          className="absolute bottom-4 left-4 text-xl opacity-30"
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        >
                          ⭐
                        </motion.div>
                      </>
                    )}
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 transition-all duration-300"
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeCourseSection;