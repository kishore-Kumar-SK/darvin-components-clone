import React from "react";
import { Grid } from "@mui/material";
import Loginimg from "../../Assets/Login.svg";

const LoginImg = () => {
  return (
    <Grid
      item
      xs={12}
      md={7}
      sx={{ height: "100%", display: { xs: "none", md: "block" } }}
    >
      <img
        src={Loginimg}
        alt="login"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Grid>
  );
};

export default LoginImg;
