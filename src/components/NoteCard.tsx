import { DeleteIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Flex,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import AreYouSureModal from "../modals/AreYouSureModal";
import { Axios } from "../utils/axios";
import { defaultToastProps } from "../utils/defaultToastProps";

function NoteCard({
  description,
  code,
  _id,
}: {
  description: string;
  code: string;
  _id: string;
}) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteNote = () => {
    Axios.delete(`/delete/${_id}`)
      .then(() => {
        toast({
          ...defaultToastProps,
          title: "Note deleted",
          status: "success",
        });
      })
      .catch((err) => {
        toast({
          ...defaultToastProps,
          title: "An error occured",
          status: "error",
        });
      });
    onClose();
  };

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
        <DeleteIcon
          onClick={onOpen}
          color="red.500"
          ml={2}
          _hover={{ cursor: "pointer" }}
        />
        <AreYouSureModal
          onClose={onClose}
          isOpen={isOpen}
          handleDeleteNote={handleDeleteNote}
        />
      </Flex>
      <Divider mt={4} />
    </Flex>
  );
}

export default NoteCard;
