import { InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Note } from "../utils/types";

function NoteList() {
  const [notes, setNotes] = useState<Note[]>([]);
  if (notes.length === 0) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <InfoIcon boxSize={"50px"} color={"blue.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          There is no note yet
        </Heading>
        <Button
          rounded={"full"}
          mt={4}
          px={6}
          colorScheme={"orange"}
          bg={"orange.400"}
          _hover={{ bg: "orange.500" }}
        >
          Create note
        </Button>
      </Box>
    );
  }
  return <Flex mt={10}>NoteList</Flex>;
}

export default NoteList;
