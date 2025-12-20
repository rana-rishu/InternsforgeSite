import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar1 from "./components/Navbar/Navbar1.jsx";
import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy.jsx";
import TermsConditions from "./pages/TermsConditions/TermsConditions.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Coursedata from "./utils/data.js";

const RootLayout = () => {
  return (
    <div className="container">
      <Navbar1 />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const findCourseByParam = (courseNameParam) => {
  if (!courseNameParam) return null;

  const normalizedParam = courseNameParam.toLowerCase();

  return Coursedata.find((c) => {
    const slug = c.slug
      ? c.slug.toLowerCase()
      : c.CourseName.toLowerCase().replace(/\s+/g, "-");

    return slug === normalizedParam;
  });
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses/:courseName",
        loader: async ({ params }) => {
          const course = findCourseByParam(params.courseName);

          if (!course) {
            throw new Response("Course not found", { status: 404 });
          }
          return course;
        },
        element: <Courses />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/refundpolicy",
        element: <RefundPolicy />,
      },
      {
        path: "/termsconditions",
        element: <TermsConditions />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
