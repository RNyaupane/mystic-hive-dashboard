import { useEffect } from "react";
import "./App.css";
import feather from "feather-icons";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";

function App() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
