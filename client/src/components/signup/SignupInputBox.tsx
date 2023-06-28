import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { ReactElement } from "react";

type SignupInputBoxProps = {
  icon: ReactElement;
  type: string;
  placeholder: string;
};

export default function SignupInputBox({
  icon,
  type,
  placeholder,
}: SignupInputBoxProps) {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          {icon}
        </InputLeftElement>
        <Input
          type={type}
          borderRadius={"0px"}
          placeholder={placeholder}
          border={"none"}
          borderBottom={"1px solid white"}
          color={"white"}
          fontSize={"19px"}
          focusBorderColor={"none"}
        />
      </InputGroup>
    </>
  );
}
