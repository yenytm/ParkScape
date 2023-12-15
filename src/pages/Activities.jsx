const api_key = import.meta.env.VITE_NPS_KEY

const url = `developer.nps.gov/api/v1/activities?API_KEY=${api_key}`

export async function getParksByActivities(activities) {
    try {
        const response = await fetch(url + `&=${activities.join(',')}`)
        const data = await response.json()
        return data.data
    } catch (error) {
        console.log(error)
    }
}
