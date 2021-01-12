import React, {useState, useEffect} from 'react'
import CompanyEntry from '../common/CompanyEntry';
import DomainForm from '../common/DomainForm';
import * as companyDomainService from "../../services/companyDomain";

export default function WishList() {
    const [domains, setDomains] = useState([])
    const [added, setAdded] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
    setLoading(true);
    companyDomainService.domains()
      .then(response => {
        setDomains(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }, [added]);
    
  if(loading) {
      return <div>loading...</div>
  }
  if(error) {
    return <div>something went wrong...</div>
}
    return (
        <div>
        <div className="header shadow"><h1>Domains</h1></div>
            {domains.map((domain, index) => (
                <div key={index}>
                    <CompanyEntry name={domain.name} logo={domain.logo} type={domain.type} domain={domain.domain}/>
                </div>)
            )}
            <DomainForm onAdd={setAdded}/>
        </div>
    )
}
