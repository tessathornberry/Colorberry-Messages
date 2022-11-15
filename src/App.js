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


  // useEffect(() => {
  //   setMakeNew(false);

  // }, [messages])

  const fetchMessages = (email) => {
    axios.get("http://localhost:3000/messages", {params: {email: email}})
    .then(response => {
      // console.log('response', response);
      if (response.data.length > 0) {
        setMessagesVisible(true);
        setMessages(response.data);
      } else {
        setMakeNew(true);
        setMessagesVisible(false);
        setMessageSelected(false);

      }
      console.log(response.data);
    })
    .catch(err => console.log('error with get', err));
  }

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    var emailEntered = emailRef.current.value;
    fetchMessages(emailEntered);
  }

  const selectMessage = (messageInput) => {
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
      ))}<button onClick={() => {
        setMakeNew(true);
        setMessageSelected(false);
      }}>Make a new Colorberry</button></ul>
      </List>
      )
    } else {
      return null;
    }
  };



  return (
    <div className="App">
      <img className="berry" src={berry} alt="a berry"/>
      <div className="email"><h1>Put in your e-mail address to get started</h1>
      <form onSubmit={handleEmailSubmit}>
        <label>
        <input type="email" ref={emailRef}  placeholder="Your e-mail address ..." required/>
      </label>
      <button type="submit">Submit</button>
      </form>
      </div>

      <MessageListRender />
      { makeNew ? < MakeNewMessage email={emailRef} /> : null }
      { messageSelected ? < Message message={currentMessage} /> : null }

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