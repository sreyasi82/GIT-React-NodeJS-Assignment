import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import {Link } from 'react-router-dom'; 
import './Calendarview.css'

function Calendarview(){
    const [tasks, setTasks] = useState([]);   

    useEffect(()=>{
        axios.get('http://localhost:8001/calendar')        
        .then((res)=>{
            console.log('successfully data fetched: ', res);
            setTasks(res.data.tasks);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])    
    
    const groupedTasks = tasks.reduce((groups, task) => {        
        const date = task.target_date.split('T')[0]; 
        //const date = task.target_date; 
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(task);
        return groups;
        }, {});

    return(
        <div className="container" id="calendar-list">
            <div style={{ display: 'flex', gap: '20px' }}>
            {Object.entries(groupedTasks).map(([date, tasksForDate]) => (
                <div key={date} >
                <h3 className='calendar-table-header'>{date}</h3>
                {tasksForDate.map(task => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body key={task.id}>
                            <Card.Title>Task {task.id}</Card.Title>
                            <Card.Text>
                                Description: {task.description}                                             
                            </Card.Text>
                            <Card.Text>
                                Priority: {task.priority}           
                            </Card.Text>
                            <Card.Text>  
                                Status: { task.status}              
                            </Card.Text>
                            <Link to={`/update/${task.id}`} className='btn btn-sm btn-info'>Edit</Link> 
                        </Card.Body>
                    </Card>
                    
                ))}
                </div>
            ))}
             </div>
            
        </div>
    )
}

export default Calendarview;