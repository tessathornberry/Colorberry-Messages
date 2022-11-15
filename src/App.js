import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Message from './Message.js';
import berry from './assets/berry.png';

const App = () => {
  const [message, setMessage] = useState({});
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3000/messages")
      .then(response => {
        console.log('response', response);
        setMessage(response.data[0]); //change this for messages once there are more
        console.log(response.data);
      })
      .catch(err => console.log('error with get', err));
  }, [])

  return (

    <div className="App">
      <img className="berry" src={berry} />
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and SAVE BIG to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      < Message message={message} />
    </div>
  );
}

export default App;
