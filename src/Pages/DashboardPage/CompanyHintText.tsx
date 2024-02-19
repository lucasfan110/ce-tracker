import { Company } from "../../types/Company";
import "./CompanyHintText.scss";

interface Props {
    companiesToDisplay: Company[];
    query: string;
}

export default function CompanyHintText({ companiesToDisplay, query }: Props) {
    if (!companiesToDisplay.length && !query) {
        return (
            <div className="company-hint-text">
                There are no companies in your account. Press the plus button on
                the bottom right corner to add a company!
            </div>
        );
    }

    if (!companiesToDisplay.length && !!query) {
        return <div className="company-hint-text">No companies found</div>;
    }

    return null;
}
