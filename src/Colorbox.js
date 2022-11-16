import React, {useState, useRef} from 'react';
import styled from 'styled-components';


const Colorbox = ({color, selectColor}) => {
  // console.log(colorRef);
  return (
    <Box value={color} style={{backgroundColor:`${color}`}} onClick={(event) => {
      event.preventDefault();
      selectColor(color);
    // console.log('colorRef', color);
    }} />
  )
}

export default Colorbox;

var Box = styled.li`
cursor: pointer;
display: inline-block;
width: 5vw;
height:5vh;
border: 2px solid black;
// background-color: blue;
`