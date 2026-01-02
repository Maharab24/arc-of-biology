import { createBrowserRouter, Navigate } from "react-router-dom";
import MyLayout from "../layout/myLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AllCourse from "../pages/AllCourse";
import CourseDetails from "../pages/CourseDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import StudentDashboard from "../pages/StudentDashboard";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/HomeCourseSection",
        element: <Navigate to={{ pathname: '/', hash: '#courses'}} replace />
      },
      {
        path: "/courses/:courseId",
        element: <CourseDetails />,
      },
      { path: "/AllCourse", element: <AllCourse /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <StudentDashboard /> },
      // Add more dashboard routes here as needed
    ],
  },
]);

export default router;