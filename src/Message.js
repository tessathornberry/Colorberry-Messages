import React from 'react';
import styled from 'styled-components';

const Message = ({message}) => {
  // console.log(message.fontColor);
  return (
      <TextBlock className="message message-block" style={{backgroundColor: `${message.color}`}} >
        <Text className="message message-text" style={{color: `${message.fontColor}`}}>{message.message}</Text>
      </TextBlock>
  )
}

export default Message;

const TextBlock = styled.div`
margin-top: 20px;

  width: 50vw;
  max-width: 400px;
  min-width: 400px;
  height: 25vh;
  text-size-adjust: auto;
  word-wrap: break-word;
  inline-size: 150px;
  overflow-wrap: break-word;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
`;

const Text = styled.div`
font-size: 4vh;
width: 50%;
margin: auto;
align-items:center;
justify-content:center;
flex-wrap: wrap;
word-wrap: break-word;
inline-size: 350px;
overflow-wrap: break-word;
`;
