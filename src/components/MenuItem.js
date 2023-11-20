//Menuitem.js
import React from "react";

function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : "₹" + pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Appetizer({ appetizerObj }) {
  return (
    <div className={`appetizer ${appetizerObj.soldOut ? "sold-out" : ""}`}>
      <img src={appetizerObj.photoName} alt={appetizerObj.name} />
      <div>
        <h3>{appetizerObj.name}</h3>
        <p>{appetizerObj.ingredients}</p>
        <span>
          {appetizerObj.soldOut ? "SOLD OUT" : "₹" + appetizerObj.price}
        </span>
      </div>
    </div>
  );
}

function Dessert({ dessertObj }) {
  return (
    <div className={`dessert ${dessertObj.soldOut ? "sold-out" : ""}`}>
      <img src={dessertObj.photoName} alt={dessertObj.name} />
      <div>
        <h3>{dessertObj.name}</h3>
        <p>{dessertObj.ingredients}</p>
        <span>{dessertObj.soldOut ? "SOLD OUT" : "₹" + dessertObj.price}</span>
      </div>
    </div>
  );
}

export { Pizza, Appetizer, Dessert };
