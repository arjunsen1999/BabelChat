import { Avatar, Box, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdSend } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { RxExit } from "react-icons/rx";
import NavItem from "./NavItem";

const NavItemIcon = [
  {icon : <MdSend color="white" fontSize={"20px"}/>, link : "/home"},
  {icon : <HiUserGroup color="white" fontSize={"20px"}/>, link : "/group"},
  {icon : <AiFillSetting color="white" fontSize={"20px"}/>, link : "/setting"},
]

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
                  {
                    NavItemIcon?.map((ele, idx) =>{
                      return <NavItem key={idx} {...ele} />
                    })
                  }
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
