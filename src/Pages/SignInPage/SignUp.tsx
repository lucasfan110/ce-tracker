import Button from "../../Components/Button";
import Input from "../../Components/Input";
import "./SignUp.scss";

export default function SignUp() {
    return (
        <div className="sign-up">
            <form className="sign-up__form">
                <label htmlFor="first-name">First Name</label>
                <Input
                    placeholder="First Name"
                    id="first-name"
                    name="firstName"
                    type="text"
                    className="sign-up__input"
                    required
                />
                <label htmlFor="last-name">Last Name</label>
                <Input
                    placeholder="Last Name"
                    id="last-name"
                    name="lastName"
                    type="text"
                    className="sign-up__input"
                    required
                />
                <label htmlFor="email">Email Address</label>
                <Input
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    className="sign-up__input"
                    required
                />
                <label htmlFor="password">Password</label>
                <Input
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    className="sign-up__input"
                    required
                />
                <Button variation="primary" className="sign-up__button">
                    Sign Up
                </Button>
            </form>
        </div>
    );
}
