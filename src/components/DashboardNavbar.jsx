import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiUser, FiLogOut, FiBell, FiMessageSquare, FiHome } from 'react-icons/fi';
import { motion } from 'framer-motion';

const DashboardNavbar = () => {
  const { user, logout } = useAuth();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const notifications = [
    { id: 1, text: 'Assignment due tomorrow', time: '10 min ago', unread: true },
    { id: 2, text: 'New course material uploaded', time: '1 hour ago', unread: true },
    { id: 3, text: 'Live class starting in 30 min', time: '2 hours ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left side - Dashboard title */}
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors">
              <FiHome className="text-lg" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Student Dashboard
              </h1>
              <p className="text-xs text-gray-500">Welcome back, {user?.name || 'Student'}!</p>
            </div>
          </div>

          {/* Right side - User controls */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="relative p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
              >
                <FiBell className="text-xl" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications dropdown */}
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-gray-900">Notifications</h3>
                      <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                        {unreadCount} new
                      </span>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors ${notification.unread ? 'bg-emerald-50/50' : ''
                          }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 mt-2 rounded-full ${notification.unread ? 'bg-emerald-500' : 'bg-gray-300'
                            }`}></div>
                          <div className="flex-grow">
                            <p className="text-gray-900">{notification.text}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-gray-100">
                    <Link
                      to="/notifications"
                      className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      View all notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Messages */}
            <Link
              to="/messages"
              className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors relative"
            >
              <FiMessageSquare className="text-xl" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></span>
            </Link>

            {/* User profile */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                  {user?.avatar || user?.name?.charAt(0) || 'U'}
                </div>
                <div className="text-left hidden md:block">
                  <p className="font-medium text-gray-900">{user?.name || 'User'}</p>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
              </button>

              {/* Profile dropdown */}
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50"
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                        {user?.avatar || user?.name?.charAt(0) || 'U'}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{user?.name || 'User'}</h3>
                        <p className="text-sm text-gray-500">{user?.email || 'student@example.com'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <Link
                      to="/dashboard/profile"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      <FiUser className="text-lg" />
                      <span>My Profile</span>
                    </Link>
                    <Link
                      to="/dashboard/settings"
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Settings</span>
                    </Link>
                  </div>
                  <div className="py-2 border-t border-gray-100">
                    <button
                      onClick={logout}
                      className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <FiLogOut className="text-lg" />
                      <span>Logout</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Progress:</span>
                <span className="font-bold text-emerald-600">{user?.progress || 0}%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Courses:</span>
                <span className="font-bold text-emerald-600">8 enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Streak:</span>
                <span className="font-bold text-emerald-600">14 days 🔥</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Last active: Today, 10:30 AM
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;