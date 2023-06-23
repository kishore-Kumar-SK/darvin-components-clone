import React from "react";
import { Grid } from "@mui/material";
import LoginImg from "./LoginImg";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CustomButton from "../SubmitButton";
import { useState } from "react";
import PoweredByNst from "../../Assets/Powered by new street tech.svg";
import Icon from "../../Assets/Icon.svg";

const LoginComponent = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [forgotId, setForgotid] = useState(false);
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
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Grid
          item
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            top: { xs: "0", md: "20%" },
          }}
        >
          <img src={Icon} alt="federal logo" />
        </Grid>
        <Grid
          item
          alignItems="flex-start"
          width="54%"
          sx={{ marginBottom: "20%" }}
        >
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
          {forgotId && (
            <>
              <Grid item sx={{ marginTop: "3%" }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "17px",
                    fontFamily: "Metropolis",
                    lineHeight: "22px",
                  }}
                >
                  Please Enter Your Registered Mobile Number
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
                  }}
                >
                  Your Employee ID Will Be Shared To Your Registered Mobile
                  Number
                </Typography>
                <Grid item sx={{ marginTop: "6%" }}>
                  <TextField
                    id="standard-basic"
                    label="Mobile Number"
                    variant="standard"
                    type="tel"
                    sx={{
                      color: "#E1E1E1",
                      fontSize: "13px",
                      fontFamily: "Metropolis",
                      fontWeight: "300",
                      lineHeight: "10px",
                      marginRight: "20px",
                    }}
                  />
                  <CustomButton
                    buttonBorderRadius="6px"
                    buttonWidth=""
                    buttonPadding=""
                    buttonColor="#FFFFFF"
                    buttonBackgroundColor="#00488E"
                    buttonHoverColor="#00488E"
                    buttonHoverBackgroundColor="rgba(247,168,0,1)"
                    buttonVariant="contained"
                    buttonName="Send"
                    iconPosition=""
                    icon=""
                    // buttonAction={}
                    borderStyle=""
                  />
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
                      Didn't receive ID?
                    </Typography>
                    <button
                      type="button"
                      onClick={() => setForgotid(true)}
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
                          fontWeight: "300",
                          lineHeight: "17px",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Resend ID
                      </Typography>
                    </button>
                  </div>
                </Grid>
              </Grid>
            </>
          )}
          <Grid item sx={{ marginTop: "12%" }}>
            <TextField
              id="outlined-basic"
              autoComplete="off"
              value={employeeId}
              label="Enter Employee ID"
              variant="outlined"
              sx={{ width: "98%" }}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </Grid>
          <Grid item sx={{ marginTop: "4%" }}>
            <button
              type="button"
              onClick={() => setForgotid(true)}
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
                  fontWeight: "500",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Forgot Employee ID?
              </Typography>
            </button>
          </Grid>
          <Grid item sx={{ marginTop: "11%" }}>
            <CustomButton
              buttonBorderRadius="5px"
              buttonWidth="98%"
              buttonPadding="4%"
              buttonColor="#FFFFFF"
              buttonBackgroundColor="#01468E"
              buttonHoverColor="#01468E"
              buttonHoverBackgroundColor="rgba(247,168,0,1)"
              buttonVariant="contained"
              buttonName="Submit"
              iconPosition=""
              icon=""
              // buttonAction={}
              borderStyle=""
              buttonDisabled={employeeId.length > 0 ? false : true}
            />
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            position: "absolute",
            bottom: { xs: "0", md: forgotId ? "15%" : "20%" },
          }}
        >
          <img src={PoweredByNst} alt="powered by NST" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginComponent;
