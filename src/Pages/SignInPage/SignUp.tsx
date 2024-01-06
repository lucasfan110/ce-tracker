import { FormEventHandler, useState } from "react";
import validator from "validator";
import Button from "../../Components/Button";
import FormInput from "../../Components/FormInput";
import "./SignUp.scss";
import { useNavigate } from "react-router-dom";

export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
};

const INITIAL_FORM_DATA: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
};

export default function SignUp() {
    const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
    const [isPhoneNumDuplicate, setIsPhoneNumDuplicate] = useState(false);
    const navigate = useNavigate();

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault();

        const res = await fetch("http://localhost:8000/api/v1/admins/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const json = await res.json();

        console.log(json);

        if (json.status === "success") {
            navigate("/dashboard");
        } else if (json.message.includes("email")) {
            setIsEmailDuplicate(true);
            // Refresh the form data so the error message comes out
            setFormData(d => ({
                ...d,
            }));
        } else if (json.message.includes("phoneNumber")) {
            setIsPhoneNumDuplicate(true);
            setFormData(d => ({
                ...d,
            }));
        }
    };

    return (
        <div className="sign-up">
            <form className="sign-up__form" onSubmit={handleFormSubmit}>
                <FormInput
                    label="First Name"
                    placeholder="First Name"
                    id="first-name"
                    name="firstName"
                    type="text"
                    className="sign-up__input"
                    required
                    validate={{
                        validator: v => v !== "",
                        invalidMessage: "Please put in your first name",
                    }}
                    value={formData.firstName}
                    maxLength={100}
                    onChange={e =>
                        setFormData(data => ({
                            ...data,
                            firstName: e.target.value,
                        }))
                    }
                />

                <FormInput
                    label="Last Name"
                    placeholder="Last Name"
                    id="last-name"
                    name="lastName"
                    type="text"
                    className="sign-up__input"
                    required
                    validate={{
                        validator: v => v !== "",
                        invalidMessage: "Please put in your last name",
                    }}
                    value={formData.lastName}
                    maxLength={100}
                    onChange={e =>
                        setFormData(data => ({
                            ...data,
                            lastName: e.target.value,
                        }))
                    }
                />

                <FormInput
                    label="Email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    className="sign-up__input"
                    required
                    validate={[
                        {
                            validator: validator.isEmail,
                            invalidMessage: "Please put in a valid email",
                        },
                        {
                            validator: () => !isEmailDuplicate,
                            invalidMessage: "Email has already been used",
                        },
                    ]}
                    value={formData.email}
                    onChange={e => {
                        setIsEmailDuplicate(false);
                        setFormData(data => ({
                            ...data,
                            email: e.target.value,
                        }));
                    }}
                />

                <FormInput
                    label="Phone Number"
                    placeholder="Phone Number"
                    id="phone-number"
                    name="phoneNumber"
                    type="text"
                    className="sign-up__input"
                    required
                    validate={[
                        {
                            validator: validator.isMobilePhone,
                            invalidMessage:
                                "Please put in a valid phone number",
                        },
                        {
                            validator: () => !isPhoneNumDuplicate,
                            invalidMessage:
                                "Phone number has already been used",
                        },
                    ]}
                    value={formData.phoneNumber}
                    onChange={e => {
                        setIsPhoneNumDuplicate(false);
                        setFormData(data => ({
                            ...data,
                            phoneNumber: e.target.value,
                        }));
                    }}
                />

                <FormInput
                    label="Password"
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    className="sign-up__input"
                    required
                    validate={{
                        validator: v => v.length >= 8,
                        invalidMessage:
                            "Password must be at least 8 characters long",
                    }}
                    value={formData.password}
                    onChange={e =>
                        setFormData(data => ({
                            ...data,
                            password: e.target.value,
                        }))
                    }
                />

                <FormInput
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    id="password"
                    name="password"
                    type="password"
                    className="sign-up__input"
                    required
                    validate={{
                        validator: v => v === formData.password,
                        invalidMessage: "Passwords are not the same",
                    }}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />

                <Button variation="primary" className="sign-up__button">
                    Sign Up
                </Button>
            </form>
        </div>
    );
}
