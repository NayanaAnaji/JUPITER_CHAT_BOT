import axios from "axios";
import envConfig from "./env-config";

export const javaAxiosInstance = axios.create({
  baseURL: envConfig.VITE_JAVA_BASE_URL,
  timeout: 10_000,
});