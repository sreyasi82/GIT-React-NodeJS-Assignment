import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import AddTask from './components/AddTask/AddTask';
import TodoItem from './components/TodoItem/TodoItem';
import EditTask from './components/EditTask/EditTask';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import GetTaskId from './components/GetTaskId/GetTaskId';
import Help from './components/Help/Help';
<<<<<<< HEAD
import Calendarview from './components/Calendarview/Calendarview';
=======
>>>>>>> d39596083d1937700d85e0358818235ae54e9c7a

function App() {
    
  const [openTodoModalById, setOpenTodoModalById] = useState(false);
  const [editTodoModalById, setEditTodoModalById] = useState(false);
  

  return (
    <BrowserRouter>
      <Header/>
      <div className='container' id='left_menu'>
        <Link to={`/addtodo`} className='btn btn-sm btn-secondary mt-1 mb-1'>Add New Task</Link>
        <button variant="info" className='btn btn-sm btn-secondary mt-1 mb-1' onClick={()=>{setOpenTodoModalById(true);}}>
          Show Task by ID
        </button>
        {openTodoModalById && <GetTaskId action='todos' closeModal={setOpenTodoModalById}/>}
        <button variant="info" className='btn btn-sm btn-secondary mt-1 mb-1' onClick={()=>{setEditTodoModalById(true);}}>
          Edit Task BY ID
        </button>
        {editTodoModalById && <GetTaskId action='update' closeModal={setEditTodoModalById}/>}
      </div>

      <Routes>
        <Route path='/todos' element={<TodoList/>}></Route>    
        <Route path='/addtodo' element={<AddTask/>}></Route>  
        <Route path='/todos/:id' element={<TodoItem/>}></Route>    
        <Route path='/update/:id' element={<EditTask/>}></Route>    
        <Route path='/help' element={<Help/>}></Route>    
<<<<<<< HEAD
        <Route path='/calendar' element={<Calendarview/>}></Route>    
=======
>>>>>>> d39596083d1937700d85e0358818235ae54e9c7a
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
