import { Box } from "@chakra-ui/react";
import React from "react";
import PinkCircle from "../../components/authpage/PinkCircle";
import BlueCircle from "../../components/authpage/BlueCircle";
import Navbar from "../../components/authpage/Navbar";
import AuthBox from "../../components/authpage/AuthBox";
import IButton from "../../components/authpage/IButton";

export default function LoginPage() {
  return (
    <>
      <Box
        w="100%"
        minH={"100vh"}
        position={"relative"}
        p={"50px"}
      >
        <PinkCircle />
        <BlueCircle />
        <Navbar login={true} signup={false} />
        <AuthBox condition={false} />
        <IButton />
      </Box>
    </>
  );
}
