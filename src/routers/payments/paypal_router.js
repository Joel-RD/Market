import { rate_Limit, paypalRateLimit } from "../../utils/rateLimit.js";
import { createPaypalOrder, paymentSuccess, cancelPayment, confirmPaypalPayment } from "../../controller/controller_paypall.js";
import express from "express";

const router = express.Router();

router.post("/shop/purchasing", rate_Limit, createPaypalOrder );

router.post("/shop/confirm-payment", paypalRateLimit, confirmPaypalPayment)

router.get("/shop/success-payment", paymentSuccess, paymentSuccess);

router.get("/shop/cancel-payment", paymentSuccess ,cancelPayment);

export default router;
