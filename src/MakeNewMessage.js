import React, {useRef, useState} from 'react';
import Palette from './Palette.js';

const MakeNewMessage = ({email, handleFormSubmit}) => {
  const colorRef = useRef('');
  const [selectedColor, setSelectedColor] = useState('white');

  const fontRef = useRef('');
  const messageRef = useRef('');
  const nameRef = useRef('');

  var selectColor = (color) => {
    setSelectedColor(color);
    console.log(color);
  }

  var assembleMessage = () => {
    var messageObject = {};
    messageObject.email = email.current.value;
    messageObject.color = colorRef.current.value;
    messageObject.fontColor = fontRef.current.value;
    messageObject.message = messageRef.current.value;
    messageObject.messagename = nameRef.current.value;
    // console.log('messageObject', messageObject);

    handleFormSubmit(messageObject);
  }

 //it would be better to have these useState so that the person could see it
  return (
    <div className="new-message">
      <h2>Make a new Colorberry Here!</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        assembleMessage()}}>

        <label>Background Color
        <input type="text" ref={colorRef}  placeholder="background color..." required/>
      </label><br></br>
      <label>Font Color
        <input type="text" ref={fontRef}  placeholder="font color..." required/>
      </label><br></br>
      <label>Message
        <input type="text" ref={messageRef}  placeholder="your message..." required/>
      </label><br></br>
      <label>Message Name
        <input type="text" ref={nameRef}  placeholder="Name your message..." required/>
      </label><br></br>
      <Palette colorRef={colorRef} selectColor={selectColor}/>

      <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default MakeNewMessage;