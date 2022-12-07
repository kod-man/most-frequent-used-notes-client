import { InfoIcon } from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";

function NoNotes() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={"50px"} color={"blue.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        There is no note yet
      </Heading>
    </Box>
  );
}

export default NoNotes;
