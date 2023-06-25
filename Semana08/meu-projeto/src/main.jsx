import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BannerProvider } from "./context/BannerContext";

ReactDOM.render(
  <BannerProvider>
    <App />
  </BannerProvider>,
  document.getElementById("root")
);

