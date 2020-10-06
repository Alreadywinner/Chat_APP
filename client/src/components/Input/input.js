import React from 'react';
import './input.css';

const Input = ({message , setMessage , sendMessage})=>{
    return(
        <div>
            <form className="form">
                <input className="input" type="text" placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e):null}/>
                <button className="sendButton" onClick={e => sendMessage(e)}>↑</button>
            </form>
        </div>
    );
}

export default Input;