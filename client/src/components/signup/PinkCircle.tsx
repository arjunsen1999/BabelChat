import { Box } from "@chakra-ui/react";
import React from "react";

export default function PinkCircle() {
  return (
    <>
      <Box
        w={"300px"}
        h="300px"
        bg={"#7b1386"}
        position={"absolute"}
        bottom={"-20%"}
        left={"140px"}
        borderRadius={"50%"}
        zIndex={5}
      ></Box>
    </>
  );
}
