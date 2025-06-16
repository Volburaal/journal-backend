import express from "express";
import { authenticate } from "../middleware/auth.js";
import {
    createEntry,
    getEntries,
    makeEntry,
} from "../controllers/journalController.js";

const router = express.Router();

router.get( "/:id", authenticate(), getEntries);
router.post("/", authenticate(), createEntry);
router.post("/make", authenticate(), makeEntry);
export default router;