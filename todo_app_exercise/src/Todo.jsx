import React, { useState } from "react";

const Todo = ({editMessage, removeTodo, checkTodo, id, message, isCompleted}) => {
    const [isEditing, setIsEditing] = useState(false);
    const handleClick = () =>  checkTodo(id);
    const handleRemove = () => removeTodo(id);

    const updateTodo = e => {
        e.preventDefault();
        editMessage(id, e.target[0].value);
        setIsEditing(() => setIsEditing(!isEditing));
    } 
    
    let htmlTodo = (
        <div id={id} className="Todo">
            <input onChange={handleClick} type="checkbox" id={id} name={id} value={message} checked={isCompleted}/>
            <label htmlFor={id}>{message}</label>
            <button onClick={() => setIsEditing(!isEditing)}>Edit Todo</button>
            <button onClick={handleRemove}>Remove Todo</button>
        </div>
    )
    if (isEditing){
        htmlTodo = (
            <form onSubmit={updateTodo}>
                <label htmlFor={id}>Edit Todo:</label>
                <input type="text" placeholder={message}></input>
                <button onClick={() => updateTodo}>Submit New Todo</button>
                <button onClick={() => setIsEditing(!isEditing)}>Cancel</button>
            </form>
        )
    }
    return htmlTodo;
};

export default Todo;