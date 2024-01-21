import { useEffect } from "react";
import ErrorMessage from "../../Components/ErrorMessage";
import "./index.scss";
import { useNavigate } from "react-router-dom";

export default function ServerDownPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000);
    }, [navigate]);

    return (
        <div className="server-down-page">
            <ErrorMessage className="server-down-page__error-message">
                Our server is down. Please wait for a moment and try again.
                <br />
                You will be redirected in a moment...
            </ErrorMessage>
        </div>
    );
}
