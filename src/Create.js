import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [companyName, setCompanyName] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=> {
        e.preventDefault(); //prevents page from refreshing after submit
        const company = { name: companyName };

        setIsPending(true);

        fetch('http://localhost:8000/companies', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(company)
        }).then(()=>{
            console.log('New company added');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add new company</h2>
            <form onSubmit={handleSubmit}>
                <label>Company Name:</label>
                <input 
                    type="text" 
                    required
                    value={companyName}
                    onChange={(e)=> setCompanyName(e.target.value)}
                />
                {!isPending && <button>Add Company</button>}
                {isPending && <button disabled>Adding Company....</button>}
                <p>{companyName}</p>
            </form>
        </div>
     );
}
 
export default Create;
