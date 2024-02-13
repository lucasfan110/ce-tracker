import { Link } from "react-router-dom";
import { User } from "../../types/User";
import "./UserProfileDropdown.scss";

interface Props extends React.ComponentPropsWithRef<"div"> {
    user: User;
}

export default function UserProfileDropdown({ user, ...props }: Props) {
    return (
        <div className="user-profile-dropdown" {...props}>
            <h3 className="user-profile-dropdown__username">
                {user.firstName} {user.lastName}
            </h3>

            <div className="user-profile-dropdown__icon-link">
                <i className="bi bi-person user-profile-dropdown__icon" />
                <Link to="/profile">Profile</Link>
            </div>

            <div className="user-profile-dropdown__icon-link">
                <i className="bi bi-box-arrow-right user-profile-dropdown__icon" />
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    );
}
