import { Link } from "react-router-dom";

const CompanyList = ({ companies, title }) => {
    return (
        <div className="company-list">
            <h2>{title}</h2>
            {companies.map((company) => (
                <div className="company-preview" key={company.id}>
                    <Link to={`/companies/${company.id}`}>
                        <h2>{company.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CompanyList;
