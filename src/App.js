import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Message from './Message.js';
import MessageList from './MessageList.js';
import MakeNewMessage from './MakeNewMessage.js';
import berry from './assets/strawberrydown.png';
import styled from 'styled-components';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({});
  const [emailEntry, setEmailEntry] = useState('');
  const [messageSelected, setMessageSelected] = useState(false);
  const [messagesVisible, setMessagesVisible] = useState(false);
  const [makeNew, setMakeNew] = useState(false);
  const [makeNewButton, setMakeNewButton] = useState(false);
  const [emailFormVisible, setEmailFormVisible] = useState(true);


  console.log(emailEntry)

  // useEffect(() => {


  // }, [messages])

  const handleFormSubmit = (newMessageObject) => {
    // console.log('newMessageObject', newMessageObject);
    axios.post("http://localhost:3000/messages", newMessageObject, {headers: {"Access-Control-Allow-Origin": "http://localhost:2999"}})
    .then(results => {
      // console.log('results', results);
      fetchMessages(newMessageObject.email);
      setMakeNew(false);
      setEmailFormVisible(false);
    })
    .catch(err => console.log('could not post'));
  }
  const handleSeeList = () => {
    setMessagesVisible(!messagesVisible);
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
        setMessagesVisible(false);
      }
      setMakeNewButton(true);
      // console.log(response.data);
    })
    .catch(err => console.log('error with get', err));
  }

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    var emailEntered = emailEntry;
    fetchMessages(emailEntered);
    setEmailFormVisible(false);
    setMessageSelected(false);
    setMakeNew(false);
  }

  const handleGoBack = () => {
    setEmailEntry('');
    setEmailFormVisible(true);
    setMakeNew(false);
    setMessageSelected(false);
    setMessagesVisible(false);
    setMakeNewButton(false);
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
      <div className="berry-header"><h1 className="header1">Color</h1><img className="berry" src={berry} alt="a berry"/><h1 className="header2">Berry</h1></div>

      { emailFormVisible ? <div className="email"><h1>Put in your e-mail address to get started</h1>
      <form onSubmit={handleEmailSubmit}>
        <div><label>
        <input type="email" value={emailEntry}  onChange={(event) => setEmailEntry(event.target.value)} placeholder="Your e-mail address ..." required/>
      </label></div>
      <button className="e-mail-button" type="submit">Submit</button>
      </form>
      </div> : <div className="email"><h1>Click button to start over</h1>
      <button onClick={handleGoBack}>Start Over</button>
      </div> }
      <div className="color-berry">
      <MessageListRender />
      {makeNewButton ? <button className="new-button" onClick={() => {
        setMakeNew(true);
        setMessageSelected(false);
        setMakeNewButton(false);
        setMessagesVisible(false);
        setEmailFormVisible(false);
      }}>Make a new Colorberry</button> : null }
      { makeNew ? < MakeNewMessage email={emailEntry} handleSeeList={handleSeeList} handleFormSubmit={handleFormSubmit}/> : null }
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