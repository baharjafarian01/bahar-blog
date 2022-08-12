import React from "react";

import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="#757575"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        پروژه GraphQL | بهار جعفریان 
      </Typography>
    </footer>
  );
}

export default Footer;
