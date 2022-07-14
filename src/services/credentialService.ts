import * as credentialRepository from "../repositories/credentialRepository.js";
import { CreateCredentialData } from "../repositories/credentialRepository.js";
import { encrypt } from "../utils/cryptrFormat.js";

export async function postCredential(credential: CreateCredentialData, user: number) {
  credential.password = encrypt(credential.password);
  await credentialRepository.postCredential(credential, user);

  return;
}
