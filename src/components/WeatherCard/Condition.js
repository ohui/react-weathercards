import React from 'react';
import styled from '@emotion/styled';

const Condition = ({temp, condition}) => {

    const Temp = styled.h1`
        font-size: 2rem;
        font-weight:200;
    `
    const Condition = styled.h3`
        font-family: Merriweather, sans-serif;
    `

    return ( 
        <>
        <Temp> {temp} °F</Temp>
        <Condition>{condition}</Condition>
        </>
     );
}
 
export default Condition;