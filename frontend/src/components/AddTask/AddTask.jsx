import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './AddTask.css'

function AddTask(){
    const [values, setValues] = useState({
        description: '',
        priority: '',
        status: '',
        target_date: '',
        user_id:''
    })
    const navigate = useNavigate();

    //function for adding new task into the task list
    function handleSubmit(e){
        e.preventDefault();
        console.log("inserting data:", values);
        if(values.description === ''){
            window.alert('Please enter Task description');
        }
        else{
            axios.post('http://localhost:8001/todos', values)
            .then((res)=> { 
                console.log("Task added: ", res);
                navigate('/todos');
                
            })
            .catch((err)=>console.log(err))
        }        
    }

    return(
        <div className="addtask_form">  
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type='text' name='description' className="form-control" onChange={(e) => setValues({...values, description: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">Priority</label>
                    <select id='priority' name='priority' className="form-select" onChange={(e) => setValues({...values, priority: e.target.value})}>
                        <option value="">-- Select an option --</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select id='status' name='status' className="form-select" onChange={(e) => setValues({...values, status: e.target.value})}>                                
                        <option value="">-- Select an option --</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="inProgress">In progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="target_date" className="form-label">Target Date</label>
                    <input type='date' name='target_date' className="form-control" onChange={(e) => setValues({...values, target_date: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="user_id" className="form-label">Asignee</label>
                    <input type='text' name='user_id' className="form-control" onChange={(e) => setValues({...values, user_id: e.target.value})}/>
                </div>
                <div className='footer'>
                    <Button variant="info" type='submit'>Add</Button>
                    <Button variant="danger" onClick={()=> navigate('/')}>Cancel</Button>
                </div>
            </form>
        </div>
    )
}

export default AddTask;