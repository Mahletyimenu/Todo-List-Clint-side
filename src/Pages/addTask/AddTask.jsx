import React , {useContext,useState } from 'react';
import axios from "axios";
import './AddTask.css'
import {Link,useNavigate} from 'react-router-dom';
import Nav from '../Nav/Nav';

const AddTask = () => {

    const [form, setForm]=useState({});
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setForm({ ...form,[e.target.name]:e.target.value});
    };

    const addTask =async (e) => {
        e.preventDefault();
        try{
        const response = await axios.post("http://localhost:4000/addtask",{
            title: form.question,
            description: form.description,
            status: form.status
        });
        console.log("asked");
        navigate("/");
        }catch (error) {
             console.log('problem ==>', error.response.data.msg);
        }
    };

    return (
        <div>
            <Nav/>
            <div className="task_contaner">
                <div className="form_container">
                    
                    <form onSubmit={addTask}>
                        <input
                            name='question'
                            type="text"
                            placeholder="Title..."
                            onChange={handleChange}
                        />
                        <textarea
                            name='description'
                            cols="106"
                            rows="10"
                            placeholder="Task Description..."
                            onChange={handleChange}
                        ></textarea>
                        <input
                            name='status'
                            type="text"
                            placeholder="status..."
                            onChange={handleChange}
                        />
                        
                        <button type='submit' className="button" >
                            Add New Task
                        </button>
                    </form> 
                </div>
            </div> 
        </div>
    );
}

export default AddTask;



