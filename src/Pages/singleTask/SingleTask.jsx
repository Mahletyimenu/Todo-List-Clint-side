import React, {useEffect,useState } from 'react'
import {Link , useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import Nav from '../Nav/Nav';
import '../Home/Home.css'

const SingleTask = () => {
    const [allTask,setTasks]=useState([]);
    const {id}=useParams();
    console.log(id);
    useEffect(() => {
        axios.get(`http://localhost:4000/task/${id}`)
        .then(res=>setTasks(res.data))

    }, []);

  console.log(allTask)

    return (
        <div className='SingleTask'>
            <div className='home'>
            <Nav/>
            <div className='home_container'>
                <div className="task" >
                    <div className='task_title'>
                        <h2>
                            ✍️ {allTask?.title}
                        </h2>
                    </div>
                    <div className='status'>
                        <b>Description </b>
                        <p>{allTask?.description}</p>
                    </div>
                    <div className='status'>
                        <h4>satus : {allTask?.status}</h4>
                    </div>

                </div>
                
                <Link  className='status' to="/"><b>Back</b></Link>
                
            </div>       
               
            </div>
            
        </div>
    );
}

export default SingleTask;
