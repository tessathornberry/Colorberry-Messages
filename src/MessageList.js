import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';


const MessageList = ({message, selectMessage}) => {
  console.log('message in messagelist', message);

  return (
    <ListItem>
    <div onClick={() => {selectMessage(message)}}>{message.messagename}</div>
    </ListItem>
  )
}

export default MessageList;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 3vh;
  display: flex;
  width: 50%;
  margin: auto;
  align-items: center;
  justify-content:center;
  padding-bottom: 10px;
`