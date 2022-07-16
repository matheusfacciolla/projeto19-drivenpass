import * as credentialsRepository from "../repositories/credentialsRepository.js";
import { CreateCredentialData } from "../repositories/credentialsRepository.js";
import { encrypt, decrypt } from "../utils/cryptrFormat.js";

export async function postCredential(
  credential: CreateCredentialData,
  userId: number
) {
  credential.password = encrypt(credential.password);
  const isCredentialExist =
    await credentialsRepository.getAllUserCredentialsByTitle(
      credential,
      userId
    );

  if (isCredentialExist) {
    throw {
      type: "Conflict",
      message: "This user already have a credential with this title",
    };
  }

  await credentialsRepository.postCredential(credential, userId);

  return;
}

export async function getAllCredentials(userId: number) {
  const allUserCredentials = await credentialsRepository.getAllUserCredentials(
    userId
  );

  if (allUserCredentials.length == 0) {
    throw {
      type: "Not_Found",
      message: "Credentials not found",
    };
  }

  const credentialsList = [];
  for (let credential of allUserCredentials) {
    credential = { ...credential, password: decrypt(credential.password) };
    credentialsList.push(credential);
  }

  return credentialsList;
}

export async function getCredentialsById(userId: number, credentialId: number) {
  const credentialsById = await credentialsRepository.getCredentialById(
    userId,
    credentialId
  );

  if (credentialsById.length == 0) {
    throw {
      type: "Not_Found",
      message: "Credentials not found",
    };
  }

  const credentialsList = [];
  for (let credential of credentialsById) {
    credential = { ...credential, password: decrypt(credential.password) };
    credentialsList.push(credential);
  }

  return credentialsList;
}

export async function deleteCredentialById(
  userId: number,
  credentialId: number
) {
  const credentialsById = await credentialsRepository.getCredentialById(
    userId,
    credentialId
  );

  if (credentialsById.length == 0) {
    throw {
      type: "Not_Found",
      message: "Credentials not found",
    };
  }

  await credentialsRepository.deleteCredentialById(userId, credentialId);
  return;
}
