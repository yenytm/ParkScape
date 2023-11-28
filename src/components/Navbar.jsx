import { Link } from "react-router-dom";


export function Navbar() {
  return (
    <>
      <nav className="topNav">
        <div style={{ flex: 1 }}>
          <img
            className="LogoPic"
            src="src/assets/ParkScapeTopNav.png"
            alt=""
          />
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
