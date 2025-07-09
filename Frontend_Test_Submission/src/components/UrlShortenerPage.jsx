import React, { useState } from 'react';
import { createShortUrl } from '../service/UrlService';
import { logInfo, logError } from '../service/LoggingService';

export default function UrlShortenerPage() {
  const [inputs, setInputs] = useState([{ url: '', validity: 30, custom: '' }]);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const addInput = () => {
    if (inputs.length < 5) {
      setInputs([...inputs, { url: '', validity: 30, custom: '' }]); 
    }
  };

  const handleChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    try {
      const newResults = inputs.map(input => {
        if (!input.url.match(/^https?:\/\/\S+$/)) {
          throw new Error("Invalid URL format");
        }
        const validityMinutes = parseInt(input.validity, 10);
        if (isNaN(validityMinutes) || validityMinutes <= 0) {
          throw new Error("Validity must be a positive number");
        }

        const newUrl = createShortUrl(input.url, validityMinutes, input.custom || null);
        logInfo(`Shortened URL created: ${newUrl.shortcode}`);
        return newUrl;
      });

      setResults(newResults);
      setError('');
    } catch (err) {
      logError(err.message);
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Shorten URLs (max 5)</h2>
      {inputs.map((input, index) => (
        <div className="card" key={index}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Long URL"
              value={input.url}
              onChange={(e) => handleChange(index, 'url', e.target.value)}
            />
            <input
              type="number"
              placeholder="Validity (min)"
              value={input.validity}
              onChange={(e) => handleChange(index, 'validity', e.target.value)}
            />
            <input
              type="text"
              placeholder="Custom Code (optional)"
              value={input.custom}
              onChange={(e) => handleChange(index, 'custom', e.target.value)}
            />
          </div>
        </div>
      ))}
      <button onClick={addInput} disabled={inputs.length >= 5}>Add Another</button>
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>Shorten</button>
      {error && <div className="error">{error}</div>}

      <div>
        {results.map((r, i) => (
          <div className="card" key={i}>
            <p><strong>Short URL:</strong> {window.location.origin + "/" + r.shortcode}</p>
            <p><strong>Expires At:</strong> {new Date(r.expiresAt).toLocaleString()}</p>
            <p><strong>Original URL:</strong> {r.originalUrl}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
