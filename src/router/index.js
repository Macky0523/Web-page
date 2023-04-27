import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../Views/profile"
import Register from "../Auth/registration/register";
import Activate from "../Views/activate";
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
    }
    
  ]);

  export default router;