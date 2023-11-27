import {Link, Outlet } from "react-router-dom";
import "./Root.css";
import { About } from "../pages/About";
import { Hero } from "./hero/Hero";
import { Navbar } from "./Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Hero />

      <footer
        style={{ display: "flex", backgroundColor: "", marginTop: "3rem" }}
      >
        <Link to="/">Home</Link>
        <span> © 2023 ParkScape Co.</span>
        <Link to="/about">About</Link>
      </footer>
    </>
  );
}
