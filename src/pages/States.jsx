import React from "react";
import { Link } from "react-router-dom";

export default function States() {
  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: "url(public/yosemite.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Explore by State</h1>
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>
              Choose State
            </option>
            <option>
              <Link>Alabama</Link>
            </option>
            <option>
              <Link to="">Alabama</Link>
            </option>
            <option>
              <Link to="">Alaska</Link>
            </option>
            <option>
              <Link to="">Arizona</Link>
            </option>
            <option>
              <Link to="">California</Link>
            </option>
            <option>
              <Link to="">Colorado</Link>
            </option>
            <option>
              <Link to="">Connecticut</Link>
            </option>
            <option>
              <Link to="">Delaware</Link>
            </option>
            <option>
              <Link to="">Florida</Link>
            </option>
            <option>
              <Link to="">Georgia</Link>
            </option>
            <option>
              <Link to="">Hawaii</Link>
            </option>
            <option>
              <Link to="">Idaho</Link>
            </option>
            <option>
              <Link to="">Illinois</Link>
            </option>

            <option>
              <Link to="">Indiana</Link>
            </option>
            <option>
              <Link to="">Iowa</Link>
            </option>
            <option>
              <Link to="">Kansas</Link>
            </option>
            <option>
              <Link to="">Kentucky</Link>
            </option>
            <option>
              <Link to="">Louisiana</Link>
            </option>
            <option>
              <Link to="">Maine</Link>
            </option>
            <option>
              <Link to="">Maryland</Link>
            </option>
            <option>
              <Link to="">Massachusetts</Link>
            </option>
            <option>
              <Link to="">Michigan</Link>
            </option>
            <option>
              <Link to="">Minnesota</Link>
            </option>
            <option>
              <Link to="">Mississippi</Link>
            </option>
            <option>
              <Link to="">Missouri</Link>
            </option>
            <option>
              <Link to="">Montana</Link>
            </option>
            <option>
              <Link to="">Nebraska</Link>
            </option>
            <option>
              <Link to="">Nevada</Link>
            </option>
            <option>
              <Link to="">New Hampshire</Link>
            </option>
            <option>
              <Link to="">New Jersey</Link>
            </option>
            <option>
              <Link to="">New Mexico</Link>
            </option>
            <option>
              <Link to="">New York</Link>
            </option>
            <option>
              <Link to="">North Carolina</Link>
            </option>
            <option>
              <Link to="">North Dakota</Link>
            </option>
            <option>
              <Link to="">Ohio</Link>
            </option>
            <option>
              <Link to="">Oklahoma</Link>
            </option>
            <option>
              <Link to="">Oregon</Link>
            </option>
            <option>
              <Link to="">Pennsylvania</Link>
            </option>
            <option>
              <Link to="">Rhode Island</Link>
            </option>
            <option>
              <Link to="">South Carolina</Link>
            </option>
            <option>
              <Link to="">South Dakota</Link>
            </option>
            <option>
              <Link to="">Tennessee</Link>
            </option>
            <option>
              <Link to="">Texas</Link>
            </option>
            <option>
              <Link to="">Utah</Link>
            </option>
            <option>
              <Link to="">Vermont</Link>
            </option>
            <option>
              <Link to="">Virginia</Link>
            </option>
            <option>
              <Link to="">Washington</Link>
            </option>
            <option>
              <Link to="">West Virginia</Link>
            </option>
            <option>
              <Link to="">Wisconsin</Link>
            </option>
            <option>
              <Link to="">Wyoming</Link>
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
