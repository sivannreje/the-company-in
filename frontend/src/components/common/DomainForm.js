import React, {useState} from 'react'
import * as companyDomainService from "../../services/companyDomain";

export default function DomainForm({onAdd}) {
    const [domain, setDomain] = useState('')
const [error, setError] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        if(domain === "") {
            setError(true)
            return
        }
        setError(false)
        companyDomainService.addDomain(domain).then(
          (response) => onAdd(domain)
        ).catch(error => {
          console.log(error)
          setError(true)
        })
        
      }
      
    
    return (
        <form className="shadow" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="The company domain"
            value={domain}
            onChange={event => {
                setDomain(event.target.value)
                }}
          />
          
          {error && <small className="error">The company domain is required</small>}
          <input
            type="submit"
            className="large"
            value="Add"
          />
        </form>
      );
}
