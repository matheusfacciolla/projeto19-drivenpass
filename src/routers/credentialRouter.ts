import { Router } from "express";
import { postCredential } from "../controllers/credentialController.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

const credentialRouter = Router();

credentialRouter.post("/createcredential", tokenValidator, schemaValidator(credentialSchema), postCredential);

export default credentialRouter;