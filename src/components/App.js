// components/App.js
import React from "react";
import Header from "./Header";
import Menu from "./Menu"; // Corrected import path
import Footer from "./Footer"; // This now includes the Status component
import DarkModeToggle from "./DarkModeToggle";
import { pizzaData, appetizerData, dessertData } from "../data/data";
import "./styles/style.css";
import "./styles/header.css";
import "./styles/menu.css";
import "./styles/responsive.css";
import "./styles/darkModeToggle.css";

function App() {
  return (
    <div className="container">
      <Header />
      <DarkModeToggle />
      <Menu
        pizzaData={pizzaData}
        appetizerData={appetizerData}
        dessertData={dessertData}
      />
      <Footer />
    </div>
  );
}

export default App;
