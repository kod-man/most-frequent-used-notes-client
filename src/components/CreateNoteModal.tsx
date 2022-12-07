import { AddIcon } from "@chakra-ui/icons";
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
import { Axios } from "../utils/axios";
import { defaultToastProps } from "../utils/defaultToastProps";
import { validateNoteData } from "../utils/validateNoteData";

type Props = {
  refetch: boolean;
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
};

function CreateNoteModal({ refetch, setRefetch }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [note, setNote] = useState({
    description: "",
    code: "",
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
      return;
    }
    Axios.post("/add", note)
      .then((res) => {
        onClose();
        setNote({
          description: "",
          code: "",
        });
        toast({
          ...defaultToastProps,
          title: "Note created successfully",
          status: "success",
        });
        setRefetch(!refetch);
      })
      .catch((err) => {
        toast({
          ...defaultToastProps,
          title: "An error occured. Please try again",
          status: "error",
        });
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setNote((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <Button
        onClick={onOpen}
        mx={4}
        px={8}
        leftIcon={<AddIcon />}
        colorScheme="blue"
        variant="solid"
        _hover={{ bg: "blue.300" }}
      >
        New note
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
                name="code"
                onChange={handleInputChange}
                placeholder="Note"
                value={note.code}
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
