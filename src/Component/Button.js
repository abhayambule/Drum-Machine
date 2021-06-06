import React from "react";

const Button = ({ name, sound }) => {
  const start = () => {
    const audio = new Audio(sound).play();
  };

  document.addEventListener("keydown", (e) => {
    const id = e.key.toUpperCase();
    if (id === name) {
      start();
    }
  });

  return (
    <div className="button" onClick={start}>
      {name}
    </div>
  );
};

export default Button;
