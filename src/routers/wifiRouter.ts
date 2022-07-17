import { Router } from "express";
import { postWifi, getAllWifis, deleteWifiById } from "../controllers/wifisController.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { wifiSchema } from "../schemas/wifiSchema.js";

const wifiRouter = Router();

wifiRouter.post("/createwifi", tokenValidator, schemaValidator(wifiSchema), postWifi);
wifiRouter.get("/getwifi/:wifiId", tokenValidator, getAllWifis);
wifiRouter.get("/getwifis", tokenValidator, getAllWifis);
wifiRouter.delete("/deletewifi/:wifiId", tokenValidator, deleteWifiById);

export default wifiRouter;