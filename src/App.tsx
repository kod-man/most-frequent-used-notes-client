import { Box, ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import CreateNoteModal from "./components/CreateNoteModal";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box position="relative">
      <ColorModeSwitcher position="absolute" right="5" top="-10" />
      <Flex
        mt={12}
        justifyContent="start"
        alignItems="center"
        flexDirection="column"
        minH="100vh"
        p={3}
      >
        <Flex w="100%">
          <SearchBar />
          <CreateNoteModal />
        </Flex>
        <NoteList />
      </Flex>
    </Box>
  </ChakraProvider>
);
