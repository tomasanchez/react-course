import React from "react";
import { ThemeProvider } from "@ui5/webcomponents-react";
import Product from "./layout/Product/Product";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Product></Product>
    </ThemeProvider>
  );
}

export default App;
