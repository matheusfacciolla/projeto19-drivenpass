import * as notesRepository from "../repositories/notesRepository.js";
import { CreateNoteData } from "../repositories/notesRepository.js";

export async function postNote(note: CreateNoteData, userId: number) {
  const isNoteExist = await notesRepository.getAllUserNotesByTitle(note, userId);

  if (isNoteExist) {
    throw {
      type: "Conflict",
      message: "This user already have a note with this title",
    };
  }

  await notesRepository.postNote(note, userId);

  return;
}

export async function getAllNotes(userId: number) {
  const allUserNotes = await notesRepository.getAllUserNotes(userId);

  if (allUserNotes.length == 0) {
    throw {
      type: "Not_Found",
      message: "Notes not found",
    };
  }

  return allUserNotes;
}

export async function getNotesById(userId: number, noteId: number) {
  const notesById = await notesRepository.getNoteById(userId, noteId);

  if (notesById.length == 0) {
    throw {
      type: "Not_Found",
      message: "Note not found",
    };
  }

  return notesById;
}

export async function deleteNoteById(userId: number, noteId: number) {
  const notesById = await notesRepository.getNoteById(userId, noteId);

  if (notesById.length == 0) {
    throw {
      type: "Not_Found",
      message: "Note not found",
    };
  }

  await notesRepository.deleteNoteById(userId, noteId);
  return;
}
