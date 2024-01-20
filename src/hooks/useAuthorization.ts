import { useEffect, useState } from "react";
import {
    BACKEND_SERVER_ADDRESS,
    JWT_LOCAL_STORAGE_KEY,
} from "../utils/constants";
import Status from "../utils/Status";
import { useNavigate } from "react-router-dom";

type ValidationResult = {
    status: Status;
    message: string;
};

export type ValidationStatus = "validating" | "fail" | "success";

export function useTokenValidation() {
    const [status, setStatus] = useState<ValidationStatus>("validating");

    useEffect(() => {
        // Validate the token
        const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

        if (!token) {
            setStatus("fail");
            return;
        }

        (async () => {
            let json: ValidationResult;
            try {
                const res = await fetch(
                    `${BACKEND_SERVER_ADDRESS}/api/v1/users/validate-token`,
                    {
                        method: "POST",
                        headers: {
                            Authorization: token,
                        },
                    }
                );
                json = await res.json();
            } catch (error) {
                setStatus("fail");
                return;
            }

            if (json.status === "success") {
                setStatus("success");
            } else {
                setStatus("fail");
                localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
            }
        })();
    }, []);

    return {
        status,
    };
}

export function useRedirectIfTokenValid(to: string) {
    const navigate = useNavigate();
    const tokenValidation = useTokenValidation();

    useEffect(() => {
        switch (tokenValidation.status) {
            // There is already a valid token. No need to log in again. Redirect to dashboard
            case "success":
                navigate(to);
                break;
            // if token is validating then wait
            // or if there is no already valid token, then do nothing and let user login
            case "validating":
            case "fail":
                return;
        }
    }, [tokenValidation, navigate, to]);
}
