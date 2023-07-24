import React, {useEffect,useState } from 'react'
import {Link , useNavigate} from "react-router-dom";
import axios from 'axios';
import './Home.css'
import Nav from '../Nav/Nav';

const Home = () => {
    const [allTask,setTasks]=useState([]);
    const [refresh,setrefresh]=useState(false)
    const navigate=useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4000/alltasks")
        .then(res=>setTasks(res.data))

    }, [refresh]);

    const handleDelete =(id)=>{
        axios.delete(`http://localhost:4000/deletetask/${id}`)
        .finally(refresh?setrefresh(false):setrefresh(true))

    }

    return (
        <div className='home'>
            <Nav/>
            <div className='home_container'>
                {allTask?.map((item) => (
                    <div key={item.id}>
                        
                        <Link className="task" to={`/gettask/${item.id}`} >
                            <div className='task_title'>
                                <h3>
                                ✍️ {item.title}
                                </h3>
                            </div>
                            <div className='status'>
                                <b>Status : {item.status}</b>
                            </div>

                        </Link>
                        <div className='status'>
                            <Link to="/edittask" state={{id:item.id}}><b>Edit Task</b></Link>
                            <button className='dlt-button' onClick={()=>{
                                handleDelete(item.id)
                            }} ><b>Delete Task</b></button>

                        </div>
                        <hr/>
                    </div>       
                ))} 
            </div>
            
        </div>
    );
}

export default Home;
