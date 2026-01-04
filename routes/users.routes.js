import { Router } from "express";
import {
  handleAddUser,
  handleGetAllUsers,
  handleGetOneUser,
  handleUpdateUser,
  handleDeleteUser,
} from "../controllers/users.controller.js";

const router = Router();

router.post("/add", handleAddUser);
router.post("/", handleAddUser);

router.get("/", handleGetAllUsers);
router.get("/all", handleGetAllUsers);

router.get("/:id", handleGetOneUser);

router.put("/update/:id", handleUpdateUser);

router.delete("/delete/:id", handleDeleteUser);

export default router;
