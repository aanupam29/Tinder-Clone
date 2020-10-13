import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
    return (
        <div className="chats">
            <Chat name="Anupam" message="Hello" timestamp="1 minute ago" profilepic="" />
            <Chat name="Aman" message="Bello" timestamp="2 minutes ago" profilepic="" />
            <Chat name="Anjay" message="Cello" timestamp="3 minutes ago" profilepic="" />
            <Chat name="Arpit" message="Dello" timestamp="4 minutes ago" profilepic="" />
        </div>
    )
}

export default Chats
