import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav style={{ display: "flex", margin: "auto", backgroundColor: "" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
