import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./index.css"; 
import About from "./pages/about";
import Users from "./pages/users";
import Home from "./pages/home";
import Main from "./pages/main";




function App() {
  return (
    <Router>
      <nav>
        <Link to="/main">Главная страница</Link>
        <Link to="/about">Todo List</Link>
        <Link to="/users">Слайдер</Link>
        <Link to="/home">Форма регистрации</Link>
      </nav>
    

      <Routes>
        
      <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;