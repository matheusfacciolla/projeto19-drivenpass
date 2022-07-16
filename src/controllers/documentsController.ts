import { Request, Response } from "express";
import * as documentsService from "../services/documentsService.js";
import { CreateDocumentData } from "../repositories/documentsRepository.js";

export async function postDocument(req: Request, res: Response) {
  const document: CreateDocumentData = req.body;
  const userId: number = res.locals.user.id;

  await documentsService.postDocument(document, userId);
  return res.sendStatus(201);
}

export async function getAllDocuments(req: Request, res: Response) {
  const documentId = parseInt(req.params.documentId);
  const userId: number = res.locals.user.id;

  if (!documentId) {
    const allDocuments = await documentsService.getAllDocuments(userId);
    return res.status(200).send(allDocuments);
  }

  const documentsById = await documentsService.getDocumentsById(userId, documentId);
  return res.status(200).send(documentsById);
}

export async function deleteDocumentById(req: Request, res: Response) {
  const documentId = parseInt(req.params.documentId);
  const userId: number = res.locals.user.id;

  await documentsService.deleteDocumentById(userId, documentId);
  return res.sendStatus(200);
}