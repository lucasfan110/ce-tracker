import { Company } from "../types/Company";
import { BACKEND_SERVER_ADDRESS, JWT_LOCAL_STORAGE_KEY } from "./constants";

export async function searchCompany(
    userId: string,
    query: string
): Promise<Company[]> {
    const res = await fetch(
        `${BACKEND_SERVER_ADDRESS}/api/v1/users/${userId}/companies/search?keyword=${query}`,
        {
            headers: {
                Authorization:
                    localStorage.getItem(JWT_LOCAL_STORAGE_KEY) || "",
            },
        }
    );
    const json = await res.json();

    return json.data ?? [];
}
