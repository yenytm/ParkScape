/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, Link } from "react-router-dom";
import { getParksByActivities } from "./Activities";
import { useEffect, useState } from "react";
import ParkFilter from "../components/ParkFilter";
import { filterList } from "../data";

const api_key = import.meta.env.VITE_NPS_KEY;
const url = `https://developer.nps.gov/api/v1/parks?API_KEY=${api_key}`;

export function transformParkData(data) {
	const {
		id,
		url,
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
	} = data;

	return {
		id,
		url,
		fullName,
		parkCode,
		description,
		latitude,
		longitude,
		activities: activities.map((activity)=> activity.name ),
    
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
			url: image.url,
		})),
		name,
	};
}

export async function getParks() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		const cleanData = data.data.map(transformParkData);
		console.log(cleanData);
		return cleanData;
	} catch (error) {
		console.log(error);
	}
}

//pagination code
// function updateContent(parks) {
// 	const startItem = (currentPage - 1) * itemsPerPage + 1;
// 	const endItem = startItem + itemsPerPage - 1;

// 	const pageContentDisplay = parks
// 		.slice(startItem - 1, endItem)
// 		.join(", ");

// 	const pageDisplay = `${currentPage}/${totalItems / itemsPerPage}`;
// }


export default function Parks() {
	const parks = useLoaderData();
	const [filteredParks, setFilteredParks] = useState(parks);
	const [searchTerm, setSearchTerm] = useState("");
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		const filterParks = activities.length
			? getParksByActivities
			: () => Promise.resolve(parks);
		filterParks(activities).then(setFilteredParks);
		console.log(filterParks);
	}, [activities, parks]);

	useEffect(() => {
		const searchLower = searchTerm.toLowerCase();
		setFilteredParks(
			parks.filter((park) =>
				park.fullName.toLowerCase().includes(searchLower)
			)
		);
	}, [searchTerm, parks]);

	return (
		<>
			<div className="w-full flex justify-center">
				<ParkFilter
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					filterList={filterList([
						...new Map(
							filteredParks
								.flatMap((park) => park.activities)
								.map((activity) => [activity.name, activity])
						).values(),
					])}
				/>
			</div>
			<ul className="flex gap-4 flex-wrap  justify-center">
				{filteredParks.length > 0 ? (
					filteredParks.map((park) => (
						<li key={park.id}>
							<div className="card w-96 h-[32rem]  bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 	">
								<div className="h-[15rem] w-96 rounded-md overflow-hidden relative">
									<img
										className="h-full w-full object-cover"
										src={park.images[0].url}
										alt={park.images[0].altText}
									/>
								</div>

								<div className="card-body h-54 ">
									<h2 className="card-title">
										{park.fullName}
									</h2>
									<span>{park.addresses[0].line1}, </span>

									<span>
										{" "}
										{park.addresses[0].city} {}
										{park.addresses[0].stateCode}, {}
										{park.addresses[0].postalCode}
									</span>
								</div>
								<div className="card-actions justify-center pb-4">
									<Link target="_blank"
										to={`/park/${park.name}/${park.parkCode}`}
										className="btn bg-green-700 text-white hover:bg-white hover:text-green-700 hover:border-green-700 ">
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
		</>
	);
}
