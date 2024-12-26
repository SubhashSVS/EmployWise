import axios from "axios";
import { useState } from "react";

const Card = ({user,list,setList})=>{
    const [edit,setEdit] = useState(false);
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastname] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);

    const onDelete = async ()=>{
        await axios.delete(`https://reqres.in/api/users/${user.id}`);
        let newList = list.filter(item => !(item.id == user.id));
        setList(newList);
    }
    const onEdit = async ()=>{
        setEdit(true);
    }
    const onUpdate = async ()=>{
        await axios.put(`https://reqres.in/api/users/${user.id}`,{
            "first_name" : firstName,
            "last_name" : lastName,
            "email" : email
        });
        let newList = list.map(item => 
            item.id === user.id 
            ? {
                ...item,
                first_name : firstName,
                last_name : lastName,
                email : email
            } : item
        )
        setList(newList);
        setEdit(false);
    }


    return (
        edit ? 
        <div key={user.id} className="flex-col border rounded shadow-md justify-center items-center px-16 py-6">
            <div className="flex justify-center mb-8">
                <img src={user.avatar} width={150} height={150} alt="img" className="rounded " />
            </div>
            <div className="flex-col my-2 gap-y-2 font-semibold text-xl justify-center">
                <div className="my-1">
                    <label>First Name</label>
                    <input 
                        type="text" defaultValue={user.first_name}
                        className="border w-full text-lg font-normal px-2 py-1 rounded"  
                        onInput={(e)=>{
                            setFirstName(e.target.value);
                        }}
                    />                    
                </div>
                <div className="my-1">
                    <label>Last Name</label>
                    <input 
                        type="text" defaultValue={user.last_name}
                        className="border w-full text-lg font-normal px-2 py-1 rounded"  
                        onInput={(e)=>{
                            setLastname(e.target.value);
                        }}
                    />                    
                </div>
                <div className="my-1">
                    <label>Email</label>
                    <input 
                        type="text" defaultValue={user.email}
                        className="border w-full text-lg font-normal px-2 py-1 rounded"  
                        onInput={(e)=>{
                            setEmail(e.target.value);
                        }}
                    />                    
                </div>
            </div>
            <div className="flex mt-4 justify-center">
                <button 
                    className="font-bold text-lg bg-green-400 hover:bg-green-500 px-4 py-1 rounded "
                    onClick={onUpdate} 
                >
                    Update
                </button>
            </div>
        </div> 
        : <div key={user.id} className="flex-col border rounded shadow-md justify-center items-center px-16 py-10">
            <div className="">
                <img src={user.avatar} alt="img" className="rounded w-full min-h-full" />
            </div>
            <div className="flex my-2 gap-x-1 font-semibold text-xl justify-center">
                <div>
                    {user.first_name} 
                </div>
                <div>
                    {user.last_name}
                </div>
            </div>
            <div className="text-lg mb-3 flex justify-center">
                <div>
                    {user.email}
                </div>
            </div>
            <div className="flex gap-x-3 justify-center">
                <button 
                    className="font-semibold text-md bg-green-400 hover:bg-green-500 px-2 py-1 rounded "
                    onClick={onEdit} 
                >
                    Edit
                </button>
                <button 
                    className="font-semibold text-md bg-orange-400 hover:bg-orange-500 px-2 py-1 rounded"
                    onClick={onDelete}    
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Card;