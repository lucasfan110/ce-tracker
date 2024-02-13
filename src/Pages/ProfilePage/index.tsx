import { Link } from "react-router-dom";
import Section from "../../Components/Section";
import { useJWTValidation } from "../../hooks/useAuthorization";
import "./index.scss";

export default function ProfilePage() {
    const { user } = useJWTValidation();

    if (user === null) {
        return null;
    }

    return (
        <main className="profile-page">
            <h2 className="profile-page__name">
                {user.firstName} {user.lastName}
            </h2>

            <h3>Contacts</h3>
            <Section className="profile-page__contacts">
                <div>
                    <h4>Phone Number</h4>
                    <p>
                        <i className="bi bi-telephone"></i>&nbsp;
                        {user.phoneNumber}
                    </p>
                </div>

                <div>
                    <h4>Email</h4>
                    <p className="company-detail__content">
                        <i className="bi bi-envelope"></i>&nbsp;
                        <Link to={`mailto:${user.email}`} target="_blank">
                            {user.email}
                        </Link>
                    </p>
                </div>
            </Section>
        </main>
    );
}
