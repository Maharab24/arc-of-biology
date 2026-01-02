import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const textRef = useRef(null);
  const headerRef = useRef(null);
  const words = ["Biology Coaching", "Medical Entrance", "NEET Preparation"];
  const particlesRef = useRef(null);
  const [icons, setIcons] = useState([]);
  const iconId = useRef(0);

  // Biology-themed icons/emoji
  const biologyIcons = ["🧬", "🔬", "🧪", "📚", "🦠", "🧫", "🧠", "💊", "🌱", "🩺"];

  useEffect(() => {
    // Typing animation
    let currentWordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 200;

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        charIndex--;
        typeSpeed = 100;
      } else {
        charIndex++;
        typeSpeed = 200;
      }

      const text = currentWord.substring(0, charIndex);
      if (textRef.current) {
        textRef.current.textContent = text;
      }

      if (!isDeleting && text === currentWord) {
        typeSpeed = 1500;
        isDeleting = true;
      } else if (isDeleting && text === '') {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }

      setTimeout(type, typeSpeed);
    };

    type();

    // Create floating biology icons
    const createIcon = () => {
      if (!particlesRef.current) return;

      const icon = document.createElement('div');
      icon.className = 'absolute text-2xl pointer-events-none';

      // Random biology icon
      const randomIcon = biologyIcons[Math.floor(Math.random() * biologyIcons.length)];
      icon.textContent = randomIcon;

      // Random properties
      const size = Math.random() * 24 + 16;
      icon.style.fontSize = `${size}px`;
      icon.style.opacity = Math.random() * 0.3 + 0.1;

      // Random position
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;

      icon.style.left = `${startX}%`;
      icon.style.top = `${startY}%`;

      particlesRef.current.appendChild(icon);

      // Animation
      const duration = Math.random() * 15 + 10;
      const moveX = (Math.random() - 0.5) * 300;
      const moveY = (Math.random() - 0.5) * 300;
      const rotate = Math.random() * 360;

      icon.animate(
        [
          { transform: `translate(0, 0) rotate(0deg)`, opacity: 0 },
          { transform: `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`, opacity: icon.style.opacity },
          { transform: `translate(${moveX * 2}px, ${moveY * 2}px) rotate(${rotate * 2}deg)`, opacity: 0 }
        ],
        {
          duration: duration * 1000,
          easing: 'ease-in-out',
        }
      );

      // Remove after animation
      setTimeout(() => {
        icon.remove();
      }, duration * 1000);
    };

    // Create icons continuously
    const iconInterval = setInterval(createIcon, 400);

    // Mouse move glow effect
    const handleMouseMove = (e) => {
      if (Math.random() > 0.6) {
        const newIcon = {
          id: iconId.current++,
          x: e.clientX,
          y: e.clientY,
          icon: biologyIcons[Math.floor(Math.random() * biologyIcons.length)],
          size: Math.random() * 20 + 10,
          opacity: Math.random() * 0.5 + 0.3,
        };

        setIcons(prev => [...prev, newIcon]);

        // Remove icon after animation
        setTimeout(() => {
          setIcons(prev => prev.filter(icon => icon.id !== newIcon.id));
        }, 1500);
      }
    };

    if (headerRef.current) {
      headerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      clearInterval(iconInterval);
      if (headerRef.current) {
        headerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 overflow-hidden relative cursor-default"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 20%),
          radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.08) 0%, transparent 20%),
          radial-gradient(circle at 40% 80%, rgba(5, 150, 105, 0.06) 0%, transparent 20%),
          radial-gradient(circle at 60% 20%, rgba(20, 184, 166, 0.06) 0%, transparent 20%)
        `,
        boxShadow: '0 0 100px 50px rgba(255, 255, 255, 0.8) inset'
      }}
    >
      {/* Floating icons container */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      />

      {/* Mouse glow icons */}
      {icons.map(icon => (
        <motion.div
          key={icon.id}
          className="absolute pointer-events-none"
          initial={{
            opacity: icon.opacity,
            fontSize: `${icon.size}px`,
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            filter: 'drop-shadow(0 0 8px rgba(5, 150, 105, 0.5))'
          }}
          animate={{
            opacity: 0,
            top: `${icon.y - 100}px`,
            scale: 1.8,
            rotate: 360
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut"
          }}
        >
          {icon.icon}
        </motion.div>
      ))}

      <div className="container mt-10 mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl lg:text-2xl font-light text-emerald-600 mb-4">
              Welcome to
            </h3>
          </motion.div>

          <motion.h1
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="text-emerald-700">ARC</span> of{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Biology
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl lg:text-4xl font-bold mb-8 min-h-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="text-teal-600">Your Path to </span>
            <span
              ref={textRef}
              className="text-emerald-700 ml-2 border-r-2 border-emerald-500 animate-pulse"
            ></span>
          </motion.div>

          <motion.p
            className="text-gray-700 text-lg mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Premier coaching for NEET, Medical Entrance & Biology Olympiads.
            Master complex biological concepts with expert guidance, interactive learning,
            and proven success strategies.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🏆', title: 'Expert Faculty', desc: 'PhD & Medical Professionals' },
              { icon: '📈', title: '99% Success', desc: 'NEET Selection Rate' },
              { icon: '🔬', title: 'Lab Sessions', desc: 'Practical Learning' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(5, 150, 105, 0.1)' }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-emerald-700">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.a
              href="#enroll"
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:shadow-emerald-200 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Enroll Now
              </span>
            </motion.a>

           <motion.button
  onClick={() => {
    const el = document.getElementById("courses");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="px-8 py-3 bg-white border-2 border-emerald-500
             text-emerald-700 font-bold rounded-full"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  View Courses
</motion.button>
          </motion.div>
        </motion.div>

        {/* Biology Illustration Section */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="relative">
            {/* DNA Helix Animation */}
            <motion.div
              className="absolute -top-10 -left-10 w-80 h-80 opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="relative w-full h-full">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 w-1 h-20 bg-emerald-400"
                    style={{
                      transform: `translateX(-50%) rotate(${i * 36}deg)`,
                      top: '50%',
                      marginTop: '-40px',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Main Illustration Container */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-emerald-100">
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column Icons */}
                <div className="space-y-6">
                  <motion.div
                    className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-2">🔬</div>
                    <p className="font-semibold text-emerald-700">Microscope Lab</p>
                  </motion.div>
                  <motion.div
                    className="bg-teal-50 p-4 rounded-2xl border border-teal-200 text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-2">🧬</div>
                    <p className="font-semibold text-teal-700">DNA Research</p>
                  </motion.div>
                </div>

                {/* Right Column Icons */}
                <div className="space-y-6">
                  <motion.div
                    className="bg-blue-50 p-4 rounded-2xl border border-blue-200 text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-2">🧠</div>
                    <p className="font-semibold text-blue-700">Neurobiology</p>
                  </motion.div>
                  <motion.div
                    className="bg-green-50 p-4 rounded-2xl border border-green-200 text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-2">📚</div>
                    <p className="font-semibold text-green-700">Study Material</p>
                  </motion.div>
                </div>
              </div>

              {/* Center Element */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="flex items-center font-bold">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  Batch Starting Soon!
                </span>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg border border-emerald-200"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-2xl">💊</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg border border-teal-200"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-2xl">🦠</span>
            </motion.div>
          </div>
        </motion.div>
      </div>



      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {biologyIcons[i % biologyIcons.length]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Header;