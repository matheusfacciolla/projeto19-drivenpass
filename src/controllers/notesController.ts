import { Request, Response } from "express";
import * as notesService from "../services/notesService.js";
import { CreateNoteData } from "../repositories/notesRepository.js";

export async function postNote(req: Request, res: Response) {
  const note: CreateNoteData = req.body;
  const userId: number = res.locals.user.id;

  await notesService.postNote(note, userId);
  return res.sendStatus(201);
}

export async function getAllNotes(req: Request, res: Response) {
  const noteId = parseInt(req.params.noteId);
  const userId: number = res.locals.user.id;

  if (!noteId) {
    const allNotes = await notesService.getAllNotes(userId);
    return res.status(200).send(allNotes);
  }

  const notesById = await notesService.getNotesById(userId, noteId);
  return res.status(200).send(notesById);
}

export async function deleteNoteById(req: Request, res: Response) {
  const noteId = parseInt(req.params.noteId);
  const userId: number = res.locals.user.id;

  await notesService.deleteNoteById(userId, noteId);
  return res.sendStatus(200);
}