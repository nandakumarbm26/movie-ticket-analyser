import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
function HomeBody() {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          padding: "2%",
          fontFamily: "cursive",
          fontSize: "40px",
          color: "purple",
        }}
      >
        Movie Ticket Analyzer
      </Box>
      <Stack spacing={3} sx={{ alignItems: "center", padding: "10%" }}>
        <Button variant="contained" sx={{ width: "80vw" }}>
          <Link to="/learning">Learning</Link>
        </Button>
        <Button variant="contained" sx={{ width: "80vw" }}>
          <Link to="/detection">Detection</Link>
        </Button>
      </Stack>
    </Box>
  );
}

export default HomeBody;
