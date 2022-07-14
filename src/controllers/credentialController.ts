import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js";
import { CreateCredentialData } from "../repositories/credentialRepository.js";

export async function postCredential(req: Request, res: Response) {
  const credential: CreateCredentialData = req.body;
  const userId = res.locals.user.id; //???

  await credentialService.postCredential(credential, userId);
  return res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
  const credentialId = parseInt(req.params.credentialId);
  const userId = res.locals.user.id; //???

  if (!credentialId) {
    const allCredentials = await credentialService.getAllCredentials(userId);
    return res.status(200).send(allCredentials);
  }

  const credentialsById = await credentialService.getCredentialsById(
    userId,
    credentialId
  );
  return res.status(200).send(credentialsById);
}

export async function deleteCredentialById(req: Request, res: Response) {
  const credentialId = parseInt(req.params.credentialId);
  const userId = res.locals.user.id; //???

  await credentialService.deleteCredentialById(userId, credentialId);
  return res.sendStatus(200);
}
