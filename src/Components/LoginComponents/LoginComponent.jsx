import React from "react";
import { Grid } from "@mui/material";
import LoginImg from "./LoginImg";

const LoginComponent = () => {
  return (
    <Grid container style={{ height: "100vh" }}>
      <LoginImg />
      <Grid
        container
        item
        xs={12}
        md={5}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid
          item
          sx={{
            fontSize: "25px",
            fontWeight: 500,
            lineHeight: "25px",
            letterSpacing: "0em",
          }}
        >
          Login
        </Grid>
        <Grid item>
          <div
            style={{
              width: "28px",
              height: "6px",
              backgroundColor: "black",
              marginTop: "10px",
            }}
          ></div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginComponent;
