import { useLoaderData } from "react-router-typesafe";
import ImageOrDefault from "../../Components/ImageOrDefault";
import "./CompanyDetail.scss";
import { userAndCompanyLoader } from "./userAndCompaniesLoader";
import Tags from "../../Components/Tags";

export default function CompanyDetail() {
    const { company } = useLoaderData<typeof userAndCompanyLoader>();
    const {
        image,
        name,
        description,
        email,
        location,
        phoneNumber,
        resources,
        type,
    } = company;

    return (
        <div className="company-detail">
            {/* <div className="u-container"> */}
            <div className="company-detail__banner-container">
                <ImageOrDefault
                    src={image}
                    className="company-detail__banner"
                />
            </div>
            <h2>{name}</h2>
            <Tags tags={type} />
            <p>{location}</p>
            <p>{description}</p>

            <hr />

            <h3>Contact Info</h3>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            {/* </div> */}
        </div>
    );
}
