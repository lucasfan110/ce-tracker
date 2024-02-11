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
import DashboardLayout from "./Layouts/DashboardLayout";
import DashboardPage from "./Pages/DashboardPage";
import AddCompany from "./Pages/DashboardPage/AddCompany";
import CompanyDetail from "./Pages/DashboardPage/CompanyDetail";
import DeleteCompany from "./Pages/DashboardPage/DeleteCompany";
import EditCompany from "./Pages/DashboardPage/EditCompany";
// import {
//     userAndCompaniesLoader,
//     userAndCompanyLoader,
// } from "./Pages/DashboardPage/userAndCompaniesLoader";
import IndexPage from "./Pages/IndexPage";
import ServerDownPage from "./Pages/ServerDownPage";
import SignInPage from "./Pages/SignInPage";
import { checkIsSignedIn } from "./Pages/SignInPage/checkIsSignedIn";
import mapboxgl from "mapbox-gl";
import { userAndCompaniesLoader } from "./loaders/userAndCompaniesLoader";
import { userAndCompanyLoader } from "./loaders/userAndCompanyLoader";

mapboxgl.accessToken =
    "pk.eyJ1IjoibHVjYXMtZmFuIiwiYSI6ImNsczg2eTRvdzFjZmcya283dHlqc2ZxM24ifQ.tadhq52OnV1ta0HEERH76g";

const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AppIntroLayout />}>
                <Route index element={<IndexPage />}></Route>
                <Route path="/dashboard" element={<DashboardLayout />}>
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
                    <Route
                        loader={userAndCompanyLoader}
                        path="company/:companyId"
                        element={<CompanyDetail />}
                    />
                </Route>
            </Route>
            <Route
                loader={checkIsSignedIn}
                path="/sign-in"
                element={<SignInPage />}
            />
            <Route path="/server-down" element={<ServerDownPage />} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
