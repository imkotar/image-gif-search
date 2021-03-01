import { SearchRequestData } from '../interfaces/searchRequestData';

export const dataValidation = ({type, searchInput, perPage, page}: SearchRequestData) => {
    const errors = []
    page < 1 || !page ? errors.push('Wrong "Page" input!') : ''
    perPage < 1 || perPage > 25 || !perPage ? errors.push('Wrong "perPage" input!') : ''
    type || type === 'gif' || type === 'image' ? '' : errors.push('Wrong "type" input!')
    new String(searchInput).length >= 99 ? errors.push('Too long search value!') : ''
    return errors.length ? errors : null
}

