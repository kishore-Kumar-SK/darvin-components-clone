import React from "react";
import Audit from "../Assets/Audit.jsx";
import Dashboard from "../Assets/Dashboard";
import ProcessLoan from "../Assets/ProcessLoan.jsx";
import Reports from "../Assets/Reports.jsx";
import Retrigger from "../Assets/Retrigger.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import { selecValue } from "../features/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.sidebar.data);
  return (
    <div
      style={{
        maxWidth: "95px",
        minWidth: "70px",
        height: "100vh",
        backgroundColor: "#fff",
        position: "absolute",
        top: "0",
        paddingTop: "80px",
      }}
    >
      <CssBaseline>
        <div>
          <List sx={{ marginTop: "35px" }}>
            {[
              { text: "Dashboard", icon: <Dashboard /> },
              { text: "ProcessLoan", icon: <ProcessLoan /> },
              { text: "Reports", icon: <Reports /> },
              { text: "Audit", icon: <Audit /> },
              { text: "Retrigger", icon: <Retrigger /> },
            ].map((item, index) => (
              <ListItem key={item.text}>
                <ListItemButton
                  disableRipple
                  variant="contained"
                  sx={{
                    marginBottom: "25px",
                    backgroundColor: data === index ? "#DFEFFF" : "",
                    borderRadius: "5px",
                    " &:focus": {
                      backgroundColor: "#DFEFFF",
                    },
                  }}
                  onClick={(event) => {
                    event.persist();
                    dispatch(selecValue(index));
                  }}SignUp
SignUp
SignUpSignUp
SignUp
SignUp
                >
                  {item.icon}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </CssBaseline>
    </div>
  );
};

export default Sidebar;
