import { rate_Limit, paypalRateLimit } from "../../utils/rateLimit.js";
import { createPaypalOrder, paymentSuccess, cancelPayment, confirmPaypalPayment } from "../../controller/controller_paypall.js";
import express from "express";

const router = express.Router();

router.post("/shop/purchasing", rate_Limit, createPaypalOrder );

router.post("/shop/confirm-payment", confirmPaypalPayment)

router.get("/shop/successpayment", paymentSuccess);

router.get("/shop/cancelpayment",cancelPayment);

export default router;
