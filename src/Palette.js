import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Colorbox from './Colorbox.js';

const Palette = ({colorRef, selectColor}) => {
  var firstColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var secondColors = ['pink', 'black', 'white', 'brown', 'teal', 'lightBlue'];

  const mappedPalette = (colorArray) => {
    return colorArray.map((color) => (<Colorbox color={color} key={color} selectColor={selectColor}/>))
  }

  return (
    <div className="palette">
      <ul className="palette-1">{mappedPalette(firstColors)}</ul>
      <ul className="palette-2">{mappedPalette(secondColors)}</ul>
    </div>
  )
}

export default Palette;