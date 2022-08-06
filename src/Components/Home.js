import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import HomeBody from "./HomeBody";
function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <HomeBody />
        <footer style={{ textAlign: "center" }}>
          <div style={{ fontWeight: "bolder" }}>&#169; team white hats</div>
          <div>nanda kumar b m</div>
          <div>nanda kishor b r</div>
          <div>kavitha m s</div>
        </footer>
      </Box>
    </div>
  );
}

export default Home;
