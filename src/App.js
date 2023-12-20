import React, { useEffect, useState } from "react";
import "./App.css"
import TodoList from './TodoList';
import { MdDelete } from "react-icons/md";

function App() {
  const [todos,setTodos]=useState("")
  const [todoslist,setTOdolist]=useState(JSON.parse(localStorage.getItem("tasks"))||[])
  const [completed,setCompleted] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault();
    if(todos===""){
      alert("Please Enter The task")
    }else{
    const singleTodo = {todo:todos,id:Date.now()}
    setTOdolist((prev)=>([...prev,singleTodo]))
    setTodos("")}
  }
  const deleteHandler=(index)=>{
    let newTodos=todoslist.filter((todo,indexValue)=>index!==todo.id)
    setTOdolist(newTodos)

  }
  const handleSave=()=>{
    localStorage.setItem("tasks",JSON.stringify(todoslist))
  }
  

  
  return (
    <div>
      <div className="ToDos_main">
        <h2 className="Todo">ToDos</h2>
        <div className="create_task"> 
          
            <form  className="Forms">
              <h2><span>Create</span> Task</h2>
              <input className="input" type="text" id='input' placeholder="What needs to done?" value={todos} name='todos' onChange={(e)=>{setTodos(e.target.value)}} />
              <button className='btn' type="submit" value="ADD" name="ADD" onClick={submitHandler}>ADD</button>
            </form>
        </div>
        <TodoList completed={completed}  setCompleted={setCompleted} todoslist={todoslist} deleteHandler={deleteHandler}/>
      </div>
      <button className="btn save-btn" onClick={handleSave} >Save</button>
    </div>
  );
}

export default App;

