import prisma from "../config/database.js";
import { credentials } from "@prisma/client";

export type CreateCredentialData = Omit<credentials, "id">;

export async function postCredential(credential: CreateCredentialData, userId: number) {
  await prisma.credentials.create({
    data: {
        userId: userId,
        url: credential.url,
        username: credential.username,
        password: credential.password,
        title: credential.title
    },
  });
}
