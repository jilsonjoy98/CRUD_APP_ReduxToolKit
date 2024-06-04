import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Update from './Update';
import Create from './Create'
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/edit/:id" element={<Update/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
