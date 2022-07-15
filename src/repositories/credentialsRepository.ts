import prisma from "../config/database.js";
import { credentials } from "@prisma/client";

export type CreateCredentialData = Omit<credentials, "id">;

export async function getAllUserCredentialsByTitle(credential: CreateCredentialData, userId: number) {
  const getAllUserCredentials = await prisma.credentials.findFirst({
    where: {
      userId: userId,
      title: credential.title,
    },
  });

  return getAllUserCredentials;
}

export async function postCredential(credential: CreateCredentialData,userId: number) {
  await prisma.credentials.create({ data: { ...credential, userId } });
}

export async function getAllUserCredentials(userId: number) {
  const getAllUserCredentials = await prisma.credentials.findMany({
    where: {
      userId: userId,
    },
  });

  return getAllUserCredentials;
}

export async function getCredentialById(userId: number, credentialId: number) {
  const getAllUserCredentials = await prisma.credentials.findMany({
    where: {
      id: credentialId,
      userId: userId,
    },
  });

  return getAllUserCredentials;
}

export async function deleteCredentialById(userId: number, credentialId: number) {
  await prisma.credentials.deleteMany({
    where: {
      id: credentialId,
      userId: userId,
    },
  });
}
