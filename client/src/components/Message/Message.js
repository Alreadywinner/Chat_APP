import React from 'react';
import './message.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import ShowMessage from '../showMessage/showMessage';
const Message = ({messages,name})=>{
    return(
    <ScrollToBottom className="messages">
       {messages.map((message, i) => <div key={i}><ShowMessage message={message} name={name} /></div>)} 
    </ScrollToBottom>
    );
}


export default Message