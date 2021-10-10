import {Grid} from '@mui/material'

import './App.css';

import Home from './components/Home'

function App() {
  return (
    <Grid container >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Home />
      </Grid>
    </Grid>
  );
}

export default App;
