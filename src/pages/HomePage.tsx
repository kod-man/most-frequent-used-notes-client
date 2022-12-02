import { Flex, HStack } from "@chakra-ui/react";
import CreateNoteModal from "../components/CreateNoteModal";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

function HomePage() {
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
          <SearchBar />
          <CreateNoteModal />
        </HStack>
      </Flex>
      <NoteList />
    </Flex>
  );
}

export default HomePage;
