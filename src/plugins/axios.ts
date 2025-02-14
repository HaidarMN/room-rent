import axios from "axios";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  });

  instance.interceptors.response.use((response) => response.data);

  return instance;
};

const useAxios = createAxiosInstance();

export default useAxios;
