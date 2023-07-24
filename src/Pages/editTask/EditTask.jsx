import React , {useContext,useState } from 'react';
import axios from "axios";
import './EditTask.css'
import {Link,useLocation,useNavigate} from 'react-router-dom';
import Nav from '../Nav/Nav';

const EditTask = () => {

    const [form, setForm]=useState({});
    const navigate = useNavigate();
    const location= useLocation()
    const handleChange = (e)=>{
        setForm({ ...form,[e.target.name]:e.target.value});
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        try{
        const response = await axios.patch(`http://localhost:4000/edittask/${location.state.id}`,{
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
                    
                    <form onSubmit={handleSubmit}>
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
                            Update Task
                        </button>
                    </form> 
                </div>
            </div> 
        </div>
    );
}

export default EditTask;



