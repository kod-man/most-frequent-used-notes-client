import { NoteData } from "./types";

export const validateNoteData = (noteData: NoteData) => {
  const errors: string[] = [];
  if (!noteData.keyword.trim()) {
    errors.push("Keyword is required.");
  }
  if (!noteData.note.trim()) {
    errors.push("Note is required.");
  }
  return errors;
};
