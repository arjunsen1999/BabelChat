import {
  Avatar,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
type UserDetailsProps = {
  status: boolean;
  name: string;
  image: string;
};
export default function UserDetails({ status, name, image }: UserDetailsProps) {
  return (
    <>
      <Box
        w="100%"
        h="100%"
        bg={"#424B52"}
        borderRadius={"20px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"10px"}
        p={"30px 20px"}
      >
        <Box
          w="100%"
          display={"grid"}
          gridTemplateColumns={"1fr 30px"}
          gap={"5px"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"10px"}
          >
            <Heading as="h2" fontSize={"28px"} color={"white"}>
              {name}
            </Heading>
            <Avatar size="sm" src="https://bit.ly/broken-link" />
          </Box>
          <Box>
            {/* // Menu Start */}
            <Menu>
              <MenuButton aria-label="Options">
                <CiMenuKebab color="white" fontSize={"23px"}/>
              </MenuButton>
              <MenuList>{/* // Write Here */}</MenuList>
            </Menu>
            {/* // Menu End */}
          </Box>
        </Box>
        <Box w="100%">
          <Text color={"#7A95C0"}>{status ? "Online" : "Offline"}</Text>
        </Box>
      </Box>
    </>
  );
}
