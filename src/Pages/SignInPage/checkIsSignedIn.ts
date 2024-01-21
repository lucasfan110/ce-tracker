import { redirect } from "react-router-dom";
import { JWT_LOCAL_STORAGE_KEY } from "../../utils/constants";
import { getUserFromToken } from "../../hooks/useAuthorization";

export async function checkIsSignedIn() {
    const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

    if (!token) {
        return null;
    }

    const json = await getUserFromToken(token);

    if (!json) {
        return null;
    }

    if (json.status === "success") {
        return redirect("/dashboard");
    }

    return null;
}
