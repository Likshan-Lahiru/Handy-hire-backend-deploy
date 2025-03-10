import express from "express"; // Ensure express is imported correctly
import upload from "../config/multerconfig";
import {
    createTool,
    deleteTool,
    getStats,
    getToolById,
    getToolByName,
    getTools,
    updateTool
} from "../controllers/tool.controller";


const router = express.Router(); // Ensure this is correctly assigned


router.get("/get-all", getTools);
router.post("/create", upload.single("picture"), createTool);
router.put("/update/:id", updateTool);
router.delete("/delete/:id", deleteTool);
router.get("/get-id/:id", getToolById);
router.get("/get-name/:name", getToolByName);
router.get("/stats", getStats);

export default router;
