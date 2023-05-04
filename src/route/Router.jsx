import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Blog from "../components/Blog";
import ChefLayout from "../layout/ChefLayout";
import AllChef from "../components/AllChef";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'chef',
                element: <AllChef></AllChef>,
                loader: () => fetch(`https://assignment10-server-alhabib5565.vercel.app/alldata`)
            }
        ]
    }
])

export default router