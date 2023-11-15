import React from "react";
import ReactDOM from "react-dom/client";
import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./index.scss";
import Layout from "./Layout";
import IndexPage from "./Pages/IndexPage";
import SignInPage from "./Pages/SignInPage";

const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<IndexPage />}></Route>
            </Route>
            <Route path="/sign-in" element={<SignInPage />} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
