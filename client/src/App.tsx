import React from "react";
import AllRoutes from "./allRoutes/AllRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box bg={"#1d262d"} w="100%" minH="100vh">
        <AllRoutes />
      </Box>
    </>
  );
}

export default App;
