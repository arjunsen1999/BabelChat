import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Image,
  useColorModeValue,
  Container,
  Tag,
  StackProps,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Cards() {
  return (
    <>
      <NavLink to={"/home"}>
        <Box
          px={4}
          py={2}
          borderWidth="1px"
          borderColor={"black"}
          _hover={{ shadow: "lg" }}
          position="relative"
          rounded="md"
          className="sidebar-active-home"
        >
          <Flex justifyContent="space-between">
            <Flex>
              <Image
                rounded="full"
                w={8}
                h={8}
                objectFit="cover"
                fallbackSrc="https://via.placeholder.com/150"
                src={"logo"}
              />
              <Stack spacing={1} pl={3} align="left">
                <Heading fontSize="16px" color={"white"}>
                  Heading
                </Heading>
                <Text fontSize="12px" color="gray.400">
                  Web Development
                </Text>
              </Stack>
            </Flex>
            <Stack display={["none", "none", "flex", "flex"]}>
              <Text fontSize={14} color="gray.400">
                Time
              </Text>
            </Stack>
          </Flex>
        </Box>
      </NavLink>
    </>
  );
}
