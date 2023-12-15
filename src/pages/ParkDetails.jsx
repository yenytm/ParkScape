import { useLoaderData } from 'react-router-dom'

export default function ParkDetails() {
    const park = useLoaderData()
    const dayOrder = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
    ]

    return (
        <div>
            <div className="carousel rounded-box ">
                <div id="slide1" className="carousel-item w-50 h-[34rem]">
                    <img
                        src={park.images[0].url}
                        alt={park.images[0].altText}
                    />
                </div>
                <div id="slide1" className="carousel-item w-50 h-[34rem]">
                    <img
                        src={park.images[1].url}
                        alt={park.images[1].altText}
                    />
                </div>
                <div id="slide1" className="carousel-item w-50 h-[34rem]">
                    <img
                        src={park.images[2].url}
                        alt={park.images[2].altText}
                    />
                </div>
            </div>
            <div>
                <h1 className="card-title my-2">{park.fullName}</h1>
                <p id='addressDetails'  >
                    <strong> Location: </strong>
                    {}
                    <span>{park.addresses[0].line1}, </span>
                    <span>
                        {park.addresses[0].city}{', '}
                        {park.addresses[0].stateCode} { ''}
                        {park.addresses[0].postalCode}
                    </span>
                </p>

                <div>
                    <div className="my-1 font-semibold">Hours of Operation: </div>
                    <p className="space-y-1 my-2 mx-1 ">
                        {Object.entries(park.operatingHours.standardHours)
                            .sort(
                                (a, b) =>
                                    dayOrder.indexOf(a[0]) -
                                    dayOrder.indexOf(b[0]),
                            )
                            .map(([dayName, hours]) => (
                                <span
                                    key={dayName}
                                    className="block font-semibold "
                                >
                                    {dayName.charAt(0).toUpperCase() +
                                        dayName.slice(1)}
                                    : {hours}
                                </span>
                            ))}
                    </p>
                </div>

                <p className='my-2 '>
                    <strong> Park Description: </strong>
                    {} {park.description}
                </p>
                <p >
                    <strong> Activities: </strong>
                    <span>
                        {park.activities.map((activity, name) => (
                            <span key={name}>
                                {activity}
                                {name < park.activities.length - 1 && ', '}
                            </span>
                        ))}
                    </span>
                </p>
            </div>
        </div>
    )
}
