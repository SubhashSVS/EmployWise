import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Dashboard = ()=>{
    const [list,setList] = useState([]);
    const [page,setPage] = useState(1);

    const navigate = useNavigate();

    const fetchList = async ()=>{
        if(!localStorage.getItem('token')) navigate('/');
        const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
        setList(res.data.data);
    }
    useEffect(()=>{
        fetchList();
    },[page])

    return <div>
        <div className="flex font-bold text-3xl justify-center py-5 border">
            EmployWise
        </div>
        <div className="flex justify-center py-6 px-2">
            <div className="grid grid-cols-2 gap-2 md:gap-10">            
                {list.map((user) => (
                    <Card user={user} list={list} setList={setList} />
                ))}            
            </div>
        </div>
        <div className="flex justify-center mb-3">            
            <button className="border-2 p-2 mx-1 rounded hover:bg-slate-300"
                onClick={()=> setPage(1)}
            >
                1
            </button>
            <button className="border-2 p-2 mx-1 rounded hover:bg-slate-300"
                onClick={()=> setPage(2)}
            >
                2
            </button>            
        </div>
    </div>
} 

export default Dashboard;