import { Outlet } from "react-router-dom";
import "./components/Root.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function PrivateRoot() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
