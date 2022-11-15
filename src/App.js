import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Message from './Message.js';
import MessageList from './MessageList.js';
import berry from './assets/berry.png';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({});
  const [messageSelected, setMessageSelected] = useState(false);
  const emailRef = useRef('');
  const [messagesVisible, setMessagesVisible] = useState(false);

  // useEffect(() => {

  // }, [messages])

  const fetchMessages = (email) => {
    axios.get("http://localhost:3000/messages", {params: {email: email}})
    .then(response => {
      // console.log('response', response);
      setMessages(response.data); //change this for messages once there are more
      console.log(response.data);
    })
    .catch(err => console.log('error with get', err));
  }

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    var emailEntered = emailRef.current.value;
    fetchMessages(emailEntered);
    setMessagesVisible(true)
  }

  const selectMessage = (messageInput) => {
    // console.log(messageInput);
    setMessageSelected(true);
    setCurrentMessage(messageInput);
  }
  const MessageListRender = () => {
    if (messagesVisible) {
      return (
      <ul>{messages.map((singleMessage) => (
        <MessageList message={singleMessage} key={singleMessage._id} selectMessage={selectMessage} />
      ))}</ul>
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
      { messageSelected ? < Message message={currentMessage} /> : null }

    </div>
  );
}

export default App;


