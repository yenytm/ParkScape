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
        <div className="carousel-item w-50 h-[24rem]">
          <img src={park.images[0].url} alt={park.images[0].altText} />
        </div>
        <div className="carousel-item w-50 h-[24rem]">
          <img src={park.images[1].url} alt={park.images[1].altText} />
        </div>
        <div className="carousel-item w-50 h-[24rem]">
          <img src={park.images[2].url} alt={park.images[2].altText} />
        </div>
      </div>
      <div>
        <h1 className="card-title">{park.fullName}</h1>
        <p>
          Location: {}
          <span>{park.addresses[0].line1}, </span>
          <span>
            {" "}
            {park.addresses[0].city} {}
            {park.addresses[0].stateCode}, {}
            {park.addresses[0].postalCode}
          </span>
        </p>
        <p>
          Operating Hours: {}
          <span>{park.operatingHours[0].name}, </span>
        </p>


        <p>
          Park Description: {} {park.description}
        </p>
        
      </div>
    </div>
  );
}
