import axios from "axios";
import { NOMICS_API_BASE_URL, NOMICS_API_KEY } from "config/api";

const service = axios.create({
    baseURL: NOMICS_API_BASE_URL,
    withCredentials: false,
});

service.interceptors.request.use((config) => {
    config.params = Object.assign({}, config.params, {
        key: NOMICS_API_KEY,
        t: new Date().getTime(),
    });

    return config;
});

service.interceptors.response.use((config) => {
    return config;
});

export default service;
