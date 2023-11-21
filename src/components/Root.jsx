import {Link, Outlet } from "react-router-dom";
import "./Root.css";

export default function Root() {
  return (
    <>
      <nav style={{display: "flex", margin: "auto", backgroundColor: "Blue"}}>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
      </nav>
      <Outlet />
      <footer style={{display: "flex", backgroundColor: "orange", margin: "auto"}}>
      <p>Footer</p>
      </footer>
    </>
  );
}
