import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/about",
            element: <About></About>,
        },
        {
            path:"/shop",
            element: <Shop></Shop>
        },
      ]
    },
  ]);

  export default router