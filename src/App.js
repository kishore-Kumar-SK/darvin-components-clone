import Container from "./Components/container";
import Login from "./Components/Login";
import OtpInput from "./Utility/OtpInput";

function App() {
  const body = {
    height: "100vh",
    width: "100%",
    padding: 0,
    margin: 0,
  };
  return (
    <div className="App" style={body}>
      <Login />
      {/* <Container /> */}
    </div>
  );
}

export default App;
