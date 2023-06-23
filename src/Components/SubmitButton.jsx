import React from "react";

import { Button } from "@mui/material";

export default function CustomButton(props) {
  const buttonStyle = {
    borderRadius: props.buttonBorderRadius,

    width: props.buttonWidth ? props.buttonWidth : "max-content",

    textTransform: "none",

    color: props.buttonColor,

    paddingTop:props.buttonPadding,
    paddingBottom:props.buttonPadding,

    backgroundColor: props.buttonBackgroundColor,

    border: props.borderStyle,

    "&:hover": {
      color: props.buttonHoverColor,

      backgroundColor: props.buttonHoverBackgroundColor,

      border: props.borderStyle,
    },
  };

  return (
    <Button
      variant={props.buttonVariant}
      sx={buttonStyle}
      onClick={props.buttonAction}
      disabled={props.buttonDisabled}
    >
      {props.iconPosition === "left" ? props.icon : <></>}
      {props.buttonName}
      {props.iconPosition === "right" ? props.icon : <></>}
    </Button>
  );
}
