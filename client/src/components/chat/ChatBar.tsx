import { Box, Text } from "@chakra-ui/react";
import React from "react";

type ChatBarProps = {
  sender: string;
  content: string;
};

export default function ChatBar({ sender, content }: ChatBarProps) {
  return (
    <>
      <Box
        minH="30px"
        display="flex"
        alignItems="center"
        justifyContent={sender === "user" ? "flex-end" : "flex-start"}
        gap="100px"
      >
        <Box
          bg={sender === "user" ? "#34a853" : "white"}
          borderRadius="16px"
          boxShadow="0px 1px 2px rgba(0, 0, 0, 0.15)"
          p="14px 30px"
          maxWidth="70%"
          width="fit-content"
          position={"relative"}
        >
          {/* <Box bg={"red"} w={"30px"} h="30px" position={"absolute"} bottom={"-10px"} ></Box> */}
          <Text color={sender === "user" ? "white" : "black"}>{content}</Text>
        </Box>
      </Box>
    </>
  );
}
