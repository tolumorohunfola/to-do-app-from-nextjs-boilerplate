"use Client";
import React from "react";

export default function Page() {
  return (
    <div>
      <nav>
        <ul className="nav">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
      <h1>Register Page</h1>
      <label htmlFor="email-address">Please enter your email address:</label>
      <input type="email" id="email-address" name="email-address"></input>
    </div>
  );
}
