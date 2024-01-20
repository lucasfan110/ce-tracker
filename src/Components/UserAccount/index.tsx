import { JWT_LOCAL_STORAGE_KEY } from "../../utils/constants";
import UserSignIn from "./UserSignIn";
import UserProfile from "./UserProfile";

export default function UserAccount() {
    const token = localStorage.getItem(JWT_LOCAL_STORAGE_KEY);

    if (!token) {
        return <UserSignIn />;
    }

    return <UserProfile />;
}
