import { useLoaderData } from "react-router-typesafe";
import LinkButton from "../../Components/LinkButton";
import { userAndCompaniesLoader } from "../../loaders/userAndCompaniesLoader";
import "./index.scss";
import { useState } from "react";
import SearchCompany from "./SearchCompany";
import CompanyCard from "./CompanyCard";

export default function DashboardPage() {
    const { companies, user } = useLoaderData<typeof userAndCompaniesLoader>();
    const [companiesToDisplay, setCompaniesToDisplay] = useState(companies);
    const [query, setQuery] = useState("");

    function renderCompanies(): React.ReactNode[] {
        return companiesToDisplay.map(company => {
            return <CompanyCard key={company._id} {...company} />;
        });
    }

    function renderHintText(): React.ReactNode {
        if (!companiesToDisplay.length && !query) {
            return (
                <div className="dashboard-page__hint-text">
                    There are no companies in your account. Press the plus
                    button on the bottom right corner to add a company!
                </div>
            );
        }

        if (!companiesToDisplay.length && !!query) {
            return (
                <div className="dashboard-page__hint-text">
                    No companies found
                </div>
            );
        }

        return null;
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
            {renderHintText()}
            <div>{renderCompanies()}</div>
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
