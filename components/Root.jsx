import {Link, Outlet } from "react-router-dom";
import "./Root.css";

export default function Root() {
  return (
    <>
      <nav style={{display: "flex", margin: "auto", backgroundColor: "red"}}>
        <Link to="/">Home</Link>
        
      </nav>
      <Outlet />
      <footer style={{display: "flex", backgroundColor: "green", margin: "auto"}}>
      <p>Footer</p>
      </footer>
    </>
  );
}
