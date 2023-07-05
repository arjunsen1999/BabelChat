import { Heading } from "@chakra-ui/react";
import React from "react";
type HeadingPropsType = {
  heading: string;
};
export default function PageHeading({ heading }: HeadingPropsType) {
  return (
    <>
      <Heading as={"h1"} color={"white"}>{heading}</Heading>
    </>
  );
}
