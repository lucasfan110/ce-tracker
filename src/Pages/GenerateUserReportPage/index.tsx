import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-typesafe";
import { userLoader } from "../../loaders/userLoader";
import "./index.scss";
import { BACKEND_SERVER_ADDRESS } from "../../utils/constants";

export default function GenerateUserReportPage() {
    const [loadingText, setLoadingText] = useState("Generating.");
    const { user, token } = useLoaderData<typeof userLoader>();

    // Loading text
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoadingText(text => {
                const newText = text + ".";

                if (newText === "Generating....") {
                    return "Generating.";
                }

                return newText;
            });
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    // Getting and downloading the pdf
    useEffect(() => {
        (async () => {
            const res = await fetch(
                `${BACKEND_SERVER_ADDRESS}/api/v1/users/${user._id}/generate-report`,
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
        })();
    }, [user, token]);

    return (
        <main className="generate-user-report-page">
            <div className="generate-user-report-page__loading-text">
                {loadingText}
            </div>
        </main>
    );
}
