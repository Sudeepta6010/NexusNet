import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controller/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser); /*Query String*/
router.get("/:id/friends", verifyToken, getUserFriends);

/*UPDATE*/
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
