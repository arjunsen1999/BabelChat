import { Box, Input } from "@chakra-ui/react";
import React from "react";
import UserDetails from "../../../components/chat/UserDetails";
import HomeUserChat from "../../../components/chat/UserChat";
import { MdSend } from "react-icons/md";
import { BsEmojiSmile, BsFillCameraVideoFill } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";

export default function UserChat() {
  return (
    <>
      <Box
        h="100%"
        display={"grid"}
        gridTemplateRows={"100px 1fr 60px"}
        gap={"20px"}
      >
        <UserDetails />
        <HomeUserChat />
        <Box
          p={"10px 50px"}
          display={"grid"}
          gridTemplateColumns={"50px 50px 50px 1fr 50px"}
          gap={"10px"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <BsFillCameraVideoFill fontSize={"28px"} color="#4B75A7" />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <BsEmojiSmile fontSize={"28px"} color="#4B75A7" />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <ImAttachment fontSize={"28px"} color="#4B75A7" />
          </Box>
          <Box>
            <Input
              type="text"
              placeholder="Search..."
              w="100%"
              bg={"#424B52"}
              border={"none"}
              color={"white"}
              focusBorderColor={"#34a853"}
            />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <MdSend fontSize={"28px"} color="#4B75A7" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
