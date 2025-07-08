import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Feedback />} path="/feedback" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
