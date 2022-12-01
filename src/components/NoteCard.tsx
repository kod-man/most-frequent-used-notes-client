import { DeleteIcon, SettingsIcon } from "@chakra-ui/icons";
import { Button, Divider, Flex, Text, useToast } from "@chakra-ui/react";
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
        borderColor="blue.300"
        justifyContent="space-between"
      >
        <Text as="b" bgColor="transparent" color="blue.600">
          {code}
        </Text>
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
      <Flex px={4} py={2}>
        <SettingsIcon color="gray.500" />
        <DeleteIcon color="red.500" ml={2} />
      </Flex>
      <Divider mt={4} />
    </Flex>
  );
}

export default NoteCard;
