import { useEffect } from 'react'

/* eslint-disable react/prop-types */
export default function ParkFilter({
    searchTerm,
    setSearchTerm,

    filterList,
}) {
    useEffect(() => {
        console.log(filterList)
    }, [filterList])
    return (
        <>
            <div className="join my-4 mx-auto">
                <div>
                    <div>
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input input-bordered join-item"
                            placeholder="Search"
                        />
                    </div>
                </div>
                {filterList.map((filter) => {
                    return (
                        <select
                            className="select select-bordered join-item"
                            key={filter.label}
                        >
                            <option disabled selected>
                                {filter.label}
                            </option>
                            {filter.options.map((option) => (
                                <option
                                    key={option.id + option.name}
                                    value={option.name}
                                >
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    )
                })}
            </div>
        </>
    )
}
