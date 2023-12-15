import { useEffect, useRef } from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

const VideoPlayer = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        // Play video on auto when user page loads
        videoRef.current.play()
    }, [])

    return (
        <video ref={videoRef} className="m-0 flex" controls>
            <source src="userVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export function Hero() {
    return (
        <>
            <main className="pb-10 my-4">
                <div className="hero">
                    {/* Use the VideoPlayer component */}
                    <VideoPlayer />
                    <div className="hero-overlay bg-opacity-5"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h3 className="mb-1 text-3xl font-bold">
                                {' '}
                                Welcome to 
                            </h3>
                            <h1>
                                {' '}
                                <span className="mb-5 text-5xl font-bold" >ParkScape </span>
                            </h1>
                            <button className="m-5 btn border-green-400 border-4 hover:bg-green-600 hover:text-white">
                                <Link to="/parks">Start Exploring! </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}
