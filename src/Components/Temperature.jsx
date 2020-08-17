import React, { useState } from "react";

function Temperature() {
  const [temp, setTemp] = useState(0);
  //   const [isLoading, setIsLoading] = useState(true);

  const handleTemp = (event) => {
    const value = event.target.value;
    setTemp(value);
  };

  return (
    <div>
      <h1>Temperature</h1>
      <input type="number" placeholder="Temperature in °C" onChange={handleTemp} />
      <div style={{ color: "blue" }}>{temp < 10 && <h2>It's cold</h2>}</div>
      <div style={{ color: "black" }}>{temp >= 10 && temp < 30 && <h2>It's nice</h2>}</div>
      <div style={{ color: "red" }}>{temp > 30 && <h2>It's warm</h2>}</div>
    </div>
  );
}

export default Temperature;
