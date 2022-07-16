import joi from "joi";
import { CreateCardData } from "../repositories/cardsRepository.js";

export const cardsSchema = joi.object<CreateCardData>({
  title: joi.string().required(),
  cardNumber: joi.string().length(16).required(),
  cardName: joi.string().required(),
  securityCode: joi.string().length(3).required(),
  expirationDate: joi.string().length(5).required(),
  password: joi.string().length(4).required(),
  isVirtual: joi.boolean().required(),
  type: joi.valid("debit", "credit", "both").required()
});