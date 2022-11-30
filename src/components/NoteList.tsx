import { InfoIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Note } from "../utils/types";
import CreateNoteModal from "./CreateNoteModal";

function NoteList() {
  const [notes, setNotes] = useState<Note[]>([]);
  if (notes.length === 0) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <InfoIcon boxSize={"50px"} color={"blue.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          There is no note yet
        </Heading>

        <CreateNoteModal />
      </Box>
    );
  }
  return <Flex mt={10}>NoteList</Flex>;
}

export default NoteList;
