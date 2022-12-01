import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { Note } from "../utils/types";

function useGetALLNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/all`);
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        setError(error as any);
      }
      setLoading(false);
    };
    getAllNotes();
  }, []);

  return { notes, loading, error };
}
export default useGetALLNotes;
