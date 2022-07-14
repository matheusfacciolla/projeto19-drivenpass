import joi from "joi";
import { CreateCredentialData } from "../repositories/credentialRepository.js";

export const credentialSchema = joi.object<CreateCredentialData>({
  url: joi.string().uri().required(),
  username: joi.string().required(),
  password: joi.string().required(),
  title: joi.string().required()
});