import React from "react";

const WelcomeMessage = ({ name }) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Thank you for visiting our website.</p>
    </div>
  );
};

export default WelcomeMessage;
