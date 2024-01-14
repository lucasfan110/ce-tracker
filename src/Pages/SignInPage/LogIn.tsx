import validator from "validator";
import Button from "../../Components/Button";
import FormInput from "../../Components/FormInput";
import "./LogIn.scss";
import { FormEventHandler, useState } from "react";
import {
    SERVER_ADDRESS as BACKEND_SERVER_ADDRESS,
    JWT_LOCAL_STORAGE_KEY,
} from "../../utils/constants";
import { useNavigate } from "react-router-dom";

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

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();

        const res = await fetch(
            `${BACKEND_SERVER_ADDRESS}/api/v1/users/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        const json = await res.json();

        if (json.status === "success") {
            localStorage.setItem(JWT_LOCAL_STORAGE_KEY, json.token);
            navigate("/dashboard");
        } else {
            setLoginFailed(true);
        }
    };

    return (
        <div className="log-in">
            <form className="log-in__form" onSubmit={handleFormSubmit}>
                {loginFailed && (
                    <p className="log-in__login-failed">
                        Email or password incorrect!
                    </p>
                )}

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
