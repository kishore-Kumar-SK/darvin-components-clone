import React from "react";
import Audit from "./navigation/Audit";
import Dashboard from "./navigation/Dashboard";
import ProcessLoan from "./navigation/ProcessLoan";
import Reports from "./navigation/Reports";
import Retrigger from "./navigation/Retrigger";
import { useSelector } from "react-redux";

const Components = () => {
  const data = useSelector((state) => state.sidebar.data);
  return (
    <div
      style={{
        position: "absolute",
        left: "120px",
        top: "105px",
        right: "27px",
        bottom: "10px",
      }}
    >
      {data === 0 && <Dashboard />}
      {data === 1 && <ProcessLoan />}
      {data === 2 && <Reports />}
      {data === 3 && <Audit />}
      {data === 4 && <Retrigger />}
    </div>
  );
};

export default Components;
