import React from 'react'

export default function Regions() {
  return (

<div className="hero min-h-screen" style={{backgroundImage: 'url(public/arches.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Explore by Region</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <details className="dropdown">
  <summary className="m-1 btn bg-amber-300 ">Choose Region</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 text-slate-950 rounded-box w-52">
    <li><a>Northeast</a></li>
    <li><a>Midwest</a></li>
  </ul>
</details>

    </div>
  </div>
</div>

    )
}
