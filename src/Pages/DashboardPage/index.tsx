import { useLoaderData } from "react-router-typesafe";
import LinkButton from "../../Components/LinkButton";
import DisplayCompanies from "./DisplayCompanies";
import "./index.scss";
import { userAndCompaniesLoader } from "./userAndCompaniesLoader";
import Input from "../../Components/Input";

export default function DashboardPage() {
    const { companies, user } = useLoaderData<typeof userAndCompaniesLoader>();

    return (
        <main className="dashboard-page">
            Hi, {user.firstName}
            <Input />
            <DisplayCompanies companies={companies} />
            <LinkButton
                to="/dashboard/add-company"
                variation="primary"
                className="add-company-button"
            >
                <i className="bi bi-plus-lg"></i>
            </LinkButton>
        </main>
    );
}
