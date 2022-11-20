import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Message from './Message.js';
import MessageList from './MessageList.js';
import MakeNewMessage from './MakeNewMessage.js';
import berry from './assets/strawberrydown.png';
import styled from 'styled-components';
import background from './assets/41845-2.jpg';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({});
  const [emailEntry, setEmailEntry] = useState('');
  const [passwordEntry, setPasswordEntry] = useState('');
  const [messageSelected, setMessageSelected] = useState(false);
  const [messagesVisible, setMessagesVisible] = useState(false);
  const [makeNew, setMakeNew] = useState(false);
  const [makeNewButton, setMakeNewButton] = useState(false);
  const [emailFormVisible, setEmailFormVisible] = useState(true);
  const idRef = useRef('');
  const [idUsed, setIdUsed] = useState(false);
  const [justPosted, setJustPosted] = useState(false);
  const [newID, setNewID] = useState('');
  const [friendEmailEntry, setFriendEmailEntry] = useState('');
//    messageObject.messagename = nameRef.current.value;

  const handleIdSubmit = (event) => {
    event.preventDefault();
    setIdUsed(true);
    axios.get("http://localhost:3000/messages", {params: {_id: idRef.current.value}})
      .then(response => {
        setMessagesVisible(true);
        setMessages(response.data);
      })
      .catch(err => console.log('error with get', err));
    setEmailFormVisible(false);
    setMessageSelected(false);
    setMakeNew(false);
  }

      //pop-up window with link and/or code
      //make modal visible results.data._id
      //make hyperlink

  const handleFormSubmit = (newMessageObject) => {
    axios.post("http://localhost:3000/messages", newMessageObject, {headers: {"Access-Control-Allow-Origin": "http://localhost:2999"}}) //might not need this anymore
    .then(results => {
      console.log('results', results.data._id);
      setNewID(results.data._id);
      fetchMessages(newMessageObject.email, newMessageObject.password);
      setMakeNew(false);
      setEmailFormVisible(false);
    })
    .catch(err => console.log('could not post'));
    //set modal to visible
    setJustPosted(true);
  }

  const handleSeeList = () => {
    setMessagesVisible(!messagesVisible);
  }

  const fetchMessages = (email, password) => {
    axios.get("http://localhost:3000/messages", {params: {email: email, password: password}})
    .then(response => {
      if (response.data.length > 0) {
        setMessagesVisible(true);
        setMessages(response.data);
      } else {
        setMessagesVisible(false);
      }
      if (!idUsed) {
        setMakeNewButton(true);
      }
    })
    .catch(err => console.log('error with get', err));
  }

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    var emailEntered = emailEntry;
    fetchMessages(emailEntered, passwordEntry);
    setEmailFormVisible(false);
    setMessageSelected(false);
    setMakeNew(false);
  }

  const handleGoBack = () => {
    setJustPosted(false);
    setIdUsed(false);
    setEmailEntry('');
    setPasswordEntry('');
    setEmailFormVisible(true);
    setMakeNew(false);
    setMessageSelected(false);
    setMessagesVisible(false);
    setMakeNewButton(false);
    }

  const selectMessage = (messageInput) => {
    if (!idUsed) {
      setMakeNewButton(true);
    }

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
      return null; //could ES6 this
    }
  };


 //the actual app
  return (
    <div className="App" >
      <div className="berry-header" style={{ margin: "1vh", borderRadius: "10px", backgroundImage: `url(${background})`}}><h1 className="header1">Color</h1><img className="berry" src={berry} alt="a berry"/><h1 className="header2">Berry</h1></div>

      { emailFormVisible ? <FormDiv className="email"><div className="email-outline"><h1>Put in your e-mail address and a password<br></br> to get started</h1>
      <form onSubmit={handleEmailSubmit}>
        <div><label>
        <input type="email" value={emailEntry}  onChange={(event) => setEmailEntry(event.target.value)} placeholder="Your e-mail address..." required/>
      </label><br></br><br></br><label><input value={passwordEntry}  onChange={(event) => setPasswordEntry(event.target.value)} placeholder="Your password..." required/></label></div>
      <button className="e-mail-button" type="submit">Submit</button>
      </form>
      </div><Code className="code" onSubmit={handleIdSubmit}><label>Do you have a ColorBerry code? </label><br></br>
        <input className="id-input" type="text" ref={idRef} placeholder="Access code..." required/><br></br><button className="e-mail-button" type="submit">Submit</button></Code></FormDiv>  : <div className="email" style={{ border: "2px solid pink", borderRadius: "10px", paddingBottom: "3vh"}}><h1>Click button to start over</h1>
      <button onClick={handleGoBack}>Start Over</button>
      </div> }
      <div className="color-berry" >
      <MessageListRender />
      {makeNewButton ? <button className="new-button" onClick={() => {
        setJustPosted(false);
        setMakeNew(true);
        setMessageSelected(false);
        setMakeNewButton(false);
        setMessagesVisible(false);
        setEmailFormVisible(false);
      }}>Make a new Colorberry</button> : null }
      { makeNew ? < MakeNewMessage email={emailEntry} password={passwordEntry} handleSeeList={handleSeeList} handleFormSubmit={handleFormSubmit}/> : null }
      { messageSelected ? < Message message={currentMessage} /> : null }
      </div>
      {/* { justPosted ? <div className="message-link"><p>Please copy this address and code and send both to your ColorBerry recipient!</p>See your ColorBerry Message at:  <b><a href={`http://localhost:2999`}> http://localhost:2999</a></b><br></br>ColorBerry Code:  <b>{newID}</b></div> : null } */}
      { justPosted ? <div className="message-link"><p>Please copy the below web-address and code and send both to your ColorBerry recipient, OR, you can enter their e-mail address here and click on it below, and a new tab will open with their message ready to send</p><form><input type="email" value={friendEmailEntry}  onChange={(event) => setFriendEmailEntry(event.target.value)} placeholder="Recipient's e-mail address..." required/></form>
      <a target="_blank" rel="noreferrer" href={`mailto:${friendEmailEntry}?subject=You%20Have%20Received%20a%20ColorBerry%20Message!&body=To%20view%20your%20message%2C%20right%20click%20the%20code%20to%20copy%20it%20and%20enter%20it%20in%20the%20code%20box%20at%20http%3A%2F%2Flocalhost%3A2999%2Fmessages.%0D%0A%0D%0ACode%3A%20${newID}`}>{friendEmailEntry}</a><div><br></br><CopyCode>See your ColorBerry Message at:  <b><a href={`http://localhost:2999`}> http://localhost:2999</a></b><br></br>ColorBerry Code:  <b>{newID}</b></CopyCode></div></div> : null}
    </div>
  );
}

export default App;

const FormDiv = styled.div`
position: relative;
align-content: space-around;

`;
const Code = styled.form`
padding: 4vh;
display: block;
// position: absolute;
// justify-content: space-around;
// align-content: space-around;
// align-items: center;
margins: auto;
ali

`;
const List = styled.div`
// display: block;
margin: auto;
align-items: center;
justify-content: space-around;
`

const CopyCode = styled.div`
border: 2px solid pink;
border-radius: 10px;
padding: 5px;
margin-bottom: 20px;

`;