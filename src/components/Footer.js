// components/Footer.js
import React from "react";

function Status({ isOpen, openHour, closeHour }) {
  const status = isOpen ? (
    <p>
      We're currently open and taking orders until {closeHour}:00. Place your
      order now!
    </p>
  ) : (
    <p>We're currently closed. We'll reopen at {openHour}:00. See you soon!</p>
  );

  return <footer className="footer">{status}</footer>;
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className="order">
      <Status isOpen={isOpen} openHour={openHour} closeHour={closeHour} />
      <button className="btn">Order</button>
    </div>
  );
}

export default Footer;
