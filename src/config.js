export const CONFIG = {
    CHOREO_TOKEN_URL: window.env.CHOREO_SERVER_URL + "/oauth2/token",
    CHOREO_APP_CONSUMER_KEY: window.env.CHOREO_APP_CONSUMER_KEY,
    CHOREO_APP_CONSUMER_SECRET: window.env.CHOREO_APP_CONSUMER_SECRET,
    CHOREO_URL_AUTHORIZATION_API: window.env.CHOREO_API_HOST + "/authorizationapi/1.0.0/authorize",
    CHOREO_URL_OPEN_BANKING_API: window.env.CHOREO_API_HOST + "/accountsandtransactionapi/1.0.0/accountAccessConsent",
    ASGARDEO_REDIRECT_URL: window.env.HOST_URL + "/oauth2/callback",
    CHOREO_URL_TRANSACTIONS_API: window.env.CHOREO_API_HOST + "/accountsandtransactionapi/1.0.0/transactions",
    CHOREO_URL_ACCOUNTS_API: window.env.CHOREO_API_HOST + "/accountsandtransactionapi/1.0.0/accounts",
    SIGN_IN_REDIRECT_URL: window.env.HOST_URL + "/dashboard",
    SIGN_OUT_REDIRECT_URL: window.env.HOST_URL + "/",
    CLIENTID: "6TgsdFvzGEwf86p_L9qjnQdXshYa",
    BASE_URL: "https://api.asgardeo.io/t/sachinisiriwardene",
    SCOPE: [ "profile" ]
};
