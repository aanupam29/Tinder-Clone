import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import './ChatScreen.css'

function ChatScreen() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Anupam",
            image: "",
            message: "Hello"
        },
        {
            name: "Anupam",
            image: "",
            message: "How are you"
        },
        {
            message: "Hello, to you too"
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Anupam on 10/10/2020</p>
            {
                messages.map(message => (
                    message.name ? (
                        <div className="chatScreen__message">
                            <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                            <p className="chatScreen__text">
                                {message.message}
                            </p>
                        </div> 
                    ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">
                                {message.message}
                            </p>
                        </div> 
                    )
                ))
            }
            <form className="chatScreen__form">
                <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen__input" placeholder="Type a message" type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen__button">Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
