import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export default function UserProfile() {
    return (
        <>
            <Navbar />
            <div id="userPro" className="m-auto flex-col ">
                <h1 className="my-5 text-5xl font-bold  text-center">
                    <span className="loading loading-spinner text-success mx-3 my-1"></span>
                    Under Construction
                </h1>
            </div>

            <Link to="/parks">
                <div
                    className="hero min-h-screen"
                    style={{ backgroundImage: 'url(public/ParkScapeLogo.png)' }}
                ></div>
            </Link>

            <Footer />
        </>
    )
}
