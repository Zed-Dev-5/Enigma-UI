import React from "react";
import "./secondary-button.css";

const SecondaryButton = ({ children }) => {
  return <button className="secondary-btn">{children}</button>;
};

export default SecondaryButton;
