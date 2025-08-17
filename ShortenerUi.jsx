// ShortenerUI.jsx
import React, { useState } from "react";
import "./ShortenerUI.css";

function ShortenerUI() {
  const [url, setUrl] = useState("");

  const handleShorten = () => {
    // Handle shortening logic here
    alert(`Shortening: ${url}`);
  };

  return (
    <div className="shortener-container">
      <h1 className="title">Shorten your URLs<br />simple and easy</h1>
      <p className="subtitle">Just paste your link ↓</p>

      <div className="input-group">
        <input
          type="text"
          placeholder="Paste link here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleShorten}>Shorten</button>
      </div>
    </div>
  );
}

export default ShortenerUI;
