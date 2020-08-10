import React, {useEffect, useState} from 'react';
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { FormControl, Input, IconButton } from '@material-ui/core';
import './App.css';


function App() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {

        setUsername(prompt("Please enter your name"));

    }, []); //condition


    useEffect(() => {
        db.collection("messages")
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
        })
    }, []);



    const sendMessage = (event) => {
        event.preventDefault();
        db.collection("messages").add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });


        window.scrollTo(0, document.body.scrollHeight + 1);
        setInput("");
    };

  return (
    <div className="App">
        <div className="app__messageBody">
            <h1>Messenger App</h1>
            {
                username? <p>{username} joined the chat</p>: ""
            }
            <FlipMove>
                {
                    messages.map(({id, message}) => (
                        <Message key={id} username={username} message={message}/>
                    ))
                }
            </FlipMove>


        </div>

        <form className="app__form">
            <FormControl className="app__formControl">
                <Input
                    className="app__input"
                    placeholder="Enter a message"
                    value={input}
                    onChange={event => setInput(event.target.value)}
                    type="text"
                />
                <IconButton
                    className="app__iconButton"
                    disabled={!input}
                    variant="contained"
                    color="primary"
                    type='submit'
                    onClick={sendMessage}
                >
                    <SendIcon/>
                </IconButton>

            </FormControl>

        </form>
    </div>
  );
}

export default App;
