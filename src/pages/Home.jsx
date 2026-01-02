// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HomeCourseSection from '../components/HomeCourseSection';
import StudentReview from '../components/StudentReview';


function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      navigate(location.pathname, { replace: true });
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  return (
    <div>
      <Header />
<HomeCourseSection></HomeCourseSection>
      <StudentReview></StudentReview>
    </div>
  );
}

export default Home;
