import { InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import useGetALLNotes from "../hooks/useGetALLNotes";
import CreateNoteModal from "./CreateNoteModal";

function NoteList() {
  const { notes, loading, error } = useGetALLNotes();

  if (loading) {
    return <Spinner mt={20} />;
  }
  if (error) {
    return (
      <Button
        border="1px"
        borderColor="gray.200"
        width="50%"
        minW={300}
        borderRadius={10}
        mt={20}
        p={4}
        justifyContent="center"
        bgColor="red.500"
        _hover={{ bg: "red.400" }}
        onClick={() => window.location.reload()}
      >
        <Text color="white">An error occured. Please try again</Text>
      </Button>
    );
  }

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
