import * as documentsRepository from "../repositories/documentsRepository.js";
import { CreateDocumentData } from "../repositories/documentsRepository.js";

export async function postDocument(document: CreateDocumentData, userId: number) {
  await documentsRepository.postDocument(document, userId);
  return;
}

export async function getAllDocuments(userId: number) {
  const allUserDocuments = await documentsRepository.getAllUserDocuments(userId);

  if (allUserDocuments.length == 0) {
    throw {
      type: "Not_Found",
      message: "Document not found",
    };
  }

  return allUserDocuments;
}

export async function getDocumentsById(userId: number, documentId: number) {
  const documentsById = await documentsRepository.getDocumentById(userId, documentId);

  if (documentsById.length == 0) {
    throw {
      type: "Not_Found",
      message: "Document not found",
    };
  }

  return documentsById;
}

export async function deleteDocumentById(userId: number, documentId: number) {
  const documentsById = await documentsRepository.getDocumentById(userId, documentId);

  if (documentsById.length == 0) {
    throw {
      type: "Not_Found",
      message: "document not found",
    };
  }

  await documentsRepository.deleteDocumentById(userId, documentId);
  return;
}