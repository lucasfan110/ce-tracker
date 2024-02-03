import { useNavigate } from "react-router-dom";
import LinkButton from "../../Components/LinkButton";
import { Company } from "../../types/Company";
import "./CompanyCard.scss";
import ImageOrDefault from "../../Components/ImageOrDefault";
import Tags from "../../Components/Tags";

interface Props extends Company {}

export default function CompanyCard({
    _id,
    name,
    type,
    location,
    phoneNumber,
    email,
    // resources,
    image,
    description,
}: Props) {
    const navigate = useNavigate();

    function handleCompanyCardClick() {
        navigate(`/dashboard/company/${_id}`);
    }

    return (
        <div className="company-card" onClick={handleCompanyCardClick}>
            <div className="company-card__thumbnail-container">
                <ImageOrDefault
                    src={image}
                    alt="thumbnail"
                    className="company-card__thumbnail"
                />
            </div>
            <div className="company-card__content">
                <div className="company-card__space-between">
                    <h3 className="company-card__name">{name}</h3>

                    <div className="company-card__icon-buttons">
                        <LinkButton
                            to={`/dashboard/edit-company/${_id}`}
                            className="company-card__icon-button"
                            onClick={e => e.stopPropagation()}
                        >
                            <i className="bi bi-pencil-square"></i>
                        </LinkButton>
                        <LinkButton
                            className="company-card__icon-button"
                            variation="danger"
                            to={`/dashboard/delete-company/${_id}`}
                            onClick={e => e.stopPropagation()}
                        >
                            <i className="bi bi-trash3"></i>
                        </LinkButton>
                    </div>
                </div>
                <div className="company-card__location">{location}</div>
                <div className="company-card__contact-info">
                    <div className="company-card__phone-number">
                        <i className="bi bi-telephone" />
                        &nbsp;
                        {phoneNumber}
                    </div>
                    <div className="company-card__email">
                        <i className="bi bi-envelope" />
                        &nbsp;
                        {email}
                    </div>
                </div>
                <div className="company-card__summary">{description}</div>
                <div className="company-card__tags">
                    <Tags tags={type} />
                </div>
            </div>
        </div>
    );
}
