import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import HomePage from "./pages/HomePage";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher position="absolute" right="5" top="-10" />
    <HomePage />
  </ChakraProvider>
);
