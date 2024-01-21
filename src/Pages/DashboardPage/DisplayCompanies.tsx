import { Company } from "../../types/Company";
import CompanyCard from "./CompanyCard";

interface Props {
    companies: Company[];
}

export default function DisplayCompanies({ companies }: Props) {
    function renderCompanies(): React.ReactNode[] {
        return companies.map(company => {
            return <CompanyCard key={company._id} {...company} />;
        });
    }

    return <div className="display-companies">{renderCompanies()}</div>;
}
