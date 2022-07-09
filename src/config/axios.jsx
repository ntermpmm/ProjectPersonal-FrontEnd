import { getAccessToken } from "../services/localStorage";
import { API_ENDPOINT_URL } from "../config/env";
import axios from "axios";

axios.defaults.baseURL = API_ENDPOINT_URL;

axios.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    },
    (err) => Promise.reject(err)
);

export default axios;
