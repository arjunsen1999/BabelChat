import { Box } from "@chakra-ui/react";
import React from "react";
import ChatBar from "./ChatBar";

export default function HomeUserChat() {
  return (
    <>
      <Box
        w="100%"
        h="100%"
        bg={"#424B52"}
        borderRadius={"20px"}
        p={"30px 20px"}
      >
        <Box
          w="100%"
          h="358px"
          overflowY={"scroll"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          className="hide-scroll-bar"
        >
          <ChatBar
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis odio repudiandae."
            sender="user"
          />
          <ChatBar content="Lorem ipsum dolor sit" sender="other" />
        </Box>
      </Box>
    </>
  );
}
