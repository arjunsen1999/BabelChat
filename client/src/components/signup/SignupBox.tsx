import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Button,
  Checkbox,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import SignupInputBox from "./SignupInputBox";
export default function SignupBox() {
  return (
    <>
      <Box w={"400px"}>
        <form action="">
          <Stack spacing={6} mb="30px">
            <SignupInputBox
              type="text"
              placeholder="Enter Name"
              icon={<CiUser color="white" fontSize={"28px"} />}
            />
            <SignupInputBox
              type="email"
              placeholder="Enter Email"
              icon={<AiOutlineMail color="white" fontSize={"28px"} />}
            />
            <SignupInputBox
              type="password"
              placeholder="Enter Password"
              icon={<BiLock color="white" fontSize={"28px"} />}
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
            Sign up
          </Button>
        </form>
        <Box mt={"40px"}>
          <Text textAlign={"center"} color={"white"} fontSize={"14px"}>
            Don’t have account?{" "}
            <Link to="/login">
              <span style={{ color: "#34a853" }}>Log in here</span>
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
