import prisma from "../config/database.js";
import { notes } from "@prisma/client";

export type CreateNoteData = Omit<notes, "id">;

export async function getAllUserNotesByTitle(
  note: CreateNoteData,
  userId: number
) {
  const getAllUserNotes = await prisma.notes.findFirst({
    where: {
      userId: userId,
      title: note.title,
    },
  });

  return getAllUserNotes;
}

export async function postNote(note: CreateNoteData, userId: number) {
  await prisma.notes.create({ data: { ...note, userId } });
}

export async function getAllUserNotes(userId: number) {
  const getAllUserNotes = await prisma.notes.findMany({
    where: {
      userId: userId,
    },
  });

  return getAllUserNotes;
}

export async function getNoteById(userId: number, noteId: number) {
  const getAllUserNotes = await prisma.notes.findMany({
    where: {
      id: noteId,
      userId: userId,
    },
  });

  return getAllUserNotes;
}

export async function deleteNoteById(userId: number, noteId: number) {
  await prisma.notes.deleteMany({
    where: {
      id: noteId,
      userId: userId,
    },
  });
}
