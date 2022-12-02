export interface NoteData {
  description: string;
  code: string;
}

export interface Note extends NoteData {
  _id: string;
}
