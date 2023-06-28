import { Box } from "@chakra-ui/react";
import React from "react";
import LoginBox from "../login/LoginBox";
import SignupBox from "../signup/SignupBox";
type AuthBoxProps = {
  condition: boolean;
};
export default function AuthBox({ condition }: AuthBoxProps) {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        {condition ? <SignupBox /> : <LoginBox />}
      </Box>
    </>
  );
}
