import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
])
export default router;