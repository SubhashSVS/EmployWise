import { useState } from "react";
import axios from "axios";

import InputBox from "../components/InputBox";
import SubmitButton from "../components/SubmitButton"; 
import { useNavigate } from "react-router-dom";


const Signin = ()=>{
    const [email,setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka");
    const navigate = new useNavigate();

    const onSubmit = async ()=>{
        const res = await axios.post('https://reqres.in/api/login',{
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
                    Sign In
                </div>
                <InputBox 
                    label="Email" 
                    type="text" 
                    placeholder="abc@email.com"
                    defaultValue="eve.holt@reqres.in"
                    onInput = {(e)=>{
                        setEmail(e.target.value);
                    }}    
                />
                <InputBox 
                    label="Password" 
                    type="password" 
                    placeholder="********" 
                    defaultValue="cityslicka"
                    onInput = {(e)=>{
                        setPassword(e.target.value);
                    }}
                />
                <div className="text-lg underline flex justify-end mr-6 ">
                    <a href="/signup">Create Account</a>
                </div>
                <SubmitButton onclick={onSubmit}/>
            </div>
        </div>
    )
}

export default Signin;