
import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";
import * as companyDomainService from "../../services/companyDomain";


export default function Company() {
    const params = useParams();
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [company, setCompany] = useState(null)

    useEffect(() => {
    setLoading(true);
    companyDomainService.company(params.name)
      .then(response => {
        setCompany(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }, [params.name]);
    
  if(loading) {
      return <div>loading...</div>
  }
  if(error) {
    return <div>something went wrong...</div>
}
    return (
        <div>
            <input
                    type="button"
                    value="Back"
                    onClick={() => history.push("/")}
                />
            <div className="title">
                <img src={company.logo} alt="logo" width="20px"/>
                <span>{company.name}</span>
            </div>
        </div>
    )
}
