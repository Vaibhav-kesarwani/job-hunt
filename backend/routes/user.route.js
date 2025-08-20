import express from "express";
import {
  register,
  login,
  logout,
  updateProfile,
} from "../controllers/user.controller";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(updateProfile);
