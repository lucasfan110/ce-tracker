import Button from "../../Components/Button";
import Input from "../../Components/Input";
import "./LogIn.scss";

export default function LogIn() {
    return (
        <div className="log-in">
            <form className="log-in__form" action="#">
                <label htmlFor="email">Email Address</label>
                <Input
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    className="log-in__input"
                    required
                />
                <label htmlFor="password">Password</label>
                <Input
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    className="log-in__input"
                    required
                />
                <Button variation="primary" className="log-in__button">
                    Log In
                </Button>
            </form>
        </div>
    );
}
