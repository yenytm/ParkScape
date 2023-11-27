import { Link } from "react-router-dom";


export function Navbar() {
  return (
    <>
      <nav
        className="topNav"
        //  style={{ display: "flex", margin: "auto", backgroundColor: "" }}
      >

        <Link to="/">Home</Link>
        <img className='LogoPic' src="src/assets/Logo.png" alt=""/>
        <Link to="/about">About</Link>

      </nav>

      
    </>
  );
}
