import React, {useRef, useState} from 'react';
import Palette from './Palette.js';
import styled from 'styled-components';
import strawberry from './assets/strawberrydown.png';

const MakeNewMessage = ({email, handleFormSubmit, handleSeeList, password}) => {
  const colorRef = useRef('');
  const [selectedColor, setSelectedColor] = useState('white');
  const [currentColor, setCurrentColor] = useState('white');
  const [fontColor, setFontColor] = useState('black');
  const [messageText, setMessageText] = useState('');
  const [currentFontColor, setCurrentFontColor] = useState('lightGreen');
  const [currentBox1Color, setCurrentBox1Color] = useState('white')

  const nameRef = useRef('');

  var selectColor = (color) => {
    setSelectedColor(color);
  }
  console.log('password', password);

  var assembleMessage = () => {
    var messageObject = {};
    messageObject.email = email;
    messageObject.password = password;
    messageObject.color = currentColor;
    messageObject.box1 = currentBox1Color;
    messageObject.fontColor = currentFontColor;
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
      }}>
        <Box1 style={{backgroundColor:`${currentBox1Color}`}} onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        setCurrentBox1Color(selectedColor);
      }}>
        <Strawberry src={strawberry} alt="a strawberry"></Strawberry></Box1>

        <Text>{messageText}</Text>
      </TextBlock>

                <Instructions>
        How To Color: Select a color from the palette and click the message. <br></br>For font color, select a color and then Click <b onClick={() => setCurrentFontColor(selectedColor)} style={{backgroundColor:`${currentFontColor}`, cursor: "pointer", fontSize: "4vh", padding: `0 8px 0 8px`, margin: `0 8px 5px 8px`, border: `1px solid black`, borderRadius: `5px`, boxShadow: `5px 5px 5px ${selectedColor}`}}>HERE</b> </Instructions>
      <Palette colorRef={colorRef} selectColor={selectColor}/>
      <form onSubmit={(event) => {
        event.preventDefault();
        assembleMessage()}}>


      <div className="messageLabel" ><label>Message: </label>
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

const Instructions = styled.div`
margin-top: 15px;
padding: 10px;
font-size: 2.5vh;
`

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
position: relative;

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

const Box1 = styled.div`
margin: -20px;
z-index: 2;
width: 75px;
height: 75px;
border-radius: 10px;
border: 4px solid black;
position: absolute;
left: 0;
top: 0;
&:animation: rightcorner 2s linear 0s infinite alternate;
`;

const Strawberry = styled.img`
// margin: -20px;

width: 100%;
height: auto;
`;

