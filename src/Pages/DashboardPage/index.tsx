import { useLoaderData } from "react-router-typesafe";
import Input from "../../Components/Input";
import LinkButton from "../../Components/LinkButton";
import { userAndCompaniesLoader } from "../../loaders/userAndCompaniesLoader";
import DisplayCompanies from "./DisplayCompanies";
import "./index.scss";
import { useEffect, useState } from "react";
import { searchCompany } from "../../utils/searchCompany";

export default function DashboardPage() {
    const { companies, user } = useLoaderData<typeof userAndCompaniesLoader>();
    const [companiesToDisplay, setCompaniesToDisplay] = useState(companies);
    const [query, setQuery] = useState("");
    const [showResetButton, setShowResetButton] = useState(false);

    async function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!query) {
            return;
        }

        const trimmedQuery = query.trim();

        const companies = await searchCompany(user._id, trimmedQuery);
        const mappedCompanies = companies.map(company => {
            const regex = new RegExp(trimmedQuery, "ig");
            const newName = company.name.replace(regex, value => {
                return `<strong>${value}</strong>`;
            });

            return { ...company, name: newName };
        });
        setCompaniesToDisplay(mappedCompanies);
    }

    useEffect(() => {
        function clearQuery() {
            setCompaniesToDisplay(companies);
        }

        if (!query) {
            setShowResetButton(false);
            clearQuery();
        } else {
            setShowResetButton(true);
        }
    }, [query, companies]);

    return (
        <main className="dashboard-page">
            Hello, {user.firstName}!
            <form
                onSubmit={handleSearchSubmit}
                className="dashboard-page__search-form"
            >
                <Input
                    type="search"
                    placeholder="Search..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="dashboard-page__search-input"
                />
                <button
                    type="reset"
                    style={{ display: showResetButton ? "initial" : "none" }}
                    onClick={() => setQuery("")}
                    className="dashboard-page__search-reset"
                >
                    <i className="bi bi-x-lg" />
                </button>
                <button type="submit" className="dashboard-page__search-submit">
                    <i className="bi bi-search" />
                </button>
            </form>
            <DisplayCompanies companies={companiesToDisplay} />
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
