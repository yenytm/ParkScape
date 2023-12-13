import { transformParkData } from '../pages/Parks'

const api_key = import.meta.env.VITE_NPS_KEY
const url = `https://developer.nps.gov/api/v1/parks?API_KEY=${api_key}`

export async function getParks(page = 0, limit = 24) {
    try {
        const response = await fetch(`${url}?start=${page}&limit=${limit}`)
        const data = await response.json()
        const cleanData = data.data.map(transformParkData)
        return [cleanData, data.total]
    } catch (error) {
        console.log(error)
    }
}

export const getParkDetails = async ({ params }) => {
    try {
        const response = await fetch(url + `&parkCode=${params.code}`)
        const data = await response.json()
        const cleanData = data.data.map(transformParkData)
        console.log(cleanData)
        return cleanData[0]
    } catch (error) {
        console.log(error)
    }
}
