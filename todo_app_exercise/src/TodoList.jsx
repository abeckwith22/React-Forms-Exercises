import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const INITIAL_STATE = [
        // Debugging
        // { id: uuid(), message: "Take trash out", isCompleted: false},
        // { id: uuid(), message: "Do the laundry", isCompleted: false},
        // { id: uuid(), message: "Clean dishes", isCompleted: false},
        // { id: uuid(), message: "Finish homework", isCompleted: false},
    ];
    const [todos, setTodos] = useState(INITIAL_STATE);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid()}]);
    }

    const checkTodo = (id)=> {
        const todoCopy = [...todos];

        todoCopy.map((todo) => todo.id === id ? todo.isCompleted = !(todo.isCompleted): todo);
        setTodos(todoCopy);
    }

    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const editMessage = (id, newMessage)=> {
        const todoCopy = [...todos];
        todoCopy.map(todo => todo.id === id ? todo.message = newMessage : todo);
        setTodos(todoCopy);
    }

    return (
        <div className="TodoList">
            {/* New Todo Form */}
            <NewTodoForm addTodo={addTodo}/>
            {/* Todo List */}
            <div className="TodoList-div">
                {todos.map(todo => <Todo editMessage={editMessage} removeTodo={removeTodo} checkTodo={checkTodo} id={todo.id} key={todo.id} message={todo.message} isCompleted={todo.isCompleted}/>)}
            </div>
        </div>
    )
}

export default TodoList;
