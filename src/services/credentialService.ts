import * as credentialRepository from "../repositories/credentialRepository.js";
import { CreateCredentialData } from "../repositories/credentialRepository.js";
import { encrypt, decrypt } from "../utils/cryptrFormat.js";

export async function postCredential(
  credential: CreateCredentialData,
  userId: number
) {
  credential.password = encrypt(credential.password);
  const isCredentialExist =
    await credentialRepository.getAllUserCrdentialsByTitle(credential, userId);

  if (isCredentialExist) {
    throw {
      type: "Conflict",
      message: "This user already have a credential with this title",
    };
  }

  await credentialRepository.postCredential(credential, userId);

  return;
}

export async function getAllCredentials(userId: number) {
  const allUserCredentials = await credentialRepository.getAllUserCredentials(
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
    credential = {
      ...credential,

      id: credential.id,
      userId: credential.userId,
      url: credential.url,
      username: credential.username,
      password: decrypt(credential.password),
      title: credential.title,
    };
    credentialsList.push(credential);
  }

  return credentialsList;
}

export async function getCredentialsById(userId: number, credentialId: number) {
  const credentialsById = await credentialRepository.getCredentialById(
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
    credential = {
      ...credential,

      id: credential.id,
      userId: credential.userId,
      url: credential.url,
      username: credential.username,
      password: decrypt(credential.password),
      title: credential.title,
    };
    credentialsList.push(credential);
  }

  return credentialsList;
}

export async function deleteCredentialById(
  userId: number,
  credentialId: number
) {
  const credentialsById = await credentialRepository.getCredentialById(
    userId,
    credentialId
  );

  if (credentialsById.length == 0) {
    throw {
      type: "Not_Found",
      message: "Credentials not found",
    };
  }

  await credentialRepository.deleteCredentialById(userId, credentialId);
  return;
}
