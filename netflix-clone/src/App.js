import "./App.css";
import Home from "./Component/Home/Home";
import Nav from "./Component/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/search" element={<></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
