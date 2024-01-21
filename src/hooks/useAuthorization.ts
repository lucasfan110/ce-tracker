import { useEffect, useState } from "react";
import { APIErrorResponse } from "../types/APIErrorResponse";
import { User } from "../types/User";
import {
    BACKEND_SERVER_ADDRESS,
    JWT_LOCAL_STORAGE_KEY,
} from "../utils/constants";

export type ValidationStatus = "validating" | "fail" | "success";
export type GetUserResult =
    | {
          status: "success";
          user: User;
      }
    | APIErrorResponse;

export async function getUserFromToken(
    token: string
): Promise<GetUserResult | null> {
    try {
        const res = await fetch(
            `${BACKEND_SERVER_ADDRESS}/api/v1/users/get-user-from-token`,
            {
                method: "GET",
                headers: {
                    Authorization: token,
                },
            }
        );
        return res.json();
    } catch {
        return null;
    }
}

export function useJWTValidation() {
    const [status, setStatus] = useState<ValidationStatus>("validating");
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Validate the token
        const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

        if (!token) {
            setStatus("fail");
            return;
        }

        (async () => {
            const json = await getUserFromToken(token);

            if (!json) {
                setStatus("fail");
                return;
            }

            if (json.status === "success") {
                setStatus("success");
                setUser(json.user);
            } else {
                setStatus("fail");
                localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
            }
        })();
    }, []);

    return {
        status,
        user,
    };
}
