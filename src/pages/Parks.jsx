import { useLoaderData, Link } from "react-router-dom";

const api_key = import.meta.env.VITE_NPS_KEY;
const url = `https://developer.nps.gov/api/v1/parks?API_KEY=${api_key}`;

function transformParkData(data) {
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
    return cleanData;
  } catch (error) {
    console.log(error);
  }
}

export default function Parks() {
  const parks = useLoaderData();
  return (
    <ul className="flex gap-4 flex-wrap">
      {parks.map((park) => (
        <li key={park.id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={park.images[0].url}
                alt={park.images[0].altText}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{park.fullName}</h2>
              <p>{park.description}</p>
              <div className="card-actions justify-end">
                <Link to={'park/' + park.name} className="btn btn-primary">Buy Now</Link>
              </div>
            </div>
          </div>

          <Link to={`/parks/${park.state}`}>{park.fullName}</Link>
        </li>
      ))}
    </ul>
  );
}
