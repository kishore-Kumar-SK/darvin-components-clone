import Container from "./Components/container";
import Login from "./Components/Login";

function App() {
  const body = {
    height: "100vh",
    width: "100%",
    padding:0,
    margin:0,
  };
  return (
    <div className="App" style={body}>
      <Login />
    </div>
  );
}

export default App;
