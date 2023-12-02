import { useLoaderData } from "react-router-dom";
import { transformParkData } from "./Parks";

const api_key = import.meta.env.VITE_NPS_KEY;
const url = `https://developer.nps.gov/api/v1/parks?API_KEY=${api_key}`;

export const getParkDetails = async ({params}) => {
  try {
    const response = await fetch(url+`&parkCode=${params.code}`);
    const data = await response.json();
    const cleanData = data.data.map(transformParkData);
    console.log(cleanData);
    return cleanData[0];
  } catch (error) {
    console.log(error);
  }
};

export default function ParkDetails() {
    const park = useLoaderData()
  return (
    <div>
      <div id="heroBody" className="flex-auto place-items-center">
        <span>{park.description}</span>
        <img src="arches.png" alt="" />
      </div>
    </div>
  );
}
