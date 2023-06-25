import React from 'react';
import { Grid } from '@mui/material';

const LoginAndBar = () => {
  return (
    <>
        <Grid
            item
            xs={12}
            sx={{
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "25px",
              letterSpacing: "0em",
              marginTop: "10%",
            }}
          >
            Login
          </Grid>
          <Grid item sx={{ marginTop: "3%" }}>
            <div
              style={{
                width: "28px",
                height: "6px",
                backgroundColor: "#01468E",
              }}
            ></div>
          </Grid>
    </>
  )
}

export default LoginAndBar