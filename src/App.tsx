import { Box, ChakraProvider, Flex, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import SearchBar from "./components/SearchBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box position="relative">
      <ColorModeSwitcher position="absolute" right="10" />
      <Flex mt={12} justifyContent="center" minH="100vh" p={3}>
        <SearchBar />
      </Flex>
    </Box>
  </ChakraProvider>
);
