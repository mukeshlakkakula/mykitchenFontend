import "./App.css";

import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/createuser" Component={Signup} />
        <Route exact path="/login" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
