import { Link } from 'react-router-dom'
// import Login from "./Login";

export function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 sticky top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
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
                                    <li>
                                        <Link to="/parks">Parks</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                    <Link
                        to="/"
                        className="hover:scale-110 transition-all duration-300"
                    >
                        <img
                            className="LogoPic h-12 w-20"
                            src="ParkScape.svg"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <div className="dropdown dropdown-hover dropdown-bottom">
                                <div tabIndex={0} role="button">
                                    Explore
                                </div>
                                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                                    <li>
                                        <Link to="/regions">Regions</Link>
                                    </li>
                                    <li>
                                        <Link to="/states">States</Link>
                                    </li>
                                    <li>
                                        <Link to="/parks">Parks</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            {' '}
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                        className="btn"
                        onClick={() =>
                            document.getElementById('my_modal_1').showModal()
                        }
                    >
                        Sign In
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">
                                Sign in to your account
                            </h3>
                            <p className="py-4">
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered input-accent w-full max-w-xs"
                                />
                                <p>Username</p>
                            </p>

                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered input-accent w-full max-w-xs"
                            />
                            <p>Password</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Sign In</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <button type="submit">Sign Out</button>
                </div>
            </div>
        </>
    )
}
