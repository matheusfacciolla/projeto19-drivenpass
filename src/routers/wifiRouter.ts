import { Router } from "express";
import { postWifi, getAllWifi, deleteWifiById } from "../controllers/wifiController.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { wifiSchema } from "../schemas/wifiSchema.js";

const wifiRouter = Router();

wifiRouter.post("/createwifi", tokenValidator, schemaValidator(wifiSchema), postWifi);
wifiRouter.get("/getwifi/:wifiId", tokenValidator, getAllWifi);
wifiRouter.get("/getwifi", tokenValidator, getAllWifi);
wifiRouter.delete("/deletewifi/:wifiId", tokenValidator, deleteWifiById);

export default wifiRouter;