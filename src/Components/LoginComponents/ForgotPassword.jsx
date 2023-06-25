import React from "react";
import { Grid } from "@mui/material";
import LoginImg from "./LoginImg";
import LoginAndBar from "./LoginAndBar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import OtpInput from "../../Utility/OtpInput";

const ForgotPassword = () => {
  const [otp, setOtp] = useState("");
  return (
    <Grid container style={{ height: "100vh" }}>
      <LoginImg />
      <Grid
        container
        item
        xs={12}
        md={5}
        direction={"column"}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%", width: "100%" }}
      >
        <Grid
          item
          alignItems="flex-start"
          width="54%"
          sx={{ marginBottom: "20%" }}
        >
          <LoginAndBar />
          <Grid item sx={{ marginTop: "3%" }}>
            <Typography
              sx={{
                color: "#000",
                fontSize: "17px",
                fontFamily: "Metropolis",
                lineHeight: "22px",
              }}
            >
              We have sent you an <span style={{ fontWeight: "600" }}>OTP</span>
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: "3%" }}>
            <Typography
              sx={{
                color: "#868686",
                fontSize: "14px",
                fontFamily: "Metropolis",
                fontWeight: "300",
                lineHeight: "17px",
                width: "80%",
              }}
            >
              OTP has been send to your registered mobile number ending with
              ******7654
            </Typography>
          </Grid>
          <Grid item sx={{ marginTop: "3%" }}>
            <OtpInput width="45%" />
          </Grid>
          <Grid item sx={{ marginTop: "3%" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "12px",
                  fontFamily: "Metropolis",
                  fontWeight: "500",
                  lineHeight: "17px",
                }}
              >
                Didn't receive OTP?
              </Typography>
              <button
                type="button"
                // onClick={}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="body1"
                  component="span"
                  sx={{
                    color: "#D21113",
                    fontSize: "12px",
                    fontFamily: "Metropolis",
                    fontWeight: "600",
                    lineHeight: "17px",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Resend OTP
                </Typography>
              </button>
            </div>
          </Grid>
          <Grid item sx={{ marginTop: "3%" }}>
            <Typography
              sx={{
                color: "#000",
                fontSize: "17px",
                fontFamily: "Metropolis",
                lineHeight: "22px",
                fontWeight: "700",
              }}
            >
              Setup New Passcode
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
