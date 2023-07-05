import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBox() {
  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BiSearch color="black" fontSize={"20px"} />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search..."
          color={"black"}
          bg={"white"}
          focusBorderColor={"#34a853"}
        />
      </InputGroup>
    </>
  );
}
