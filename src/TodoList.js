import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import "./App.css";



const TodoList = ({ todoslist, deleteHandler, setCompleted, completed }) => {
  const handleClickBox = (id) => {
    if (completed.includes(id)) {
      const newcompleted = completed.filter((idvalue) => id !== idvalue);
      setCompleted(newcompleted);
    } else {
      setCompleted((prev) => [...prev, id]);
    }
  };

  

  // 
  return (
    <div className="list_main">
        <h2>My Task</h2>
      {todoslist.length!=0 ?
      
      (todoslist.map((todo) => {
        return (
          <div className="sub-list" key={todo.id}>
            <input
              type="checkbox"
              id="checkBox"
              name="checkBox"
              value="checkBox"
              onClick={() => handleClickBox(todo.id)}
            />
            <div className="task">
              <h2 className="list" style={{ textDecoration: completed.includes(todo.id)?"line-through":"" }}>
                {todo.todo}
              </h2>
            <button class="delete-btn" onClick={() => deleteHandler(todo.id)}><MdDelete /></button>
            </div>
          </div>
        );
      })):
      <h4>No task yet to Add</h4>}
    </div>
  );
};

export default TodoList;

