import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_API_SOURCE
})

export default http;