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
import AddCompany from "./Pages/DashboardPage/AddCompany";
import {
    userAndCompaniesLoader,
    userAndCompanyLoader,
} from "./Pages/DashboardPage/userAndCompaniesLoader";
import IndexPage from "./Pages/IndexPage";
import ServerDownPage from "./Pages/ServerDownPage";
import SignInPage from "./Pages/SignInPage";
import { checkIsSignedIn } from "./Pages/SignInPage/checkIsSignedIn";
import EditCompany from "./Pages/DashboardPage/EditCompany";
import DeleteCompany from "./Pages/DashboardPage/DeleteCompany";

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
            <Route path="/dashboard">
                <Route
                    index
                    loader={userAndCompaniesLoader}
                    element={<DashboardPage />}
                />
                <Route
                    loader={userAndCompaniesLoader}
                    path="add-company/"
                    element={<AddCompany />}
                />
                <Route
                    loader={userAndCompanyLoader}
                    path="edit-company/:companyId"
                    element={<EditCompany />}
                />
                <Route
                    loader={userAndCompanyLoader}
                    path="delete-company/:companyId"
                    element={<DeleteCompany />}
                />
            </Route>
        </>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
