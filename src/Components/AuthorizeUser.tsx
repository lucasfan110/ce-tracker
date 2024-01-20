import { useEffect, useState } from "react";
import {
    BACKEND_SERVER_ADDRESS,
    JWT_LOCAL_STORAGE_KEY,
} from "../utils/constants";
import { useNavigate } from "react-router-dom";
import "./AuthorizeUser.scss";

interface Props {
    children?: React.ReactNode;
}

export default function AuthorizeUser({ children }: Props) {
    const navigate = useNavigate();
    // If `isTokenValid` is null, it means validation is ongoing
    const [doneValidating, setDoneValidating] = useState<boolean>(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        function validationFailed() {
            setTimeout(() => {
                navigate("/");
            }, 3000);

            setMessage("Authorization failed. Please log in again");
        }

        // Validate the token
        const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

        if (!token) {
            validationFailed();
            return;
        }

        (async () => {
            const res = await fetch(
                `${BACKEND_SERVER_ADDRESS}/api/v1/users/validate-token`,
                {
                    method: "POST",
                    headers: {
                        Authorization: token,
                    },
                }
            );
            const json = await res.json();

            if (json.status === "success") {
                setDoneValidating(true);
            } else {
                validationFailed();
                localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
            }
        })();
    }, [navigate]);

    if (!doneValidating) {
        return <div className="authorize-user">{message}</div>;
    }

    return children;
}
