import axios from "axios";

if (process.env.REACT_APP_API_SOURCE === undefined) throw new Error("REACT_APP_API_SOURCE is required");
const apiSource = process.env.REACT_APP_API_SOURCE;

const http = axios.create({
    baseURL: apiSource.endsWith('/') ? apiSource : `${apiSource}/`
})

export default http;