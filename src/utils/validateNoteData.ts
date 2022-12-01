import { NoteData } from "./types";

export const validateNoteData = (noteData: NoteData) => {
  const errors: string[] = [];
  if (!noteData.description.trim()) {
    errors.push("Description is required.");
  }
  if (!noteData.note.trim()) {
    errors.push("Note is required.");
  }
  return errors;
};
