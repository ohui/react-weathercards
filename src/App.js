import React  from 'react';
import {Grid} from '@material-ui/core';
import WeatherEngine from './components/WeatherEngine';
import styled from '@emotion/styled'

const Condition = styled.h3`
padding:30px 0 0 0;
font-family: Merriweather, sans-serif;
color: white;
font-size:2.5em; 
`
function App() {  
  return (
<Grid container direction = "column" style = {{background: `linear-gradient(to right, #3988d4, #1dcfd9)`}}>    
  
    <Grid style = {{textAlign:"center" }}>
      <Condition> Simple Weather Card Dashboard</Condition>
        </Grid>
    
      <Grid item container style = {{ padding: "10px 0px 40px 0",  }} >
      
      <Grid item xs = {12} sm ={6} md = {3}>
        <WeatherEngine city="Hawaii,US" />
        </Grid>

        <Grid item xs = {12} sm ={6} md = {3}>
        <WeatherEngine city="Los Angeles,US" />
        </Grid>

        <Grid item xs = {12} sm ={6} md = {3}>
        <WeatherEngine city="Chicago,US" />
        </Grid>

        <Grid item xs = {12} sm ={6} md = {3}>
        <WeatherEngine city="New York,US" />
        </Grid>
    </Grid>

    {/* <Grid item container >
      <Grid item xs = {12}>
      <Paper elevation={3} >
        <h2>Hello there!</h2>
        <h3> Welcome to my first React project that I coded from two YouTube tutorials. This app allows you to simply enter city names under each weather card to get their weather conditions. If the temperature is 50 or over, use the orange-red gradient, else use the blue gradient background. I use the OpenWeather API  (limit: 1,000 API calls / day) to get the weather data. It's really cool how you don't need to re-render the entire page when one card is changed.  </h3>
        </Paper>
      </Grid>
    </Grid> */}

  </Grid>


  );
}

export default App;
