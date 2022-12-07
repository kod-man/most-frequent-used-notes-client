import { Flex, HStack, Input, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CreateNoteModal from "../components/CreateNoteModal";
import NoNotes from "../components/NoNotes";
import NoteCard from "../components/NoteCard";
import SomethingHappened from "../components/SomethingHappened";
import useGetALLNotes from "../hooks/useGetALLNotes";

function HomePage() {
  const [refecth, setRefetch] = useState(false);
  const { notes, loading, error } = useGetALLNotes(refecth);

  useEffect(() => {
    console.log("refetching");
  }, [refecth]);

  if (loading) {
    return <Spinner mt={20} />;
  }
  if (error) {
    return <SomethingHappened />;
  }

  return (
    <Flex
      w={"full"}
      mt={12}
      justifyContent="start"
      alignItems="center"
      flexDirection="column"
      minH="100vh"
      p={3}
    >
      <Flex w="80%" alignItems="center" justifyContent="center">
        <HStack w="100%" spacing="24px">
          <Input variant="outline" placeholder="Search note" />
          <CreateNoteModal refetch={refecth} setRefetch={setRefetch} />
        </HStack>
      </Flex>
      {notes.length === 0 ? (
        <NoNotes />
      ) : (
        <>
          {notes.map((note) => (
            <NoteCard
              _id={note._id}
              key={note._id}
              code={note.code}
              description={note.description}
              setRefetch={setRefetch}
              refecth={refecth}
            />
          ))}
        </>
      )}
    </Flex>
  );
}

export default HomePage;
