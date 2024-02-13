import { useLoaderData } from "react-router-typesafe";
import Input from "../../Components/Input";
import LinkButton from "../../Components/LinkButton";
import { userAndCompaniesLoader } from "../../loaders/userAndCompaniesLoader";
import DisplayCompanies from "./DisplayCompanies";
import "./index.scss";
import PopUp from "../../Components/PopUp";
import { useState } from "react";
import Button from "../../Components/Button";

export default function DashboardPage() {
    const { companies, user } = useLoaderData<typeof userAndCompaniesLoader>();
    const [open, setOpen] = useState(true);

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
            <PopUp open={open} setOpen={setOpen}>
                <Button
                    variation="primary"
                    onClick={() => console.log("clicked!")}
                >
                    Click me!
                </Button>
            </PopUp>
        </main>
    );
}
