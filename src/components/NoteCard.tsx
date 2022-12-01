import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import { defaultToastProps } from "../utils/defaultToastProps";

function NoteCard({
  description,
  code,
}: {
  description: string;
  code: string;
}) {
  const toast = useToast();
  return (
    <Flex flexDirection="column" mt={10} w="50%" lineHeight={10}>
      <Text>{description}</Text>
      <Flex
        border="1px"
        p={4}
        borderRadius={20}
        borderColor="blue.200"
        justifyContent="space-between"
      >
        <Text bgColor="transparent">{code}</Text>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(code);
            toast({
              ...defaultToastProps,
              title: "Copied to clipboard",
              status: "success",
            });
          }}
          colorScheme="blue"
          variant="ghost"
        >
          Copy
        </Button>
      </Flex>
    </Flex>
  );
}

export default NoteCard;
