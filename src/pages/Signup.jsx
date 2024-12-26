import { useState } from "react";
import axios from "axios";

import InputBox from "../components/InputBox";
import SubmitButton from "../components/SubmitButton"; 
import { useNavigate } from "react-router-dom";


const Signup = ()=>{
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = new useNavigate();

    const onSubmit = async ()=>{
        const res = await axios.post('https://reqres.in/api/register',{
            "email" : email,
            "password" : password
        })
        if(res.data.error){
            console.log(res.data.error);
        }else{
            localStorage.setItem('token',res.data.token);
            navigate('/dashboard');
        }
    }


    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex-col border-none p-6 mb-10 w-full max-w-lg md:shadow-md rounded-lg ">
                <div className="text-3xl font-bold justify-self-center my-6">
                    Sign up
                </div>
                <InputBox 
                    label="Email" 
                    type="text" 
                    placeholder="abc@email.com"
                    onInput = {(e)=>{
                        setEmail(e.target.value);
                    }}    
                />
                <InputBox 
                    label="Password" 
                    type="password" 
                    placeholder="********" 
                    onInput = {(e)=>{
                        setPassword(e.target.value);
                    }}
                />
                <div className="text-lg underline flex justify-end mr-6 ">
                    <a href="/">Login to existing account</a>
                </div>
                <SubmitButton onclick={onSubmit}/>
            </div>
        </div>
    )
}

export default Signup;