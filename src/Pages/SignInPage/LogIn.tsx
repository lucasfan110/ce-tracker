import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Button from "../../Components/Button";
import ErrorMessage from "../../Components/ErrorMessage";
import FormInput from "../../Components/FormInput";
import { useRedirectIfValidToken } from "../../hooks/useAuthorization";
import setJWTToken from "../../utils/setJWTToken";
import { login } from "../../utils/signIn";
import "./LogIn.scss";

export type LogInFormData = {
    email: string;
    password: string;
};

const INITIAL_FORM_DATA: LogInFormData = {
    email: "",
    password: "",
};

export default function LogIn() {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [loginFailed, setLoginFailed] = useState(false);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    useRedirectIfValidToken("/dashboard");

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();

        const json = await login(JSON.stringify(formData));
        if (!json) {
            setErrorMessage("Our server is down. Please try again later");
            return;
        }

        if (json.status === "success") {
            // if status is success then there must be a token
            setJWTToken(json.token);
            navigate("/dashboard");
        } else {
            setErrorMessage("Email or password incorrect!");
        }
    };

    return (
        <div className="log-in">
            <form className="log-in__form" onSubmit={handleFormSubmit}>
                <ErrorMessage>{errorMessage}</ErrorMessage>

                <FormInput
                    label="Email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    className="log-in__input"
                    required
                    validate={[
                        {
                            validator: validator.isEmail,
                            invalidMessage: "Please put in a valid email",
                        },
                    ]}
                    value={formData.email}
                    onChange={e => {
                        if (loginFailed) {
                            // remove log in failed message after user changed input
                            setLoginFailed(false);
                        }
                        setFormData(data => ({
                            ...data,
                            email: e.target.value,
                        }));
                    }}
                />

                <FormInput
                    label="Password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    className="log-in__input"
                    required
                    value={formData.password}
                    onChange={e => {
                        if (loginFailed) {
                            // remove log in failed message after user changed input
                            setLoginFailed(false);
                        }
                        setFormData(data => ({
                            ...data,
                            password: e.target.value,
                        }));
                    }}
                />

                <Button variation="primary" className="log-in__button">
                    Log In
                </Button>
            </form>
        </div>
    );
}
