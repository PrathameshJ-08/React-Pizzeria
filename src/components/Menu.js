// Menu.js
import React from "react";
import { Pizza, Appetizer, Dessert } from "./MenuItem";
import data from "../data/data";

function Menu() {
  const { appetizerData, pizzaData, dessertData } = data;
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h1>Our menu</h1>

      {numPizzas > 0 ? (
        <>
          <p>
            Welcome to our kitchen! Indulge in the flavors of Italy with our
            selection of 6 handcrafted, organic pizzas, straight from our stone
            oven to your table.
          </p>

          <div className="menu-items">
            <div className="menu-section">
              <h2>Appetizers</h2>
              <ul className="appetizers">
                {appetizerData.map((appet) => (
                  <Appetizer appetizerObj={appet} key={appet.name} />
                ))}
              </ul>
            </div>

            <div className="menu-section">
              <h2>Pizzas</h2>
              <ul className="pizzas">
                {pizzaData.map((pizza) => (
                  <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
              </ul>
            </div>

            <div className="menu-section">
              <h2>Desserts</h2>
              <ul className="desserts">
                {dessertData.map((desserts) => (
                  <Dessert dessertObj={desserts} key={desserts.name} />
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <img src="/miscImages/pizzaBaking.gif" alt="cat" />
          <p>
            Our chefs are concocting something delightful. Check back soon for
            our mouthwatering menu!
          </p>
        </>
      )}
    </main>
  );
}
export default Menu;
