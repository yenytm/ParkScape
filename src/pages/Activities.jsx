const api_key = import.meta.env.VITE_NPS_KEY;

const url = `developer.nps.gov/api/v1/activities?API_KEY=${api_key}`;

export async function getParksByActivities(activities) {
	try {
		console.log(url + `&id=${activities.join(",")}`);
		const response = await fetch(url + `&=${activities.join(",")}`);
		const data = await response.json();
		console.log('functio', data);
		return data.data;
	} catch (error) {
		console.log(error);
	}
}
