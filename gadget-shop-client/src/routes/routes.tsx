import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Porducts from "../pages/Porducts";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/products", element: <Porducts /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <ContactUs /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> }
        ]
    }
])


