import { Router } from "express";
import { postCredential, getAllCredentials, deleteCredentialById } from "../controllers/credentialController.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

const credentialRouter = Router();

credentialRouter.post("/createcredential", tokenValidator, schemaValidator(credentialSchema), postCredential);
credentialRouter.get("/getcredentials/:credentialId", tokenValidator, getAllCredentials);
credentialRouter.get("/getcredentials", tokenValidator, getAllCredentials);
credentialRouter.delete("/deletecredential/:credentialId", tokenValidator, deleteCredentialById);

export default credentialRouter;