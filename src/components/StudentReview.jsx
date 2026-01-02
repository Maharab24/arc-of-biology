import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StudentReview = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Student reviews data
  const reviews = [
    {
      id: 1,
      name: "Rahman Ahmed",
      batch: "NEET 2024",
      rating: 5,
      comment: "The best biology coaching in the city! Concepts are explained so clearly. Scored 98% in NEET Biology.",
      avatar: "👨‍🎓",
      color: "from-emerald-400 to-teal-500",
    },
    {
      id: 2,
      name: "Tasnim Rahman",
      batch: "HSC 2023",
      rating: 5,
      comment: "Teachers are amazing! Made complex topics like genetics so easy to understand. Got A+ in Biology.",
      avatar: "👩‍🎓",
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: 3,
      name: "Arif Khan",
      batch: "Medical Entrance 2024",
      rating: 5,
      comment: "Crash course helped me crack medical entrance. Practice tests were exactly like the real exam!",
      avatar: "🧑‍⚕️",
      color: "from-purple-400 to-indigo-500",
    },
    {
      id: 4,
      name: "Fatima Akter",
      batch: "Biology Olympiad 2023",
      rating: 5,
      comment: "Advanced concepts were taught exceptionally well. Won silver in National Biology Olympiad!",
      avatar: "👩‍🔬",
      color: "from-amber-400 to-orange-500",
    },
    {
      id: 5,
      name: "Shakib Hasan",
      batch: "University Admission 2024",
      rating: 5,
      comment: "Study materials are top-notch. Got admission to Dhaka University Medical College!",
      avatar: "👨‍🏫",
      color: "from-rose-400 to-pink-500",
    },
    {
      id: 6,
      name: "Nusrat Jahan",
      batch: "HSC 2024",
      rating: 4,
      comment: "Lab sessions were amazing! Practical knowledge helped me understand concepts better.",
      avatar: "👩‍🔬",
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 7,
      name: "Mominul Islam",
      batch: "NEET 2023",
      rating: 5,
      comment: "Doubt clearing sessions are excellent. Faculty is always available to help students.",
      avatar: "👨‍🎓",
      color: "from-teal-400 to-cyan-500",
    },
    {
      id: 8,
      name: "Sabrina Chowdhury",
      batch: "Medical College 2024",
      rating: 5,
      comment: "Mock tests and analysis helped me identify weak areas. Perfect for competitive exams!",
      avatar: "👩‍⚕️",
      color: "from-blue-400 to-indigo-500",
    }
  ];

  // Floating animation for cards
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            animate={i < rating ? {
              scale: [1, 1.2, 1],
              transition: {
                duration: 0.5,
                delay: i * 0.1
              }
            } : {}}
          >
            ★
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 py-20 px-4 overflow-hidden relative"
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
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-emerald-400/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-teal-400/20 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Floating biology elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl opacity-5 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (Math.random() - 0.5) * 50, 0],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeInOut"
          }}
        >
          {['🧬', '📚', '🔬', '🧪', '🦠', '💊', '🌱', '🏆', '🎓'][i % 9]}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10 min-h-[50vh] flex flex-col justify-center">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.3
          }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.2,
              duration: 0.8,
              type: "spring",
              bounce: 0.3
            }}
          >
            Student <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Success Stories</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.4,
              duration: 0.8,
              type: "spring",
              bounce: 0.3
            }}
          >
            Hear from our successful students who achieved their dreams through our coaching
          </motion.p>
        </motion.div>

        {/* Statistics Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            { number: "99%", label: "Success Rate" },
            { number: "1500+", label: "Students" },
            { number: "200+", label: "Medical Selections" },
            { number: "50+", label: "Olympiad Winners" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-sm text-center"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(5, 150, 105, 0.1)' }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Top moving row - Left to Right */}
        <motion.div
          className="flex mb-16"
          animate={{
            x: ["0%", "-100%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 40,
              ease: "linear"
            }
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <motion.div
              key={`top-${index}`}
              className="flex-shrink-0 mx-4 w-80 rounded-2xl bg-white border border-emerald-100 shadow-lg p-6 relative"
              animate={floatAnimation}
              whileHover={{
                scale: 1.05,
                y: -10,
                z: 20,
                transition: { duration: 0.3 }
              }}
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-4">
                <motion.div
                  className={`text-3xl w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${review.color} mr-4`}
                  animate={{
                    rotate: [0, 10, 0],
                    transition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {review.avatar}
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{review.name}</h3>
                  <p className="text-emerald-600 text-sm">{review.batch}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Review Comment */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{review.comment}</p>

              {/* Quote Icon */}
              <div className="absolute bottom-4 right-4 text-3xl text-emerald-200 opacity-50">
                "
              </div>

              {/* Floating biology icons around card */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-sm"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    color: `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 200) + 55}, ${Math.floor(Math.random() * 100) + 155}, 0.2)`
                  }}
                  animate={{
                    y: [0, -10, 0],
                    x: [0, (Math.random() - 0.5) * 20, 0],
                    rotate: [0, 360, 0]
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {['🧬', '🔬', '📚'][i]}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom moving row - Right to Left */}
        <motion.div
          className="flex"
          animate={{
            x: ["-100%", "0%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 50,
              ease: "linear"
            }
          }}
        >
          {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((review, index) => (
            <motion.div
              key={`bottom-${index}`}
              className="flex-shrink-0 mx-4 w-80 rounded-2xl bg-white border border-teal-100 shadow-lg p-6 relative"
              animate={{
                y: [0, -15, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                z: 20,
                transition: { duration: 0.3 }
              }}
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-4">
                <motion.div
                  className={`text-3xl w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${review.color} mr-4`}
                  animate={{
                    rotate: [0, -10, 0],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {review.avatar}
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{review.name}</h3>
                  <p className="text-emerald-600 text-sm">{review.batch}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>

              {/* Review Comment */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{review.comment}</p>

              {/* Quote Icon */}
              <div className="absolute bottom-4 right-4 text-3xl text-teal-200 opacity-50">
                "
              </div>

              {/* Animated success badge */}
              {review.rating === 5 && (
                <motion.div
                  className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  TOP STUDENT
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#enroll"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:shadow-emerald-200 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              Join Our Success Stories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.a>
          <p className="text-gray-500 mt-4 text-sm">
            Want to share your success story? <a href="#contact" className="text-emerald-600 font-medium hover:underline">Contact us</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentReview;