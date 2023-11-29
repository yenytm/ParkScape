import {Link, Outlet } from "react-router-dom";
import "./Root.css";
import { Navbar } from "./Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />

      <footer
        style={{ display: "flex", backgroundColor: "", marginTop: "3rem" }}
      >
        <Link to="/">Home</Link>
        <span> © 2023 ParkScape Co.</span>
        <Link to="/about">About</Link>
        <Link to="/explore">Explore</Link>
      </footer>
    </>
  );
}
