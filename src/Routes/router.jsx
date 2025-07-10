import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home/Home";
import FlightBookingUI from "../Components/FlightBookingUI";
import Searchsection from "../Components/SearchSection/Searchsection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/search",
    element: <Searchsection/>,
  },
]);
export default router;
