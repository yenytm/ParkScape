/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom'
// import { getParksByActivities } from './Activities'
import { useEffect, useState } from 'react'
import ParkFilter from '../components/ParkFilter'
import { filterList } from '../data'
import { getParks } from '../utils/loaders'

export function transformParkData(data) {
    const {
        id,
        url = 'https://images.placeholders.dev/?width=240&height=384',
        fullName,
        parkCode,
        description,
        latitude,
        longitude,
        activities,
        topics,
        states,
        contacts,
        directionsInfo,
        operatingHours,
        addresses,
        images,
        name,
    } = data

    return {
        id,
        url,
        fullName,
        parkCode,
        description,
        latitude,
        longitude,
        activities: activities.map((activity) => {
            return { label: activity.name, value: activity.id }
        }),

        topics,
        state: states,
        phoneNumbers: contacts.phoneNumbers.map((phone) => phone.phoneNumber),
        directionsInfo,
        operatingHours: operatingHours.map((hours) => ({
            name: hours.name,
            exceptions: hours.exceptions.map((exception) => ({
                name: exception.name,
                startDate: exception.startDate,
                endDate: exception.endDate,
                hours: exception.exceptionHours,
            })),
            standardHours: hours.standardHours,
        }))[0],
        addresses: addresses.map((address) => ({
            postalCode: address.postalCode,
            city: address.city,
            stateCode: address.stateCode,
            countryCode: address.countryCode,
            provinceTerritoryCode: address.provinceTerritoryCode,
            line1: address.line1,
            line2: address.line2,
            line3: address.line3,
            type: address.type,
        })),
        images: images.map((image) => ({
            credit: image.credit,
            title: image.title,
            altText: image.altText,
            caption: image.caption,
            url:
                image.url ||
                'https://images.placeholders.dev/?width=240&height=384',
        })),
        name,
    }
}

export default function Parks() {
    const [filteredParks, setFilteredParks] = useState([])

    // filter constants
    const [searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState()
    const [activities, setActivities] = useState([])

    // Pagination constants
    const [totalPages, setTotalPages] = useState(0)
    const [startPageAt, setStartPageAt] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const nextPage = async () => {
            setStartPageAt((currentPage - 1) * 24)
            const filters = `${searchTerm ? `&q=${searchTerm}` : ''}${
                state ? `&stateCode=${state}` : ''
            }${
                activities.length > 0
                    ? `&activityCode=${activities.join(',')}`
                    : ''
            }`
            const [parks, total] = await getParks(startPageAt, 24, filters)
            setTotalPages(total)
            if (searchTerm) {
                const filtered = parks.filter(
                    (park) =>
                        park.fullName
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) &&
                        (state === undefined || park.state.includes(state)),
                )

                setFilteredParks(filtered)
            } else {
                setFilteredParks(parks)
            }
        }
        nextPage()
    }, [currentPage, startPageAt, searchTerm, state, activities])

    return (
        <>
            <div className="w-full flex justify-center">
                <ParkFilter
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filterSetters={{
                        state: setState,
                        activity: setActivities,
                    }}
                    filterList={filterList(
                        filteredParks
                            .map((park) => [...park.activities])
                            .flat(),
                    ).sort((a, b) => a.label.localeCompare(b.label))}
                />
            </div>
            <div
                id="paginationBtns"
                className="join flex flex-wrap justify-center my-4"
            >
                <button
                    className="join-item btn"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    «
                </button>
                <button className="join-item btn">{`Page ${currentPage} of ${totalPages}`}</button>
                <button
                    className="join-item btn"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    »
                </button>
            </div>

            <ul className="flex gap-4 flex-wrap  justify-center">
                {filteredParks.length > 0 ? (
                    filteredParks.map((park) => (
                        <li key={park.id}>
                            <div className="card w-96 h-[32rem]  bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 	">
                                <div className="h-[15rem] w-96 rounded-md overflow-hidden relative">
                                    <img
                                        className="h-full w-full object-cover"
                                        src={
                                            park.images.length > 0
                                                ? park.images[0].url
                                                : `https://images.placeholders.dev/?width=240&height=384&text=${park.fullName}`
                                        }
                                        alt={
                                            park.images.length > 0 &&
                                            park.images[0].altText
                                                ? park.images[0].altText
                                                : park.fullName
                                        }
                                    />
                                </div>

                                <div className="card-body h-54 ">
                                    <h2 className="card-title">
                                        {park.fullName}
                                    </h2>
                                    <span>{park.addresses[0].line1}, </span>

                                    <span>
                                        {' '}
                                        {park.addresses[0].city} {}
                                        {park.addresses[0].stateCode}, {}
                                        {park.addresses[0].postalCode}
                                    </span>
                                </div>
                                <div className="card-actions justify-center pb-4">
                                    <Link
                                        target="_blank"
                                        to={`/park/${park.name}/${park.parkCode}`}
                                        className="btn bg-green-700 text-white hover:bg-white hover:text-green-700 hover:border-green-700 "
                                    >
                                        More Info
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <h1>No Parks Found</h1>
                )}
            </ul>
            <div
                id="paginationBtns"
                className="join flex flex-wrap justify-center my-4"
            >
                <button
                    className="join-item btn"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    «
                </button>
                <button className="join-item btn">{`Page ${currentPage} of ${totalPages}`}</button>
                <button
                    className="join-item btn"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    »
                </button>
            </div>
        </>
    )
}
