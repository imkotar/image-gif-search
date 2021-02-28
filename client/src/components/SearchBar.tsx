import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export const SearchBar: React.FC<any> = () => {
  const [searchInput, setInput] = useState('')
  const [type, setSearchType] = useState('')
  
  const generateFormData = () => {
    searchInput !== '' ? console.log({searchInput, type}) : alert('nothing to search for')
  }

  return (
    <div>
        <Grid fluid>
          <Row center="sm">
            <Col xs={12} md={2} sm={3}>
              <select value={type} onChange={(e) => setSearchType(e.target.value)}>
                <option value="gif">GIF</option>
                <option value="image">IMAGE</option>
              </select>
            </Col>
            <Col xs={12} md={8} sm={7}>
              <input
                type='text'
                placeholder='Search for...'
                value={searchInput}
                onChange={(e) => setInput(e.target.value)}
              />
            </Col>
            <Col xs={12} md={2} sm={2}>
              <button onClick={generateFormData}>Search</button>
            </Col>
          </Row>
        </Grid>
    </div>
  );
  }
  
  
