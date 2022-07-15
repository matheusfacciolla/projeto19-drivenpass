import { Router } from "express";
import { postCard, getAllCards, deleteCardById } from "../controllers/cardsController.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { cardsSchema } from "../schemas/cardsSchema.js";

const cardRouter = Router();

cardRouter.post("/createcard", tokenValidator, schemaValidator(cardsSchema), postCard);
cardRouter.get("/getcard/:cardId", tokenValidator, getAllCards);
cardRouter.get("/getcards", tokenValidator, getAllCards);
cardRouter.delete("/deletecard/:cardId", tokenValidator, deleteCardById);

export default cardRouter;