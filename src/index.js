import React from "react";
import ReactDOM from "react-dom/client";
import Table from "./App";
import { jsonData } from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Table data={jsonData} />
  </React.StrictMode>
);