export interface NoteData {
  description: string;
  note: string;
}

export interface Note extends NoteData {
  _id: string;
}
