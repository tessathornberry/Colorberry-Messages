import React, {useRef, useState} from 'react';
import Palette from './Palette.js';
import styled from 'styled-components';

const MakeNewMessage = ({email, handleFormSubmit, handleSeeList}) => {
  const colorRef = useRef('');
  const [selectedColor, setSelectedColor] = useState('white');
  const [currentColor, setCurrentColor] = useState('white');
  const [fontColor, setFontColor] = useState('black');
  const [messageText, setMessageText] = useState('');
  const [currentFontColor, setCurrentFontColor] = useState('black')

  const nameRef = useRef('');

  var selectColor = (color) => {
    setSelectedColor(color);
  }


  var assembleMessage = () => {
    var messageObject = {};
    messageObject.email = email;
    messageObject.color = currentColor;
    messageObject.fontColor = fontColor;
    messageObject.message = messageText;
    messageObject.messagename = nameRef.current.value;
    console.log('MessageObject', messageObject);
    handleFormSubmit(messageObject);
  }

 //it would be better to have these useState so that the person could see it
  return (
    <div className="new-message">
      <h2>Make a new Colorberry Here!</h2>

      <TextBlock className="newbox" style={{backgroundColor:`${currentColor}`, color: `${currentFontColor}`}} onClick={(event) => {
        event.preventDefault();
        setCurrentColor(selectedColor);
      }}><Text>{messageText}</Text></TextBlock>
      <Palette colorRef={colorRef} selectColor={selectColor}/>
      <form onSubmit={(event) => {
        event.preventDefault();
        assembleMessage()}}>

      <div className="messageLabel" onClick={() => {
        console.log(selectedColor);
        setFontColor(selectedColor);
      }}><label>Message: <br></br>
        (Click <b onClick={() => setCurrentFontColor(selectedColor)} style={{color:`${currentFontColor}`, cursor: "pointer", padding: `0 8px 0 8px`, borderRadius: `5px`, boxShadow: `5px 5px 5px #a0a0a0`}}>HERE</b> with color to change font color)</label>
        <input className="message-label-input" type="text" value={messageText} maxLength="80" onChange={(event) => setMessageText(event.target.value)} placeholder="your message..." required/>
        </div>
        <br></br>
        <div className="messageLabel" >
      <label>Message Name: </label>
        <input className="message-label-input" type="text" ref={nameRef} maxLength="18" placeholder="Name your message..." required/>
        </div>
      <br></br>


      <button type="submit">Submit</button><br></br>
      </form>
      <button className="see-list" onClick={() => handleSeeList()} >See My List</button>
    </div>
  )
}

export default MakeNewMessage;


const TextBlock = styled.div`
  width: 50vw;
  max-width: 400px;
  min-width: 400px;
  height: 25vh;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  text-size-adjust: auto;
  word-wrap: break-word;
  inline-size: 150px;
  overflow-wrap: break-word;
`;

const Text = styled.div`
  font-size: 4vh;
  // display: flex;
  width: 50%;
  // overflow: scroll;
  margin: auto;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
  word-wrap: break-word;
  inline-size: 350px;
  overflow-wrap: break-word;
  overflow: hidden;
`;