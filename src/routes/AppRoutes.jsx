import { createBrowserRouter, Navigate } from "react-router-dom";
import MyLayout from "../layout/myLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import AllCourse from "../pages/AllCourse";
import CourseDetails from "../pages/CourseDetails";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },

      {
        path: "/projects",
        element: <Navigate to={{ pathname: '/', hash: '#courses'}} replace />
      },
      {
        path: "/courses/:courseId",
        element: <CourseDetails />,
      },
      {path:"/AllCourse",element:<AllCourse></AllCourse>}
      // { path: "/AllCourse", element: <Skills /> },
      // { path: "/contact", element: <Contact /> },
      // { path: "/AI", element: <AI /> },
      // { path: "/Web", element: <Web /> },
      // { path: "/Research", element: <Research /> },
      // { path: "/Cp", element: <Cp /> },
      // { path: "/iot", element: <Iot /> },

    ],
  },
]);

export default router;
