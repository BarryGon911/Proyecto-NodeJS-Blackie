import express from "express";
import
{
  getOrders,
  getOrderById,
  getOrdersByUser,
  createOrder,
  updateOrder,
  cancelOrder,
  updateOrderStatus,
  updatePaymentStatus,
  deleteOrder,
}
from "../controllers/orderController.js";

const router = express.Router();

router.get("/orders", getOrders);
router.get("/orders/user/:userId", getOrdersByUser);
router.get("/orders/:id", getOrderById);
router.post("/orders", createOrder);
router.patch("/orders/:id/cancel", cancelOrder);
router.patch("/orders/:id/status", updateOrderStatus);
router.patch("/orders/:id/payment-status", updatePaymentStatus);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);

export default router;
