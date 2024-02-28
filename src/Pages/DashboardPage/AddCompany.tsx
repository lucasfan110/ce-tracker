import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import validator from "validator";
import Button from "../../Components/Button";
import ErrorMessage from "../../Components/ErrorMessage";
import FormInput from "../../Components/FormInput";
import TagInput from "../../Components/TagInput";
import { Company } from "../../types/Company";
import "./AddCompany.scss";
import CompanyEndpoint from "../../utils/CompanyEndpint";
import LinkButton from "../../Components/LinkButton";
import TextArea from "../../Components/TextArea";
import { userAndCompaniesLoader } from "../../loaders/userAndCompaniesLoader";

type AddCompanyFormData = Omit<Company, "_id">;

const INITIAL_FORM_DATA: AddCompanyFormData = {
    description: "",
    email: "",
    image: "",
    location: "",
    name: "",
    phoneNumber: "",
    resources: [],
    type: [],
};

export default function AddCompany() {
    const { user, token } = useLoaderData<typeof userAndCompaniesLoader>();
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            // Send a company POST request
            const companyEndpoint = new CompanyEndpoint(user, token);
            await companyEndpoint.create(formData);
            navigate("/dashboard");
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            }
        }
    }

    return (
        <div className="add-company">
            <form onSubmit={handleFormSubmit} className="add-company__form">
                <ErrorMessage>{errorMessage}</ErrorMessage>

                {/* A default submit button to prevent submitting when user press enter when typing on input due to the tag input */}
                <button
                    type="submit"
                    disabled
                    style={{ display: "none" }}
                    aria-hidden="true"
                ></button>

                <FormInput
                    label="Name"
                    placeholder="Name"
                    id="name"
                    required
                    validate={{
                        validator: v => v !== "",
                        invalidMessage: "Please put in the company's name",
                    }}
                    value={formData.name}
                    maxLength={100}
                    onChange={e => {
                        setFormData(data => ({
                            ...data,
                            name: e.target.value,
                        }));
                    }}
                    className="add-company__input"
                />

                <FormInput
                    label="Company Email"
                    type="email"
                    placeholder="Company Email"
                    id="email"
                    value={formData.email}
                    maxLength={100}
                    onChange={e => {
                        setFormData(data => ({
                            ...data,
                            email: e.target.value,
                        }));
                    }}
                    validate={{
                        validator: validator.isEmail,
                        invalidMessage: "Please put in a valid email",
                    }}
                    className="add-company__input"
                />

                <FormInput
                    label="Phone Number"
                    placeholder="Phone Number"
                    id="phone-number"
                    validate={[
                        {
                            validator: validator.isMobilePhone,
                            invalidMessage:
                                "Please put in a valid phone number",
                        },
                    ]}
                    value={formData.phoneNumber}
                    onChange={e => {
                        setFormData(data => ({
                            ...data,
                            phoneNumber: e.target.value,
                        }));
                    }}
                    className="add-company__input"
                />

                <div>
                    <label htmlFor="tags">Company Tags</label>
                    <TagInput
                        id="tags"
                        placeholder="Type The Tag And Press Enter To Add Tag..."
                        tags={formData.type}
                        onTagsChange={tags => {
                            setFormData(data => ({
                                ...data,
                                type: tags,
                            }));
                        }}
                        className="add-company__input"
                    />
                </div>

                <FormInput
                    label="Company Image Url"
                    placeholder="Company Image Url"
                    id="company-image"
                    value={formData.image}
                    onChange={e => {
                        setFormData(data => ({
                            ...data,
                            image: e.target.value,
                        }));
                    }}
                    className="add-company__input"
                />

                <div>
                    <label htmlFor="description">Description</label>
                    <TextArea
                        id="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={e => {
                            setFormData(data => ({
                                ...data,
                                description: e.target.value,
                            }));
                        }}
                        className="add-company__input"
                        rows={10}
                    />
                </div>

                <FormInput
                    label="Location"
                    placeholder="Location"
                    id="location"
                    value={formData.location}
                    onChange={e => {
                        setFormData(data => ({
                            ...data,
                            location: e.target.value,
                        }));
                    }}
                    className="add-company__input"
                />

                <FormInput
                    label="Resources"
                    placeholder="Resources"
                    id="resources"
                    value={formData.resources}
                    onChange={e => {
                        setFormData(data => ({
                            ...data,
                            resources: [e.target.value],
                        }));
                    }}
                    className="add-company__input"
                />

                <Button variation="primary" className="add-company__button">
                    Add
                </Button>
                <LinkButton
                    variation="secondary"
                    to="/dashboard"
                    className="add-company__button"
                >
                    Cancel
                </LinkButton>
            </form>
        </div>
    );
}
