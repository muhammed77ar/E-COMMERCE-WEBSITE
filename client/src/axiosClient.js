import axios from "axios";

export const axiosClient = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
        "Content-Type" : "application/json",
    }
})