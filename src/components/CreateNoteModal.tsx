import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { defaultToastProps } from "../utils/defaultToastProps";
import { validateNoteData } from "../utils/validateNoteData";

function CreateNoteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [note, setNote] = useState({
    keyword: "",
    description: "",
    note: "",
  });

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const errors = validateNoteData(note);
    if (errors.length !== 0) {
      toast({
        ...defaultToastProps,
        title: errors[0],
        status: "error",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setNote((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <Button
        onClick={onOpen}
        rounded={"full"}
        mt={4}
        px={6}
        colorScheme={"orange"}
        bg={"orange.400"}
        _hover={{ bg: "orange.500" }}
      >
        Create note
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Keyword</FormLabel>
              <Input
                type="text"
                name="keyword"
                onChange={handleInputChange}
                placeholder="Keyword"
                value={note.keyword}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                onChange={handleInputChange}
                placeholder="Description"
                value={note.description}
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Note</FormLabel>
              <Input
                type="text"
                name="note"
                onChange={handleInputChange}
                placeholder="Note"
                value={note.note}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSubmit} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateNoteModal;
