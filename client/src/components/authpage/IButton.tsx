import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Box,
  Portal,
  Text,
} from "@chakra-ui/react";

export default function IButton() {
  return (
    <>
      <Box position={"absolute"} bottom={"60px"} right={"50px"}>
        <Popover placement="left">
          <PopoverTrigger>
            <Button
              w="50px"
              h="50px"
              borderRadius={"50%"}
              color={"white"}
              bg={"#34a853"}
              cursor={"pointer"}
              _hover={{
                bg: "#34a853",
              }}
            >
              i
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Information</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Text textAlign={"left"}>
                  A user-friendly chat application with secure messaging,
                  real-time communication, and customizable features for
                  enhanced interactions.
                </Text>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Box>
    </>
  );
}
