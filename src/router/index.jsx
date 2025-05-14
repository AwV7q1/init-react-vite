import React from "react";
import {createBrowserRouter} from "react-router";
import Page1 from "@/page/Page1/index.jsx";
import Page2 from "@/page/Page2/index.jsx";
import Page3 from "@page/Page3/index.jsx";
import Page4 from "@page/Page4/index.jsx";
import NotFound from "@page/NotFound/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page1/>,
    },
    {
        path: "page2",
        element: <Page2/>,
        children: [
            {
                index: true,
                element: <Page3/>,
            },
            {
                path: "page4",
                element: <Page4/>,
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }

]);

export default router;

