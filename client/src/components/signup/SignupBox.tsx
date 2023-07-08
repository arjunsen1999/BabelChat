import { Box } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Button, Checkbox, Stack, Text } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import SignupInputBox from "./SignupInputBox";
import { signup_initialState_types } from "../../Types/Signup.Types";
import {
  Event_value_name_types,
  StateReduxTypes,
} from "../../Types/State.Types";
import { useDispatch, useSelector } from "react-redux";
import { signup_action } from "../../redux/auth/auth.action";
import { Dispatch } from "redux";
import { auth_reset } from "../../redux/auth/auth.actionType";
import { InitialStateType } from "../../Types/Auth.Types";
export default function SignupBox() {
  const dispatch: Dispatch<any> = useDispatch();
  const { isSuccess, isError } = useSelector(
    (state: StateReduxTypes): InitialStateType => state.auth
  );
  const navigate: NavigateFunction = useNavigate();
  // input data initail state start
  const initailState: signup_initialState_types = {
    email: "",
    password: "",
    name: "",
  };
  const [Input, setInput] = useState<signup_initialState_types>(initailState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: Event_value_name_types = event.target;
    setInput((prev: signup_initialState_types): signup_initialState_types => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // input data initail state end
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(signup_action(Input));
  };
  useEffect((): void => {
    if (isSuccess) {
      navigate("/login");
    }
    dispatch({ type: auth_reset });
  }, [isSuccess]);
  return (
    <>
      <Box w={"400px"}>
        <form action="" onSubmit={handleSubmit}>
          <Stack spacing={6} mb="30px">
            <SignupInputBox
              type="text"
              name="name"
              placeholder="Enter Name"
              handleChange={handleChange}
              value={Input.name}
              icon={<CiUser color="white" fontSize={"28px"} />}
            />
            <SignupInputBox
              type="email"
              name="email"
              placeholder="Enter Email"
              handleChange={handleChange}
              value={Input.email}
              icon={<AiOutlineMail color="white" fontSize={"28px"} />}
            />
            <SignupInputBox
              type="password"
              name="password"
              placeholder="Enter Password"
              handleChange={handleChange}
              value={Input.password}
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
