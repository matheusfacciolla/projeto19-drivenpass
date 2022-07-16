import prisma from "../config/database.js";
import { documents } from "@prisma/client";

export type CreateDocumentData = Omit<documents, "id">;

export async function postDocument(document: CreateDocumentData, userId: number) {
  await prisma.documents.create({ data: { ...document, userId } });
}

export async function getAllUserDocuments(userId: number) {
  const getAllUserDocuments = await prisma.documents.findMany({
    where: {
      userId: userId,
    },
  });

  return getAllUserDocuments;
}

export async function getDocumentById(userId: number, documentId: number) {
  const getAllUserdocuments = await prisma.documents.findMany({
    where: {
      id: documentId,
      userId: userId,
    },
  });

  return getAllUserdocuments;
}

export async function deleteDocumentById(userId: number, documentId: number) {
  await prisma.documents.deleteMany({
    where: {
      id: documentId,
      userId: userId,
    },
  });
}