import { useLoaderData } from "react-router-typesafe";
import LinkButton from "../../Components/LinkButton";
import { userAndCompaniesLoader } from "../../loaders/userAndCompaniesLoader";
import "./index.scss";
import { useState } from "react";
import SearchCompany from "./SearchCompany";
import CompanyCard from "./CompanyCard";
import CompanyHintText from "./CompanyHintText";

export default function DashboardPage() {
    const { companies, user } = useLoaderData<typeof userAndCompaniesLoader>();
    const [companiesToDisplay, setCompaniesToDisplay] = useState(companies);
    const [query, setQuery] = useState("");

    function renderCompanies(): React.ReactNode[] {
        return companiesToDisplay.map(company => {
            return <CompanyCard key={company._id} {...company} />;
        });
    }

    return (
        <main className="dashboard-page">
            Hello, {user.firstName}!
            <SearchCompany
                query={query}
                setQuery={setQuery}
                setCompaniesToDisplay={setCompaniesToDisplay}
                defaultCompanies={companies}
                user={user}
            />
            <CompanyHintText
                companiesToDisplay={companiesToDisplay}
                query={query}
            />
            <div>{renderCompanies()}</div>
            <LinkButton
                to="/dashboard/add-company"
                variation="primary"
                className="add-company-button"
            >
                <i className="bi bi-plus-lg" />
            </LinkButton>
        </main>
    );
}
