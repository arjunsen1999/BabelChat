import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../styles/AuthNavbar.module.css";

type NavbarProps = {
  login: boolean;
  signup: boolean;
};
export default function Navbar({ login, signup }: NavbarProps) {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Text fontSize={"30px"} cursor={"pointer"} color={"white"}>
            LOGO
          </Text>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          gap={"40px"}
        >
          <NavLink to="/login">
            <Text
              fontSize={"30px"}
              cursor={"pointer"}
              color={login ? "#34A853" : "#9E9E9E"}
              position={"relative"}
              className={login? style.active : ""}
            >
              Log in
            </Text>
          </NavLink>
          <NavLink to="/signup">
            <Text
              fontSize={"30px"}
              cursor={"pointer"}
              color={signup ? "#34A853" : "#9E9E9E"}
              position={"relative"}
              className={signup? style.active : ""}
            >
              Sign up
            </Text>
          </NavLink>
        </Box>
      </Box>
    </>
  );
}
