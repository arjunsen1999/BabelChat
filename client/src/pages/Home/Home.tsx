import { Box } from '@chakra-ui/react'
import React from 'react'
import SideBar from '../../components/sidebar/SideBar'

export default function Home() {
  return (
    <>
     <Box position={"relative"} w={"100%"} minH={"100%"} display={"grid"} gridTemplateColumns={"120px 1fr"}>
        <SideBar />
        <Box border={"1px solid green"}>

        </Box>
     </Box>
    </>
  )
}
