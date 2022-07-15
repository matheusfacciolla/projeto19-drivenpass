import { Router } from "express";
import { postCredential, getAllCredentials, deleteCredentialById } from "../controllers/credentialsController.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { credentialsSchema } from "../schemas/credentialsSchema.js";

const credentialRouter = Router();

credentialRouter.post("/createcredential", tokenValidator, schemaValidator(credentialsSchema), postCredential);
credentialRouter.get("/getcredential/:credentialId", tokenValidator, getAllCredentials);
credentialRouter.get("/getcredentials", tokenValidator, getAllCredentials);
credentialRouter.delete("/deletecredential/:credentialId", tokenValidator, deleteCredentialById);

export default credentialRouter;