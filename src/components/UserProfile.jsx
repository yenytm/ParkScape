import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Link, Outlet } from 'react-router-dom'

export default function UserProfile() {
  return (

<>

<Navbar />
<main className='pb-10 '>
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Under Construction!</h1>
      <button className="btn border-orange-700 border-4 hover:bg-orange-400 hover:text-white">
      <Link to="/parks">In the meantime, click here to explore some parks!</Link>
        </button>
    </div>
  </div>
</div>
</main>

<Footer/>
</>

    )
}
