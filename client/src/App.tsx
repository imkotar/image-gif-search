import React, { useState, useEffect } from 'react';
import { Grid } from 'react-flexbox-grid';
import { SearchBar } from './components/search/SearchBar'
import { Pagination } from './components/pagination/Pagination'
import { ResultsDisplay } from './components/results/ResultsDisplay'
import { SearchData, ImageProps } from './interfaces/interfaces'
import { Loader } from './components/loader/Loader'
import axios from 'axios'


function App() {
  const [searchData, setSearchData] = useState<SearchData>({
    type: 'image',
    searchInput: '',
    perPage: 20,
    page: 1,
  })

  const [totalPagesNumber, setTotalPagesNumber] = useState(1)
  const [results, setResults] = useState<ImageProps[]>([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (searchData.searchInput === '') return 
    const fetchData = async () => {
     setLoading(true)
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
      .finally(() => setLoading(false))
  }


  return (
    <Grid>
      <h1>
        Search for image or gif
      </h1>
      <SearchBar searchData={searchData} onSearch={updateSearchData}/>
      <Pagination totalPagesNumber={totalPagesNumber} searchData={searchData} onPaginationChange={updatePaginationData}/>
      {loading ? <Loader/> : <ResultsDisplay results={results} />}
    </Grid>
  );
}

export default App;
