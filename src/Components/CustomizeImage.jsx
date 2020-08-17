import React, { useState } from "react";

function CustomizeImage() {
  const [url, setUrl] = useState("");
  const [range, setRange] = useState(0);

  const handleUrl = (event) => {
    const value = event.target.value;
    setUrl(value);
  };

  const handleRange = (event) => {
    const value = event.target.value;
    setRange(value);
  };

  return (
    <div>
      <h1>Customize Image</h1>
      <form>
        <input placeholder="url" type="text" name="url" value={url} onChange={handleUrl} />
        <input placeholder="range" type="range" name="range" value={range} onChange={handleRange} />
      </form>
      <img src={url} alt="description" style={{ width: range, height: range }} />
      <p>{range}</p>
    </div>
  );
}

export default CustomizeImage;
