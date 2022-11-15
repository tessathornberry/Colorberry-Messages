import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Message from './Message.js';
import berry from './assets/berry.png';

const App = () => {
  const [messages, setMessages] = useState({});
  const [currentMessage, setCurrentMessage] = useState({});
  const [email, setEmail] = useState('');
  const [messageSelected, setMessageSelected] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/messages")
      .then(response => {
        console.log('response', response);
        setMessages(response.data); //change this for messages once there are more
        console.log(response.data);
      })
      .catch(err => console.log('error with get', err));
  }, [])

  const handleMessageClick = (messages) => {
    if (Object.keys(messages).length > 0) {

    }
  }

  return (

    <div className="App">

      <img className="berry" src={berry} alt="a berry"/>
      <div className="email"><h1>Put in your e-mail address to get started</h1>
      <form >

      </form>
      </div>
      { messageSelected ? < Message message={currentMessage} /> : null }

    </div>
  );
}

export default App;


