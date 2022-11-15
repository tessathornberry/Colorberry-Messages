import React from 'react';
import styled from 'styled-components';

const Message = ({message}) => {
  console.log(message.fontColor);
  return (
    <div>
      <TextBlock className="message message-block" style={{backgroundColor: `${message.color}`}} >
        <Text style={{color: `${message.fontColor}`}}>{message.message}</Text>
      </TextBlock>


    </div>
  )
}

export default Message;

const TextBlock = styled.div`
  width: 50vw;
  height: 25vh;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
`;

const Text = styled.div`
  line-height:
  display: flex;
  width: 50%;
  margin: auto;
  align-items:center;
  justify-content:center;
`