import { Request, Response } from "express";
import * as credentialsService from "../services/credentialsService.js";
import { CreateCredentialData } from "../repositories/credentialsRepository.js";

export async function postCredential(req: Request, res: Response) {
  const credential: CreateCredentialData = req.body;
  const userId: number = res.locals.user.id;

  await credentialsService.postCredential(credential, userId);
  return res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
  const credentialId = parseInt(req.params.credentialId);
  const userId: number = res.locals.user.id;

  if (!credentialId) {
    const allCredentials = await credentialsService.getAllCredentials(userId);
    return res.status(200).send(allCredentials);
  }

  const credentialsById = await credentialsService.getCredentialsById(
    userId,
    credentialId
  );
  return res.status(200).send(credentialsById);
}

export async function deleteCredentialById(req: Request, res: Response) {
  const credentialId = parseInt(req.params.credentialId);
  const userId: number = res.locals.user.id;

  await credentialsService.deleteCredentialById(userId, credentialId);
  return res.sendStatus(200);
}
