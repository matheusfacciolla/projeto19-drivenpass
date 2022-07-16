import { Router } from "express";
import { postDocument, getAllDocuments, deleteDocumentById } from "../controllers/documentsController.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { documentsSchema } from "../schemas/documentsSchema.js";

const documentRouter = Router();

documentRouter.post("/createdocument", tokenValidator, schemaValidator(documentsSchema), postDocument);
documentRouter.get("/getdocument/:documentId", tokenValidator, getAllDocuments);
documentRouter.get("/getdocuments", tokenValidator, getAllDocuments);
documentRouter.delete("/deletedocument/:documentId", tokenValidator, deleteDocumentById);

export default documentRouter;