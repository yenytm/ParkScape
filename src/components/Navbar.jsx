import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a>Explore</a>
                <ul className="p-2">
                  <li>
                  <Link to="/regions">Regions</Link>
                  </li>
                  <li>
                  <Link to="/states">States</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="w-24 hover:scale-110 transition-all duration-300">
            <img className="LogoPic" src="Logo.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Explore</summary>
                <ul className="p-2">
                  <li > 
                    <Link to="/regions">Regions</Link>

                  </li>
                  <li>
                  <Link to="/states">States</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li > <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Log In</a>
        </div>
      </div>
    </>
  );
}
