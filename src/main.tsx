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
import DashboardPage from "./Pages/DashboardPage";
import { dashboardLoader } from "./Pages/DashboardPage/dashboardLoader";
import IndexPage from "./Pages/IndexPage";
import SignInPage from "./Pages/SignInPage";
import ServerDownPage from "./Pages/ServerDownPage";
import { checkIsSignedIn } from "./Pages/SignInPage/checkIsSignedIn";

const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AppIntroLayout />}>
                <Route index element={<IndexPage />}></Route>
            </Route>
            <Route
                loader={checkIsSignedIn}
                path="/sign-in"
                element={<SignInPage />}
            />
            <Route path="/server-down" element={<ServerDownPage />} />
            <Route
                loader={dashboardLoader}
                path="/dashboard"
                element={<DashboardPage />}
            />
        </>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
