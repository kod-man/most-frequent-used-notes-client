import { Button, Text } from "@chakra-ui/react";

function SomethingHappened() {
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

export default SomethingHappened;
