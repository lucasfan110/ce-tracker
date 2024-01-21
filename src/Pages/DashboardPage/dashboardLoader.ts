import { redirect } from "react-router-dom";
import { getUserFromToken } from "../../hooks/useAuthorization";
import {
    BACKEND_SERVER_ADDRESS,
    JWT_LOCAL_STORAGE_KEY,
} from "../../utils/constants";
import { LoaderFunction } from "react-router-typesafe";
import { User } from "../../types/User";
import { Company } from "../../types/Company";
import { APIErrorResponse } from "../../types/APIErrorResponse";

type GetCompaniesResult =
    | {
          status: "success";
          results: number;
          data: {
              companies: Company[];
          };
      }
    | APIErrorResponse;

/**
 * @throws If user._id is invalid, the server is down, or some other reason, throw an `Error`
 */
async function getCompaniesFromUser(
    user: User,
    token: string
): Promise<Company[]> {
    const res = await fetch(
        `${BACKEND_SERVER_ADDRESS}/api/v1/users/${user._id}/companies`,
        {
            headers: {
                Authorization: token,
            },
        }
    );
    const json: GetCompaniesResult = await res.json();
    if (json.status === "success") {
        return json.data.companies;
    } else {
        throw new Error("Failed to get companies");
    }
}

export const dashboardLoader = (async () => {
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
        companies = await getCompaniesFromUser(user, token);
    } catch {
        localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
        return redirect("/sign-in?type=login");
    }

    return { user, companies };
}) satisfies LoaderFunction;
