/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, redirect } from "react-router-dom";
import AboutUSPage from "../Pages/AboutUS.jsx";
import BlogPage from "../Pages/Blog.jsx";
import CartPage from "../Pages/Cart.jsx";
import ContactUSPage from "../Pages/ContactUS.jsx";
import HomePage from "../Pages/HomePage.jsx";
import ProductPage from "../Pages/Product.jsx";

import AppLayout from "../Components/Layouts/AppLayout.jsx";
import AuthPage from "../Pages/AuthPage.jsx";
import AuthLayout from "../Components/Layouts/AuthLayout.jsx";
import CMSLayout from "../Components/Layouts/CMSLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about-us", element: <AboutUSPage /> },
            { path: "contact-us", element: <ContactUSPage /> },
            { path: "cart", element: <CartPage /> },
            { path: "product/:productID", element: <ProductPage /> },
            { path: "blog/:blogID", element: <BlogPage /> },
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    { index: true, element: <AuthPage /> }
                ]
            }
        ],
    },
    {
        path: 'dashboard',
        element: <CMSLayout />,
        children: [
            {
                path: 'moderator',
                children: [
                    { index: true, loader: () => redirect("home") },
                    { path: 'home', element: <div>moderator home D</div> },
                    { path: 'orders', element: <div>moderator orders D</div> },
                    { path: 'products', element: <div>moderator products D</div> },
                ]
            },
            {
                path: 'seller',
                children: [
                    { index: true, loader: () => redirect("home") },
                    { path: 'home', element: <div> seller home D</div> },
                    { path: 'orders', element: <div> seller orders D</div> },
                    { path: 'products', element: <div> seller products D</div> },
                ]
            },
            {
                path: 'user',
                children: [
                    { index: true, loader: () => redirect("home") },
                    { path: 'home', element: <div> user home D</div> },
                    { path: 'orders', element: <div> user orders D</div> },
                    { path: 'products', element: <div> user products D</div> },
                ]
            }
        ]
    }
]);

export default router;
