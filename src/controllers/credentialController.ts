import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js";
import { CreateCredentialData } from "../repositories/credentialRepository.js";

export async function postCredential(req: Request, res: Response) {
  const credential: CreateCredentialData = req.body;
  const userId = res.locals.user.id;

  await credentialService.postCredential(credential, userId);
  return res.sendStatus(201);
}