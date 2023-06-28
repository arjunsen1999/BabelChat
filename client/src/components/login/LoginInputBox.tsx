import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, {ReactElement} from "react";
type LoginInputBoxProps = {
    icon : ReactElement,
    type : string,
    placeholder : string
}
export default function LoginInputBox({icon, type, placeholder} : LoginInputBoxProps) {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          {/* <AiOutlineMail color="white" fontSize={"28px"} /> */}
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
