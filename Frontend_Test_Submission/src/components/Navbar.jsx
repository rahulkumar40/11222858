import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: "#007bff", padding: "10px" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Shorten URL</Link>
        <Link to="/stats" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Statistics</Link>
      </div>
    </nav>
  );
}
