import { Box } from "@chakra-ui/react";
import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import RecentContainer from "../../components/home/RecentContainer";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Box
        position={"relative"}
        w={"100%"}
        minH={"100%"}
        display={"grid"}
        gridTemplateColumns={"120px 1fr"}
      >
        <SideBar />
        <Box
          border={"1px solid green"}
          display={"grid"}
          gridTemplateColumns={"300px 1fr"}
        >
          <Box h='100vh' p={"40px 20px"} borderRightWidth={"1px"}>
            <RecentContainer />
          </Box>
          <Box h='100vh' p={"40px 20px 10px"}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}
