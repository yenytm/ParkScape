import { useLoaderData } from "react-router-dom";
import { transformParkData } from "./Parks";

const api_key = import.meta.env.VITE_NPS_KEY;
const url = `https://developer.nps.gov/api/v1/parks?API_KEY=${api_key}`;

export const getParkDetails = async ({ params }) => {
  try {
    const response = await fetch(url + `&parkCode=${params.code}`);
    const data = await response.json();
    const cleanData = data.data.map(transformParkData);
    console.log(cleanData);
    return cleanData[0];
  } catch (error) {
    console.log(error);
  }
};

export default function ParkDetails() {
  const park = useLoaderData();
  return (
    <div>
      <div className="carousel rounded-box ">
        <div id="slide1" className="carousel-item w-50 h-[34rem]">
          <img src={park.images[0].url} alt={park.images[0].altText} />
        </div>
        <div id="slide1" className="carousel-item w-50 h-[34rem]">
          <img src={park.images[1].url} alt={park.images[1].altText} />
        </div>
        <div id="slide1" className="carousel-item w-50 h-[34rem]">
          <img src={park.images[2].url} alt={park.images[2].altText} />
        </div>
      </div>
      <div>
        <h1 className="card-title">{park.fullName}</h1>
        <p>
          <strong> Location: </strong>
          {}
          <span>{park.addresses[0].line1}, </span>
          <span>
            {" "}
            {park.addresses[0].city} {}
            {park.addresses[0].stateCode}, {}
            {park.addresses[0].postalCode}
          </span>
        </p>
        <p>
          <strong> Park Description: </strong>
          {} {park.description}
        </p>

        <p>
          <strong> Activities: </strong>
          {}
          <span>
            {park.activities.map((activity, name) => (
              <span key={name}>
                {activity}
                {name < park.activities.length - 1 && ", "}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
}
