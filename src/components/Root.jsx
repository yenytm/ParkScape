import { Link, Outlet } from 'react-router-dom'
import './Root.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export default function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
