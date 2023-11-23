import { useLoaderData } from "react-router-dom";

export async function addressesLoader() {
  try {
    const response = await fetch(
      "https://random-data-api.com/api/v2/addresses?size=10"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching addresses:", error);
    return [];
  }
}

export const Addresses = () => {
  const addresses = useLoaderData();
  return (
    <ul>
      {addresses.map((address) => (
        <li key={address.id}>
          <Link to={"/addresses/${address.state}"}></Link>
        </li>
      ))}
    </ul>
  );
};
