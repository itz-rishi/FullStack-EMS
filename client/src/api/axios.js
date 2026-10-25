import axios from "axios";

const api = axios.create({
    baseURL: (import.meta.env.VITE_BASE_URL || "http://localhost:4000") + "/api"
})

// Attach Auth token to all network requests
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

// Handle unauthorized responses (e.g. token expired)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            if (!window.location.pathname.startsWith("/login")) {
                localStorage.removeItem("token");
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default api