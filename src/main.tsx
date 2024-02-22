import mapboxgl from "mapbox-gl";
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
import ContainerLayout from "./Layouts/ContainerLayout";
import { userAndCompaniesLoader } from "./loaders/userAndCompaniesLoader";
import { userAndCompanyLoader } from "./loaders/userAndCompanyLoader";
import DashboardPage from "./Pages/DashboardPage";
import AddCompany from "./Pages/DashboardPage/AddCompany";
import CompanyDetail from "./Pages/DashboardPage/CompanyDetail";
import DeleteCompany from "./Pages/DashboardPage/DeleteCompany";
import EditCompany from "./Pages/DashboardPage/EditCompany";
import IndexPage from "./Pages/IndexPage";
import LogoutPage from "./Pages/LogoutPage";
import ProfilePage from "./Pages/ProfilePage";
import ServerDownPage from "./Pages/ServerDownPage";
import SignInPage from "./Pages/SignInPage";
import { checkIsSignedIn } from "./Pages/SignInPage/checkIsSignedIn";
import GenerateUserReportPage from "./Pages/GenerateUserReportPage";
import { userLoader } from "./loaders/userLoader";
import HelpPage from "./Pages/HelpPage";

mapboxgl.accessToken =
    "pk.eyJ1IjoibHVjYXMtZmFuIiwiYSI6ImNsczg2eTRvdzFjZmcya283dHlqc2ZxM24ifQ.tadhq52OnV1ta0HEERH76g";

const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AppIntroLayout />}>
                <Route index element={<IndexPage />}></Route>
                <Route path="/dashboard" element={<ContainerLayout />}>
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
                <Route path="/profile" element={<ContainerLayout />}>
                    <Route
                        index
                        loader={userLoader}
                        element={<ProfilePage />}
                    />
                </Route>
                <Route path="/help" element={<ContainerLayout />}>
                    <Route index element={<HelpPage />} />
                </Route>
            </Route>
            <Route
                loader={checkIsSignedIn}
                path="/sign-in"
                element={<SignInPage />}
            />
            <Route path="/server-down" element={<ServerDownPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route
                path="/generate-user-report"
                loader={userLoader}
                element={<GenerateUserReportPage />}
            />
        </>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
