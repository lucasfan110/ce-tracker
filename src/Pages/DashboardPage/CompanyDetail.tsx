import "mapbox-gl/dist/mapbox-gl.css";
import { useRef } from "react";
import { useLoaderData } from "react-router-typesafe";
import ImageOrDefault from "../../Components/ImageOrDefault";
import Tags from "../../Components/Tags";
import useMapDisplay from "../../hooks/useMapDisplay";
import "./CompanyDetail.scss";
import { userAndCompanyLoader } from "./userAndCompaniesLoader";

export default function CompanyDetail() {
    const mapContainer = useRef<HTMLDivElement>(null);
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
    useMapDisplay(location, mapContainer);

    return (
        <div className="company-detail">
            <div className="company-detail__banner-container">
                <ImageOrDefault
                    src={image}
                    className="company-detail__banner"
                />
            </div>
            <h2 className="company-detail__name">{name}</h2>
            <Tags tags={type} className="company-detail__tags" />
            <p className="company-detail__description">{description}</p>

            <h3 className="company-detail__section-heading">Location</h3>
            <p>{location}</p>
            <div ref={mapContainer} className="company-detail__location-map" />

            <hr />

            <h3>Contact Info</h3>
            <p>{email}</p>
            <p>{phoneNumber}</p>
        </div>
    );
}
