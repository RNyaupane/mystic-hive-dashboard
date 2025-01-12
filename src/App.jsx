import { useEffect } from "react";
import "./App.css";
import feather from "feather-icons";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import AppContainer from "./AppContainer";

function App() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <BrowserRouter>
        <AppRouter />
        <AppContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
