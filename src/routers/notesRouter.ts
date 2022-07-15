import { Router } from "express";
import { postNote, getAllNotes, deleteNoteById } from "../controllers/notesController.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { notesSchema } from "../schemas/notesSchema.js";

const noteRouter = Router();

noteRouter.post("/createnote", tokenValidator, schemaValidator(notesSchema), postNote);
noteRouter.get("/getnotes/:noteId", tokenValidator, getAllNotes);
noteRouter.get("/getnotes", tokenValidator, getAllNotes);
noteRouter.delete("/deletenote/:noteId", tokenValidator, deleteNoteById);

export default noteRouter;