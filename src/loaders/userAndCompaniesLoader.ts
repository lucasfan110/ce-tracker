import { redirect } from "react-router-dom";
import { LoaderFunction } from "react-router-typesafe";
import CompanyEndpoint from "../utils/CompanyEndpint";
import { getUserFromToken } from "../hooks/useAuthorization";
import { Company } from "../types/Company";
import { JWT_LOCAL_STORAGE_KEY } from "../utils/constants";

export const userAndCompaniesLoader = (async () => {
    const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

    if (!token) {
        return redirect("/sign-in?type=login");
    }

    const json = await getUserFromToken(token);

    if (!json) {
        return redirect("/server-down");
    }
    if (json.status !== "success") {
        return redirect("/sign-in?type=login");
    }

    const user = json.user;
    let companies: Company[];
    try {
        const companyEndpoint = new CompanyEndpoint(user, token);
        companies = await companyEndpoint.getAll();
    } catch {
        localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
        return redirect("/sign-in?type=login");
    }

    return { user, companies, token };
}) satisfies LoaderFunction;
