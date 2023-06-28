import { Box } from '@chakra-ui/react'
import React from 'react'

export default function BlueCircle() {
  return (
    <>
    <Box
        w={"40%"}
        h="600px"
        bg={"#1d3082"}
        position={"absolute"}
        bottom={"-50%"}
        left={"-20%"}
        borderRadius={"50%"}
        opacity={"0.6"}
        zIndex={5}
      ></Box>
    </>
  )
}
