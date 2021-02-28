import React, { useState,  } from 'react';
import { Grid } from 'react-flexbox-grid';
import { SearchBar } from './components/SearchBar'
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

  const updateSearchData = (onSearchData: React.SetStateAction<SearchData>) => {
    setSearchData({
      ...searchData,
      ...onSearchData
    })
  }

  const getSearchResults = () => {
    axios.post('http://localhost:5000/api', searchData)
      .then(response => {
        console.log(response.data.hits)
      })
      .catch(error => alert(error))
  }

  return (
    <Grid>
      <h1>
        Search for image or gif
      </h1>
      <SearchBar searchData={searchData} onSearch={updateSearchData}/>
      <button onClick={getSearchResults}>TEST</button>
    </Grid>
  );
}

export default App;
