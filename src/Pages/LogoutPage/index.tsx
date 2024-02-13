import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { JWT_LOCAL_STORAGE_KEY } from "../../utils/constants";

export default function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);

        navigate("/");
    }, [navigate]);

    return null;
}
