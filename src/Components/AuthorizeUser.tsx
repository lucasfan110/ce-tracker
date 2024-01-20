import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthorizeUser.scss";
import { useTokenValidation } from "../hooks/useAuthorization";

interface Props {
    children?: React.ReactNode;
}

export default function AuthorizeUser({ children }: Props) {
    const navigate = useNavigate();
    const [message, setMessage] = useState("Validating...");
    const tokenValidation = useTokenValidation();

    useEffect(() => {
        if (tokenValidation.status === "fail") {
            setTimeout(() => {
                navigate("/");
            }, 3000);

            setMessage(
                "Authorization failed. Please log in again. You will be redirected in a moment..."
            );
        }
    }, [navigate, tokenValidation]);

    if (tokenValidation.status === "fail") {
        return <div className="authorize-user">{message}</div>;
    }

    return children;
}
