import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosError,
} from "axios";

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config: AdaptAxiosRequestConfig) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
interface ErrorResponse {
  error: string;
}
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const handleErrorResponse = (error: AxiosError<ErrorResponse, any>) => {
      console.error(error);
      return Promise.reject(error);
    };
  }
);

export default instance;
