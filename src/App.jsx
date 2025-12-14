import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar1 from "./components/Navbar/Navbar1.jsx";
import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy.jsx";
import TermsConditions from "./pages/TermsConditions/TermsConditions.jsx";

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
