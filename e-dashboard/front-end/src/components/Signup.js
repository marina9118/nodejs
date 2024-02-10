import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Signup = () =>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const Navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            Navigate('/');
        }
    })
    const collectData =async () =>{
        console.log(name,email,password);
        let result =await fetch('http://localhost:5000',{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
       const a = await result.json();
        // console.log(a);
        localStorage.setItem("user",JSON.stringify(a));
        Navigate('/');
    }
    return (
        <div className="signup-form">
            <h1>Signup Form</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <button onClick={collectData}>Sign up</button> 
        </div>
    )
}

export default Signup;