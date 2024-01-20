import { Link } from "react-router-dom";
import "./UserProfile.scss";

export default function UserProfile() {
    return (
        <div className="user-profile">
            <Link className="user-profile__profile-picture" to="/dashboard">
                LF
            </Link>
        </div>
    );
}
