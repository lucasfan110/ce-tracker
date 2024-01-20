import "./UserSignIn.scss";
import LinkButton from "../LinkButton";

export default function UserSignIn() {
    return (
        <div className="account-info">
            <LinkButton to="/sign-in">Log in</LinkButton>
            <LinkButton to="/sign-in?type=signup" variation="primary">
                Sign up
            </LinkButton>
        </div>
    );
}
