import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useLocation,Link } from 'react-router-dom';
import { FiBookOpen, FiCalendar, FiAward, FiTrendingUp, FiLogOut, FiSettings, FiClock, FiBarChart } from 'react-icons/fi';

const StudentDashboard = () => {
  const { user } = useAuth();
    const location = useLocation();
  const isInDashboard = location.pathname.startsWith('/dashboard');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const enrolledCourses = [
    { id: 1, title: "Cell Biology Basics", progress: 85, icon: "🧬", category: "HSC", nextLesson: "Cell Division" },
    { id: 2, title: "Human Anatomy", progress: 45, icon: "🦴", category: "Medical", nextLesson: "Skeletal System" },
    { id: 3, title: "Genetics Fundamentals", progress: 30, icon: "🧬", category: "Varsity", nextLesson: "Mendelian Genetics" },
    { id: 4, title: "Microbiology Crash", progress: 10, icon: "🦠", category: "Crash Course", nextLesson: "Bacterial Structure" }
  ];

  const upcomingClasses = [
    { time: "10:00 AM", title: "Live Session: Ecology", instructor: "Dr. Sarah Johnson" },
    { time: "02:00 PM", title: "Q&A: Biochemistry", instructor: "Prof. Michael Chen" },
    { time: "04:30 PM", title: "Lab Demo: Microscopy", instructor: "Dr. Emma Wilson" }
  ];

  const achievements = [
    { title: "Perfect Attendance", icon: "🎯", date: "Last week" },
    { title: "Quick Learner", icon: "⚡", date: "3 days ago" },
    { title: "Lab Master", icon: "🔬", date: "Yesterday" }
  ];

  const stats = [
    { label: "Learning Hours", value: "48h", change: "+12%", icon: <FiClock /> },
    { label: "Courses Enrolled", value: "8", change: "+2", icon: <FiBookOpen /> },
    { label: "Avg. Score", value: "94%", change: "+5%", icon: <FiTrendingUp /> },
    { label: "Streak", value: "14 days", change: "Active", icon: <FiBarChart /> }
  ];

  const floatingElements = ["🎓", "📚", "🏆", "⭐", "✨", "📖", "🎯", "🔬", "🧪", "🧠"];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-8 overflow-hidden relative bg-gradient-to-br from-gray-50 to-emerald-50/30">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-emerald-200/30 to-cyan-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating icons */}
      {floatingElements.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-10 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 1
          }}
        >
          {icon}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >

        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-emerald-600`}>
                  {stat.icon}
                </div>
                <span className="text-sm font-medium text-emerald-600">{stat.change}</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Enrolled Courses */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Courses Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Courses</h2>
                 <Link
      to={
        isInDashboard
          ? `/dashboard/Allcourses`  // Use dashboard path if in dashboard
          : `/courses`            // Use normal path if not in dashboard
      }
      className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
    >
      Browse All
    </Link>
              </div>
              <div className="space-y-4">
                {enrolledCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50/50 rounded-xl transition-all duration-300"
                  >
                    <div className="text-4xl">{course.icon}</div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-900">{course.title}</h3>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                          {course.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span>Next: {course.nextLesson}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Progress</span>
                        <span className="font-semibold text-emerald-600">{course.progress}%</span>
                      </div>
                    </div>
                   <Link
      to={
        isInDashboard
          ? `/dashboard/courses/${course.id}`  // Use dashboard path if in dashboard
          : `/courses/${course.id}`            // Use normal path if not in dashboard
      }
      className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
    >
      Continue
    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recommended Courses */}
            <div className="bg-gradient-to-br from-emerald-50/50 to-cyan-50/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended For You</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: "🌱", title: "Plant Biology", desc: "Learn about photosynthesis and plant anatomy" },
                  { icon: "🧠", title: "Neurobiology", desc: "Explore the nervous system and brain function" },
                ].map((course, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{course.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600">{course.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* User Profile Card */}
            <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl bg-white/20 p-4 rounded-2xl">{user?.avatar || "👨‍🎓"}</div>
                <div>
                  <h3 className="text-xl font-bold">{user?.name}</h3>
                  <p className="text-emerald-100">{user?.email}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Learning Progress</span>
                  <span>{user?.progress || 0}%</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${user?.progress || 0}%` }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full bg-white"
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="px-4 py-2 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  View Full Profile
                </button>
              </div>
            </div>

            {/* Upcoming Classes */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <FiCalendar className="text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Classes</h2>
              </div>
              <div className="space-y-4">
                {upcomingClasses.map((classItem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50/50 rounded-xl transition-colors"
                  >
                    <div className="text-center min-w-20">
                      <div className="font-bold text-gray-900">{classItem.time}</div>
                      <div className="text-sm text-gray-500">Today</div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900">{classItem.title}</h4>
                      <p className="text-sm text-gray-600">{classItem.instructor}</p>
                    </div>
                    <button className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm hover:bg-emerald-200 transition-colors">
                      Join
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <FiAward className="text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Recent Achievements</h2>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50/50 rounded-xl transition-colors"
                  >
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">Earned {achievement.date}</p>
                    </div>
                    <div className="text-yellow-500">🏆</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <h3 className="font-semibold text-gray-900 mb-2">Study Time This Week</h3>
            <div className="text-3xl font-bold text-purple-600">12.5 hours</div>
            <p className="text-sm text-gray-600 mt-2">+2.5h from last week</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="font-semibold text-gray-900 mb-2">Assignments Completed</h3>
            <div className="text-3xl font-bold text-blue-600">8/10</div>
            <p className="text-sm text-gray-600 mt-2">Due: 2 assignments remaining</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
            <h3 className="font-semibold text-gray-900 mb-2">Community Rank</h3>
            <div className="text-3xl font-bold text-orange-600">#42</div>
            <p className="text-sm text-gray-600 mt-2">Top 10% of learners</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDashboard;