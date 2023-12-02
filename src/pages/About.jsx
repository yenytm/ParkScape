/* eslint-disable react/no-unescaped-entities */
export function About() {
	return (
    <>
      <h1> ABOUT </h1>

      <div className="carousel w-full">
        {/*THIS IS THE FIRST IMAGE IN CAROUSEL */}
        <div
          id="slide1"
          className="carousel-item relative w-full hero min-h-screen"
          style={{
            backgroundImage: "url(canyon.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Let's Explore</h1>
              <p className="mb-5">
                Welcome to ParkScape, where exploration meets personal
                preference! We believe that finding the perfect activity
                shouldn't be a daunting task but rather an exciting journey
                tailored to your interests. Whether you're an adventure seeker,
                a culture enthusiast, a foodie, or someone looking to unwind,
                we've got you covered.
              </p>
            </div>
          </div>

          {/* <img src="canyon.jpg" className="w-full" /> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/*THIS IS THE SECOND SLIDE */}
        <div
          id="slide2"
          className="carousel-item relative w-full hero min-h-screen"
          style={{
            backgroundImage: "url(lake.jpg)",
          }}
        >
          {" "}
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Discover your Adventure</h1>
              <p className="mb-5">
                Our platform is designed to simplify the process of discovering
                activities that resonate with your unique preferences. We
                understand that everyone's idea of a great time differs, so
                we've curated a diverse range of options to suit all tastes,
                ages, and lifestyles. How do we do it? Through innovative
                algorithms and user-friendly interfaces, we analyze your
                preferences to offer personalized recommendations.
              </p>
            </div>
          </div>
          {/*<img src="lake.jpg" className="w-full" />*/}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/*THIS IS THE THIRD SLIDE  */}
        <div
          id="slide3"
          className="carousel-item relative w-full hero min-h-screen"
          style={{
            backgroundImage: "url(mountain.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">The Ultimate Experience</h1>
              <p className="mb-5">
                But it's not just about finding activities. It's about enhancing
                your experiences. That's why we provide detailed insights, tips,
                and insider information about each suggested activity. From
                hidden gems to popular hotspots, we strive to ensure that every
                recommendation is backed by valuable insights to make your
                outing truly exceptional. At ParkScape, we're more than a
                platform; we're your partners in exploration.
              </p>
            </div>
          </div>
          {/*<img src="mountain.jpg" className="w-full" />*/}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* THIS IS THE FOURTH SLIDE */}
        <div
          id="slide4"
          className="carousel-item relative w-full hero min-h-screen"
          style={{
            backgroundImage: "url(river.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Our Mission!</h1>
              <p className="mb-5">
                Our mission is to inspire and empower you to create
                unforgettable moments, to embrace new passions, and to connect
                with like-minded individuals who share your interests. Join us
                on this journey of discovery. Let's find the perfect activities
                together, based on what you love. Happy exploring!
              </p>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="m-a ">
        <h2></h2>
      </div>
    </>
  );
}
