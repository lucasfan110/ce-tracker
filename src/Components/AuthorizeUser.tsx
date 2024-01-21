import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthorizeUser.scss";
import { useJWTValidation } from "../hooks/useAuthorization";

interface Props {
    children?: React.ReactNode;
}

export default function AuthorizeUser({ children }: Props) {
    const navigate = useNavigate();
    const [message, setMessage] = useState("Validating...");
    const jwtValidation = useJWTValidation();

    useEffect(() => {
        if (jwtValidation.status === "fail") {
            setTimeout(() => {
                navigate("/");
            }, 3000);

            setMessage(
                "Authorization failed. Please log in again. You will be redirected in a moment..."
            );
        }
    }, [navigate, jwtValidation]);

    if (jwtValidation.status === "fail") {
        return <div className="authorize-user">{message}</div>;
    }

    return children;
}
