import axios from "axios"
import config from '../config/config'
import { InputData } from '../interfaces/inputData';

export const gifConnector = ({searchInput, perPage, page}: InputData) => {
    page = (page - 1) * perPage
    const search = encodeURIComponent(searchInput)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${config.GIPHY_API_KEY}&q=${search}&limit=${perPage}&offset=${page}&rating=g&lang=en`
    return axios.get(url)
      .then(response => {
        const totalPagesNumber = Math.ceil(response.data.pagination.total_count/perPage)
        const hits = filterGifsData(response.data.data)
        return {
            pagination: {
                totalPagesNumber
            },
            hits
        }
      })
      .catch(error => error.response.status);
  }

const filterGifsData = (data: []) => {
    return data.map((gif: any) => ({
        id: gif.id,
        previewURL: gif.images.fixed_height.url,
        largeImageURL: gif.images.original.url }))
}

