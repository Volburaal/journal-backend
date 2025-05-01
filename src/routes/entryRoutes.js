import express from "express";
import { authenticate } from "../middleware/auth.js";
import {
    createEntry,
    getEntries,
} from "../controllers/journalController.js";

const router = express.Router();

router.get( "/", authenticate(), getEntries);
router.post("/", authenticate(), createEntry);
export default router;