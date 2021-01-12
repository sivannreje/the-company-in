import React from 'react'
import { useHistory } from "react-router-dom";



export default function CompanyEntry({ logo, name, type, domain}) {
    const history = useHistory();

    return (
        <div className="domain-display shadow">
            <div className="title" onClick={()=> history.push("/"+name)}>
                <img src={logo} alt="logo" width="20px"/>
                <span>{name}</span>
            </div>
            <div className="entry-body">
                <div>type: {type}</div>
                <div>domain: {domain}</div>
            </div>    
        </div>
    )
}
