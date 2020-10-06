import React from 'react';
import './showMessage.css';

const showMessage = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();
  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div>
          <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageContainer justifyEnd">
              {/* <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{text}</p>
              </div> 
            </div> */}
            <div className="bubble bubble-bottom-right messageText backgroundBlue colorWhite">{text}</div>
          </div>
          </div>  
        )
        : (
          <div>
            <p className="sentText pl-10">{user}</p>
            <div className="messageContainer justifyStart">
              {/* <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{text}</p>
              </div> */}
              <div className="bubble bubble-bottom-left messageText colorDark">{text}</div>
            </div>
          </div>
        )
  );
}

export default showMessage;