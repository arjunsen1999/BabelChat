import { Box } from "@chakra-ui/react";
import React from "react";
import style from "../../../styles/Home.module.css";

export default function ChatPage() {
  return (
    <>
      <Box h="100%" position={"relative"}>
        <div className={style.area}>
          <ul className={style.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </Box>
    </>
  );
}
