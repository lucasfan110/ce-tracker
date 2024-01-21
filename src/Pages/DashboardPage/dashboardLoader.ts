import { redirect } from "react-router-dom";
import { getUserFromToken } from "../../hooks/useAuthorization";
import { JWT_LOCAL_STORAGE_KEY } from "../../utils/constants";
import { LoaderFunction } from "react-router-typesafe";

export const dashboardLoader = (async () => {
    const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

    if (!token) {
        return redirect("/sign-in?type=login");
    }

    const json = await getUserFromToken(token);

    if (!json) {
        return redirect("/server-down");
    }

    if (json.status === "success") {
        return json.user;
    } else {
        return redirect("/sign-in?type=login");
    }
}) satisfies LoaderFunction;
