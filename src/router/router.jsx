import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const FavoritePage = React.lazy(() => import("../pages/FavoritePage"));
const OrderPage = React.lazy(() => import("../pages/OrderPage"));

const router = createBrowserRouter([
    {
    path: "/",
    element: <Root />,
    children: [
        {
            path: '/',
            element: <HomePage />,
            index: true
        },
        {
            path: '/favorites',
            element: <FavoritePage />
        },
        {
            path: '/orders',
            element: <OrderPage />
        },
    ]
    }
]);

export default router;