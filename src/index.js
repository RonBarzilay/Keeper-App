import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";

// createRoot(<App />, document.getElementById("root"));
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
