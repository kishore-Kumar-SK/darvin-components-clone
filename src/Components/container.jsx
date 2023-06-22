import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Components from "./Components";

const App = () => {
  return (
    <div style={{ backgroundColor: "#D3D3D3", height: "100vh" }}>
      <Header />
      <Sidebar />
      <Components />
    </div>
  );
};

export default App;
