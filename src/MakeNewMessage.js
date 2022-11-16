import React, {useRef, useState} from 'react';
import Palette from './Palette.js';
import styled from 'styled-components';

const MakeNewMessage = ({email, handleFormSubmit}) => {
  const colorRef = useRef('');
  const [selectedColor, setSelectedColor] = useState('white');
  const [currentColor, setCurrentColor] = useState('white');

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

      <div className="messageLabel" ><label>Message:</label>
        <input className="message-label-input" type="text" ref={messageRef}  placeholder="your message..." required/>
        </div>
        <br></br>
        <div className="messageLabel" >
      <label>Message Name: </label>
        <input className="message-label-input" type="text" ref={nameRef}  placeholder="Name your message..." required/>
        </div>
      <br></br>

      <GridBox className="newbox" style={{backgroundColor:`${currentColor}`}} onClick={(event) => {
        event.preventDefault();
        setCurrentColor(selectedColor);

      }} />
      <Palette colorRef={colorRef} selectColor={selectColor}/>

      <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default MakeNewMessage;

const GridBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 20vh;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer; //may need to oomph this
  width: 50vw;
  max-width: 400px;
  min-width: 400px;
  height: 25vh;
  border: 2px solid black;
  border-radius: 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-around;
  -webkit-justify-content: space-around;
  -ms-flex-pack: space-around;
  justify-content: space-around;
`;