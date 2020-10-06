import React,{ useState,useEffect } from 'react';
import io from 'socket.io-client';
import qs from 'query-string';
import './chat.css';
import InfoBar from '../InfoBar/infoBar';
import Input from '../Input/input';
import Message from '../Message/Message';

let socket;
const Chat = ({ location })=>{
    const [Name,setName] = useState(' ');
    const [message,setMessage] = useState(' ');
    const [messages,setMessages] = useState([]);

    const endPoint = 'localhost:5000';


    useEffect(() => {
        const { name } = qs.parse(location.search);

        socket = io(endPoint);

        setName(name);

        socket.emit('join',{ name },(error)=>{
            if(error){
                alert(error);
            }
        });
    },[endPoint,location.search]);


    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages(messages => [...messages,message])
        });

    },[]);

    const sendMessage = (e)=>{
        e.preventDefault();
        
        if(message){
            socket.emit('sendMessage',message,()=> setMessage(' '));
        }
        console.log(message,messages);
    }
    return(
        <div className="outerContainer">
            <div className="containers">
                {/* <input value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e)=> e.key === 'Enter' ? sendMessage(e): null} /> */}
                <InfoBar />
                <Message messages={messages} name={Name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
}

export default Chat;