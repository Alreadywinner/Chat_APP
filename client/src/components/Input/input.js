import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './input.css';

const Input = ({message , setMessage , sendMessage})=>{
    return(
        <div>
            <form className="form">
                <input className="input" type="text" placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' ? sendMessage(e):null}/>
                <button className="sendButton" onClick={e => sendMessage(e)}><FontAwesomeIcon icon={faArrowUp} size="2x"/></button>
            </form>
        </div>
    );
}

export default Input;