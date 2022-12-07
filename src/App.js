import './App.css';
import React, {useState, useRef} from 'react';
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

  //handles visibility and GET of one message based on user code submission
  const handleSubmit = (event) => {
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

  //POSTs new colorberry message with all data to server for entry into database
  const handleNewMessageSubmit = (newMessageObject) => {
    axios.post("http://localhost:3000/messages", newMessageObject)
    .then(results => {
      console.log('results', results.data._id);
      setNewID(results.data._id);
      fetchMessages(newMessageObject.email, newMessageObject.password);
      setMakeNew(false);
      setEmailFormVisible(false);
    })
    .catch(err => console.log('could not post'));
    setJustPosted(true);
  }

  //GETs messages based on email and password
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

  //handles visibility of user's elements upon login or new user/password
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    var emailEntered = emailEntry;
    fetchMessages(emailEntered, passwordEntry);
    setEmailFormVisible(false);
    setMessageSelected(false);
    setMakeNew(false);
  };

  //handles visibility of elements upon logout
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
    };

  //renders user's list
    const handleSeeList = () => {
    setMessagesVisible(!messagesVisible);
  }

  //renders message selected from list
  const selectMessage = (messageInput) => {
    if (!idUsed) {
      setMakeNewButton(true);
    }
    setMessageSelected(true);
    setMakeNew(false);
    setCurrentMessage(messageInput);
  };

  //input form for entering site - non-firebase at this time
  const emailForm = () => {
    if (emailFormVisible) {
      return <FormDiv className="email">
        <div className="email-outline">
          <h1>Put in your e-mail address and a password<br></br> to get started</h1>
          <form onSubmit={handleEmailSubmit}>
            <div>
              <label>
                <input type="email" value={emailEntry}  onChange={(event) => setEmailEntry(event.target.value)} placeholder="Your e-mail address..." required/>
              </label>
              <br></br>
              <br></br>
              <label>
                <input value={passwordEntry}  onChange={(event) => setPasswordEntry(event.target.value)} placeholder="Your password..." required/>
              </label>
            </div>
            <button className="e-mail-button" type="submit">Submit</button>
          </form>
        </div>
        <Code className="code" onSubmit={handleSubmit}>
          <label>Do you have a ColorBerry code? </label>
          <br></br>
          <input className="id-input" type="text" ref={idRef} placeholder="Access code..." required/>
          <br></br>
          <button className="e-mail-button" type="submit">Submit</button>
        </Code>
      </FormDiv>
    } else {
      return <div className="email" style={{ border: "2px solid pink", borderRadius: "10px", paddingBottom: "3vh"}}>
        <h1>Click button to start over</h1>
        <button onClick={handleGoBack}>Start Over</button>
      </div>
    }
  };

  //handles visibility of elements when "Make a new Colorberry" button is selected
  const handleNewButtonClick = () => {
    if (makeNewButton) {
      return <button className="new-button" onClick={() => {
      setJustPosted(false);
      setMakeNew(true);
      setMessageSelected(false);
      setMakeNewButton(false);
      setMessagesVisible(false);
      setEmailFormVisible(false);
      }}>Make a new Colorberry</button>;
    } else {
      return null;
    }
  };

  //renders any items in the already-created message list
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

  //form that appears after a message is created to allow the user to send the code to a recipient
  const emailCodeForm = () => {
    if (justPosted) {
    return <div className="message-link"><p>Please copy the below web-address and code and send both to your ColorBerry recipient, OR, you can enter their e-mail address here and click on it below, and a new tab will open with their message ready to send</p><form><input type="email" value={friendEmailEntry}  onChange={(event) => setFriendEmailEntry(event.target.value)} placeholder="Recipient's e-mail address..." required/></form>
    <a target="_blank" rel="noreferrer" href={`mailto:${friendEmailEntry}?subject=You%20Have%20Received%20a%20ColorBerry%20Message!&body=To%20view%20your%20message%2C%20right%20click%20the%20code%20to%20copy%20it%20and%20enter%20it%20in%20the%20code%20box%20at%20http%3A%2F%2Flocalhost%3A2999%2Fmessages.%0D%0A%0D%0ACode%3A%20${newID}`}>{friendEmailEntry}</a><div><br></br><CopyCode>See your ColorBerry Message at:  <b><a href={`http://localhost:2999`}> http://localhost:2999</a></b><br></br>ColorBerry Code:  <b>{newID}</b></CopyCode></div></div>
    } else {
      return null;
    }
  };

 //THE ACTUAL APP
  return (
    <div className="App" >
      <div className="berry-header" style={{ margin: "1vh", borderRadius: "10px", backgroundImage: `url(${background})`}}><h1 className="header1">Color</h1><img className="berry" src={berry} alt="a berry"/><h1 className="header2">Berry</h1></div>
      {emailForm()}
      <div className="color-berry" >
      <MessageListRender />
      {handleNewButtonClick()}
      { makeNew ? < MakeNewMessage email={emailEntry} password={passwordEntry} handleSeeList={handleSeeList} handleNewMessageSubmit={handleNewMessageSubmit}/> : null }
      { messageSelected ? < Message message={currentMessage} /> : null }
      </div>
      {emailCodeForm()}
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
margins: auto;
`;

const List = styled.div`
margin: auto;
align-items: center;
justify-content: space-around;
`;

const CopyCode = styled.div`
border: 2px solid pink;
border-radius: 10px;
padding: 5px;
margin-bottom: 20px;
`;