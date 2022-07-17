import joi from "joi";
import { CreateDocumentData } from "../repositories/documentsRepository.js";

export const documentsSchema = joi.object<CreateDocumentData>({
  docType: joi.valid("RG", "CNH").required(),
  completeName: joi.string().required(),
  emissionDate: joi.string().required(),
  expirationDate: joi.string().required(),
  registerDate: joi.string().required(),
  agency: joi.string().required(),
});
