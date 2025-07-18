import express from "express";
import
{
  getPaymentMethods,
  getPaymentMethodById,
  getPaymentMethodsByUser,
  createPaymentMethod,
  updatePaymentMethod,
  setDefaultPaymentMethod,
  deactivatePaymentMethod,
  deletePaymentMethod,
  getDefaultPaymentMethod,
}
from "../controllers/paymentMethodController.js";

const router = express.Router();

router.get("/payment-methods", getPaymentMethods);
router.get("/payment-methods/default/:userId", getDefaultPaymentMethod);
router.get("/payment-methods/user/:userId", getPaymentMethodsByUser);
router.get("/payment-methods/:id", getPaymentMethodById);
router.post("/payment-methods", createPaymentMethod);
router.patch("/payment-methods/:id/set-default", setDefaultPaymentMethod);
router.patch("/payment-methods/:id/deactivate", deactivatePaymentMethod);
router.put("/payment-methods/:id", updatePaymentMethod);
router.delete("/payment-methods/:id", deletePaymentMethod);

export default router;
