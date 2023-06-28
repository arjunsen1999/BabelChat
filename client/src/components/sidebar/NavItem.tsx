import { Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
type NavItemProps = {
  link: string;
  icon: React.ReactElement;
};
export default function NavItem({ link, icon }: NavItemProps) {
  return (
    <>
      <NavLink to={link} style={{ width: "100%" }}>
        <Box
          borderTopWidth={"1px"}
          w="100%"
          borderBottomWidth={"1px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          py={"15px"}
          cursor={"pointer"}
          position={"relative"}
        >
          <Box className="sidebar-active"></Box>
          <Box
            zIndex={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {icon}
          </Box>
        </Box>
      </NavLink>
    </>
  );
}
