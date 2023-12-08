import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { statesNames } from '../data'

export default function States() {
    const [selectedState, setSelectedState] = useState('')

    return (
        <div
            className="hero min-h-screen "
            style={{ backgroundImage: 'url(public/yosemite.jpg)' }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        Explore by State
                    </h1>
                    <select
                        className="select select-primary w-full max-w-xs"
                        onChange={(e) => setSelectedState(e.target.value)}
                    >
                        <option disabled selected>
                            Choose State
                        </option>
                        {statesNames.map((state) => {
                            return (
                                <option
                                    label={state.label}
                                    value={state.value}
                                />
                            )
                        })}
                    </select>
                    <button className="btn btn-outline btn-primary">
                        <Link to={'/state/' + selectedState}>
                            {selectedState}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
