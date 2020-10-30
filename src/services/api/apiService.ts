import axios from "axios";

// * interceptors
import { applyAuthInterceptor } from "./interceptors/auth";
import { applyAccessTokenRevalidator } from "./interceptors/tokenRevalidator";
import { applyErrorHandler } from "./interceptors/errorHandler";
import { applyResponseNormalizer } from "./interceptors/responseNormalizer";

const apiService = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// * applying interceptors
applyAuthInterceptor(apiService);
applyAccessTokenRevalidator(apiService);
applyErrorHandler(apiService);
applyResponseNormalizer(apiService);

export * from "axios";
export default apiService;
