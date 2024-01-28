import { useLoaderData } from "react-router-typesafe";
import { userAndCompaniesLoader } from "./userAndCompaniesLoader";
import DisplayCompanies from "./DisplayCompanies";
import LinkButton from "../../Components/LinkButton";

export default function DashboardPage() {
    const { companies } = useLoaderData<typeof userAndCompaniesLoader>();

    return (
        <main>
            <DisplayCompanies companies={companies} />
            <LinkButton to="/dashboard/add-company" variation="primary">
                Add
            </LinkButton>
        </main>
    );
}
