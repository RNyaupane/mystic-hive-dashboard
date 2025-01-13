import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import AppContainer from "./AppContainer";

function App() {
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
