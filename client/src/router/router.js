import { createBrowserRouter } from "react-router-dom";



import PublicLayout from "../components/PublicLayout";
import Home from "../components/Home";
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Logout from "../components/Logout";

import ProtectedRoute from "../utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },      
      {
        path: "/login",
        element: <ProtectedRoute isAllowed={"isNotAuth"}><Login/></ProtectedRoute>,
      },
      {
        path: "/signup",
        element: <ProtectedRoute isAllowed={"isNotAuth"}><SignUp/></ProtectedRoute>,
      },
      {
        path: "/logout",
        element: <ProtectedRoute isAllowed={"isAuth"}><Logout/></ProtectedRoute>,
      },
    ],
  },
]);

export default router;