import axios from "axios";

import { applyAuthInterceptor } from "./interceptors/auth";
import { applyAccessTokenRevalidator } from "./interceptors/tokenRevalidator";
import { applyErrorHandler } from "./interceptors/errorHandler";
import { applyResponseNormalizer } from "./interceptors/responseNormalizer";

const apiService = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

applyAuthInterceptor(apiService);
applyAccessTokenRevalidator(apiService);
applyErrorHandler(apiService);
applyResponseNormalizer(apiService);

export * from "axios";
export default apiService;
