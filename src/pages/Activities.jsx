const api_key = import.meta.env.VITE_API_TOKEN;

const url = `developer.nps.gov/api/v1/activities?API_KEY=${api_key}`;

export async function getActivities() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const activity = {

}
