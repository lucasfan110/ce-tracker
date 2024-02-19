import { LoaderFunction, redirect } from "react-router-typesafe";
import {
    BACKEND_SERVER_ADDRESS,
    JWT_LOCAL_STORAGE_KEY,
} from "../utils/constants";

export const userLoader = (async () => {
    const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

    if (!token) {
        return redirect("/sign-in");
    }

    const res = await fetch(
        `${BACKEND_SERVER_ADDRESS}/api/v1/users/get-user-from-token`,
        {
            headers: {
                Authorization: token,
            },
        }
    );
    const json = await res.json();

    if (json.status !== "success") {
        return redirect("/sign-in");
    }

    return { user: json.user, token };
}) satisfies LoaderFunction;
