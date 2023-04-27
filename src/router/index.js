import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../Views/profile"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/profile",
        element: <Profile/>
    }
  ]);

  export default router;