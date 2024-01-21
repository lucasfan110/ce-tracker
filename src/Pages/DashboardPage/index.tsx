import { useLoaderData } from "react-router-typesafe";
import { dashboardLoader } from "./dashboardLoader";
import DisplayCompanies from "./DisplayCompanies";

export default function DashboardPage() {
    const { user, companies } = useLoaderData<typeof dashboardLoader>();

    return (
        <main>
            <DisplayCompanies companies={companies} />
        </main>
    );
}
