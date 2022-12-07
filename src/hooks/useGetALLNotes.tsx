import { useEffect, useState } from "react";
import { Axios } from "../utils/axios";
import { Note } from "../utils/types";

function useGetALLNotes(refecth: boolean) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllNotes = async () => {
      try {
        const response = await Axios.get(`/all`);
        setNotes(response.data);
      } catch (error) {
        setError(error as any);
      }
      setLoading(false);
    };
    getAllNotes();
  }, [refecth]);

  return { notes, loading, error };
}
export default useGetALLNotes;
