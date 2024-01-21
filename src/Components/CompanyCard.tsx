import "./CompanyCard.scss";

interface Props {
    name: string;
    type: string[];
    location: string;
    phoneNumber: string;
    email: string;
    resources: string[];
    image: string;
    summary: string;
}

export default function CompanyCard({
    name,
    type,
    location,
    phoneNumber,
    email,
    resources,
    image,
    summary,
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
                <h3 className="company-card__name">{name}</h3>
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
                <div className="company-card__summary">{summary}</div>
                <div className="company-card__tags">{renderTags()}</div>
            </div>
        </div>
    );
}
