import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { SearchBar } from './components/SearchBar'

function App() {
  return (
    <Grid>
      <h1>
        Search for image or gif
      </h1>
      <SearchBar/>
    </Grid>
  );
}

export default App;
