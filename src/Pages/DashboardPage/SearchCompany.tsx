import { useEffect, useState } from "react";
import Input from "../../Components/Input";
import { Company } from "../../types/Company";
import { User } from "../../types/User";
import { searchCompany } from "../../utils/searchCompany";
import "./SearchCompany.scss";

interface Props {
    query: string;
    setQuery: (query: string) => void;
    setCompaniesToDisplay: (companies: Company[]) => void;
    defaultCompanies: Company[];
    user: User;
}

export default function SearchCompany({
    query,
    setQuery,
    setCompaniesToDisplay,
    defaultCompanies,
    user,
}: Props) {
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
            setCompaniesToDisplay(defaultCompanies);
        }

        if (!query) {
            setShowResetButton(false);
            clearQuery();
        } else {
            setShowResetButton(true);
        }
    }, [query, defaultCompanies, setCompaniesToDisplay]);

    return (
        <div className="search-company">
            <form
                onSubmit={handleSearchSubmit}
                className="search-company__form"
            >
                <Input
                    type="search"
                    placeholder="Search..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="search-company__input"
                />
                <button
                    type="reset"
                    style={{ display: showResetButton ? "initial" : "none" }}
                    onClick={() => setQuery("")}
                    className="search-company__reset"
                >
                    <i className="bi bi-x-lg" />
                </button>
                <button type="submit" className="search-company__submit">
                    <i className="bi bi-search" />
                </button>
            </form>
        </div>
    );
}
