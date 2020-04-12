import React from 'react';

import styled from '@emotion/styled';
import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';


const WeatherCard = ({temp, condition, city, country}) => {

    // The responsibility of the Weather card is to keep the style
    // display this css style. Later it'll be responsible for 
    // passing the prop. 

    const Card = styled.div`
    margin: 0 auto; 
    background: gray;
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 15px;
    align-items: center; 
    color:white;
    padding:35px 0`

    if (temp == null){
        return (
            <Card>
           <h2>{condition} </h2>
        </Card>
        );
    }

    let bg = null; 

    if (temp >=50 ){
        bg = `linear-gradient(to top, rgb( 255, 50, 0), rgb( 255, 200 , 0))`;
    } else if (  temp < 50){
        bg = `linear-gradient(to top, rgb( 0, 50, 255 ), rgb( 0, 150 , 255))`;
    }

    return (  
        <Card style = {{ background: bg  }}>
            <Location city = {city} country = {country}/>
            <Icon condition = {condition}/>
            <Condition temp = {temp} condition = {condition} />
        </Card>
    );
}
 
export default WeatherCard;