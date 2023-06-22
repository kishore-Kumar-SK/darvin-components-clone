import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Icon from "../Assets/Icon.svg";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, position: "relative", zIndex: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#01468E",
          borderBottomLeftRadius: "36px",
          borderBottomRightRadius: "36px",
          height: "76px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div style={{paddingLeft:"20px"}}>
            <img src={Icon} alt="logo" sx={{ marginRight: "16px" }} />
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
