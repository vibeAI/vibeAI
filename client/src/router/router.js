import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> 96c0fa0843ce9b6f2446c028bfa8a3d6723933c9
import PublicLayout from "../components/PublicLayout";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Logout from "../components/Logout";
import AboutUs from "../pages/aboutUs"
<<<<<<< HEAD
=======
import Profile from "../pages/profile"


>>>>>>> 96c0fa0843ce9b6f2446c028bfa8a3d6723933c9
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
<<<<<<< HEAD
=======
      },
      {
        path: "/profile",
        element: <Profile />
>>>>>>> 96c0fa0843ce9b6f2446c028bfa8a3d6723933c9
      },
    ],
  },
]);

export default router;
