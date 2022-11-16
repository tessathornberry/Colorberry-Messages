import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Message from './Message.js';
import MessageList from './MessageList.js';
import MakeNewMessage from './MakeNewMessage.js';
import berry from './assets/berry.png';
import styled from 'styled-components';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({});
  const [messageSelected, setMessageSelected] = useState(false);
  const emailRef = useRef('');
  const [messagesVisible, setMessagesVisible] = useState(false);
  const [makeNew, setMakeNew] = useState(false);
  const [makeNewButton, setMakeNewButton] = useState(false);




  // useEffect(() => {


  // }, [messages])

  const handleFormSubmit = (newMessageObject) => {
    // console.log('newMessageObject', newMessageObject);
    axios.post("http://localhost:3000/messages", newMessageObject, {headers: {"Access-Control-Allow-Origin": "http://localhost:2999"}})
    .then(results => {
      // console.log('results', results);
      fetchMessages(newMessageObject.email);
      setMakeNew(false);
    })
    .catch(err => console.log('could not post'));
  }

  const fetchMessages = (email) => {
    axios.get("http://localhost:3000/messages", {params: {email: email}})
    .then(response => {
      // console.log('response', response);
      if (response.data.length > 0) {
        setMessagesVisible(true);
        setMessages(response.data);
      } else {
        // setMakeNew(true);
        // setMakeNewButton(true);
        setMessagesVisible(false);
        setMessageSelected(false);

      }
      setMakeNewButton(true);
      // console.log(response.data);
    })
    .catch(err => console.log('error with get', err));
  }

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    var emailEntered = emailRef.current.value;
    fetchMessages(emailEntered);
  }

  const selectMessage = (messageInput) => {
    setMakeNewButton(true);

    // console.log(messageInput);
    setMessageSelected(true);
    setMakeNew(false);
    setCurrentMessage(messageInput);
  }

  const MessageListRender = () => {
    if (messagesVisible) {
      return ( <List className="message-list"><h3>Your Colorberry Messages</h3>
      <ul className="list">{messages.map((singleMessage) => (
        <MessageList message={singleMessage} key={singleMessage._id} selectMessage={selectMessage} />
      ))}</ul>
      </List>
      )
    } else {
      return null;
    }
  };


 //the actual app
  return (
    <div className="App">
      <img className="berry" src={berry} alt="a berry"/>
      <div className="email"><h1>Put in your e-mail address to get started</h1>
      <form onSubmit={handleEmailSubmit}>
        <label>
        <input type="email" ref={emailRef}  placeholder="Your e-mail address ..." required/>
      </label>
      <button className="e-mail-button" type="submit">Submit</button>
      </form>
      </div>
      <div className="color-berry">
      <MessageListRender />
      {makeNewButton ? <button className="new-button" onClick={() => {
        setMakeNew(true);
        setMessageSelected(false);
        setMakeNewButton(false);
      }}>Make a new Colorberry</button> : null }
      { makeNew ? < MakeNewMessage email={emailRef} handleFormSubmit={handleFormSubmit}/> : null }
      { messageSelected ? < Message message={currentMessage} /> : null }
      </div>
    </div>
  );
}

export default App;


const List = styled.div`
// display: block;
margin: auto;
align-items: center;
justify-content: space-around;
`