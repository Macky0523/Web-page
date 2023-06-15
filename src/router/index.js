import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../Views/profile"
import Register from "../Auth/registration/register";
import Activate from "../Views/activate";
import LandingPage from "../Views/landingpage";
import Login from "../Auth/login/login";
import BookingPage from "../Views/booking";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path:"/activate",
      element: <Activate/>
    },
    {
      path:"/home",
      element: <LandingPage/>
    }
    ,
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/booking",
      element: <BookingPage/>
    },
    
  ]);

  export default router;