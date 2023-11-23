import { useLoaderData } from "react-router-dom";

export async function addressLoader() {
  try {
    const response = await fetch(
      "https://random-data-api.com/api/v2/addresses?size=1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return [];
  }
}

export const Address = () => {
  const address = useLoaderData();
  return (
    <>
      <h1 key={data.address}></h1>
    </>
  );
};
