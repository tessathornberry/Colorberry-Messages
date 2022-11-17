import React from 'react';
import styled from 'styled-components';
import strawberry from './assets/strawberrydown.png';

const Message = ({message}) => {
  // console.log(message.fontColor);
  return (
      <TextBlock className="message message-block" style={{backgroundColor: `${message.color}`}} >
                <Box1 style={{backgroundColor:`${message.box1}`}}>
        <Strawberry src={strawberry} alt="a strawberry"></Strawberry></Box1>
        <Text className="message message-text" style={{color: `${message.fontColor}`}}>{message.message}</Text>
      </TextBlock>
  )
}

export default Message;

// const TextBlock = styled.div`
// cursor: default;
// margin-top: 20px;
// box-shadow: 10px 5px 5px #a0a0a0;

//   width: 50vw;
//   max-width: 400px;
//   min-width: 400px;
//   height: 25vh;
//   text-size-adjust: auto;
//   word-wrap: break-word;
//   inline-size: 150px;
//   overflow-wrap: break-word;
//   border: 2px solid black;
//   border-radius: 10px;
//   display: flex;
//   justify-content: space-around;
// `;

// const Text = styled.div`
// font-size: 4vh;
// width: 50%;
// margin: auto;
// align-items:center;
// justify-content:center;
// flex-wrap: wrap;
// word-wrap: break-word;
// inline-size: 350px;
// overflow-wrap: break-word;
// `;

const TextBlock = styled.div`
cursor: default;
margin-top: 30px;
box-shadow: 10px 5px 5px #a0a0a0;
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

