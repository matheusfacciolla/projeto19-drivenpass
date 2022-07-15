import joi from "joi";
import { CreateCardData } from "../repositories/cardsRepository.js";

export const cardsSchema = joi.object<CreateCardData>({
  title: joi.string().required(),
  cardNumber: joi.number().required(),
  cardName: joi.string().required(),
  securityCode: joi.number().required(),
  expirationDate: joi.string().required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.valid("debit", "credit", "both").required()
});