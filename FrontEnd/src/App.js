import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Graficos from "./components/Graficos";
import Tabla from "./components/Tabla";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Tabla/>} />
        <Route path="/visual" element={<Graficos/>} />
      </Routes>
    </div>
  );
}
export default App;
