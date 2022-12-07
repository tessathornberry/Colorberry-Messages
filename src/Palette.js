import React from 'react';
import styled from 'styled-components';
import Colorbox from './Colorbox.js';

const Palette = ({colorRef, selectColor}) => {
  var firstColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var secondColors = ['pink', 'black', 'white', 'brown', 'teal', 'lightGreen'];
  //can add more static palettes or a "react color" palette

  const mappedPalette = (colorArray) => {
    return colorArray.map((color) => (<Colorbox color={color} key={color} selectColor={selectColor}/>))
  }

  return (
    <PaletteBox className="palette">
      <ul className="palette-1">{mappedPalette(firstColors)}</ul>
      <ul className="palette-2">{mappedPalette(secondColors)}</ul>
    </PaletteBox>
  )
};

export default Palette;

const PaletteBox = styled.div`
border-radius: 10px;
margin: 20px;
`;