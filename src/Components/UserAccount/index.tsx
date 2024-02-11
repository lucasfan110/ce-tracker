import { useJWTValidation } from "../../hooks/useAuthorization";
import UserProfile from "./UserProfile";
import UserSignIn from "./UserSignIn";

export default function UserAccount() {
    const { status, user } = useJWTValidation();

    if (status === "validating") {
        return null;
    }

    if (status === "fail" || user === null) {
        return <UserSignIn />;
    }

    return <UserProfile user={user} />;
}
