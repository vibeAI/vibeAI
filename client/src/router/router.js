import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../components/PublicLayout";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Logout from "../components/Logout";

import ProtectedRoute from "../utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
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
    ],
  },
]);

export default router;