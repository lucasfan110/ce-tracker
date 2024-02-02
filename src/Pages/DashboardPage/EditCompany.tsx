import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-typesafe";
import validator from "validator";
import Button from "../../Components/Button";
import ErrorMessage from "../../Components/ErrorMessage";
import FormInput from "../../Components/FormInput";
import TagInput from "../../Components/TagInput";
import { Company } from "../../types/Company";
// It's kinda weird, but edit company and add company uses the same style
import "./AddCompany.scss";
import CompanyEndpoint from "./CompanyEndpint";
import { userAndCompanyLoader } from "./userAndCompaniesLoader";
import LinkButton from "../../Components/LinkButton";

type EditCompanyFormData = Omit<Company, "_id">;

export default function EditCompany() {
    const { user, token, company } =
        useLoaderData<typeof userAndCompanyLoader>();
    const [formData, setFormData] = useState<EditCompanyFormData>(company);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            // Send a company POST request
            const companyEndpoint = new CompanyEndpoint(user, token);
            await companyEndpoint.update(company._id, formData);
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
                        placeholder="Add Tag"
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

                <FormInput
                    label="Description"
                    placeholder="Description"
                    id="description"
                    value={formData.description}
                    onChange={e => {
                        setFormData(data => ({
                            ...data,
                            description: e.target.value,
                        }));
                    }}
                    className="add-company__input"
                />

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
                    Submit
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
