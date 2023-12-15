/* eslint-disable react/prop-types */
export default function ParkFilter({
    searchTerm,
    setSearchTerm,
    filterList,
    filterSetters,
}) {
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
                            onChange={(e) =>
                                filterSetters[filter.label.toLowerCase()](
                                    e.target.value,
                                )
                            }
                        >
                            <option disabled defaultValue>
                                {filter.label}
                            </option>
                            {filter.options.map((option, index) => (
                                <option
                                    key={option.label + index}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    )
                })}
            </div>
        </>
    )
}
