import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import PageHeading from "../heading/PageHeading";
import SearchBox from "./SearchBox";
import Cards from "../UserCards/Cards";

export default function RecentContainer() {
  return (
    <>
      <Box w="100%" h="100%">
        <Box mb="20px">
          <PageHeading heading="Recent" />
        </Box>
        <Box mb={"10px"}>
          <SearchBox />
        </Box>
        <Box mb={"10px"} border={"1px solid white"}></Box>
        <Stack
          spacing={2}
          bg={"#353E45"}
          h="420px"
          borderRadius={"20px"}
          p={"20px 10px"}
          gap={"10px"}
        >
          <Cards />
          <Cards />
        </Stack>
      </Box>
    </>
  );
}
