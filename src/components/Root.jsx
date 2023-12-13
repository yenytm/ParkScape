import { Outlet } from 'react-router-dom'
import './Root.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export default function Root() {
    return (
        <>
            <Navbar />
            <main className='pb-10'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
