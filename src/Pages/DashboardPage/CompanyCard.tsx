import LinkButton from "../../Components/LinkButton";
import { Company } from "../../types/Company";
import "./CompanyCard.scss";

interface Props extends Company {}

export default function CompanyCard({
    _id,
    name,
    type,
    location,
    phoneNumber,
    email,
    resources,
    image,
    description,
}: Props) {
    function renderTags() {
        return type.map(t => (
            <div className="company-card__tag" key={t}>
                {t}
            </div>
        ));
    }

    return (
        <div className="company-card">
            <div className="company-card__thumbnail-container">
                <img
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
                        >
                            <i className="bi bi-pencil-square"></i>
                        </LinkButton>
                        <LinkButton
                            className="company-card__icon-button"
                            variation="danger"
                            to={`/dashboard/delete-company/${_id}`}
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
                <div className="company-card__tags">{renderTags()}</div>
            </div>
        </div>
    );
}
