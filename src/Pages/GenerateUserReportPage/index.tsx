import { useState } from "react";
import { useLoaderData } from "react-router-typesafe";
import { userLoader } from "../../loaders/userLoader";
import "./index.scss";
import { BACKEND_SERVER_ADDRESS } from "../../utils/constants";
import Button from "../../Components/Button";

export default function GenerateUserReportPage() {
    const { user, token } = useLoaderData<typeof userLoader>();
    const [showCompanyContacts, setShowCompanyContacts] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    async function downloadPDF() {
        const res = await fetch(
            `${BACKEND_SERVER_ADDRESS}/api/v1/users/${user._id}/generate-report?showCompanyContacts=${showCompanyContacts}`,
            {
                headers: {
                    Authorization: token,
                    "Content-Type": "application/pdf",
                },
            }
        );
        const blob = await res.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        window.location.href = url;
    }

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setButtonDisabled(true);
        downloadPDF();
    }

    return (
        <main className="generate-user-report-page">
            <form
                className="generate-user-report-page__customize-report-form"
                onSubmit={handleFormSubmit}
            >
                <div className="generate-user-report-page__show-contacts">
                    <input
                        type="checkbox"
                        id="generate-user-report-page__show-contacts-checkbox"
                        className="u-cyberpunk-checkbox"
                        checked={showCompanyContacts}
                        onChange={() => setShowCompanyContacts(value => !value)}
                    />
                    <label htmlFor="generate-user-report-page__show-contacts-checkbox">
                        Show Contacts For Companies
                    </label>
                </div>
                <Button
                    variation="primary"
                    disabled={buttonDisabled}
                    type="submit"
                >
                    Generate Report
                </Button>
            </form>
        </main>
    );
}
