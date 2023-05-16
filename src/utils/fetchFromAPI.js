import axios from 'axios'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '874a38f64bmsh691264dd9a7de35p165197jsn4ceb1e104283',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
  } catch (error) {
    return error.message
  }
}
