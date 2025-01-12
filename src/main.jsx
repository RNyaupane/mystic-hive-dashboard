import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { persistor, store } from "./redux/store.js";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    ,
  </Provider>
);
