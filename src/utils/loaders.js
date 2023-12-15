import { transformParkData } from '../pages/Parks'

const api_key = import.meta.env.VITE_NPS_KEY
const url = 'https://developer.nps.gov/api/v1/parks'

export async function getParks(start = 0, limit = 24, q) {
    const fetchUrl = `${url}?start=${start}&limit=${limit}${
        q ? q : ''
    }&api_key=${api_key}`

    try {
        const response = await fetch(fetchUrl)
        const data = await response.json()
        const cleanData = data.data.map(transformParkData)
        return [cleanData, data.total]
    } catch (error) {
        console.log('apit', error)
    }
}

export const getParkDetails = async ({ params }) => {
    console.log(params.code)
    console.log(api_key)
    try {
        const response = await fetch(url + `?parkCode=${params.code}&api_key=${api_key}`)
        const data = await response.json()
        const cleanData = data.data.map(transformParkData)
        return cleanData[0]
    } catch (error) {
        console.log(error)
    }
}
