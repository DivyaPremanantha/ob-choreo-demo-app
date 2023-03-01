import { CONFIG } from "../config";
import { getBasicAuthHeader } from "./utils";
import { post, get } from "./http-client";
import qs from 'qs';

export const getAppAccessToken = async () => {

    const requestConfig = {
        method: "POST",
        url: CONFIG.CHOREO_TOKEN_URL,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": getBasicAuthHeader(CONFIG.CHOREO_APP_CONSUMER_KEY, CONFIG.CHOREO_APP_CONSUMER_SECRET)
        },
        data: qs.stringify({grant_type: 'client_credentials'})
    };

    return await post(requestConfig);
}

export const getUserAccessToken = async (code, app_access_token) => {

    const requestConfig = {
        method: "POST",
        url: CONFIG.CHOREO_TOKEN_URL,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": getBasicAuthHeader(CONFIG.CHOREO_APP_CONSUMER_KEY, CONFIG.CHOREO_APP_CONSUMER_SECRET)
        },
        data: qs.stringify({grant_type: 'authorization_code', code: code, redirect_uri: CONFIG.ASGARDEO_REDIRECT_URL})
    };

    return await post(requestConfig);
}
