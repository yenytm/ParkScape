/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, Link } from "react-router-dom";
import { getParksByActivities } from "./Activities";
import { useEffect, useState } from "react";

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
    designation,
  } = data;

  return {
    id,
    url,
    fullName,
    parkCode,
    description,
    latitude,
    longitude,
    activities,
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
    })),
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

export default function Parks() {
  const parks = useLoaderData();
  const [filteredParks, setFilteredParks] = useState(parks);
  const [activitiesIds, setActivitiesIds] = useState([]);

  useEffect(() => {
    if (activitiesIds.length === 0) {
      setFilteredParks(parks);
      return;
    }

    const filterParks = async () => {
      const data = await getParksByActivities(activitiesIds);
      setFilteredParks(data);
    };
    filterParks();
  }, [activitiesIds, parks]);

  return (
    <>
      <ul className="flex gap-4 flex-wrap  justify-center">
        {filteredParks.length > 0 ? (
          filteredParks.map((park) => (
            <li key={park.id}>
              <div className="card w-96 h-[30rem]  bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-300 	">
                <div className="h-[15rem] w-96 rounded-md overflow-hidden relative">
                  <img
                    className="h-full w-full object-cover"
                    src={park.images[0].url}
                    alt={park.images[0].altText}
                  />
                </div>

                <div className="card-body h-54 ">
                  <h2 className="card-title">{park.fullName}</h2>
                  <span>{park.addresses[0].line1}, </span>

                  <span>
                    {" "}
                    {park.addresses[0].city} {}
                    {park.addresses[0].stateCode}, {}
                    {park.addresses[0].postalCode}
                  </span>
                  {/*
									<ul className="flex flex-col gap-2">
                  {park.activities.map((activity) => (
											<li key={activity.id}>
												<button
													onClick={() => {
                            setActivitiesIds([
															...activitiesIds,
															activity.id,
														]);
													}}
													to={`/park/${park.id}/activity/${activity.id}`}>
													{activity.name}{" "}
												</button>
                        </li>
                        ))}
                        </ul>
                      */}
                </div>
                <div className="card-actions justify-center pb-4">
                  <Link
                    to={`/park/${park.name}/${park.parkCode}`}
                    className="btn bg-green-700 text-white hover:bg-white hover:text-green-700 hover:border-green-700"
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
    </>
  );
}
