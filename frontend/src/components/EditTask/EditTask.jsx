import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './EditTask.css'

function EditTask(){      
    
    const [editedTask, setEditedTask] = useState({        
        description: '',
        priority: '',
        status: '',
        target_date: '',
        user_id:''
    });

    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        const getDatafromDB = async() => {
            console.log("Fetching data for id:", id);
            await axios.get(`http://localhost:8001/todos/${id}`)
            .then((res)=> { 
                console.log("fetched data:res.data.tasks[0]: ",res.data.tasks[0]);
                setEditedTask({
                    id: res.data.tasks[0].id,        
                    description: res.data.tasks[0].description,
                    priority: res.data.tasks[0],
                    status: res.data.tasks[0].priority,
                    target_date: res.data.tasks[0].target_date,
                    user_id: res.data.tasks[0].user_id
                });
                console.log("editedTask data after fetch: editedTask: ",editedTask);
            })
            .catch((err)=>console.log(err))
            }

            getDatafromDB();
    },[id]);

    const handleEditSubmit = async(e) => {
        e.preventDefault();
        const reply_data = {        
            description: editedTask.description,
            priority: editedTask.priority,
            status: editedTask.status,
            target_date: editedTask.target_date,
            user_id:editedTask.user_id
        };
        console.log("editedTask data after updation:", reply_data);        
        await axios.put(`http://localhost:8001/todos/${id}`, reply_data)
        .then((res)=> { 
            console.log(res);
            alert(`Task ${id} upadted successfully`);
            navigate('/todos/');
        })
        .catch((err)=>console.log(err))
    }

        return(
            <div className="edittask_form">
                <div className='title'>
                    <h3>Update Task ${id}</h3>
                </div>                    
                <form onSubmit={handleEditSubmit} >
                    <div className="mb-3">
                        <label htmlFor="description">Description</label>
                        <input defaultValue={editedTask.description} type='text' id='description' name='description' onChange={(e) => setEditedTask({...editedTask, description: e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="priority">Priority</label>
                        <select id='priority' name='priority' value={editedTask.priority} onChange={(e) => setEditedTask({...editedTask, priority: e.target.value})}>
                            <option value="">-- Select an option --</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status">Status</label>
                        <select id='status' name='status' value={editedTask.status} onChange={(e) => setEditedTask({...editedTask, status: e.target.value})}>                                
                            <option value="">-- Select an option --</option>
                            <option value="Scheduled">Scheduled</option>
                            <option value="In Progress">In progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="target_date">Target Date</label>
                        <input type='date' name='target_date' defaultValue={editedTask.target_date} id='target_date' onChange={(e) => setEditedTask({...editedTask, target_date: e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="user_id">Asignee</label>
                        <input type='text' name='user_id' id='user_id' defaultValue={editedTask.user_id} onChange={(e) => setEditedTask({...editedTask, user_id: e.target.value})}/>
                    </div>
                    <div className='footer mb-3'>
                        <Button variant="info" type='submit' >Update</Button>
                        <Button variant="danger" onClick={()=> navigate('/todos')}>Close</Button>   
                    </div>
                </form>
            </div>
        )
    }

export default EditTask;