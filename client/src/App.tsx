import React, { useState, useEffect } from 'react';
import { Grid } from 'react-flexbox-grid';
import { SearchBar } from './components/SearchBar'
import { Pagination } from './components/Pagination'
import axios from 'axios'

interface SearchData {
  type: string,
  searchInput: string | number,
  perPage: number,
  page: number
}

function App() {
  const [searchData, setSearchData] = useState<SearchData>({
    type: 'image',
    searchInput: '',
    perPage: 20,
    page: 1,
  })
  const [totalPagesNumber, setTotalPagesNumber] = useState(1)
  const [results, setResults] = useState<Object>([])
  
  useEffect(() => {
    if (searchData.searchInput === '') return 
    const fetchData = async () => {
     await getSearchResults(searchData)
    }
    fetchData()
  }, [searchData])

  const updateSearchData = (onSearchData: React.SetStateAction<SearchData>) => {
    setSearchData({
      ...searchData,
      ...onSearchData
    })
  }

  const updatePaginationData = (paginationData: React.SetStateAction<SearchData>) => {
    setSearchData({
      ...searchData,
      ...paginationData
    })
  }

  const getSearchResults = (searchData: SearchData) => {
    return axios.post('http://localhost:5000/api', searchData)
      .then(response => {
        setTotalPagesNumber(response.data.pagination.totalPagesNumber)
        setResults(response.data.hits)
      })
      .catch(error => alert(error))
  }

  return (
    <Grid>
      <h1>
        Search for image or gif
      </h1>
      <SearchBar searchData={searchData} onSearch={updateSearchData}/>
      <Pagination totalPagesNumber={totalPagesNumber} searchData={searchData} onPaginationChange={updatePaginationData}/>
    </Grid>
  );
}

export default App;
