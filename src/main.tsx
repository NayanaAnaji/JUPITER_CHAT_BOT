import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@/css/index.css"
import App from "@/routes/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
