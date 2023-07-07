import { Box, Button, Input, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";
import UserCards from "../UserCards/UserCards";

export default function NewChat() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Button
        h={"25px"}
        fontSize={"14px"}
        onClick={onOpen}
        bg={"#353E45"}
        color={"white"}
        _hover={{
          bg: "#353E45",
        }}
        rightIcon={<MdAddCircle fontSize={"16px"} />}
      >
        New Chat
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={"xl"} >
        <ModalOverlay filter="blur(20px)"/>
        <ModalContent bg={"none"}>
          <ModalBody bg={"none"}>
            <Input
              type="text"
              focusBorderColor={"#34a853"}
              placeholder="Search..."
              bg={"white"}
              color={"black"}
              mb={"20px"}
              fontSize={"18px"}
            />

            {/* // Display all user here */}
            <Box
              bg={"white"}
              w={"100%"}
              maxH={"400px"}
              borderRadius={"10px"}
              p={"10px 20px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              overflowY={"scroll"}
              className="user-search-scroll-bar"
            >
                <UserCards />
                <UserCards />
                <UserCards />
                <UserCards />
                <UserCards />
                <UserCards />
                <UserCards />
                <UserCards />
                <UserCards />
            </Box>
            {/* // Display all user here */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
