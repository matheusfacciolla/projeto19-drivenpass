import * as credentialRepository from "../repositories/credentialRepository.js";
import { CreateCredentialData } from "../repositories/credentialRepository.js";
import { encrypt } from "../utils/cryptrFormat.js";

export async function postCredential(credential: CreateCredentialData, userId: number) {
  credential.password = encrypt(credential.password);
  const isCredentialExist = await credentialRepository.getAllUserCrdentials(credential, userId);

  if(isCredentialExist){
    throw {
      type: "Conflict",
      message: "This user already have a credential with this title",
    };
  }

  await credentialRepository.postCredential(credential, userId);

  return;
}
