import express from "express";
import
{
  getCarts,
  getCartById,
  getCartByUser,
  createCart,
  updateCart,
  deleteCart,
  addProductToCart,
}
from "../controllers/cartController.js";

const router = express.Router();

router.get("/cart", getCarts);
router.get("/cart/:id", getCartById);
router.get("/cart/user/:id", getCartByUser);
router.post("/cart", createCart);
router.post("/cart/add-product", addProductToCart);
router.put("/cart/:id", updateCart);
router.delete("/cart/:id", deleteCart);

export default router;
