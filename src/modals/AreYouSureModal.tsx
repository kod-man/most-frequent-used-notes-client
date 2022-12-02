import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";

type AreYouSureModalProps = {
  onClose: () => void;
  isOpen: boolean;
  handleDeleteNote: () => void;
};

const AreYouSureModal: FC<AreYouSureModalProps> = ({
  onClose,
  isOpen,
  handleDeleteNote,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" onClick={handleDeleteNote}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AreYouSureModal;
