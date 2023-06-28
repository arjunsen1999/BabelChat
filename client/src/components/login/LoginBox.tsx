import {
  Box,
  Button,
  Checkbox,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { Link } from "react-router-dom";
import LoginInputBox from "./LoginInputBox";

export default function LoginBox() {
  return (
    <>
      <Box w={"400px"}>
        <form action="">
          <Stack spacing={6} mb="30px">
            <LoginInputBox
              icon={<AiOutlineMail color="white" fontSize={"28px"} />}
              type="email"
              placeholder="Enter Email"
            />
            <LoginInputBox
              icon={<BiLock color="white" fontSize={"28px"} />}
              type="password"
              placeholder="Enter Password"
            />
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox colorScheme="green">
                <Text color={"white"}>Remember me</Text>
              </Checkbox>
              <Link to={"/forgot-password"}>
                <Text color={"white"}>Forgot password?</Text>
              </Link>
            </Stack>
          </Stack>

          <Button
            type="submit"
            w="100%"
            h={"48px"}
            bg={"#34a853"}
            color={"white"}
            fontSize={"28px"}
            borderRadius={"40px"}
            _hover={{
              bg: "#34a853",
            }}
          >
            Log in
          </Button>
        </form>
        <Box mt={"40px"}>
          <Text textAlign={"center"} color={"white"} fontSize={"14px"}>
            Don’t have account?{" "}
            <Link to="/signup">
              <span style={{ color: "#34a853" }}>Sign up here</span>
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
