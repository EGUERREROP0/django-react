import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    // headers: {
    //     "Content-Type": 'application/json'
    // }
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {

        const accessToken = localStorage.getItem('accessToken')

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    },

);

// // Add a response interceptor
// axiosInstance.interceptors.response.use(
//     function (response) {

//         return response;
//     },
//     async function (error) {
//         const originalRequest = error.config

//         if (error.response.status === 401 && !originalRequest.retry) {
//             originalRequest.retry = true
//             const refreshToken = localStorage.getItem('refreshToken')
//             try {
//                 const response = await axiosInstance.get('token/refresh/', {
//                     refresh: refreshToken
//                 })
//                 console.log("Response", response.data)
//             } catch (error) {
//                 return error
//             }
//         }
//     }
// );

axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem("refreshToken");

            if (!refreshToken) {
                return Promise.reject(error);
            }

            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/v1/token/refresh/",
                    { refresh: refreshToken }
                );

                const newAccessToken = response.data.access;

                localStorage.setItem("accessToken", newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                window.location.href = '/login'
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);