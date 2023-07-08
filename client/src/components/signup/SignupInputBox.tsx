import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { SignupInputBoxProps } from "../../Types/Signup.Types";

export default function SignupInputBox({
  icon,
  type,
  placeholder,
  value,
  handleChange,
  name,
}: SignupInputBoxProps) {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
        <Input
          type={type}
          name={name}
          borderRadius={"0px"}
          placeholder={placeholder}
          border={"none"}
          value={value}
          onChange={handleChange}
          borderBottom={"1px solid white"}
          color={"white"}
          fontSize={"19px"}
          focusBorderColor={"none"}
        />
      </InputGroup>
    </>
  );
}
