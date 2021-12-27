import React from "react";
import { ThemeProvider } from "@ui5/webcomponents-react";
import "./App.css";
import Worklist from "./layout/Worklist/Worklist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./layout/FullScreen/LogIn";
import Product from "./layout/Object/Product";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/products" element={<Worklist />}></Route>
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
