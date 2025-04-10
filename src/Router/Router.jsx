import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddCar from "../Pages/Home/AddCar/AddCar";
import AvailableCars from "../Pages/AvailableCars/AvailableCars";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/add-car",
          element: <AddCar/>
        },
        {
          path: "/available-car",
          element: <AvailableCars/>
        },
      ],
    },
  ]);

  export default router 