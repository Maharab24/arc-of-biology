import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // In a real app, this would be an API call
    const mockUser = {
      id: '12345',
      name: 'John Doe',
      email: email,
      avatar: '👨‍🎓',
      enrolledCourses: [1, 2, 3],
      progress: 65
    };

    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return { success: true, user: mockUser };
  };

  const register = (name, email, password) => {
    const mockUser = {
      id: '67890',
      name: name,
      email: email,
      avatar: '👨‍🎓',
      enrolledCourses: [],
      progress: 0
    };

    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    return { success: true, user: mockUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};