import React from "react";
import ReactDOM from "react-dom/client";
import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./index.scss";
import AppIntroLayout from "./Layouts/AppIntroLayout";
import IndexPage from "./Pages/IndexPage";
import SignInPage from "./Pages/SignInPage";
import DashboardPage from "./Pages/DashboardPage";
import AuthorizeUser from "./Components/AuthorizeUser";

const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AppIntroLayout />}>
                <Route index element={<IndexPage />}></Route>
            </Route>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route
                path="/dashboard"
                element={
                    <AuthorizeUser>
                        <DashboardPage />
                    </AuthorizeUser>
                }
            />
        </>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
