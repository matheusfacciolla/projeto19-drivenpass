import joi from "joi";
import { CreateNoteData } from "../repositories/notesRepository.js";

export const notesSchema = joi.object<CreateNoteData>({
  title: joi.string().required().max(50),
  note: joi.string().required().max(1000)
});