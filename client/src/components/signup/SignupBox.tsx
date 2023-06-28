import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function SignupBox() {
  return (
    <>
      <Box w={"400px"}>
        <form action="">
          <Stack spacing={6} mb="30px">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CiUser color="white" fontSize={"28px"} />
              </InputLeftElement>
              <Input
                type="text"
                borderRadius={"0px"}
                placeholder="Enter Name"
                border={"none"}
                borderBottom={"1px solid white"}
                color={"white"}
                fontSize={"19px"}
                focusBorderColor={"none"}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <AiOutlineMail color="white" fontSize={"28px"} />
              </InputLeftElement>
              <Input
                type="email"
                borderRadius={"0px"}
                placeholder="Enter Email"
                border={"none"}
                borderBottom={"1px solid white"}
                color={"white"}
                fontSize={"19px"}
                focusBorderColor={"none"}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BiLock color="white" fontSize={"28px"} />
              </InputLeftElement>
              <Input
                type="password"
                borderRadius={"0px"}
                placeholder="Enter Password"
                border={"none"}
                borderBottom={"1px solid white"}
                color={"white"}
                fontSize={"19px"}
                focusBorderColor={"none"}
              />
            </InputGroup>

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
            Don’t have account? <Link to="/login"><span style={{color : "#34a853"}}>Log in here</span></Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}