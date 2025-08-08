import loadEnv from "dotenv"
loadEnv.config()

const {
  LIVE_PAYPAL_LINK,
  SANDBOX_PAYPAL_LINK,
  CLIENT_ID_PAYPAL,
  CLIENT_ID_PAYPAL_LIVE,
  CLIENT_SECRET_KEY_PAYPAL,
  CLIENT_SECRET_KEY_PAYPAL_LIVE,
  CLOUD_DB_URL,
  LOCAL_DB_URL,
  NODE_ENV,
  PORT_SERVER,
  SECRET_TOKEN_JWT,
  SECRET_EMAIL,
  SECRET_PASSWORD_EMAIL,
  APP_DONMAIN,
  APP_PROTOCOL,
  NAME_UNIQUE_SITE,
} = process.env;

/**
 * Las partes comentadas son para cuando se haga el despliegue en produccion
 * y se necesitan las credenciales live de paypal
 */

export const globalEnvConfig = {
  PORT_SERVER: PORT_SERVER || PORT,
  DB_CONECTION: NODE_ENV !== "Production" ? LOCAL_DB_URL : CLOUD_DB_URL,
  CLIENT_ID_PAYPAL: CLIENT_ID_PAYPAL,
  CLIENT_SECRET_PAYPAL: CLIENT_SECRET_KEY_PAYPAL,
  LINK_PAYPAL_PAYMENT: SANDBOX_PAYPAL_LINK,
  // CLIENT_ID_PAYPAL:
  //   NODE_ENV !== "Production" ? CLIENT_ID_PAYPAL : CLIENT_ID_PAYPAL_LIVE,
  // CLIENT_SECRET_PAYPAL:
  //   NODE_ENV !== "Production"
  //     ? CLIENT_SECRET_KEY_PAYPAL
  //     : CLIENT_SECRET_KEY_PAYPAL_LIVE,
  // LINK_PAYPAL_PAYMENT:
  //   NODE_ENV !== "Production" ? SANDBOX_PAYPAL_LINK : LIVE_PAYPAL_LINK,
  SECRET_EMAIL: SECRET_EMAIL,
  SECRET_PASSWORD_EMAIL: SECRET_PASSWORD_EMAIL,
  JWT_SECRET: SECRET_TOKEN_JWT,
  DEPLOY_URL:
    NODE_ENV !== "Production"
      ? `http://localhost:${PORT_SERVER}`
      : `${APP_PROTOCOL}${NAME_UNIQUE_SITE}.${APP_DONMAIN}`,
};
