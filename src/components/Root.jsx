import {Link, Outlet } from "react-router-dom";
import "./Root.css";
import { About } from "../pages/About";
import { Hero } from "./hero/Hero";

export default function Root() {
  return (
    <>
      <nav style={{ display: "flex", margin: "auto", backgroundColor: "" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
      <Hero />

      <footer
        style={{ display: "flex", backgroundColor: "", marginTop: "3rem" }}
      >
        <span> © 2023 ParkScape Co.</span>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
      </footer>
    </>
  );
}
