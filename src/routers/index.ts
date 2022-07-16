import { Router } from "express";
import authRouter from "./authRouter.js";
import cardRouter from "./cardRouter.js";
import credentialRouter from "./credentialsRouter.js";
import documentRouter from "./documentsRouter.js";
import noteRouter from "./notesRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();
router.use(authRouter);
router.use(credentialRouter);
router.use(noteRouter);
router.use(cardRouter);
router.use(wifiRouter);
router.use(documentRouter);

export default router;