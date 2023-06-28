import { Avatar, Box, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdSend } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { RxExit } from "react-icons/rx";

export default function SideBar() {
  return (
    <>
      <Box w="120px" h={"100vh"} position={"relative"}>
        <Box
          w="120px"
          h={"100vh"}
          position={"fixed"}
          top={"0px"}
          left={"0px"}
          p={"50px 10px 50px 20px"}
        >
          {/* SideBar */}
          <Box
            w="100%"
            h="100%"
            bg={"#34a853"}
            borderRadius={"30px"}
            padding={"20px 10px"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box>
              <VStack spacing={8} w="100%">
                <Link to="/">
                  <Avatar src="https://bit.ly/broken-link" />
                </Link>
                <VStack spacing={4} w="100%">
                  <NavLink to="/home" style={{ width: "100%" }}>
                    <Box
                      borderTopWidth={"1px"}
                      w="100%"
                      borderBottomWidth={"1px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      py={"15px"}
                      cursor={"pointer"}
                      position={"relative"}
                    >
                      <Box className="sidebar-active"></Box>
                      <Box zIndex={10}>
                        <MdSend fontSize={"20px"} color={"white"} />
                      </Box>
                    </Box>
                  </NavLink>

                  <NavLink to="/group" style={{ width: "100%" }}>
                    <Box
                      borderTopWidth={"1px"}
                      w="100%"
                      borderBottomWidth={"1px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      py={"15px"}
                      cursor={"pointer"}
                      position={"relative"}
                    >
                      <Box className="sidebar-active"></Box>
                      <Box zIndex={10}>
                        {" "}
                        <HiUserGroup fontSize={"20px"} color={"white"} />{" "}
                      </Box>
                    </Box>
                  </NavLink>

                  <NavLink to="/setting" style={{ width: "100%" }}>
                    <Box
                      borderTopWidth={"1px"}
                      w="100%"
                      borderBottomWidth={"1px"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      py={"15px"}
                      cursor={"pointer"}
                      position={"relative"}
                    >
                      <Box className="sidebar-active"></Box>
                      <Box zIndex={10}>
                        <AiFillSetting fontSize={"20px"} color={"white"} />
                      </Box>
                    </Box>
                  </NavLink>
                </VStack>
              </VStack>
            </Box>
            <Box>
              <Box
                w="100%"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                py={"8px"}
                cursor={"pointer"}
              >
                <Link to="/login">
                  <RxExit fontSize={"20px"} color={"white"} />
                </Link>
              </Box>
            </Box>
          </Box>
          {/* SideBar */}
        </Box>
      </Box>
    </>
  );
}
