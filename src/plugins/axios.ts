import axios from "axios"

export const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

const axiosInstance = axios.create({
    baseURL,  
    // timeout: 10000,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance; 