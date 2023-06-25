import React, { useState } from "react";
import { TextField } from "@mui/material";

const OtpInput = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value: inputValue } = event.target;
    const sanitizedValue = inputValue.replace(/\W/g, ""); // Remove non-alphanumeric characters
    const formattedValue = sanitizedValue.replace(/(.)/g, "$1"); // Add a non-breaking space after each character
    setValue(formattedValue);
  };
  const textFieldStyles = {
    color: "#000",
    fontSize: "21px",
    fontFamily: "Metropolis",
    fontHeight: "700",
    lineHeight: "22px",
    letterSpacing: "16px",
  };
  return (
    <TextField
      variant="standard"
      value={value}
      sx={{
        width: props.width,
        fontWeight: "800",
      }}
      onChange={handleChange}
      inputProps={{
        inputMode: "text",
        style: textFieldStyles,
        maxLength: 8,
      }}
      error={false}
    />
  );
};

export default OtpInput;
