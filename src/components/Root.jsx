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
        <div className="btm-nav">
          <button>
            <Link to="/">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </button>
          <button className="active">
            <span> © 2023 ParkScape Co.</span>
          </button>
          <button>
            <Link to="/about">About</Link>
          </button>
        </div>
      </footer>
    </>
  );
}
