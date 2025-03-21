import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5053/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
//     const accessToken = localStorage.getItem("accessToken");

//     if (accessToken) {
//         try {
//             const response = await axiosInstance.post("/AuthApi", {
//                 accessToken
//             });

//             if (response.data.isValid) {
//                 config.headers = config.headers || {};
//                 config.headers.Authorization = `Bearer ${accessToken}`;
//             }
//         } catch (error) {
//             localStorage.removeItem("accessToken");
//             localStorage.removeItem("refreshToken");
//             window.location.href = '/login';
//             return Promise.reject(error);
//         }
//     }
//     return config;
// },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// axiosInstance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response?.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             try {
//                 const newToken = await useAuthStore.getState().refreshToken();
//                 originalRequest.headers.Authorization = `Bearer ${newToken}`;
//                 return axiosInstance(originalRequest);
//             } catch (refreshError) {
//                 window.location.href = '/login';
//                 return Promise.reject(refreshError);
//             }
//         }
//         return Promise.reject(error);
//     }
// );

export default axiosInstance;