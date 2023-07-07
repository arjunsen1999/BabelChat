import {
  Avatar,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function UserCards() {
  return (
    <>
      <Stack direction="column" maxW="2xl" borderWidth={"1px"} p={"10px"} borderRadius={"10px"}>
        <HStack spacing={3}>
          <Avatar
            size="md"
            src="https://s.gravatar.com/avatar/4f9135f54df98fe894a9f9979d600a87?s=80"
          />
          <Flex direction="column">
            <Text fontWeight="bold" fontSize="md">
              Name
            </Text>
            <Text fontWeight="light" fontSize="xs">
              Online
            </Text>
          </Flex>
          <Button bg={"#1d262d"} color={"white"} h={"30px"}>Add User</Button>
        </HStack>
        <Text
          color={useColorModeValue("gray.700", "gray.400")}
          fontSize="0.87rem"
          textAlign="left"
          lineHeight="1.375"
          fontWeight="300"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem est
          aliquam maiores animi ipsa suscipit pariatur, accusamus maxime facere
          debitis!
        </Text>
      </Stack>
    </>
  );
}
