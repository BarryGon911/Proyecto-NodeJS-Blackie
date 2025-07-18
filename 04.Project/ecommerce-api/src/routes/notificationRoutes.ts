import express from "express";
import
{
  getNotifications,
  getNotificationById,
  getNotificationByUser,
  createNotification,
  updateNotification,
  deleteNotification,
  markAsRead,
  markAllAsReadByUser,
  getUnreadNotificationsByUser,
}
from "../controllers/notificationController.js";

const router = express.Router();

router.get("/notifications", getNotifications);
router.get("/notifications/unread/:userId", getUnreadNotificationsByUser);
router.get("/notifications/user/:userId", getNotificationByUser);
router.get("/notifications/:id", getNotificationById);
router.post("/notifications", createNotification);
router.patch("/notifications/:id/mark-read", markAsRead);
router.patch("/notifications/user/:userId/mark-all-read", markAllAsReadByUser);
router.put("/notifications/:id", updateNotification);
router.delete("/notifications/:id", deleteNotification);

export default router;
