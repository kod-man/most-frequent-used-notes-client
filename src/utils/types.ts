export interface NoteData {
  keyword: string;
  description: string;
  note: string;
}

export interface Note extends NoteData {
  id: string;
}
