import { rateLimit } from "express-rate-limit";

export const rate_Limit = rateLimit({
  windowMs: 1 * 5000,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  statusCode: 429,
  message: "Too many requests. Please try again later",
});

export const paypalRateLimit = rateLimit({
  windowMs: 7 * 24 * 60 * 60 * 1000,
  max: 4,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  statusCode: 429,
  message: "Has excedido el número de intentos permitidos para la API de PayPal. Intenta nuevamente en una semana.",
});
