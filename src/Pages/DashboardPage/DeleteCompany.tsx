import { useEffect } from "react";
import CompanyEndpoint from "./CompanyEndpint";
import { useLoaderData } from "react-router-typesafe";
import { useNavigate } from "react-router-dom";
import { userAndCompanyLoader } from "../../loaders/userAndCompanyLoader";

export default function DeleteCompany() {
    const navigate = useNavigate();
    const { user, token, company } =
        useLoaderData<typeof userAndCompanyLoader>();

    useEffect(() => {
        (async () => {
            // Get the company endpoint class out
            try {
                const companyEndpoint = new CompanyEndpoint(user, token);
                await companyEndpoint.delete(company._id);
            } finally {
                // Whether or not deleted successful, go back to dashboard
                navigate("/dashboard");
            }
        })();
    }, [company, token, user, navigate]);

    return null;
}
