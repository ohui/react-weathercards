import React, {useState, useEffect} from "react"; 

import WeatherCard from "./WeatherCard/component";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const WeatherEngine = (prop) => {
    const location = prop.city;

  const [query, setQuery] = useState(location);
  const [error, setError] = useState (false);
  const [loading, setLoading] = useState(false);
  const[weather, setWeather] = useState ({
    temp: null, 
    city: null, 
    condition: null, 
    country: null
  });

  const getWeather = async(q) => {
    setLoading(true);
    try{
        const apiRes = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${q}&units=imperial&APPID=e18018708f1569775aaeac775323fc70`);
        const resJSON = await apiRes.json(); 
        setWeather({
          temp: resJSON.main.temp, 
          city: resJSON.name, 
          condition: resJSON.weather[0].main, 
          country: resJSON.sys.country
        });
    } catch (error){
        setError(true);
    }
    setLoading(false);
  }

  const handleSearch = (e) => {
    e.preventDefault(); //prevent whatever button click was going to do . 
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);
  
  return (
    <div style ={{ textAlign:"center" }}>
      {!loading && !error ? (<div><WeatherCard temp = {weather.temp} condition = {weather.condition} city = {weather.city} country = {weather.country}/>
       </div>
      ): loading? (
      <div><WeatherCard temp = {null} condition = {"Loading"} /> </div>
      
      ): !loading && error? (
        <div><WeatherCard temp = {null} condition = {"Invalid City"} /> </div>
      
      )
      :null}

      <form style = {{margin:'5px'}}>
        
        <TextField inputProps={{ style: {textAlign: 'center', padding:'5px',  color:'white' } }}  value = {query} onChange = {(e) => {setQuery(e.target.value); }}  onKeyPress={(ev) => {
    if (ev.key === 'Enter') {
      getWeather(ev.target.value);
      ev.preventDefault();
    }}} variant="filled" /> 
    <br/>

        <Button style = {{marginTop: '5px', backgroundColor: 'white' }} size="small"  onClick = {e => handleSearch(e)}  variant="outlined" color="primary">Search</Button>
      </form>
    </div>
  );
};
 
export default WeatherEngine;