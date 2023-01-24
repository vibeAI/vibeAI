import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../components/PublicLayout";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Logout from "../components/Logout";
import AboutUs from "../pages/aboutUs"
import Profile from "../pages/profile"
import ProtectedRoute from "../utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    index: true,
    element: <LandingPage />,
  },
  { path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/home",
        element: <ProtectedRoute isAllowed={"isNotAuth"}><Home /></ProtectedRoute>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/logout",
        element: <ProtectedRoute isAllowed={"isAuth"}><Logout /></ProtectedRoute>,
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/profile",
        element: <Profile />
      },
    ],
  },
]);

export default router;
