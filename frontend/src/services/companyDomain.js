import axios from "axios";

const BACKEND = "http://127.0.0.1:5000"

export async function addDomain(domain) {
    return await axios.post(`${BACKEND}/add_domain`, {domain})
}


export async function domains() {
    return await axios.get(`${BACKEND}/domains`)
}

export async function company(name) {

    return await axios.get(`${BACKEND}/company`, {
        params: { name }
      });
    
}
