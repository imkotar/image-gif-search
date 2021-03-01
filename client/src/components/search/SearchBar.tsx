import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { SearchData } from '../../interfaces/interfaces'
import './searchStyles.css'

interface SearchBarProps {
    searchData: SearchData
    onSearch: Function
}

export const SearchBar: React.FC<SearchBarProps> = ({searchData, onSearch}) => {
  const [searchInput, setInput] = useState(searchData.searchInput)
  const [type, setSearchType] = useState(searchData.type)
  
  const generateFormData = () => {
    searchInput !== '' ? onSearch({searchInput, type}) : alert('there is nothing to search for')
  }

  return (
    <div>
        <Grid fluid>
          <Row center="sm" className="search-container">
            <Col xs={12} md={2} sm={3}>
              <select className="select-style" value={type} onChange={(e) => setSearchType(e.target.value)}>
                <option value="gif">GIF</option>
                <option value="image">IMAGE</option>
              </select>
            </Col>
            <Col xs={12} md={8} sm={7} className="input-container">
              <input
                className="input-style"
                type='text'
                placeholder='Search for...'
                value={searchInput}
                onChange={(e) => setInput(e.target.value)}
              />
            </Col>
            <Col xs={12} md={2} sm={2}>
              <button className="search-button" onClick={generateFormData}>Search</button>
            </Col>
          </Row>
        </Grid>
    </div>
  );
  }
  

