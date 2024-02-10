import React from "react";
import {useNavigate} from 'react-router-dom';
const Login = () =>{
    const [email,setEmail] =React.useState(''); 
    const [password,setPassword] =React.useState(''); 
    const navigate = useNavigate();
    React.useEffect(() => { 
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    },[]); 
    const handleLogin= async ()=>{
        // console.log(email,password);
        let result = await fetch('http://localhost:5000/login',{
            method : "POST",
            body : JSON.stringify({email,password}),
            headers  : {
                'content-type' : 'application/json'
            }
        });
        result = await result.json();
       if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/');
       }
       
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} /> 
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login