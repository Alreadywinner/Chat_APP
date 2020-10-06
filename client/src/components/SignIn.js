import React,{ useState } from 'react';
import { Link } from 'react-router-dom'; 
const SignIn = ()=>{
    const [name,setName] = useState(' ');
    return(
        <div className = "main-div">
            <div className="div-container">
                <div className="flex-input">
                    <input type="text" className="input-box" placeholder="Enter Name" onChange = {(e) => setName(e.target.value)}/>
                    <Link onClick = {(e) => (!name) ? e.preventDefault() : null} to={`/chat?name=${name}`} className="button-box">↑</Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;