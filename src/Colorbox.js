import React from 'react';
import styled from 'styled-components';


const Colorbox = ({color, selectColor}) => {
  return (
    <Box value={color} style={{backgroundColor:`${color}`}} onClick={(event) => {
      event.preventDefault();
      selectColor(color);
    }} />
  )
}

export default Colorbox;

var Box = styled.li`
border-radius: 10px;
cursor: pointer;
display: inline-block;
width: 5vw;
height:5vh;
border: 2px solid black;
margin-left: .5vw;
box-shadow: inset 1px 2px 1px 1px #000;
&:active {
  color: white;
  background-color: #3b6b3e;
  transform: translateY(4px);
}

`
