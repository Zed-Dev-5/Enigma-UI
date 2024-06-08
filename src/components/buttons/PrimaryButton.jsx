import React from "react";
import "./primary-button.css";

const PrimaryButton = ({ children }) => {
  return <button className="primary-btn">{children}</button>;
};

export default PrimaryButton;
