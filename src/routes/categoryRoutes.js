import express from "express";
import { authenticate } from "../middleware/auth.js";
import {
    getCategories,
    createCategory,
    deleteCategory,
    editCategory
} from "../controllers/categoryController.js";

const router = express.Router();

router.get( "/", authenticate(), getCategories);
router.post("/", authenticate(), createCategory);
router.put("/:id",authenticate(), editCategory);
router.delete("/:id",authenticate(), deleteCategory);
export default router;