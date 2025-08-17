import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000, //10s
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          console.error("Badrequest:", data);
          break;
        case 401:
          console.error("Unauthorized:", data);
          break;
        case 403:
          console.error("Forbidden", data);
          break;
        case 404:
          console.error("Not found", data);
          break;
        case 500:
          console.error("Server Error:", data);
          break;
        default:
          console.error(`Error (${status}):`, data);
      }
    } else if (error.request) {
      console.error("Network error: no response recieved", error.request);
    } else {
      console.error("error:", error.message);
    }

    return Promise.reject({
      message:
        error.response?.data?.message ||
        error.message ||
        "unknown error occurred",
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);
export default axiosInstance;
