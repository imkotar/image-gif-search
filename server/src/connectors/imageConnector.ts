import axios from "axios"
import config from '../config/config'
import { InputData } from '../interfaces/inputData';
import { ResultData } from '../interfaces/resultData';

export const imageConnector = ({searchInput, perPage, page}: InputData) => {
    const search = encodeURIComponent(searchInput)
    const url = `https://pixabay.com/api/?key=${config.PIXABAY_API_KEY}&q=${search}&image_type=photo&per_page=${perPage}&page=${page}`
    return axios.get(url)
      .then(response => {
        const totalPagesNumber = Math.ceil(response.data.totalHits/perPage) + 1
        const hits = filterHitsData(response.data)
        return {
            pagination: {
                totalPagesNumber,
            },
            hits
        }
      })
      .catch(error => error.response.status);
}

const filterHitsData = ({hits}: any) => {
    let results: object[] = []
    const x = hits.forEach((hit: ResultData) => {
        const result = {
            id: hit.id,
            previewURL: hit.previewURL,
            webformatURL: hit.webformatURL,
            largeImageURL: hit.largeImageURL
        }
				results.push(result)
    })
    return results
}

