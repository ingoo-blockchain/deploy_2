import axios from "axios"

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3000"

export const request = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})
